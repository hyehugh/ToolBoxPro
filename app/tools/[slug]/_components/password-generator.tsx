"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export function PasswordGeneratorTool() {
  const [length, setLength] = useState(16);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const { t } = useLocale();

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
      pwd += chars[crypto.getRandomValues(new Uint32Array(1))[0] % chars.length];
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
    return score <= 2 ? t("common.weak") : score <= 4 ? t("common.medium") : t("common.strong");
  })();

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm">
            {t("common.length")}: <span className="font-bold">{length}</span>
          </label>
          <input type="range" min={4} max={64} value={length} onChange={(e) => setLength(+e.target.value)} className="w-full" />
          <div className="space-y-1.5">
            {[
              { label: t("toolCommon.password.uppercase"), val: useUpper, set: setUseUpper },
              { label: t("toolCommon.password.lowercase"), val: useLower, set: setUseLower },
              { label: t("toolCommon.password.numbers"), val: useNumbers, set: setUseNumbers },
              { label: t("toolCommon.password.symbols"), val: useSymbols, set: setUseSymbols },
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
            strength === t("common.strong") ? "text-green-500" :
            strength === t("common.medium") ? "text-yellow-500" : "text-red-500"
          }`}>{strength}</span>
          <span className="text-xs text-muted-foreground">{t("common.strength")}</span>
        </div>
      </div>
      <Button onClick={generate}>{t("toolCommon.password.generatePassword")}</Button>
      {password && (
        <div className="p-4 rounded-lg border bg-card">
          <p className="font-mono text-lg text-center break-all mb-3">{password}</p>
          <div className="flex gap-2 justify-center">
            <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(password)}>{t("common.copy")}</Button>
            <Button variant="ghost" size="sm" onClick={generate}>{t("common.regenerate")}</Button>
          </div>
        </div>
      )}
    </div>
  );
}
