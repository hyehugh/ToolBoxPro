'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/lib/i18n/context';

interface DnsRecord {
  type: string;
  name: string;
  data: string;
  ttl: number;
}

interface DnsResult {
  domain: string;
  records: DnsRecord[];
  error?: string;
}

const RECORD_TYPES = ['A', 'AAAA', 'MX', 'NS', 'TXT', 'CNAME', 'SOA'] as const;

export function DnsLookupTool() {
  const { t } = useLocale();
  const [domain, setDomain] = useState('');
  const [result, setResult] = useState<DnsResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const lookupDomain = async () => {
    const domainName = domain.trim();
    if (!domainName) return;
    setLoading(true);
    setError('');
    setResult(null);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const allRecords: DnsRecord[] = [];
    let hasError = false;

    for (const type of RECORD_TYPES) {
      try {
        const url = `https://dns.google/resolve?name=${encodeURIComponent(domainName)}&type=${type}`;
        const response = await fetch(url, { signal: controller.signal });
        const data = await response.json();

        if (data.Status === 0 && data.Answer) {
          for (const answer of data.Answer) {
            // Deduplicate
            allRecords.push({
              type: answer.type === 1 ? 'A' :
                    answer.type === 28 ? 'AAAA' :
                    answer.type === 15 ? 'MX' :
                    answer.type === 2 ? 'NS' :
                    answer.type === 16 ? 'TXT' :
                    answer.type === 5 ? 'CNAME' :
                    answer.type === 6 ? 'SOA' :
                    `TYPE${answer.type}`,
              name: answer.name,
              data: answer.data,
              ttl: answer.TTL,
            });
          }
        }
      } catch (e) {
        if ((e as Error).name === 'AbortError') {
          hasError = true;
          break;
        }
        hasError = true;
      }
    }

    clearTimeout(timeoutId);

    if (allRecords.length === 0 && hasError) {
      setError(t('toolCommon.dns.timeout'));
    }

    setResult({
      domain: domainName,
      records: allRecords,
    });
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') lookupDomain();
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <label className="text-xs text-muted-foreground">{t('toolCommon.dns.domain')}</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="example.com"
            className="flex-1 h-10 px-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <Button onClick={lookupDomain} disabled={loading || !domain.trim()}>
            {loading ? t('common.processing') : t('toolCommon.dns.lookup')}
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
          <div className="rounded-md border bg-card p-3">
            <p className="text-sm">
              <span className="text-muted-foreground">{t('toolCommon.dns.domain')}:</span>{' '}
              <span className="font-mono font-medium">{result.domain}</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {t('toolCommon.dns.recordsFound', { count: result.records.length })}
            </p>
          </div>

          {result.records.length > 0 ? (
            <div className="rounded-md border overflow-hidden">
              <div className="max-h-96 overflow-y-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted sticky top-0">
                    <tr>
                      <th className="text-left px-3 py-2 font-medium text-muted-foreground text-xs uppercase tracking-wider">
                        {t('common.type')}
                      </th>
                      <th className="text-left px-3 py-2 font-medium text-muted-foreground text-xs uppercase tracking-wider">
                        {t('common.text')}
                      </th>
                      <th className="text-left px-3 py-2 font-medium text-muted-foreground text-xs uppercase tracking-wider">
                        {t('common.value')}
                      </th>
                      <th className="text-right px-3 py-2 font-medium text-muted-foreground text-xs uppercase tracking-wider">
                        TTL
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {result.records.map((record, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                        <td className="px-3 py-2">
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-medium ${
                              record.type === 'A'
                                ? 'bg-blue-100 text-blue-700'
                                : record.type === 'AAAA'
                                ? 'bg-purple-100 text-purple-700'
                                : record.type === 'MX'
                                ? 'bg-green-100 text-green-700'
                                : record.type === 'NS'
                                ? 'bg-amber-100 text-amber-700'
                                : record.type === 'TXT'
                                ? 'bg-pink-100 text-pink-700'
                                : record.type === 'CNAME'
                                ? 'bg-cyan-100 text-cyan-700'
                                : record.type === 'SOA'
                                ? 'bg-gray-100 text-gray-700'
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {record.type}
                          </span>
                        </td>
                        <td className="px-3 py-2 font-mono text-xs">{record.name}</td>
                        <td className="px-3 py-2 font-mono text-xs break-all max-w-xs">
                          <span className="group cursor-pointer" onClick={() => copyToClipboard(record.data)} title={t('common.clickToCopy')}>
                            {record.data}
                            <span className="ml-1 opacity-0 group-hover:opacity-50 text-muted-foreground">📋</span>
                          </span>
                        </td>
                        <td className="px-3 py-2 text-xs text-muted-foreground text-right">
                          {record.ttl}s
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="rounded-md border bg-card p-4 text-center text-sm text-muted-foreground">
              {t('toolCommon.dns.noRecords')}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
