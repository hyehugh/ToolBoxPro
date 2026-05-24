"use client";

import { useState, useRef, useCallback } from "react";

type ModelStatus = "idle" | "downloading" | "compiling" | "ready" | "error";

const MODEL_HOSTS = [
  "https://huggingface.co/",
  "https://hf-mirror.com/",
];

export function TextSummarizerTool() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [modelStatus, setModelStatus] = useState<ModelStatus>("idle");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [ratio, setRatio] = useState(30);
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
          "summarization",
          "Xenova/t5-small",
          {
            dtype: "q4",
            device: "wasm",
            progress_callback: (p: any) => {
              if (p?.status === "progress_total" && p?.progress !== undefined) {
                const val = Math.min(Math.round(p.progress), 100);
                setProgress(val);
                if (val >= 100) {
                  setModelStatus("compiling");
                }
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
          setErrorMsg(`Failed: ${e?.message?.slice(0, 200) || "Unknown"}`);
        }
      }
    }
  }, []);

  const summarize = useCallback(async () => {
    const clean = text.trim();
    if (!clean || modelStatus === "downloading") return;
    setLoading(true);
    setSummary("");

    if (!pipelineRef.current) await loadModel();
    if (!pipelineRef.current) { setLoading(false); return; }

    try {
      const maxInputChars = 2000;
      const inputText = clean.length > maxInputChars ? clean.slice(0, maxInputChars) : clean;
      const maxLength = Math.max(30, Math.round(inputText.split(" ").length * (ratio / 100)));
      const minLength = Math.max(10, Math.round(maxLength * 0.3));

      const output = await pipelineRef.current(inputText, {
        max_length: maxLength,
        min_length: minLength,
        do_sample: false,
      });
      setSummary(output[0]?.summary_text?.trim() || "Could not generate summary.");
    } catch (e: any) {
      setErrorMsg(`Error: ${e?.message?.slice(0, 200) || "Unknown"}`);
    }
    setLoading(false);
  }, [text, ratio, modelStatus, loadModel]);

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const summaryWords = summary ? summary.split(/\s+/).length : 0;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
        <span className="text-sm">🔒</span>
        <span className="text-xs text-emerald-700 dark:text-emerald-300">AI runs locally in your browser. Text never leaves your device.</span>
      </div>

      <div>
        <textarea placeholder="Paste article, essay, or document text to summarize..." value={text}
          onChange={(e) => setText(e.target.value)} rows={8}
          className="w-full p-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y" />
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-muted-foreground">{wordCount} words</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="text-xs text-muted-foreground whitespace-nowrap">Length: {ratio}%</label>
          <input type="range" min="10" max="50" value={ratio}
            onChange={(e) => setRatio(Number(e.target.value))}
            className="w-24 h-1.5 accent-primary" />
        </div>
        <div className="flex gap-2 ml-auto">
          <button onClick={() => { setText(""); setSummary(""); }}
            className="px-3 py-1.5 rounded-md text-xs border border-input hover:bg-accent transition-colors" disabled={!text}>Clear</button>
          <button onClick={summarize}
              disabled={wordCount < 10 || loading || modelStatus === "downloading" || modelStatus === "compiling"}
            className="px-4 py-1.5 rounded-md text-xs font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50">
             {modelStatus === "downloading" ? `Downloading... ${progress}%` : modelStatus === "compiling" ? "Initializing..." : loading ? "Summarizing..." : "Summarize ✨"}
          </button>
        </div>
      </div>

      {modelStatus === "downloading" && (
        <div className="p-4 rounded-md border bg-card">
          <p className="text-xs text-muted-foreground mb-2">Downloading AI model (~75MB, quantized). First load only.</p>
          <div className="w-full bg-secondary rounded-full h-2">
            <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
          <p className="text-xs text-muted-foreground mt-1">{progress}%</p>
          {errorMsg && <p className="text-xs text-amber-600 mt-1">{errorMsg}</p>}
        </div>
      )}

      {modelStatus === "compiling" && (
        <div className="p-4 rounded-md border bg-card">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <p className="text-xs text-muted-foreground font-medium">Initializing AI model...</p>
          </div>
          <p className="text-xs text-muted-foreground">Compiling neural network for your browser. This may take a few seconds.</p>
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

      {summary && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
              {wordCount}w → {summaryWords}w ({Math.round((summaryWords / wordCount) * 100)}%)
            </div>
            <button onClick={() => navigator.clipboard.writeText(summary)}
              className="px-3 py-1.5 rounded-md text-xs border border-input hover:bg-accent transition-colors">Copy</button>
          </div>
          <div className="p-4 rounded-md border bg-card">
            <p className="text-xs text-muted-foreground mb-2 font-medium">Summary:</p>
            <p className="text-sm leading-relaxed">{summary}</p>
          </div>
        </div>
      )}

      {!text.trim() && !summary && (
        <div className="text-center py-8 text-muted-foreground">
          <p className="text-3xl mb-2">📝</p>
          <p className="text-sm">Paste text to get an AI summary</p>
          <p className="text-xs mt-1">Runs 100% in your browser</p>
        </div>
      )}
    </div>
  );
}
