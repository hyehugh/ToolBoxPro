'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLocale } from "@/lib/i18n/context";

export function DaysBetweenTool() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [result, setResult] = useState<{
    days: number;
    months: number;
    years: number;
    weeks: number;
    weekdays: number;
    weekends: number;
    hours: number;
    minutes: number;
  } | null>(null);
  const { t } = useLocale();

  const calculate = () => {
    if (!startDate || !endDate) return;
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (isNaN(start.getTime()) || isNaN(end.getTime())) return;

    const diffMs = Math.abs(end.getTime() - start.getTime());
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor(diffMs / (1000 * 60));
    const weeks = Math.floor(days / 7);

    // Count weekdays and weekends
    let weekdays = 0;
    let weekends = 0;
    const d = new Date(Math.min(start.getTime(), end.getTime()));
    const endD = new Date(Math.max(start.getTime(), end.getTime()));
    while (d <= endD) {
      const day = d.getDay();
      if (day === 0 || day === 6) weekends++;
      else weekdays++;
      d.setDate(d.getDate() + 1);
    }

    // Approximate months
    const y1 = start.getFullYear(), m1 = start.getMonth(), d1 = start.getDate();
    const y2 = end.getFullYear(), m2 = end.getMonth(), d2 = end.getDate();
    let months = (y2 - y1) * 12 + (m2 - m1);
    if (d2 < d1) months--;
    const years = Math.floor(Math.abs(months) / 12);
    months = Math.abs(months) % 12;

    setResult({ days, months, years, weeks, weekdays, weekends, hours, minutes });
  };

  const setToday = (field: 'start' | 'end') => {
    const today = new Date().toISOString().split('T')[0];
    if (field === 'start') setStartDate(today);
    else setEndDate(today);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs text-muted-foreground">{t('toolCommon.daysBetween.from')}</label>
          <div className="flex gap-2">
            <input
              type="date"
              value={startDate}
              onChange={(e) => { setStartDate(e.target.value); setResult(null); }}
              className="flex-1 h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button variant="outline" size="sm" onClick={() => setToday('start')}>
              {t('toolCommon.daysBetween.today') || 'Today'}
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs text-muted-foreground">{t('toolCommon.daysBetween.to')}</label>
          <div className="flex gap-2">
            <input
              type="date"
              value={endDate}
              onChange={(e) => { setEndDate(e.target.value); setResult(null); }}
              className="flex-1 h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button variant="outline" size="sm" onClick={() => setToday('end')}>
              {t('toolCommon.daysBetween.today') || 'Today'}
            </Button>
          </div>
        </div>
      </div>

      <Button onClick={calculate} disabled={!startDate || !endDate}>
        {t('common.calculate')}
      </Button>

      {result !== null && (
        <div className="rounded-md border bg-card p-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-mono font-bold">{result.days}</div>
              <div className="text-xs text-muted-foreground">{t('toolCommon.daysBetween.days')}</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-bold">{result.months}</div>
              <div className="text-xs text-muted-foreground">{t('toolCommon.daysBetween.months') || 'Months'}</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-bold">{result.years}</div>
              <div className="text-xs text-muted-foreground">{t('toolCommon.daysBetween.years') || 'Years'}</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-bold">{result.weeks}</div>
              <div className="text-xs text-muted-foreground">{t('toolCommon.daysBetween.weeks') || 'Weeks'}</div>
            </div>
          </div>
          <hr className="my-3" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center text-sm">
            <div>
              <span className="font-mono font-bold">{result.hours.toLocaleString()}</span>{' '}
              <span className="text-muted-foreground">{t('toolCommon.daysBetween.hours') || 'hours'}</span>
            </div>
            <div>
              <span className="font-mono font-bold">{result.minutes.toLocaleString()}</span>{' '}
              <span className="text-muted-foreground">{t('toolCommon.daysBetween.minutes') || 'minutes'}</span>
            </div>
            <div className="flex gap-2 justify-center">
              <span className="text-muted-foreground">{result.weekdays} {t('toolCommon.daysBetween.weekdays') || 'weekdays'}</span>
              <span className="text-muted-foreground">· {result.weekends} {t('toolCommon.daysBetween.weekends') || 'weekends'}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
