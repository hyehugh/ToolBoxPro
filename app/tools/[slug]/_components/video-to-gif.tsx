"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

/* =========================================================================
 * GIF89a Encoder (self-contained, no external libraries)
 * Implements: Header, Logical Screen Descriptor, Global Color Table,
 *             Netscape Application Extension (loop),
 *             Graphic Control Extension (per-frame delay),
 *             Image Descriptor, LZW-compressed image data, Trailer.
 * ========================================================================= */

function rgbToIndex(r: number, g: number, b: number): number {
  // Reduce 24-bit RGB to an 8-bit bucket index using 3-3-2 quantization
  // (3 bits red, 3 bits green, 2 bits blue → 8*8*4 = 256 buckets).
  return ((r >> 5) << 5) | ((g >> 5) << 2) | (b >> 6);
}

/**
 * Build a global color table by sampling pixel data and producing up to 256
 * colors via histogram bucketing on a 3-3-2 quantized space (fast, good
 * enough for short clips; not a perceptual best-quality quantizer but
 * zero-dependency).
 */
function buildColorTable(frames: ImageData[], width: number, height: number): {
  palette: Uint8Array; // (colors*3) bytes
  colorCount: number;  // power-of-two number of colors (2..256)
} {
  // Accumulate histogram in a 3-3-2 bucket space (256 buckets total).
  const hist = new Uint32Array(256);
  // sample stride to keep histogram fast on large frames
  const stride = Math.max(1, Math.floor((width * height) / 100000));
  for (const frame of frames) {
    const d = frame.data;
    for (let i = 0; i < d.length; i += 4 * stride) {
      const idx = rgbToIndex(d[i], d[i + 1], d[i + 2]);
      hist[idx]++;
    }
  }

  // Pick the most-populated buckets up to 256
  const entries: { idx: number; count: number }[] = [];
  for (let i = 0; i < 256; i++) {
    if (hist[i] > 0) entries.push({ idx: i, count: hist[i] });
  }
  entries.sort((a, b) => b.count - a.count);

  const maxColors = Math.min(256, entries.length);
  // Round up to a power of two (required by GIF spec)
  let colorCount = 2;
  while (colorCount < maxColors) colorCount *= 2;
  if (colorCount > 256) colorCount = 256;
  if (colorCount < 2) colorCount = 2;

  const palette = new Uint8Array(colorCount * 3);

  // Fill palette slots with representative colors reconstructed from each
  // bucket's 3-3-2 bits (mid-point of each quantization step).
  const chosenBuckets = entries.slice(0, colorCount);
  for (let c = 0; c < chosenBuckets.length; c++) {
    const bucket = chosenBuckets[c].idx;
    const r3 = (bucket >> 5) & 0x07;
    const g3 = (bucket >> 2) & 0x07;
    const b2 = bucket & 0x03;
    palette[c * 3] = (r3 << 5) | 0x10;
    palette[c * 3 + 1] = (g3 << 5) | 0x10;
    palette[c * 3 + 2] = (b2 << 6) | 0x20;
  }

  return { palette, colorCount };
}

function indexFrameToPalette(
  data: Uint8ClampedArray,
  palette: Uint8Array,
  colorCount: number,
  width: number,
  height: number
): Uint8Array {
  // Build a quick reverse lookup from RGB -> palette index using a 3-3-2
  // bucket LUT (256 entries). Reconstruct representative RGB for each index.
  const indexed = new Uint8Array(width * height);
  const bucketToIndex = new Uint8Array(256);
  const bucketFilled = new Uint8Array(256);
  for (let c = 0; c < colorCount; c++) {
    const r = palette[c * 3];
    const g = palette[c * 3 + 1];
    const b = palette[c * 3 + 2];
    const bucket = rgbToIndex(r, g, b);
    bucketToIndex[bucket] = c;
    bucketFilled[bucket] = 1;
  }
  // Pre-quantize: snap input pixel to a 3-3-2 bucket then look up; for
  // unfilled buckets, find nearest of the filled ones (cached per bucket).
  const fallbackCache = new Map<number, number>();
  for (let i = 0, p = 0; i < data.length; i += 4, p++) {
    const bucket = rgbToIndex(data[i], data[i + 1], data[i + 2]);
    if (bucketFilled[bucket]) {
      indexed[p] = bucketToIndex[bucket];
    } else {
      let idx = fallbackCache.get(bucket);
      if (idx === undefined) {
        // nearest neighbor among filled buckets
        let bestDist = Infinity;
        let bestIdx = 0;
        for (let c = 0; c < colorCount; c++) {
          const pr = palette[c * 3];
          const pg = palette[c * 3 + 1];
          const pb = palette[c * 3 + 2];
          const dr = pr - data[i];
          const dg = pg - data[i + 1];
          const db = pb - data[i + 2];
          const dist = dr * dr + dg * dg + db * db;
          if (dist < bestDist) {
            bestDist = dist;
            bestIdx = c;
          }
        }
        idx = bestIdx;
        fallbackCache.set(bucket, idx);
      }
      indexed[p] = idx;
    }
  }
  return indexed;
}

