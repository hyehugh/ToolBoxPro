'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

export function CountdownTimerTool() {
  const [targetDate, setTargetDate] = useState('');
  const [targetTime, setTargetTime] = useState('');
  const [remaining, setRemaining] = useState<{
    days: number; hours: number; minutes: number; seconds: number;
  } | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isExpired, setIsExpired] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const targetRef = useRef<number>(0);

  const startCountdown = () => {
    if (!targetDate) return;
    const dateTime = targetTime
      ? new Date(`${targetDate}T${targetTime}`)
      : new Date(`${targetDate}T00:00:00`);
    if (isNaN(dateTime.getTime())) return;

    targetRef.current = dateTime.getTime();
    setIsRunning(true);
    setIsExpired(false);
  };

  const stopCountdown = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
  };

  const resetCountdown = () => {
    stopCountdown();
    setRemaining(null);
    setIsExpired(false);
    setTargetDate('');
    setTargetTime('');
  };

  useEffect(() => {
    if (!isRunning) return;

    const tick = () => {
      const now = Date.now();
      const diff = targetRef.current - now;

      if (diff <= 0) {
        setRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsExpired(true);
        stopCountdown();
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      setRemaining({
        days: Math.floor(totalSeconds / 86400),
        hours: Math.floor((totalSeconds % 86400) / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
      });
    };

    tick();
    intervalRef.current = setInterval(tick, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning]);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="flex-1 space-y-1">
          <label className="text-xs text-muted-foreground">Date</label>
          <input
            type="date"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="flex-1 space-y-1">
          <label className="text-xs text-muted-foreground">Time (optional)</label>
          <input
            type="time"
            value={targetTime}
            onChange={(e) => setTargetTime(e.target.value)}
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button onClick={startCountdown} disabled={!targetDate || isRunning}>
          Start
        </Button>
        <Button variant="outline" onClick={stopCountdown} disabled={!isRunning}>
          Stop
        </Button>
        <Button variant="outline" onClick={resetCountdown}>
          Reset
        </Button>
      </div>

      {isExpired && (
        <div className="rounded-md border bg-card p-6 text-center">
          <span className="text-2xl font-bold">Time&apos;s up!</span>
        </div>
      )}

      {remaining !== null && !isExpired && (
        <div className="rounded-md border bg-card p-4">
          <div className="grid grid-cols-4 gap-2 text-center">
            <div>
              <div className="text-3xl font-mono font-bold">
                {String(remaining.days).padStart(2, '0')}
              </div>
              <div className="text-xs text-muted-foreground">days</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-bold">
                {String(remaining.hours).padStart(2, '0')}
              </div>
              <div className="text-xs text-muted-foreground">hours</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-bold">
                {String(remaining.minutes).padStart(2, '0')}
              </div>
              <div className="text-xs text-muted-foreground">min</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-bold">
                {String(remaining.seconds).padStart(2, '0')}
              </div>
              <div className="text-xs text-muted-foreground">sec</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
