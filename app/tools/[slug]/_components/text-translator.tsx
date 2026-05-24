"use client";

import { useState, useRef, useCallback } from "react";
import { pipelineCache } from "./model-cache";

type ModelStatus = "idle" | "downloading" | "compiling" | "ready" | "error";

const MODEL_HOSTS = [
  "https://huggingface.co/",
  "https://hf-mirror.com/",
];

interface Lang {
  code: string;
  name: string;
}

const LANGUAGES: Lang[] = [
  { code: "English", name: "English" },
  { code: "Chinese", name: "中文" },
  { code: "Spanish", name: "Español" },
  { code: "French", name: "Français" },
  { code: "German", name: "Deutsch" },
  { code: "Japanese", name: "日本語" },
  { code: "Korean", name: "한국어" },
  { code: "Russian", name: "Русский" },
  { code: "Arabic", name: "العربية" },
  { code: "Portuguese", name: "Português" },
];

// Use separate cache key from summarizer (different pipeline type)
const CACHE_KEY = "text-translator";

export function TextTranslatorTool() {
  const [text, setText] = useState("");
  const [translation, setTranslation] = useState("");
  const [sourceLang, setSourceLang] = useState("English");
  const [targetLang, setTargetLang] = useState("Chinese");
  const [modelStatus, setModelStatus] = useState<ModelStatus>("idle");
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const pipelineRef = useRef<any>(null);
  const hostIndexRef = useRef(0);
  const speedRef = useRef({ bytes: 0, time: 0, samples: [] as number[], lastDisplay: 0 });

  const loadModel = useCallback(async () => {
    // Check module-level cache (may have been loaded by Summarizer already)
    if (pipelineCache.has(CACHE_KEY)) {
      pipelineRef.current = pipelineCache.get(CACHE_KEY)!;
      setModelStatus("ready");
      return;
    }

    // Check if model was downloaded before
    const isCached = localStorage.getItem("hf_model_translator") === "1";
    if (!isCached) {
      setModelStatus("downloading");
    } else {
      setModelStatus("compiling");
    }
    setProgress(0);
    setSpeed("");
    setErrorMsg("");

    for (let i = hostIndexRef.current; i < MODEL_HOSTS.length; i++) {
      try {
        const { pipeline, env } = await import("@huggingface/transformers");
        env.remoteHost = MODEL_HOSTS[i];
        env.allowLocalModels = false;
        env.allowRemoteModels = true;

        // Use same model as Summarizer — t5-small (75MB q4)
        pipelineRef.current = await pipeline(
          "text2text-generation",
          "Xenova/t5-small",
          {
            dtype: "q4",
            device: "wasm",
            progress_callback: (p: any) => {
              if (p?.status === "progress_total" && p?.progress !== undefined) {
                const val = Math.min(Math.round(p.progress), 100);
                setProgress(val);
                const now = Date.now();
                const s = speedRef.current;
                if (s.time > 0 && p.loaded > s.bytes) {
                  const deltaBytes = p.loaded - s.bytes;
                  const deltaTime = (now - s.time) / 1000;
                  if (deltaTime > 0) {
                    s.samples.push(deltaBytes / deltaTime);
                    if (s.samples.length > 5) s.samples.shift();
                    if (now - s.lastDisplay > 1000) {
                      const avg = s.samples.reduce((a, b) => a + b, 0) / s.samples.length;
                      setSpeed(avg > 1_000_000 ? `${(avg / 1_048_576).toFixed(1)} MB/s` : `${(avg / 1024).toFixed(0)} KB/s`);
                      s.lastDisplay = now;
                    }
                  }
                }
                s.bytes = p.loaded;
                s.time = now;
                if (val >= 100) setModelStatus("compiling");
              }
            },
          } as any
        );
        setModelStatus("ready");
        pipelineCache.set(CACHE_KEY, pipelineRef.current);
        localStorage.setItem("hf_model_translator", "1");
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

  const translate = useCallback(async () => {
    const clean = text.trim();
    if (!clean || modelStatus === "downloading") return;
    setLoading(true);
    setTranslation("");
    setErrorMsg("");

    await new Promise((r) => setTimeout(r, 0));

    if (!pipelineRef.current) await loadModel();
    if (!pipelineRef.current) { setLoading(false); return; }

    try {
      // T5 translation prompt format
      const prompt = `translate ${sourceLang} to ${targetLang}: ${clean}`;
      const maxTokens = Math.max(30, Math.min(256, Math.round(clean.split(" ").length * 2)));

      const output = await pipelineRef.current(prompt, {
        max_new_tokens: maxTokens,
        temperature: 0.0,
        do_sample: false,
      });

      let result = output[0]?.generated_text?.trim() || "";
      // Strip prompt prefix if model echoes it back
      const prefix = `translate ${sourceLang} to ${targetLang}:`;
      if (result.toLowerCase().startsWith(prefix.toLowerCase())) {
        result = result.slice(prefix.length).trim();
      }

      // If result is same as input, try with lowercase prompt
      if (!result || result.toLowerCase() === clean.toLowerCase()) {
        const promptLower = `translate ${sourceLang.toLowerCase()} to ${targetLang.toLowerCase()}: ${clean}`;
        const retry = await pipelineRef.current(promptLower, {
          max_new_tokens: maxTokens,
          temperature: 0.0,
          do_sample: false,
        });
        result = retry[0]?.generated_text?.trim() || "";
        const lowerPrefix = `translate ${sourceLang.toLowerCase()} to ${targetLang.toLowerCase()}:`;
        if (result.toLowerCase().startsWith(lowerPrefix)) {
          result = result.slice(lowerPrefix.length).trim();
        }
      }

      setTranslation(result || "Translation returned empty result. Try shorter text.");
    } catch (e: any) {
      setErrorMsg(`Error: ${e?.message?.slice(0, 200) || "Unknown"}`);
    }
    setLoading(false);
  }, [text, sourceLang, targetLang, modelStatus, loadModel]);

  const swapLangs = useCallback(() => {
    const s = sourceLang;
    setSourceLang(targetLang);
    setTargetLang(s);
    if (translation) { setText(translation); setTranslation(""); }
  }, [sourceLang, targetLang, text, translation]);

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div className="space-y-4">
      {/* Privacy badge */}
      <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
        <span className="text-sm">🔒</span>
        <span className="text-xs text-emerald-700 dark:text-emerald-300">
          AI runs locally in your browser. Your text never leaves your device.
        </span>
      </div>

      {/* Language selector */}
      <div className="flex items-center gap-2">
        <select value={sourceLang} onChange={(e) => { setSourceLang(e.target.value); setTranslation(""); }}
          className="px-2 py-1.5 rounded-md border border-input bg-background text-xs focus:outline-none focus:ring-2 focus:ring-ring flex-1">
          {LANGUAGES.map((l) => (
            <option key={l.code} value={l.code}>{l.name}</option>
          ))}
        </select>
        <button onClick={swapLangs}
          className="px-2 py-1.5 rounded-md border border-input hover:bg-accent transition-colors text-xs shrink-0">⇄</button>
        <select value={targetLang} onChange={(e) => { setTargetLang(e.target.value); setTranslation(""); }}
          className="px-2 py-1.5 rounded-md border border-input bg-background text-xs focus:outline-none focus:ring-2 focus:ring-ring flex-1">
          {LANGUAGES.map((l) => (
            <option key={l.code} value={l.code}>{l.name}</option>
          ))}
        </select>
      </div>

      {/* Input */}
      <div>
        <textarea placeholder="Type text to translate..." value={text}
          onChange={(e) => setText(e.target.value)} rows={5}
          className="w-full p-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y" />
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-muted-foreground">{wordCount} words</span>
          <div className="flex gap-2">
            <button onClick={() => { setText(""); setTranslation(""); setErrorMsg(""); }}
              className="px-3 py-1.5 rounded-md text-xs border border-input hover:bg-accent transition-colors" disabled={!text}>Clear</button>
            <button onClick={translate}
              disabled={!text.trim() || loading || modelStatus === "downloading" || modelStatus === "compiling"}
              className="px-4 py-1.5 rounded-md text-xs font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50">
              {modelStatus === "downloading" ? `Downloading AI... ${progress}%` : modelStatus === "compiling" ? "Initializing..." : loading ? "Translating..." : "Translate →"}
            </button>
          </div>
        </div>
      </div>

      {/* Download progress */}
      {modelStatus === "downloading" && (
        <div className="p-4 rounded-md border bg-card">
          <p className="text-xs text-muted-foreground mb-2">Downloading AI model (~75MB). First load only.</p>
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
          <p className="text-xs text-muted-foreground">Compiling. This may take a few seconds.</p>
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

      {/* Output */}
      {translation && (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">{targetLang} :</span>
            <button onClick={() => navigator.clipboard.writeText(translation)}
              className="px-3 py-1.5 rounded-md text-xs border border-input hover:bg-accent transition-colors">Copy</button>
          </div>
          <div className="p-4 rounded-md border bg-card">
            <p className="text-sm leading-relaxed">{translation}</p>
          </div>
        </div>
      )}

      {!text.trim() && !translation && (
        <div className="text-center py-8 text-muted-foreground">
          <p className="text-3xl mb-2">🌐</p>
          <p className="text-sm">Type text above to translate</p>
          <p className="text-xs mt-1">AI runs 100% in your browser</p>
        </div>
      )}
    </div>
  );
}
