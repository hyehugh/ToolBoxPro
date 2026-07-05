"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n/context";

export function TemperatureConverterTool() {
  const { t } = useLocale();
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [kelvin, setKelvin] = useState("");

  const updateFromCelsius = (c: string) => {
    setCelsius(c);
    const num = parseFloat(c);
    if (c === "" || isNaN(num)) {
      setFahrenheit("");
      setKelvin("");
      return;
    }
    setFahrenheit(((num * 9) / 5 + 32).toFixed(2));
    setKelvin((num + 273.15).toFixed(2));
  };

  const updateFromFahrenheit = (f: string) => {
    setFahrenheit(f);
    const num = parseFloat(f);
    if (f === "" || isNaN(num)) {
      setCelsius("");
      setKelvin("");
      return;
    }
    setCelsius((((num - 32) * 5) / 9).toFixed(2));
    setKelvin((((num - 32) * 5) / 9 + 273.15).toFixed(2));
  };

  const updateFromKelvin = (k: string) => {
    setKelvin(k);
    const num = parseFloat(k);
    if (k === "" || isNaN(num)) {
      setCelsius("");
      setFahrenheit("");
      return;
    }
    setCelsius((num - 273.15).toFixed(2));
    setFahrenheit(((num - 273.15) * 9 / 5 + 32).toFixed(2));
  };

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <label className="w-24 text-sm font-medium">{t('toolCommon.temperature.celsius')}</label>
          <input
            type="number"
            placeholder="°C"
            value={celsius}
            onChange={(e) => updateFromCelsius(e.target.value)}
            className="flex-1 h-10 px-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <span className="text-sm text-muted-foreground w-8">°C</span>
        </div>
        <div className="flex items-center gap-2">
          <label className="w-24 text-sm font-medium">{t('toolCommon.temperature.fahrenheit')}</label>
          <input
            type="number"
            placeholder="°F"
            value={fahrenheit}
            onChange={(e) => updateFromFahrenheit(e.target.value)}
            className="flex-1 h-10 px-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <span className="text-sm text-muted-foreground w-8">°F</span>
        </div>
        <div className="flex items-center gap-2">
          <label className="w-24 text-sm font-medium">{t('toolCommon.temperature.kelvin')}</label>
          <input
            type="number"
            placeholder={t('toolCommon.temperature.placeholder')}
            value={kelvin}
            onChange={(e) => updateFromKelvin(e.target.value)}
            className="flex-1 h-10 px-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <span className="text-sm text-muted-foreground w-8">K</span>
        </div>
      </div>
    </div>
  );
}