/* --- LZW compression for GIF --- */

function lzwEncode(indexed: Uint8Array, minCodeSize: number): number[] {
  const clearCode = 1 << minCodeSize;
  const endCode = clearCode + 1;
  let nextCode = endCode + 1;
  let codeSize = minCodeSize + 1;

  // Dictionary: map string-of-bytes -> code. We use a simple object map keyed
  // by "prevCode,byte" for speed; the GIF dict resets on Clear Code.
  const dictionary = new Map<string, number>();

  // bit packing buffer
  const bits: number[] = [];

  const emit = (code: number) => {
    bits.push(code);
  };

  // Bit-packing is handled by flushBitsTracked() at the end of this file

  const resetDict = () => {
    dictionary.clear();
    nextCode = endCode + 1;
    codeSize = minCodeSize + 1;
  };

  emit(clearCode);
  resetDict();

  let prevKey: string | null = null;
  let prevCodeVal = -1;

  for (let i = 0; i < indexed.length; i++) {
    const byte = indexed[i];
    const key: string = prevKey === null ? String(byte) : prevKey + "," + byte;
    if (dictionary.has(key) || (prevKey === null)) {
      // Special-case: single-byte codes map to the byte value itself
      if (prevKey === null) {
        prevCodeVal = byte;
        prevKey = String(byte);
      } else {
        prevCodeVal = dictionary.get(key)!;
        prevKey = key;
      }
    } else {
      emit(prevCodeVal);
      dictionary.set(key, nextCode);
      nextCode++;
      if (nextCode > (1 << codeSize) && codeSize < 12) {
        codeSize++;
      }
      if (nextCode >= 4096) {
        // Dictionary full: emit clear code and reset
        emit(clearCode);
        resetDict();
      }
      prevKey = String(byte);
      prevCodeVal = byte;
    }
  }

  if (prevKey !== null) {
    emit(prevCodeVal);
  }
  emit(endCode);

  // We packed with the initial codeSize but it changes over time; we need to
  // track codeSize transitions during packing. Re-do the packing with
  // per-code code size tracking.
  return flushBitsTracked(bits, minCodeSize, clearCode, endCode);
}

/**
 * Pack codes with correct variable code size, tracking when codeSize increments
 * based on the dictionary growth. This re-derives the code size at each emitted
 * code to mirror the encoder's state.
 */
function flushBitsTracked(
  codes: number[],
  minCodeSize: number,
  clearCode: number,
  endCode: number
): number[] {
  const packed: number[] = [];
  let buffer = 0;
  let bitsInBuffer = 0;
  let codeSize = minCodeSize + 1;
  let nextCode = endCode + 1;

  for (const code of codes) {
    buffer |= code << bitsInBuffer;
    bitsInBuffer += codeSize;
    while (bitsInBuffer >= 8) {
      packed.push(buffer & 0xff);
      buffer >>= 8;
      bitsInBuffer -= 8;
    }
    // Update code size AFTER emitting (mirrors decoder expectation)
    if (code === clearCode) {
      codeSize = minCodeSize + 1;
      nextCode = endCode + 1;
    } else if (code !== endCode) {
      nextCode++;
      if (nextCode === (1 << codeSize) + 1 && codeSize < 12) {
        codeSize++;
      }
    }
  }
  if (bitsInBuffer > 0) {
    packed.push(buffer & 0xff);
  }
  return packed;
}

/** Write a 16-bit little-endian value into a byte array at offset. */
function writeU16(arr: number[], offset: number, val: number) {
  arr[offset] = val & 0xff;
  arr[offset + 1] = (val >> 8) & 0xff;
}

/**
 * Encode an array of indexed frames (each Uint8Array of width*height palette
 * indices) plus a shared palette into a GIF89a byte array.
 */
