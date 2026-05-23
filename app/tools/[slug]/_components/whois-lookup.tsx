'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';

interface WhoisData {
  domain?: string;
  registrar?: string;
  creationDate?: string;
  expiryDate?: string;
  updatedDate?: string;
  nameServers?: string[];
  registrantName?: string;
  registrantOrganization?: string;
  status?: string[];
  raw?: string;
  [key: string]: unknown;
}

export function WhoisLookupTool() {
  const [domain, setDomain] = useState('');
  const [data, setData] = useState<WhoisData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const lookup = useCallback(async () => {
    if (!domain.trim()) return;

    const cleanDomain = domain.trim().toLowerCase()
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '')
      .split('/')[0]
      .split('?')[0];

    if (!cleanDomain.includes('.')) {
      setError('Please enter a valid domain (e.g., example.com)');
      return;
    }

    setLoading(true);
    setError('');
    setData(null);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch(
        `https://api.dev-tools.maxy.sh/v1/whois?domain=${encodeURIComponent(cleanDomain)}`,
        { signal: controller.signal }
      );

      if (!res.ok) {
        throw new Error(`WHOIS lookup failed (${res.status})`);
      }

      const json = await res.json();
      setData(json);
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        setError('WHOIS lookup timed out after 15 seconds. Please try again.');
      } else {
        setError(
          err instanceof Error
            ? err.message
            : 'Failed to lookup WHOIS information. Check the domain and try again.'
        );
      }
    } finally {
      clearTimeout(timeoutId);
      setLoading(false);
    }
  }, [domain]);

  const formatDate = (dateStr: string | undefined): string => {
    if (!dateStr) return 'N/A';
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return dateStr;
      return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateStr;
    }
  };

  const getValue = (key: string): string | string[] | undefined => {
    if (!data) return undefined;

    // Try direct property first
    const val = data[key];
    if (val !== undefined) return typeof val === 'string' ? val : undefined;

    // Try common variations
    const variations = [
      key,
      key.replace(/([A-Z])/g, '_$1').toLowerCase(),
      key.toLowerCase(),
      key.charAt(0).toLowerCase() + key.slice(1),
    ];

    for (const v of variations) {
      if (data[v] !== undefined) return typeof data[v] === 'string' ? (data[v] as string) : undefined;
    }

    // Try to find in a nested 'whoisData' or similar
    if (data.whoisData && typeof data.whoisData === 'object') {
      const wd = data.whoisData as Record<string, unknown>;
      for (const v of variations) {
        if (wd[v] !== undefined) return typeof wd[v] === 'string' ? (wd[v] as string) : undefined;
      }
    }

    // Try to find in 'result' or 'data' nested
    for (const nestedKey of ['result', 'data', 'records']) {
      const nested = data[nestedKey];
      if (nested && typeof nested === 'object') {
        const obj = nested as Record<string, unknown>;
        for (const v of variations) {
          if (obj[v] !== undefined) return typeof obj[v] === 'string' ? (obj[v] as string) : undefined;
        }
      }
    }

    return undefined;
  };

  const getNameServers = (): string[] => {
    if (!data) return [];
    // Try various paths for nameservers
    const paths = ['nameServers', 'name_servers', 'nameservers', 'ns', 'nameServer'];
    for (const p of paths) {
      const val = data[p];
      if (Array.isArray(val)) return val;
      if (typeof val === 'string') return val.split(',').map((s) => s.trim());
    }
    // Check nested
    if (data.whoisData && typeof data.whoisData === 'object') {
      const wd = data.whoisData as Record<string, unknown>;
      for (const p of paths) {
        const val = wd[p];
        if (Array.isArray(val)) return val;
        if (typeof val === 'string') return val.split(',').map((s) => s.trim());
      }
    }
    return [];
  };

  const registrar = getValue('registrar') as string | undefined;
  const creationDate = getValue('creationDate') as string | undefined;
  const expiryDate = getValue('expiryDate') as string | undefined;
  const updatedDate = getValue('updatedDate') as string | undefined;
  const nameServers = getNameServers();
  const registrantName = getValue('registrantName') as string | undefined;
  const registrantOrg = getValue('registrantOrganization') as string | undefined;

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <label className="text-xs text-muted-foreground">Domain Name</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={domain}
            onChange={(e) => { setDomain(e.target.value); setError(''); setData(null); }}
            onKeyDown={(e) => { if (e.key === 'Enter') lookup(); }}
            placeholder="example.com"
            className="flex-1 h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <Button onClick={lookup} disabled={loading || !domain.trim()}>
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                Looking up...
              </span>
            ) : (
              'Lookup'
            )}
          </Button>
        </div>
      </div>

      {error && (
        <div className="p-3 rounded-md border border-red-300 bg-red-50 dark:bg-red-950/30 text-sm text-red-600 dark:text-red-400">
          {error}
        </div>
      )}

      {data && !error && (
        <div className="space-y-3">
          <div>
            <h3 className="text-xs text-muted-foreground mb-1">Domain</h3>
            <p className="font-mono text-sm">{data.domain || domain}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-md border bg-card p-3">
              <div className="text-xs text-muted-foreground">Registrar</div>
              <div className="text-sm font-medium">{registrar || 'N/A'}</div>
            </div>
            <div className="rounded-md border bg-card p-3">
              <div className="text-xs text-muted-foreground">Registrant</div>
              <div className="text-sm font-medium">
                {[registrantName, registrantOrg].filter(Boolean).join(' / ') || 'N/A'}
              </div>
            </div>
            <div className="rounded-md border bg-card p-3">
              <div className="text-xs text-muted-foreground">Creation Date</div>
              <div className="text-sm font-medium">{formatDate(creationDate)}</div>
            </div>
            <div className="rounded-md border bg-card p-3">
              <div className="text-xs text-muted-foreground">Expiry Date</div>
              <div className="text-sm font-medium">{formatDate(expiryDate)}</div>
            </div>
            {updatedDate && (
              <div className="rounded-md border bg-card p-3">
                <div className="text-xs text-muted-foreground">Last Updated</div>
                <div className="text-sm font-medium">{formatDate(updatedDate)}</div>
              </div>
            )}
          </div>

          {nameServers.length > 0 && (
            <div className="rounded-md border bg-card p-3">
              <div className="text-xs text-muted-foreground mb-1">Name Servers</div>
              <div className="space-y-1">
                {nameServers.map((ns, i) => (
                  <div key={i} className="text-sm font-mono">{ns}</div>
                ))}
              </div>
            </div>
          )}

          {data.raw && (
            <details className="rounded-md border bg-card p-3">
              <summary className="text-xs text-muted-foreground cursor-pointer">Raw WHOIS Data</summary>
              <pre className="mt-2 text-xs font-mono whitespace-pre-wrap max-h-48 overflow-y-auto">
                {data.raw}
              </pre>
            </details>
          )}
        </div>
      )}

      {!data && !error && !loading && (
        <div className="text-center text-sm text-muted-foreground py-8">
          Enter a domain name and click Lookup to fetch WHOIS information
        </div>
      )}
    </div>
  );
}
