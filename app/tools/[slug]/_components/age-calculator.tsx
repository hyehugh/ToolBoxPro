'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function diffDate(birth: Date, now: Date) {
  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  let days = now.getDate() - birth.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = (now.getMonth() - 1 + 12) % 12;
    const prevYear = now.getFullYear() - (now.getMonth() === 0 ? 1 : 0);
    days += getDaysInMonth(prevYear, prevMonth);
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
}

function nextBirthday(birth: Date): { days: number; hours: number; minutes: number; seconds: number } | null {
  const now = new Date();
  const next = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());
  if (next <= now) {
    next.setFullYear(next.getFullYear() + 1);
  }
  const diffMs = next.getTime() - now.getTime();
  if (diffMs <= 0) return null;
  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

export function AgeCalculatorTool() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState<{ years: number; months: number; days: number } | null>(null);
  const [showCountdown, setShowCountdown] = useState(false);
  const [countdown, setCountdown] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

  const calculateAge = () => {
    if (!dob) return;
    const birth = new Date(dob);
    if (isNaN(birth.getTime())) return;
    setAge(diffDate(birth, new Date()));
    if (showCountdown) {
      setCountdown(nextBirthday(birth));
    }
  };

  useEffect(() => {
    if (!showCountdown || !dob) return;
    const birth = new Date(dob);
    if (isNaN(birth.getTime())) return;

    const timer = setInterval(() => {
      setCountdown(nextBirthday(birth));
    }, 1000);

    return () => clearInterval(timer);
  }, [showCountdown, dob]);

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <label className="text-xs text-muted-foreground">Date of birth</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => { setDob(e.target.value); setAge(null); }}
          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <div className="flex items-center gap-2">
        <Button onClick={calculateAge} disabled={!dob}>
          Calculate Age
        </Button>
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input
            type="checkbox"
            checked={showCountdown}
            onChange={(e) => setShowCountdown(e.target.checked)}
            className="rounded border-input"
          />
          Show birthday countdown
        </label>
      </div>

      {age !== null && (
        <div className="rounded-md border bg-card p-4 space-y-3">
          <div className="text-center">
            <span className="text-4xl font-mono font-bold">{age.years}</span>
            <span className="text-sm text-muted-foreground ml-1">years</span>
          </div>
          <div className="flex justify-center gap-4 text-sm text-muted-foreground">
            <span>{age.months} months</span>
            <span>{age.days} days</span>
          </div>
        </div>
      )}

      {showCountdown && countdown !== null && age !== null && (
        <div className="rounded-md border bg-card p-4">
          <div className="text-xs text-muted-foreground mb-2">Next birthday in</div>
          <div className="grid grid-cols-4 gap-2 text-center">
            <div>
              <div className="text-2xl font-mono font-bold">{countdown.days}</div>
              <div className="text-xs text-muted-foreground">days</div>
            </div>
            <div>
              <div className="text-2xl font-mono font-bold">{countdown.hours}</div>
              <div className="text-xs text-muted-foreground">hours</div>
            </div>
            <div>
              <div className="text-2xl font-mono font-bold">{countdown.minutes}</div>
              <div className="text-xs text-muted-foreground">min</div>
            </div>
            <div>
              <div className="text-2xl font-mono font-bold">{countdown.seconds}</div>
              <div className="text-xs text-muted-foreground">sec</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
