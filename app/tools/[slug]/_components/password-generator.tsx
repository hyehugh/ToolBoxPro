"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";

export function PasswordGeneratorTool() {
  const [length, setLength] = useState(16);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generate = useCallback(() => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    let chars = "";
    if (useUpper) chars += upper;
    if (useLower) chars += lower;
    if (useNumbers) chars += numbers;
    if (useSymbols) chars += symbols;
    if (!chars) return;
    let pwd = "";
    for (let i = 0; i < length; i++) {
      pwd += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(pwd);
  }, [length, useUpper, useLower, useNumbers, useSymbols]);

  const strength = (() => {
    let score = 0;
    if (useUpper) score++;
    if (useLower) score++;
    if (useNumbers) score++;
    if (useSymbols) score++;
    if (length >= 12) score++;
    if (length >= 16) score++;
    return score <= 2 ? "Weak" : score <= 4 ? "Medium" : "Strong";
  })();

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm">
            Length: <span className="font-bold">{length}</span>
          </label>
          <input type="range" min={4} max={64} value={length} onChange={(e) => setLength(+e.target.value)} className="w-full" />
          <div className="space-y-1.5">
            {[
              { label: "Uppercase (A-Z)", val: useUpper, set: setUseUpper },
              { label: "Lowercase (a-z)", val: useLower, set: setUseLower },
              { label: "Numbers (0-9)", val: useNumbers, set: setUseNumbers },
              { label: "Symbols (!@#)", val: useSymbols, set: setUseSymbols },
            ].map(({ label, val, set }) => (
              <label key={label} className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={val} onChange={(e) => set(e.target.checked)} />
                {label}
              </label>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-4 rounded-lg border bg-card">
          <span className={`text-lg font-bold ${
            strength === "Strong" ? "text-green-500" :
            strength === "Medium" ? "text-yellow-500" : "text-red-500"
          }`}>{strength}</span>
          <span className="text-xs text-muted-foreground">Strength</span>
        </div>
      </div>
      <Button onClick={generate}>Generate Password</Button>
      {password && (
        <div className="p-4 rounded-lg border bg-card">
          <p className="font-mono text-lg text-center break-all mb-3">{password}</p>
          <div className="flex gap-2 justify-center">
            <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(password)}>Copy</Button>
            <Button variant="ghost" size="sm" onClick={generate}>Regenerate</Button>
          </div>
        </div>
      )}
    </div>
  );
}
