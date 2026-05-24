"use client";

import { useState, useRef, useCallback } from "react";

type ModelStatus = "idle" | "downloading" | "ready" | "error";

const MODEL_HOSTS = [
  "https://huggingface.co/",
  "https://hf-mirror.com/",
];

export function GrammarCheckerTool() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<{ corrected: string; errorCount: number; changes: { original: string; corrected: string }[] } | null>(null);
  const [modelStatus, setModelStatus] = useState<ModelStatus>("idle");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const pipelineRef = useRef<any>(null);
  const hostIndexRef = useRef(0);

  const loadModel = useCallback(async () => {
    setModelStatus("downloading");
    setProgress(0);
    setErrorMsg("");

    for (let i = hostIndexRef.current; i < MODEL_HOSTS.length; i++) {
      try {
        const { pipeline, env } = await import("@huggingface/transformers");
        env.remoteHost = MODEL_HOSTS[i];
        env.allowLocalModels = false;
        env.allowRemoteModels = true;

        pipelineRef.current = await pipeline(
          "text2text-generation",
          "Xenova/t5-base-grammar-correction",
          {
            dtype: "q4",
            device: "wasm",
            progress_callback: (p: any) => {
              // Status can be "progress" or "download" — check for loaded/total
              if (p?.total > 0) {
                setProgress(Math.round((p.loaded / p.total) * 100));
              } else if (p?.progress !== undefined) {
                // Some callbacks provide progress as a ratio
                setProgress(Math.round(p.progress));
              }
            },
          } as any
        );
        setModelStatus("ready");
        hostIndexRef.current = i;
        return;
      } catch (e: any) {
        console.warn(`Failed with host ${MODEL_HOSTS[i]}:`, e);
        if (i < MODEL_HOSTS.length - 1) {
          setProgress(0);
          setErrorMsg(`Trying mirror ${i + 2}/${MODEL_HOSTS.length}...`);
        } else {
          setModelStatus("error");
          setErrorMsg(`Failed: ${e?.message?.slice(0, 200) || "Unknown error"}`);
        }
      }
    }
  }, []);

  const checkGrammar = useCallback(async () => {
    if (!text.trim() || modelStatus === "downloading") return;
    setLoading(true);
    setResult(null);

    if (!pipelineRef.current) await loadModel();
    if (!pipelineRef.current) { setLoading(false); return; }

    try {
      const sentences = text.split(/(?<=[.!?])\s+/).map(s => s.trim()).filter(Boolean);
      const correctedSentences: string[] = [];
      let totalErrors = 0;

      for (const sentence of sentences) {
        const output = await pipelineRef.current(`grammar: ${sentence}`, {
          max_new_tokens: 128,
          temperature: 0.1,
        });
        const corrected = output[0]?.generated_text?.trim() || sentence;
        correctedSentences.push(corrected);
        if (corrected.toLowerCase() !== sentence.toLowerCase()) totalErrors++;
      }

      const correctedText = correctedSentences.join(" ");
      const changes: { original: string; corrected: string }[] = [];
      for (let i = 0; i < sentences.length; i++) {
        if (correctedSentences[i]?.toLowerCase() !== sentences[i]?.toLowerCase()) {
          changes.push({ original: sentences[i], corrected: correctedSentences[i] });
        }
      }
      setResult({ corrected: correctedText, errorCount: totalErrors, changes });
    } catch (e: any) {
      setErrorMsg(`Error: ${e?.message?.slice(0, 200) || "Unknown"}`);
    }
    setLoading(false);
  }, [text, modelStatus, loadModel]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
        <span className="text-sm">🔒</span>
        <span className="text-xs text-emerald-700 dark:text-emerald-300">AI runs locally in your browser. Text never leaves your device.</span>
      </div>

      <div>
        <textarea placeholder="Type or paste your text here to check grammar..." value={text}
          onChange={(e) => setText(e.target.value)} rows={6}
          className="w-full p-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y" />
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-muted-foreground">{text.length} characters</span>
          <div className="flex gap-2">
            <button onClick={() => { setText(""); setResult(null); }}
              className="px-3 py-1.5 rounded-md text-xs border border-input hover:bg-accent transition-colors" disabled={!text}>Clear</button>
            <button onClick={checkGrammar}
              disabled={!text.trim() || loading || modelStatus === "downloading"}
              className="px-4 py-1.5 rounded-md text-xs font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50">
              {modelStatus === "downloading" ? `Downloading... ${progress}%` : loading ? "Checking..." : "Check Grammar ✓"}
            </button>
          </div>
        </div>
      </div>

      {modelStatus === "downloading" && (
        <div className="p-4 rounded-md border bg-card">
          <p className="text-xs text-muted-foreground mb-2">Downloading AI model (~310MB, quantized). First load only.</p>
          <div className="w-full bg-secondary rounded-full h-2">
            <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
          <p className="text-xs text-muted-foreground mt-1">{progress}%</p>
          {errorMsg && <p className="text-xs text-amber-600 mt-1">{errorMsg}</p>}
        </div>
      )}

      {modelStatus === "error" && (
        <div className="p-3 rounded-md bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
          <p className="text-xs text-red-700 dark:text-red-300">{errorMsg}</p>
          <button onClick={() => { hostIndexRef.current = 0; loadModel(); }}
            className="mt-2 text-xs underline hover:no-underline text-red-700 dark:text-red-300">Retry</button>
        </div>
      )}

      {result && (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className={`px-3 py-1.5 rounded-full text-xs font-medium ${result.errorCount === 0
              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
              : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"}`}>
              {result.errorCount === 0 ? "✅ No grammar issues" : `✏️ ${result.errorCount} sentence${result.errorCount > 1 ? "s" : ""} corrected`}
            </div>
            <button onClick={() => navigator.clipboard.writeText(result.corrected)}
              className="px-3 py-1.5 rounded-md text-xs border border-input hover:bg-accent transition-colors">Copy</button>
          </div>
          <div className="p-3 rounded-md border bg-card">
            <p className="text-xs text-muted-foreground mb-2 font-medium">Corrected:</p>
            <p className="text-sm leading-relaxed whitespace-pre-wrap">{result.corrected}</p>
          </div>
          {result.changes.length > 0 && (
            <div>
              <p className="text-xs text-muted-foreground mb-2 font-medium">Changes ({result.changes.length}):</p>
              <div className="space-y-2">
                {result.changes.map((change, i) => (
                  <div key={i} className="p-3 rounded-md border bg-card text-sm">
                    <div className="flex items-start gap-2 mb-1">
                      <span className="text-red-500 mt-0.5 shrink-0">✕</span>
                      <span className="text-red-600 dark:text-red-400 line-through">{change.original}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
                      <span className="text-emerald-600 dark:text-emerald-400">{change.corrected}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {!text.trim() && !result && (
        <div className="text-center py-8 text-muted-foreground">
          <p className="text-3xl mb-2">✍️</p>
          <p className="text-sm">Paste text above to check grammar, spelling, and style</p>
          <p className="text-xs mt-1">AI runs 100% in your browser</p>
        </div>
      )}
    </div>
  );
}