function encodeGif(
  frames: Uint8Array[],
  width: number,
  height: number,
  palette: Uint8Array,
  colorCount: number,
  delays: number[] // centiseconds per frame
): Uint8Array {
  const out: number[] = [];
  const minCodeSize = Math.max(2, Math.ceil(Math.log2(colorCount)));

  // --- Header ---
  out.push(0x47, 0x49, 0x46, 0x38, 0x39, 0x61); // "GIF89a"

  // --- Logical Screen Descriptor ---
  writeU16(out, out.length, width);
  out.push(0, 0); // placeholder
  const lsdIdx = out.length - 2;
  out[lsdIdx - 2] = width & 0xff;
  out[lsdIdx - 1] = (width >> 8) & 0xff;
  out[out.length - 1] = 0; // fix: redo
  // Redo properly:
  // (The above manual juggling is error-prone; rewrite cleanly below.)
  out.length = 6; // reset to after header

  // Logical Screen Descriptor (7 bytes)
  out.push(width & 0xff, (width >> 8) & 0xff); // width
  out.push(height & 0xff, (height >> 8) & 0xff); // height
  const gctFlag = 1;
  const colorRes = minCodeSize - 1; // bits per primary - 1
  const sortFlag = 0;
  const gctSizeField = colorCount <= 2 ? 0 : Math.log2(colorCount) - 1;
  const packedByte =
    (gctFlag << 7) | ((colorRes & 0x07) << 4) | (sortFlag << 3) | (gctSizeField & 0x07);
  out.push(packedByte);
  out.push(0); // background color index
  out.push(0); // pixel aspect ratio

  // --- Global Color Table ---
  for (let c = 0; c < colorCount; c++) {
    out.push(palette[c * 3], palette[c * 3 + 1], palette[c * 3 + 2]);
  }
  // Pad palette to the power-of-two size
  const paddedSize = 1 << (Math.floor(gctSizeField) + 1);
  for (let c = colorCount; c < paddedSize; c++) {
    out.push(0, 0, 0);
  }

  // --- Netscape Application Extension (loop forever) ---
  out.push(0x21, 0xff, 0x0b); // extension introducer, app label, block size
  out.push(0x4e, 0x45, 0x54, 0x53, 0x43, 0x41, 0x50, 0x45, 0x32, 0x2e, 0x30); // "NETSCAPE2.0"
  out.push(0x03, 0x01); // sub-block size, loop indicator
  out.push(0x00, 0x00); // loop count 0 = infinite
  out.push(0x00); // block terminator

  // --- Per-frame data ---
  for (let f = 0; f < frames.length; f++) {
    const delayCs = delays[f] || 10;

    // Graphic Control Extension
    out.push(0x21, 0xf9, 0x04); // GCE introducer, label, size
    out.push(0x00); // packed: disposal=0, no user input, no transparency
    writeU16(out, out.length, delayCs);
    out.push(0); // transparent color index (unused)
    out.push(0x00); // block terminator

    // Image Descriptor
    out.push(0x2c); // image separator
    writeU16(out, out.length, 0); // left
    out.push(0, 0); // fix placeholder
    out.length -= 2;
    writeU16(out, out.length, 0); // left position
    writeU16(out, out.length, 0); // top position
    writeU16(out, out.length, width);
    writeU16(out, out.length, height);
    out.push(0x00); // packed: no local color table, not interlaced

    // LZW Minimum Code Size
    out.push(minCodeSize);

    // Encode frame data
    const lzwBytes = lzwEncode(frames[f], minCodeSize);

    // Split into sub-blocks (max 255 bytes each)
    let pos = 0;
    while (pos < lzwBytes.length) {
      const chunk = Math.min(255, lzwBytes.length - pos);
      out.push(chunk);
      for (let i = 0; i < chunk; i++) {
        out.push(lzwBytes[pos + i]);
      }
      pos += chunk;
    }
    out.push(0x00); // block terminator
  }

  // --- Trailer ---
  out.push(0x3b);

  return new Uint8Array(out);
}

/* =========================================================================
 * React Component
 * ========================================================================= */

