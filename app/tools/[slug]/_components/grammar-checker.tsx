"use client";

import { useState, useRef, useCallback } from "react";

type CorrectionResult = {
  corrected: string;
  errorCount: number;
  changes: { original: string; corrected: string }[];
};

type ModelStatus = "idle" | "downloading" | "ready" | "error";

export function GrammarCheckerTool() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<CorrectionResult | null>(null);
  const [modelStatus, setModelStatus] = useState<ModelStatus>("idle");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const pipelineRef = useRef<any>(null);

  const loadModel = useCallback(async () => {
    if (pipelineRef.current) return;
    setModelStatus("downloading");
    setProgress(0);

    try {
      const { pipeline } = await import("@huggingface/transformers");

      // Use a proxy to track download progress
      pipelineRef.current = await pipeline(
        "text2text-generation",
        "Xenova/t5-base-grammar-correction",
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
      console.error("Failed to load grammar model:", e);
      setModelStatus("error");
    }
  }, []);

  const checkGrammar = useCallback(async () => {
    if (!text.trim() || modelStatus === "downloading") return;

    setLoading(true);
    setResult(null);

    // Load model if not loaded yet
    if (!pipelineRef.current) {
      await loadModel();
    }

    if (!pipelineRef.current) {
      setLoading(false);
      return;
    }

    try {
      // Split into sentences for better correction
      const sentences = text
        .split(/(?<=[.!?])\s+/)
        .map((s) => s.trim())
        .filter(Boolean);

      const correctedSentences: string[] = [];
      let totalErrors = 0;

      for (const sentence of sentences) {
        const output = await pipelineRef.current(
          `grammar: ${sentence}`,
          {
            max_new_tokens: 128,
            temperature: 0.1,
          }
        );
        const corrected = output[0]?.generated_text?.trim() || sentence;
        correctedSentences.push(corrected);

        if (corrected.toLowerCase() !== sentence.toLowerCase()) {
          totalErrors++;
        }
      }

      const correctedText = correctedSentences.join(" ");

      // Build change list
      const changes: { original: string; corrected: string }[] = [];
      for (let i = 0; i < sentences.length; i++) {
        if (correctedSentences[i]?.toLowerCase() !== sentences[i]?.toLowerCase()) {
          changes.push({
            original: sentences[i],
            corrected: correctedSentences[i],
          });
        }
      }

      setResult({
        corrected: correctedText,
        errorCount: totalErrors,
        changes,
      });
    } catch (e) {
      console.error("Grammar check failed:", e);
    }

    setLoading(false);
  }, [text, modelStatus, loadModel]);

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
          placeholder="Type or paste your text here to check grammar..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={6}
          className="w-full p-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y"
        />
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-muted-foreground">
            {text.length} characters
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setText("");
                setResult(null);
              }}
              className="px-3 py-1.5 rounded-md text-xs border border-input hover:bg-accent transition-colors"
              disabled={!text}
            >
              Clear
            </button>
            <button
              onClick={checkGrammar}
              disabled={!text.trim() || loading || modelStatus === "downloading"}
              className="px-4 py-1.5 rounded-md text-xs font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {modelStatus === "downloading"
                ? `Downloading AI model... ${progress}%`
                : loading
                ? "Checking..."
                : "Check Grammar ✓"}
            </button>
          </div>
        </div>
      </div>

      {/* Download progress */}
      {modelStatus === "downloading" && (
        <div className="p-4 rounded-md border bg-card">
          <p className="text-xs text-muted-foreground mb-2">
            Downloading grammar correction AI model (~300MB). First load only — cached after that.
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
            Failed to load the AI model. Please check your internet connection and try again.
          </p>
        </div>
      )}

      {/* Results */}
      {result && (
        <div className="space-y-3">
          {/* Summary */}
          <div className="flex items-center gap-3">
            <div
              className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                result.errorCount === 0
                  ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                  : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
              }`}
            >
              {result.errorCount === 0
                ? "✅ No grammar issues found"
                : `✏️ ${result.errorCount} sentence${result.errorCount > 1 ? "s" : ""} corrected`}
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(result.corrected);
              }}
              className="px-3 py-1.5 rounded-md text-xs border border-input hover:bg-accent transition-colors"
            >
              Copy Corrected
            </button>
          </div>

          {/* Corrected text */}
          <div className="p-3 rounded-md border bg-card">
            <p className="text-xs text-muted-foreground mb-2 font-medium">
              Corrected Version:
            </p>
            <p className="text-sm leading-relaxed whitespace-pre-wrap">
              {result.corrected}
            </p>
          </div>

          {/* Changes list */}
          {result.changes.length > 0 && (
            <div>
              <p className="text-xs text-muted-foreground mb-2 font-medium">
                Changes ({result.changes.length}):
              </p>
              <div className="space-y-2">
                {result.changes.map((change, i) => (
                  <div key={i} className="p-3 rounded-md border bg-card text-sm">
                    <div className="flex items-start gap-2 mb-1">
                      <span className="text-red-500 mt-0.5 shrink-0">✕</span>
                      <span className="text-red-600 dark:text-red-400 line-through">
                        {change.original}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
                      <span className="text-emerald-600 dark:text-emerald-400">
                        {change.corrected}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Empty state */}
      {!text.trim() && !result && (
        <div className="text-center py-8 text-muted-foreground">
          <p className="text-3xl mb-2">✍️</p>
          <p className="text-sm">
            Type or paste text above to check grammar, spelling, and style
          </p>
          <p className="text-xs mt-1">
            Powered by AI — runs 100% in your browser
          </p>
        </div>
      )}
    </div>
  );
}
