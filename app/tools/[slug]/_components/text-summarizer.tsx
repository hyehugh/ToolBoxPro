"use client";

import { useState, useRef, useCallback } from "react";

type ModelStatus = "idle" | "downloading" | "ready" | "error";

export function TextSummarizerTool() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [modelStatus, setModelStatus] = useState<ModelStatus>("idle");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [ratio, setRatio] = useState(30);
  const pipelineRef = useRef<any>(null);

  const loadModel = useCallback(async () => {
    if (pipelineRef.current) return;
    setModelStatus("downloading");
    setProgress(0);

    try {
      const { pipeline } = await import("@huggingface/transformers");

      pipelineRef.current = await pipeline(
        "summarization",
        "Xenova/t5-small",
        {
          progress_callback: (p: any) => {
            if (p.status === "download" && p.total > 0) {
              setProgress(Math.round((p.loaded / p.total) * 100));
            }
          },
        }
      );
      setModelStatus("ready");
    } catch (e) {
      console.error("Failed to load summarization model:", e);
      setModelStatus("error");
    }
  }, []);

  const summarize = useCallback(async () => {
    const clean = text.trim();
    if (!clean || modelStatus === "downloading") return;

    setLoading(true);
    setSummary("");

    if (!pipelineRef.current) {
      await loadModel();
    }

    if (!pipelineRef.current) {
      setLoading(false);
      return;
    }

    try {
      // Split long text into chunks if needed (t5-small has ~512 token limit)
      const maxInputChars = 2000;
      let inputText = clean;
      if (clean.length > maxInputChars) {
        inputText = clean.slice(0, maxInputChars);
      }

      const maxLength = Math.max(30, Math.round(inputText.split(" ").length * (ratio / 100)));
      const minLength = Math.max(10, Math.round(maxLength * 0.3));

      const output = await pipelineRef.current(inputText, {
        max_length: maxLength,
        min_length: minLength,
        do_sample: false,
      });

      const result = output[0]?.summary_text?.trim();
      setSummary(result || "Could not generate summary. Try with different text.");
    } catch (e) {
      console.error("Summarization failed:", e);
      setSummary("An error occurred. Please try again with shorter text.");
    }

    setLoading(false);
  }, [text, ratio, modelStatus, loadModel]);

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const summaryWords = summary ? summary.split(/\s+/).length : 0;

  return (
    <div className="space-y-4">
      {/* Privacy badge */}
      <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
        <span className="text-sm">🔒</span>
        <span className="text-xs text-emerald-700 dark:text-emerald-300">
          AI runs locally in your browser. Your text never leaves your device.
        </span>
      </div>

      {/* Input */}
      <div>
        <textarea
          placeholder="Paste article, essay, or document text to summarize..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={8}
          className="w-full p-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y"
        />
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-muted-foreground">
            {wordCount} words
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="text-xs text-muted-foreground whitespace-nowrap">
            Summary length: {ratio}%
          </label>
          <input
            type="range"
            min="10"
            max="50"
            value={ratio}
            onChange={(e) => setRatio(Number(e.target.value))}
            className="w-24 h-1.5 accent-primary"
          />
        </div>
        <div className="flex gap-2 ml-auto">
          <button
            onClick={() => {
              setText("");
              setSummary("");
            }}
            className="px-3 py-1.5 rounded-md text-xs border border-input hover:bg-accent transition-colors"
            disabled={!text}
          >
            Clear
          </button>
          <button
            onClick={summarize}
            disabled={wordCount < 10 || loading || modelStatus === "downloading"}
            className="px-4 py-1.5 rounded-md text-xs font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {modelStatus === "downloading"
              ? `Downloading AI model... ${progress}%`
              : loading
              ? "Summarizing..."
              : "Summarize ✨"}
          </button>
        </div>
      </div>

      {/* Download progress */}
      {modelStatus === "downloading" && (
        <div className="p-4 rounded-md border bg-card">
          <p className="text-xs text-muted-foreground mb-2">
            Downloading AI model (~60MB). First load only — cached after that.
          </p>
          <div className="w-full bg-secondary rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-1">{progress}%</p>
        </div>
      )}

      {/* Model error */}
      {modelStatus === "error" && (
        <div className="p-3 rounded-md bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
          <p className="text-xs text-red-700 dark:text-red-300">
            Failed to load the AI model. Check your connection and try again.
          </p>
        </div>
      )}

      {/* Output */}
      {summary && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
              {wordCount} words → {summaryWords} words ({Math.round((summaryWords / wordCount) * 100)}%)
            </div>
            <button
              onClick={() => navigator.clipboard.writeText(summary)}
              className="px-3 py-1.5 rounded-md text-xs border border-input hover:bg-accent transition-colors"
            >
              Copy
            </button>
          </div>
          <div className="p-4 rounded-md border bg-card">
            <p className="text-xs text-muted-foreground mb-2 font-medium">
              Summary:
            </p>
            <p className="text-sm leading-relaxed">{summary}</p>
          </div>
        </div>
      )}

      {/* Empty state */}
      {!text.trim() && !summary && (
        <div className="text-center py-8 text-muted-foreground">
          <p className="text-3xl mb-2">📝</p>
          <p className="text-sm">
            Paste any text to get an AI-generated summary
          </p>
          <p className="text-xs mt-1">
            Powered by AI — runs 100% in your browser
          </p>
        </div>
      )}
    </div>
  );
}
