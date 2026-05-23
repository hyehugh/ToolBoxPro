'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface HeaderEntry {
  name: string;
  value: string;
}

interface CheckResult {
  status: number;
  statusText: string;
  headers: HeaderEntry[];
  redirected: boolean;
  finalUrl: string;
  timing: number;
  error?: string;
}

export function SslCheckerTool() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<CheckResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const checkUrl = async () => {
    if (!url.trim()) return;
    setLoading(true);
    setError('');
    setResult(null);

    let targetUrl = url.trim();
    if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
      targetUrl = 'https://' + targetUrl;
    }

    const startTime = performance.now();

    try {
      const response = await fetch(targetUrl, {
        method: 'GET',
        mode: 'cors',
      });

      const endTime = performance.now();

      const headers: HeaderEntry[] = [];
      response.headers.forEach((value, name) => {
        headers.push({ name, value });
      });

      // Sort headers alphabetically
      headers.sort((a, b) => a.name.localeCompare(b.name));

      setResult({
        status: response.status,
        statusText: response.statusText,
        headers,
        redirected: response.redirected,
        finalUrl: response.url,
        timing: Math.round(endTime - startTime),
      });
    } catch (err) {
      setError(
        err instanceof TypeError
          ? 'Network error. Check the URL or CORS policy may block the request.'
          : 'Failed to fetch URL.'
      );
    }
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') checkUrl();
  };

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <label className="text-xs text-muted-foreground">Enter URL</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="https://example.com"
            className="flex-1 h-10 px-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <Button onClick={checkUrl} disabled={loading || !url.trim()}>
            {loading ? 'Checking...' : 'Check'}
          </Button>
        </div>
      </div>

      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 p-3">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      {result && (
        <div className="space-y-3">
          {/* Status summary */}
          <div className="rounded-md border bg-card p-4 space-y-2">
            <div className="flex items-center gap-3">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  result.status < 300
                    ? 'bg-green-100 text-green-700'
                    : result.status < 400
                    ? 'bg-blue-100 text-blue-700'
                    : result.status < 500
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {result.status} {result.statusText}
              </span>
              <span className="text-xs text-muted-foreground">{result.timing}ms</span>
            </div>
            {result.redirected && (
              <div className="text-xs text-muted-foreground">
                <span className="font-medium">Redirected to:</span>{' '}
                <span className="break-all">{result.finalUrl}</span>
              </div>
            )}
          </div>

          {/* Response headers table */}
          <div>
            <h3 className="text-sm font-medium mb-2">Response Headers</h3>
            <div className="rounded-md border overflow-hidden">
              <div className="max-h-80 overflow-y-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted sticky top-0">
                    <tr>
                      <th className="text-left px-3 py-2 font-medium text-muted-foreground text-xs uppercase tracking-wider">
                        Header
                      </th>
                      <th className="text-left px-3 py-2 font-medium text-muted-foreground text-xs uppercase tracking-wider">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {result.headers.map((h, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                        <td className="px-3 py-2 font-mono text-xs whitespace-nowrap text-primary">
                          {h.name}
                        </td>
                        <td className="px-3 py-2 font-mono text-xs break-all">
                          {h.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
