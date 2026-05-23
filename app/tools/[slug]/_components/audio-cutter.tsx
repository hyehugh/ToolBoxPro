'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';

function floatTo16BitPCM(samples: Float32Array): ArrayBuffer {
  const buffer = new ArrayBuffer(samples.length * 2);
  const view = new DataView(buffer);
  for (let i = 0; i < samples.length; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(i * 2, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }
  return buffer;
}

function encodeWAV(samples: Float32Array, sampleRate: number): Blob {
  const numChannels = 1;
  const bitsPerSample = 16;
  const byteRate = sampleRate * numChannels * bitsPerSample / 8;
  const blockAlign = numChannels * bitsPerSample / 8;
  const dataSize = samples.length * numChannels * bitsPerSample / 8;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  const writeString = (offset: number, str: string) => {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  };

  writeString(0, 'RIFF');
  view.setUint32(4, 36 + dataSize, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // PCM
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitsPerSample, true);
  writeString(36, 'data');
  view.setUint32(40, dataSize, true);

  const pcmBuffer = floatTo16BitPCM(samples);
  new Uint8Array(buffer).set(new Uint8Array(pcmBuffer), 44);
  return new Blob([buffer], { type: 'audio/wav' });
}

export function AudioCutterTool() {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
  const [waveformData, setWaveformData] = useState<number[]>([]);
  const [duration, setDuration] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trimmedBlob, setTrimmedBlob] = useState<Blob | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);
  const animationRef = useRef<number>(0);

  const cleanupAudio = useCallback(() => {
    if (sourceRef.current) {
      sourceRef.current.stop();
      sourceRef.current.disconnect();
      sourceRef.current = null;
    }
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = 0;
    }
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    return () => {
      cleanupAudio();
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [cleanupAudio]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/mp3'].includes(file.type) &&
        !file.name.match(/\.(mp3|wav|ogg)$/i)) {
      setError('Please upload MP3, WAV, or OGG audio files.');
      return;
    }

    setError('');
    setLoading(true);
    setAudioFile(file);
    cleanupAudio();
    setTrimmedBlob(null);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const ctx = new AudioContext();
      const decoded = await ctx.decodeAudioData(arrayBuffer);
      setAudioBuffer(decoded);
      setDuration(decoded.duration);
      setStartTime(0);
      setEndTime(decoded.duration);

      // Generate waveform data
      const channelData = decoded.getChannelData(0);
      const samples = 200;
      const blockSize = Math.floor(channelData.length / samples);
      const waveform = [];
      for (let i = 0; i < samples; i++) {
        let sum = 0;
        for (let j = 0; j < blockSize; j++) {
          sum += Math.abs(channelData[i * blockSize + j] || 0);
        }
        waveform.push(sum / blockSize);
      }
      setWaveformData(waveform);

      audioContextRef.current = ctx;
    } catch {
      setError('Failed to decode audio file.');
    }
    setLoading(false);
  };

  const handleWaveformClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!duration) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const clickTime = (x / rect.width) * duration;

    const mid = (startTime + endTime) / 2;
    if (Math.abs(clickTime - startTime) < Math.abs(clickTime - endTime)) {
      setStartTime(Math.max(0, Math.min(clickTime, endTime - 0.1)));
    } else {
      setEndTime(Math.min(duration, Math.max(clickTime, startTime + 0.1)));
    }
    setTrimmedBlob(null);
  };

  const playPreview = async () => {
    if (!audioBuffer || !audioContextRef.current) return;
    cleanupAudio();

    const sampleRate = audioBuffer.sampleRate;
    const startSample = Math.floor(startTime * sampleRate);
    const endSample = Math.floor(endTime * sampleRate);
    const length = endSample - startSample;

    const ctx = audioContextRef.current;
    const source = ctx.createBufferSource();
    const trimmedBuffer = ctx.createBuffer(1, length, sampleRate);
    const originalData = audioBuffer.getChannelData(0);
    const trimmedData = trimmedBuffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      trimmedData[i] = originalData[startSample + i] || 0;
    }

    source.buffer = trimmedBuffer;
    source.connect(ctx.destination);
    source.start();
    source.onended = () => setIsPlaying(false);
    sourceRef.current = source;
    setIsPlaying(true);

    // Animate playhead
    let startOffset = 0;
    const animate = () => {
      if (!ctx) return;
      startOffset += 0.05;
      if (startOffset > duration) {
        setIsPlaying(false);
        return;
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
  };

  const stopPreview = () => {
    cleanupAudio();
  };

  const trimAndDownload = async () => {
    if (!audioBuffer) return;
    setLoading(true);

    try {
      const sampleRate = audioBuffer.sampleRate;
      const startSample = Math.floor(startTime * sampleRate);
      const endSample = Math.floor(endTime * sampleRate);
      const length = endSample - startSample;

      const offlineCtx = new OfflineAudioContext(1, length, sampleRate);
      const source = offlineCtx.createBufferSource();
      const trimmedBuffer = offlineCtx.createBuffer(1, length, sampleRate);
      const originalData = audioBuffer.getChannelData(0);
      const trimmedData = trimmedBuffer.getChannelData(0);
      for (let i = 0; i < length; i++) {
        trimmedData[i] = originalData[startSample + i] || 0;
      }
      source.buffer = trimmedBuffer;
      source.connect(offlineCtx.destination);
      source.start();

      const rendered = await offlineCtx.startRendering();
      const channelData = rendered.getChannelData(0);
      const blob = encodeWAV(channelData, sampleRate);
      setTrimmedBlob(blob);
    } catch {
      setError('Failed to render trimmed audio.');
    }
    setLoading(false);
  };

  const downloadTrimmed = () => {
    if (!trimmedBlob || !audioFile) return;
    const url = URL.createObjectURL(trimmedBlob);
    const a = document.createElement('a');
    a.href = url;
    const baseName = audioFile.name.replace(/\.[^/.]+$/, '');
    a.download = `${baseName}_trimmed.wav`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Draw waveform
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || waveformData.length === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    const w = rect.width;
    const h = rect.height;

    ctx.clearRect(0, 0, w, h);

    // Background
    ctx.fillStyle = 'hsl(var(--muted))';
    ctx.fillRect(0, 0, w, h);

    // Selection highlight
    if (duration > 0) {
      const selStart = (startTime / duration) * w;
      const selEnd = (endTime / duration) * w;
      ctx.fillStyle = 'hsl(var(--primary) / 0.15)';
      ctx.fillRect(selStart, 0, selEnd - selStart, h);
    }

    // Waveform bars
    const barWidth = w / waveformData.length;
    ctx.fillStyle = 'hsl(var(--foreground))';
    for (let i = 0; i < waveformData.length; i++) {
      const x = i * barWidth;
      const barHeight = waveformData[i] * h * 0.9;
      const y = (h - barHeight) / 2;
      ctx.fillRect(x + 1, y, Math.max(1, barWidth - 2), barHeight);
    }

    // Playhead indicator if playing
    if (isPlaying && sourceRef.current && audioContextRef.current) {
      const elapsed = audioContextRef.current.currentTime - (sourceRef.current as any)._startOffset || 0;
      if (elapsed > 0 && elapsed < duration) {
        const playheadX = (elapsed / duration) * w;
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(playheadX, 0);
        ctx.lineTo(playheadX, h);
        ctx.stroke();
      }
    }

    // Start/end labels
    ctx.fillStyle = 'hsl(var(--primary))';
    ctx.font = '10px monospace';
    ctx.fillText(formatTime(startTime), (startTime / duration) * w, h - 4);
    ctx.fillText(formatTime(endTime), (endTime / duration) * w, h - 4);
  }, [waveformData, duration, startTime, endTime, isPlaying]);

  const formatTime = (t: number) => {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Upload Audio (MP3, WAV, OGG)</label>
        <input
          type="file"
          accept="audio/mpeg,audio/wav,audio/ogg,.mp3,.wav,.ogg"
          onChange={handleFileUpload}
          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-primary file:text-primary-foreground file:text-sm file:font-medium cursor-pointer"
        />
      </div>

      {loading && <p className="text-sm text-muted-foreground">Processing...</p>}
      {error && <p className="text-sm text-red-500">{error}</p>}

      {audioBuffer && (
        <>
          <div className="rounded-md border bg-card p-4 space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{audioFile?.name}</span>
              <span>{formatTime(duration)}</span>
            </div>

            <canvas
              ref={canvasRef}
              className="w-full h-24 rounded cursor-crosshair"
              onClick={handleWaveformClick}
            />

            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Start: {formatTime(startTime)}</span>
              <span>End: {formatTime(endTime)}</span>
              <span>Selected: {formatTime(endTime - startTime)}</span>
            </div>
          </div>

          <div className="flex gap-2">
            {!isPlaying ? (
              <Button onClick={playPreview} disabled={!audioBuffer}>
                ▶ Play Preview
              </Button>
            ) : (
              <Button onClick={stopPreview} variant="destructive">
                ⏹ Stop
              </Button>
            )}
            <Button onClick={trimAndDownload} disabled={loading || !audioBuffer} variant="secondary">
              ✂ Trim &amp; Render
            </Button>
          </div>

          {trimmedBlob && (
            <div className="rounded-md border bg-card p-4">
              <p className="text-sm text-muted-foreground mb-2">Trimmed audio ready!</p>
              <Button onClick={downloadTrimmed}>⬇ Download Trimmed Audio</Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
