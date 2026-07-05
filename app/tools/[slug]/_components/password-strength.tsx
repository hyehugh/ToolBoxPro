'use client';

import { useState, useMemo } from 'react';
import { useLocale } from "@/lib/i18n/context";

const COMMON_PATTERNS = [
  'password', '123456', '12345678', '123456789', 'qwerty', 'abc123',
  'monkey', 'letmein', 'dragon', '111111', 'baseball', 'iloveyou',
  'trustno1', 'sunshine', 'master', 'welcome', 'shadow', 'ashley',
  'football', 'jesus', 'michael', 'ninja', 'mustang', 'password1',
  'admin', '1234', '12345', 'passw0rd', 'qwerty123', '1q2w3e4r',
];

interface StrengthResult {
  score: number;
  label: string;
  color: string;
  bgColor: string;
  timeToCrack: string;
  details: {
    length: boolean;
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
    noCommonPattern: boolean;
  };
}

function analyzePassword(password: string): StrengthResult {
  const details = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    numbers: /[0-9]/.test(password),
    symbols: /[^A-Za-z0-9]/.test(password),
    noCommonPattern: !COMMON_PATTERNS.some((p) =>
      password.toLowerCase().includes(p)
    ),
  };

  let score = 0;
  if (details.length) score += 25;
  if (details.uppercase) score += 15;
  if (details.lowercase) score += 15;
  if (details.numbers) score += 15;
  if (details.symbols) score += 15;
  if (details.noCommonPattern) score += 15;

  // Bonus for length
  if (password.length >= 12) score += 10;
  if (password.length >= 16) score += 10;
  if (password.length >= 20) score += 10;

  // Cap at 100
  score = Math.min(score, 100);

  let label: string;
  let color: string;
  let bgColor: string;
  if (score < 25) {
    label = 'weak';
    color = 'text-red-500';
    bgColor = 'bg-red-500';
  } else if (score < 50) {
    label = 'medium';
    color = 'text-orange-500';
    bgColor = 'bg-orange-500';
  } else if (score < 75) {
    label = 'strong';
    color = 'text-yellow-500';
    bgColor = 'bg-yellow-500';
  } else {
    label = 'veryStrong';
    color = 'text-green-500';
    bgColor = 'bg-green-500';
  }

  // Time to crack estimate
  let entropy = 0;
  const charSets = [];
  if (/[a-z]/.test(password)) charSets.push(26);
  if (/[A-Z]/.test(password)) charSets.push(26);
  if (/[0-9]/.test(password)) charSets.push(10);
  if (/[^A-Za-z0-9]/.test(password)) charSets.push(33);
  const charsetSize = charSets.reduce((a, b) => a + b, 0) || 1;
  entropy = Math.log2(charsetSize) * password.length;

  const guessesPerSecond = 1e9; // 1 billion guesses/sec
  const seconds = Math.pow(2, entropy) / guessesPerSecond;

  let timeToCrack: string;
  if (seconds < 1) timeToCrack = 'Instantly';
  else if (seconds < 60) timeToCrack = `${Math.round(seconds)} seconds`;
  else if (seconds < 3600) timeToCrack = `${Math.round(seconds / 60)} minutes`;
  else if (seconds < 86400) timeToCrack = `${Math.round(seconds / 3600)} hours`;
  else if (seconds < 2592000) timeToCrack = `${Math.round(seconds / 86400)} days`;
  else if (seconds < 31536000) timeToCrack = `${Math.round(seconds / 2592000)} months`;
  else if (seconds < 315360000) timeToCrack = `${(seconds / 31536000).toFixed(1)} years`;
  else if (seconds < 3.1536e11) timeToCrack = `${Math.round(seconds / 31536000)} years`;
  else timeToCrack = 'Centuries';

  return { score, label, color, bgColor, timeToCrack, details };
}

export function PasswordStrengthTool() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { locale, t } = useLocale();
  const isZh = locale === "zh";

  const result = useMemo(() => analyzePassword(password), [password]);

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <label className="text-xs text-muted-foreground">{isZh ? "输入密码以分析强度" : "Enter password to analyze"}</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t('toolCommon.password.placeholder')}
            className="w-full h-10 px-3 pr-10 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-muted-foreground hover:text-foreground"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>

      {password && (
        <>
          {/* Score bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className={`font-semibold ${result.color}`}>{t('common.' + result.label)}</span>
              <span className="text-muted-foreground">{result.score}/100</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-secondary overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${result.bgColor}`}
                style={{ width: `${result.score}%` }}
              />
            </div>
          </div>

          {/* Time to crack */}
          <div className="rounded-md border bg-card p-3 text-center">
            <span className="text-xs text-muted-foreground">Estimated time to crack</span>
            <div className="text-lg font-mono font-bold">{result.timeToCrack}</div>
          </div>

          {/* Criteria checklist */}
          <div className="space-y-1.5 text-sm">
            {[
              { key: 'length' as const, label: 'At least 8 characters' },
              { key: 'uppercase' as const, label: 'Uppercase letter (A-Z)' },
              { key: 'lowercase' as const, label: 'Lowercase letter (a-z)' },
              { key: 'numbers' as const, label: 'Number (0-9)' },
              { key: 'symbols' as const, label: 'Symbol (!@#$%^&*)' },
              { key: 'noCommonPattern' as const, label: 'Not a common password pattern' },
            ].map(({ key, label }) => (
              <div key={key} className="flex items-center gap-2">
                <span className={result.details[key] ? 'text-green-500' : 'text-red-400'}>
                  {result.details[key] ? '✓' : '✗'}
                </span>
                <span className={result.details[key] ? '' : 'text-muted-foreground'}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </>
      )}

      {!password && (
        <div className="text-center text-sm text-muted-foreground py-8">
          Enter a password above to check its strength
        </div>
      )}
    </div>
  );
}
