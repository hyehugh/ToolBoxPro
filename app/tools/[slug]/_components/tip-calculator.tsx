'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/lib/i18n/context';

export function TipCalculatorTool() {
  const { t } = useLocale();
  const [bill, setBill] = useState('');
  const [tipPercent, setTipPercent] = useState(15);
  const [split, setSplit] = useState('1');
  const [calculated, setCalculated] = useState(false);

  const billNum = parseFloat(bill) || 0;
  const splitNum = Math.max(1, parseInt(split) || 1);
  const tipAmount = billNum * (tipPercent / 100);
  const total = billNum + tipAmount;
  const perPerson = total / splitNum;

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <label className="text-xs text-muted-foreground">{t('toolCommon.tip.billAmount')}</label>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          placeholder="0.00"
          className="w-full h-10 px-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs text-muted-foreground">
          {t('toolCommon.tip.tipPercent')}: {tipPercent}%
        </label>
        <input
          type="range"
          min={10}
          max={30}
          value={tipPercent}
          onChange={(e) => setTipPercent(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>10%</span>
          <span>30%</span>
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs text-muted-foreground">{t('toolCommon.tip.split')}</label>
        <input
          type="number"
          min={1}
          value={split}
          onChange={(e) => setSplit(e.target.value)}
          className="w-full h-10 px-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <Button onClick={() => setCalculated(true)} disabled={!bill}>
        {t('common.calculate')}
      </Button>

      {calculated && billNum > 0 && (
        <div className="rounded-md border bg-card p-4 space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">{t('toolCommon.tip.tipAmount')}</span>
            <span className="text-lg font-mono font-bold">
              ${tipAmount.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">{t('toolCommon.tip.total')}</span>
            <span className="text-lg font-mono font-bold">
              ${total.toFixed(2)}
            </span>
          </div>
          {splitNum > 1 && (
            <>
              <hr className="border-muted" />
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  {t('toolCommon.tip.perPerson')} ({splitNum})
                </span>
                <span className="text-lg font-mono font-bold">
                  ${perPerson.toFixed(2)}
                </span>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