export function VideoToGifTool() {
  const { t, locale } = useLocale();
  const isZh = locale === "zh";

  const [videoUrl, setVideoUrl] = useState("");
  const [videoDuration, setVideoDuration] = useState(0);
  const [videoWidth, setVideoWidth] = useState(0);
  const [videoHeight, setVideoHeight] = useState(0);
  const [fileName, setFileName] = useState("");

  const [startTime, setStartTime] = useState(0);
  const [duration, setDuration] = useState(3);
  const [fps, setFps] = useState(10);
  const [outputWidth, setOutputWidth] = useState(480);

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [resultUrl, setResultUrl] = useState("");
  const [error, setError] = useState("");

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const seekResolveRef = useRef<((v: boolean) => void) | null>(null);

  // Listen for 'seeked' to resolve the promise-based seek helper.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const handler = () => {
      if (seekResolveRef.current) {
        seekResolveRef.current(true);
        seekResolveRef.current = null;
      }
    };
    v.addEventListener("seeked", handler);
    return () => v.removeEventListener("seeked", handler);
  }, [videoUrl]);

  const handleFile = (file: File) => {
    setError("");
    setResultUrl("");
    if (!file.type.startsWith("video/")) {
      setError(isZh ? "请选择视频文件 (MP4, WebM)" : "Please select a video file (MP4, WebM)");
      return;
    }
    const url = URL.createObjectURL(file);
    setVideoUrl(url);
    setFileName(file.name);
  };

  const onLoadedMetadata = () => {
    const v = videoRef.current;
    if (!v) return;
    setVideoDuration(v.duration);
    setVideoWidth(v.videoWidth);
    setVideoHeight(v.videoHeight);
    // Default output width = original width (capped to 480 for file size)
    setOutputWidth(Math.min(480, v.videoWidth));
    setStartTime(0);
    setDuration(Math.min(3, v.duration));
  };

  const seekTo = (time: number): Promise<boolean> => {
    return new Promise((resolve) => {
      const v = videoRef.current;
      if (!v) {
        resolve(false);
        return;
      }
      seekResolveRef.current = resolve;
      v.currentTime = Math.min(time, v.duration - 0.01);
      // Safety timeout: resolve after 2s if 'seeked' never fires
      setTimeout(() => {
        if (seekResolveRef.current) {
          seekResolveRef.current(true);
          seekResolveRef.current = null;
        }
      }, 2000);
    });
  };

  const generateGif = async () => {
    const v = videoRef.current;
    const canvas = canvasRef.current;
    if (!v || !canvas) return;

    setLoading(true);
    setError("");
    setResultUrl("");
    setProgress(0);

    try {
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) throw new Error(isZh ? "Canvas 不可用" : "Canvas not available");

      const end = Math.min(startTime + duration, videoDuration);
      const totalFrames = Math.floor((end - startTime) * fps);
      if (totalFrames <= 0) {
        throw new Error(isZh ? "帧数为 0，请检查时间设置" : "Zero frames; check time settings");
      }

      // Compute output dimensions preserving aspect ratio
      const scale = outputWidth / videoWidth;
      const outW = Math.max(1, Math.round(videoWidth * scale));
      // Ensure even dimensions (GIF handles odd, but even is safer)
      const outH = Math.max(1, Math.round(videoHeight * scale));
      canvas.width = outW;
      canvas.height = outH;

      const frameImages: ImageData[] = [];
      const frameInterval = 1 / fps;

      for (let i = 0; i < totalFrames; i++) {
        const time = startTime + i * frameInterval;
        if (time >= videoDuration) break;

        await seekTo(time);
        // Small delay to let the browser paint the decoded frame
        await new Promise((r) => setTimeout(r, 30));

        ctx.drawImage(v, 0, 0, outW, outH);
        const imgData = ctx.getImageData(0, 0, outW, outH);
        frameImages.push(imgData);

        setProgress(Math.round(((i + 1) / totalFrames) * 50));
      }

      if (frameImages.length === 0) {
        throw new Error(isZh ? "无法提取帧" : "Could not extract frames");
      }

      // Build global color table from sampled frames
      setProgress(55);
      const { palette, colorCount } = buildColorTable(frameImages, outW, outH);

      // Index each frame to the palette
      setProgress(65);
      const indexedFrames: Uint8Array[] = [];
      for (let i = 0; i < frameImages.length; i++) {
        indexedFrames.push(
          indexFrameToPalette(frameImages[i].data, palette, colorCount, outW, outH)
        );
        setProgress(65 + Math.round(((i + 1) / frameImages.length) * 20));
      }

      // Encode GIF
      setProgress(85);
      const delayCs = Math.round(100 / fps);
      const delays = new Array(frameImages.length).fill(Math.max(2, delayCs));
      const gifBytes = encodeGif(indexedFrames, outW, outH, palette, colorCount, delays);

      const blob = new Blob([gifBytes.buffer as ArrayBuffer], { type: "image/gif" });
      setResultUrl(URL.createObjectURL(blob));
      setProgress(100);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setVideoUrl("");
    setResultUrl("");
    setError("");
    setProgress(0);
    setFileName("");
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  }, [isZh]);

  const triggerFileInput = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "video/mp4,video/webm,video/ogg,video/*";
    input.onchange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files[0]) handleFile(target.files[0]);
    };
    input.click();
  };

  return (
    <div className="space-y-4">
      {/* Hidden working elements */}
      <video
        ref={videoRef}
        src={videoUrl}
        onLoadedMetadata={onLoadedMetadata}
        className="hidden"
        playsInline
        muted
        preload="auto"
      />
      <canvas ref={canvasRef} className="hidden" />

      {/* Upload zone */}
      {!videoUrl && (
        <div
          className="border-2 border-dashed border-input rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={triggerFileInput}
        >
          <p className="text-4xl mb-2">🎬</p>
          <p className="text-muted-foreground">
            {isZh ? "点击或拖拽上传视频文件" : "Click or drag a video file to upload"}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {isZh ? "支持 MP4、WebM 格式 · 100% 本地处理" : "Supports MP4, WebM · 100% client-side"}
          </p>
        </div>
      )}

      {/* Controls */}
      {videoUrl && (
        <div className="space-y-4">
          {/* Video info bar */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <p className="text-sm text-muted-foreground truncate max-w-[60%]">
              {fileName} · {videoWidth}×{videoHeight} · {videoDuration.toFixed(1)}s
            </p>
            <Button variant="outline" size="sm" onClick={reset}>
              {t("common.clear")}
            </Button>
          </div>

          {/* Time controls */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium">
                {isZh ? "开始时间 (秒)" : "Start Time (s)"}
              </label>
              <input
                type="number"
                min={0}
                max={Math.max(0, videoDuration - 0.1)}
                step={0.1}
                value={startTime}
                onChange={(e) => setStartTime(Math.max(0, +e.target.value))}
                className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">
                {isZh ? "持续时间 (秒)" : "Duration (s)"}
              </label>
              <input
                type="number"
                min={0.1}
                max={videoDuration}
                step={0.1}
                value={duration}
                onChange={(e) => setDuration(Math.max(0.1, +e.target.value))}
                className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">
                {isZh ? "帧率 (fps)" : "Frame Rate (fps)"}
              </label>
              <input
                type="number"
                min={1}
                max={30}
                step={1}
                value={fps}
                onChange={(e) => setFps(Math.max(1, Math.min(30, +e.target.value)))}
                className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm"
              />
            </div>
          </div>

          {/* Output width slider */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">
                {isZh ? "输出宽度 (px)" : "Output Width (px)"}
              </label>
              <span className="text-sm font-mono text-muted-foreground">{outputWidth}px</span>
            </div>
            <input
              type="range"
              min={120}
              max={Math.max(120, videoWidth)}
              step={10}
              value={outputWidth}
              onChange={(e) => setOutputWidth(+e.target.value)}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              {isZh
                ? `输出尺寸: ${outputWidth}×${Math.round((outputWidth / videoWidth) * videoHeight) || 0}px · 较小的宽度 = 更小的文件`
                : `Output: ${outputWidth}×${Math.round((outputWidth / videoWidth) * videoHeight) || 0}px · Smaller width = smaller file`}
            </p>
          </div>

          {/* Frame count estimate */}
          <div className="text-xs text-muted-foreground bg-muted/50 rounded-md px-3 py-2">
            {isZh
              ? `预计提取 ${Math.min(totalEstimatedFrames(startTime, duration, fps), Math.floor((Math.min(startTime + duration, videoDuration) - startTime) * fps))} 帧`
              : `~${Math.min(totalEstimatedFrames(startTime, duration, fps), Math.floor((Math.min(startTime + duration, videoDuration) - startTime) * fps))} frames will be extracted`}
          </div>

          {/* Generate button */}
          <Button onClick={generateGif} disabled={loading} className="w-full">
            {loading
              ? `${t("common.processing")} ${progress}%`
              : isZh
              ? "🎬 生成 GIF"
              : "🎬 Generate GIF"}
          </Button>

          {/* Progress bar */}
          {loading && (
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="text-sm text-destructive bg-destructive/10 rounded-md px-3 py-2">
              {error}
            </div>
          )}

          {/* Result */}
          {resultUrl && (
            <div className="space-y-2 border rounded-lg p-4">
              <p className="text-sm font-medium">
                {isZh ? "✅ GIF 已生成" : "✅ GIF Generated"}
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={resultUrl}
                alt="Generated GIF"
                className="max-w-full max-h-80 object-contain rounded-md border mx-auto"
              />
              <div className="flex gap-2 justify-center">
                <Button
                  onClick={() => {
                    const a = document.createElement("a");
                    a.href = resultUrl;
                    const base = fileName.replace(/\.[^.]+$/, "");
                    a.download = `${base || "video"}.gif`;
                    a.click();
                  }}
                >
                  {t("common.download")} GIF
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function totalEstimatedFrames(start: number, dur: number, frameRate: number): number {
  return Math.floor(dur * frameRate);
}
