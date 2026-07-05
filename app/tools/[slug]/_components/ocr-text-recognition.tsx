"use client";

import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

// Lazy-loaded types
type Worker = Awaited<ReturnType<typeof import("tesseract.js").createWorker>>;

const LANGUAGES: { code: string; label: string; labelZh: string }[] = [
  { code: "eng", label: "English", labelZh: "英语" },
  { code: "chi_sim", label: "Chinese (Simplified)", labelZh: "中文（简体）" },
  { code: "chi_tra", label: "Chinese (Traditional)", labelZh: "中文（繁体）" },
  { code: "jpn", label: "Japanese", labelZh: "日语" },
  { code: "kor", label: "Korean", labelZh: "韩语" },
  { code: "fra", label: "French", labelZh: "法语" },
  { code: "deu", label: "German", labelZh: "德语" },
  { code: "spa", label: "Spanish", labelZh: "西班牙语" },
  { code: "rus", label: "Russian", labelZh: "俄语" },
  { code: "ara", label: "Arabic", labelZh: "阿拉伯语" },
  { code: "hin", label: "Hindi", labelZh: "印地语" },
  { code: "por", label: "Portuguese", labelZh: "葡萄牙语" },
  { code: "ita", label: "Italian", labelZh: "意大利语" },
];

export function OcrTextRecognitionTool() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [language, setLanguage] = useState<string>("eng");
  const [extractedText, setExtractedText] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressLabel, setProgressLabel] = useState("");
  const [error, setError] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const workerRef = useRef<Worker | null>(null);
  const { locale } = useLocale();
  const isZh = locale === "zh";
  const l = (en: string, zh: string) => (isZh ? zh : en);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError(l("Please select an image file", "请选择图片文件"));
      return;
    }
    setImageUrl(URL.createObjectURL(file));
    setFileName(file.name);
    setExtractedText("");
    setError("");
  };

  const runOcr = useCallback(async () => {
    if (!imageUrl) return;
    setIsProcessing(true);
    setError("");
    setExtractedText("");
    setProgress(0);

    try {
      // Dynamically import tesseract.js (keeps initial bundle small)
      const { createWorker } = await import("tesseract.js");

      // Terminate any previous worker before creating a new one
      if (workerRef.current) {
        await workerRef.current.terminate();
        workerRef.current = null;
      }

      const worker = await createWorker(language, 1, {
        logger: (m: { status: string; progress: number }) => {
          setProgress(Math.round((m.progress || 0) * 100));
          const statusMap: Record<string, string> = {
            "loading tesseract core": l("Loading engine…", "加载引擎…"),
            "initializing tesseract": l("Initializing…", "初始化…"),
            "loading language traineddata": l(
              "Loading language data…",
              "加载语言数据…"
            ),
            "initializing api": l("Starting…", "启动中…"),
            "recognizing text": l("Recognizing text…", "识别文字…"),
          };
          setProgressLabel(statusMap[m.status] || m.status || "");
        },
      });
      workerRef.current = worker;

      const { data } = await worker.recognize(imageUrl);
      setExtractedText(data.text || l("(No text found)", "（未识别到文字）"));

      await worker.terminate();
      workerRef.current = null;
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      setError(
        l(
          `Recognition failed: ${msg}`,
          `识别失败：${msg}`
        )
      );
    } finally {
      setIsProcessing(false);
      setProgress(0);
      setProgressLabel("");
    }
  }, [imageUrl, language, isZh]);

  const copyText = async () => {
    await navigator.clipboard.writeText(extractedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadText = () => {
    const blob = new Blob([extractedText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileName.replace(/\.[^.]+$/, "") || "ocr"}-text.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    if (workerRef.current) {
      workerRef.current.terminate();
      workerRef.current = null;
    }
    setImageUrl("");
    setFileName("");
    setExtractedText("");
    setError("");
    setProgress(0);
  };

  const wordCount = extractedText.trim()
    ? extractedText.trim().split(/\s+/).length
    : 0;

  return (
    <div className="space-y-4">
      {!imageUrl ? (
        <div
          className="border-2 border-dashed border-input rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const f = e.dataTransfer.files[0];
            if (f) handleFile(f);
          }}
          onClick={() => {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = "image/*";
            input.onchange = (e: any) =>
              e.target.files[0] && handleFile(e.target.files[0]);
            input.click();
          }}
        >
          <p className="text-muted-foreground">
            {l(
              "Drop an image here or click to upload",
              "拖拽图片到此处或点击上传"
            )}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {l(
              "Supports JPG, PNG, WebP, BMP, GIF",
              "支持 JPG、PNG、WebP、BMP、GIF"
            )}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Image preview */}
          <div className="rounded-md border bg-card p-4 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageUrl}
              alt={fileName}
              className="max-w-full max-h-64 object-contain rounded"
            />
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 flex-1 min-w-[200px]">
              <label
                htmlFor="ocr-lang"
                className="text-sm text-muted-foreground whitespace-nowrap"
              >
                {l("Language:", "语言：")}
              </label>
              <select
                id="ocr-lang"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                disabled={isProcessing}
                className="flex-1 h-9 rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {isZh ? lang.labelZh : lang.label} ({lang.code})
                  </option>
                ))}
              </select>
            </div>
            <Button
              onClick={runOcr}
              disabled={isProcessing}
              size="sm"
            >
              {isProcessing
                ? l("Processing…", "处理中…")
                : l("Extract Text", "提取文字")}
            </Button>
            <Button variant="outline" size="sm" onClick={reset} disabled={isProcessing}>
              {l("New Image", "新图片")}
            </Button>
          </div>

          {/* Progress */}
          {isProcessing && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{progressLabel}</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                {l(
                  "First run downloads language data (~2-15 MB). Subsequent runs are faster.",
                  "首次运行需下载语言数据（约 2-15 MB），之后会更快。"
                )}
              </p>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="p-3 rounded-md border border-destructive/30 bg-destructive/10 text-sm text-destructive">
              {error}
            </div>
          )}

          {/* Result */}
          {extractedText && !isProcessing && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {l(
                    `Extracted text (${wordCount} words, ${extractedText.length} chars)`,
                    `提取的文字（${wordCount} 词，${extractedText.length} 字符）`
                  )}
                </span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={copyText}>
                    {copied
                      ? l("Copied!", "已复制！")
                      : l("Copy", "复制")}
                  </Button>
                  <Button variant="outline" size="sm" onClick={downloadText}>
                    {l("Download .txt", "下载 .txt")}
                  </Button>
                </div>
              </div>
              <textarea
                value={extractedText}
                onChange={(e) => setExtractedText(e.target.value)}
                className="w-full min-h-[180px] p-3 rounded-md border bg-card text-sm font-mono resize-y focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={l("Recognized text will appear here", "识别的文字将显示在这里")}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
