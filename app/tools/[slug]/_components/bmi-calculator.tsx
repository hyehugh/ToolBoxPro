'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLocale } from "@/lib/i18n/context";

function getBMICategory(bmi: number): { label: string; color: string } {
  if (bmi < 18.5) return { label: 'Underweight', color: 'text-blue-500' };
  if (bmi < 25) return { label: 'Normal', color: 'text-green-500' };
  if (bmi < 30) return { label: 'Overweight', color: 'text-yellow-500' };
  return { label: 'Obese', color: 'text-red-500' };
}

export function BmiCalculatorTool() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const { t } = useLocale();

  const calculate = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) return;
    const hMeters = h / 100;
    const value = w / (hMeters * hMeters);
    setBmi(Math.round(value * 100) / 100);
  };

  const category = bmi !== null ? getBMICategory(bmi) : null;

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="flex-1 space-y-1">
          <label className="text-xs text-muted-foreground">{t('toolCommon.bmi.height')} (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g. 175"
            className="w-full h-10 px-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="flex-1 space-y-1">
          <label className="text-xs text-muted-foreground">{t('toolCommon.bmi.weight')} (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="e.g. 70"
            className="w-full h-10 px-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      <Button onClick={calculate} disabled={!height || !weight}>
        {t('common.calculate')} BMI
      </Button>

      {bmi !== null && (
        <div className="rounded-md border bg-card p-4 space-y-3">
          <div className="text-center">
            <span className="text-4xl font-mono font-bold">{bmi}</span>
            <span className="text-sm text-muted-foreground ml-1">kg/m²</span>
          </div>
          {category && (
            <div className={`text-center text-lg font-semibold ${category.color}`}>
              {category.label === 'Underweight' ? t('toolCommon.bmi.underweight') :
               category.label === 'Normal' ? t('toolCommon.bmi.normal') :
               category.label === 'Overweight' ? t('toolCommon.bmi.overweight') :
               t('toolCommon.bmi.obese')}
            </div>
          )}
          <div className="h-3 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${Math.min(100, (bmi / 40) * 100)}%`,
                background:
                  bmi < 18.5 ? '#3b82f6' :
                  bmi < 25 ? '#22c55e' :
                  bmi < 30 ? '#eab308' :
                  '#ef4444',
              }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-muted-foreground">
            <span>0</span>
            <span>18.5</span>
            <span>25</span>
            <span>30</span>
            <span>40+</span>
          </div>
        </div>
      )}
    </div>
  );
}
