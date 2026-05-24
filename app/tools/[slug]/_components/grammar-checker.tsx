"use client";

import { useState, useRef, useCallback } from "react";
import { pipelineCache } from "./model-cache";

type ModelStatus = "idle" | "downloading" | "compiling" | "ready" | "error";

const MODEL_HOSTS = [
  "https://huggingface.co/",
  "https://hf-mirror.com/",
];

export function GrammarCheckerTool() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<{ corrected: string; errorCount: number; changes: { original: string; corrected: string }[] } | null>(null);
  const [modelStatus, setModelStatus] = useState<ModelStatus>("idle");
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const pipelineRef = useRef<any>(null);
  const hostIndexRef = useRef(0);
  const speedRef = useRef({ bytes: 0, time: 0, samples: [] as number[], lastDisplay: 0 });
  const CACHE_KEY = "grammar-checker";

  const loadModel = useCallback(async () => {
    // Check module-level cache first (survives page navigation)
    if (pipelineCache.has(CACHE_KEY)) {
      pipelineRef.current = pipelineCache.get(CACHE_KEY)!;
      setModelStatus("ready");
      return;
    }

    setModelStatus("downloading");
    setProgress(0);
    setSpeed("");
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
              if (p?.status === "progress_total" && p?.progress !== undefined) {
                const val = Math.min(Math.round(p.progress), 100);
                setProgress(val);
                // Calculate download speed
                const now = Date.now();
                const s = speedRef.current;
                if (s.time > 0 && p.loaded > s.bytes) {
                  const deltaBytes = p.loaded - s.bytes;
                  const deltaTime = (now - s.time) / 1000;
                  if (deltaTime > 0) {
                    s.samples.push(deltaBytes / deltaTime);
                    if (s.samples.length > 5) s.samples.shift();
                    // Update display at most once per second
                    if (now - s.lastDisplay > 1000) {
                      const avg = s.samples.reduce((a, b) => a + b, 0) / s.samples.length;
                      setSpeed(avg > 1_000_000
                        ? `${(avg / 1_048_576).toFixed(1)} MB/s`
                        : `${(avg / 1024).toFixed(0)} KB/s`);
                      s.lastDisplay = now;
                    }
                  }
                }
                s.bytes = p.loaded;
                s.time = now;
                if (val >= 100) {
                  setModelStatus("compiling");
                }
              }
            },
          } as any
        );
        setModelStatus("ready");
        pipelineCache.set(CACHE_KEY, pipelineRef.current);
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
              disabled={!text.trim() || loading || modelStatus === "downloading" || modelStatus === "compiling"}
              className="px-4 py-1.5 rounded-md text-xs font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50">
              {modelStatus === "downloading" ? `Downloading... ${progress}%` : modelStatus === "compiling" ? "Initializing..." : loading ? "Checking..." : "Check Grammar ✓"}
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
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>{progress}%</span>
            {speed && <span>{speed}</span>}
          </div>
          {errorMsg && <p className="text-xs text-amber-600 mt-1">{errorMsg}</p>}
        </div>
      )}

      {modelStatus === "compiling" && (
        <div className="p-4 rounded-md border bg-card">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <p className="text-xs text-muted-foreground font-medium">Initializing AI model...</p>
          </div>
          <p className="text-xs text-muted-foreground">Compiling neural network for your browser. This may take 5-30 seconds.</p>
          <div className="w-full bg-secondary rounded-full h-2 mt-2">
            <div className="bg-primary h-2 rounded-full animate-pulse" style={{ width: "100%" }} />
          </div>
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
