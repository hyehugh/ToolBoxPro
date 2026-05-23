'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

export function DecisionMakerTool() {
  const [optionsText, setOptionsText] = useState('');
  const [winner, setWinner] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [currentDisplay, setCurrentDisplay] = useState('');
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const cycleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getOptions = () => {
    return optionsText
      .split('\n')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  };

  const pick = () => {
    const options = getOptions();
    if (options.length < 2) return;

    setWinner(null);
    setIsRunning(true);

    const speed = 60; // ms per cycle
    let cycles = 0;
    const totalCycles = 15 + Math.floor(Math.random() * 10); // 15-25 cycles

    intervalRef.current = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * options.length);
      setCurrentDisplay(options[randomIndex]);
      cycles++;

      if (cycles >= totalCycles) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }

        // Final pick
        cycleTimeoutRef.current = setTimeout(() => {
          const finalIndex = Math.floor(Math.random() * options.length);
          setCurrentDisplay(options[finalIndex]);
          setWinner(options[finalIndex]);
          setIsRunning(false);
        }, 200);
      }
    }, speed);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (cycleTimeoutRef.current) clearTimeout(cycleTimeoutRef.current);
    };
  }, []);

  const options = getOptions();
  const canPick = options.length >= 2;

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <label className="text-xs text-muted-foreground">
          Options (one per line)
        </label>
        <textarea
          value={optionsText}
          onChange={(e) => {
            setOptionsText(e.target.value);
            setWinner(null);
          }}
          placeholder="e.g.&#10;Pizza&#10;Sushi&#10;Burgers&#10;Tacos"
          rows={6}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <div className="text-xs text-muted-foreground">
          {options.length} option{options.length !== 1 ? 's' : ''}
          {!canPick && options.length > 0 && ' — need at least 2'}
        </div>
      </div>

      <Button onClick={pick} disabled={!canPick || isRunning}>
        {isRunning ? 'Picking...' : 'Pick One!'}
      </Button>

      {(isRunning || winner !== null) && (
        <div className="rounded-md border bg-card p-6 text-center">
          {isRunning && (
            <div className="text-3xl font-mono font-bold animate-pulse">
              {currentDisplay}
            </div>
          )}
          {winner !== null && !isRunning && (
            <div className="space-y-1">
              <div className="text-xs text-muted-foreground">The winner is</div>
              <div className="text-4xl font-bold text-green-500">
                {winner}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
