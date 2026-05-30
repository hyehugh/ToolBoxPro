'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/lib/i18n/context';

interface RdapEntity {
  objectClassName?: string;
  roles?: string[];
  vcardArray?: [string, Array<[string, Record<string, unknown>, string, string]>];
  handle?: string;
  entities?: RdapEntity[];
}

interface RdapEvent {
  eventAction: string;
  eventDate: string;
}

interface RdapNameserver {
  ldhName: string;
}

interface RdapResponse {
  ldhName?: string;
  status?: string[];
  entities?: RdapEntity[];
  events?: RdapEvent[];
  nameservers?: RdapNameserver[];
  raw?: string;
}

interface WhoisData {
  domain: string;
  registrar: string;
  creationDate: string;
  expiryDate: string;
  updatedDate: string;
  nameServers: string[];
  status: string[];
  registrantOrg: string;
  raw: string;
}

function extractVcardFn(entity: RdapEntity): string {
  if (!entity.vcardArray || entity.vcardArray[0] !== 'vcard') return '';
  const entries = entity.vcardArray[1];
  for (const entry of entries) {
    if (entry[0] === 'fn') return entry[3] || '';
  }
  return '';
}

function parseRdap(json: RdapResponse, domain: string): WhoisData {
  // Extract registrar
  let registrar = '';
  if (json.entities) {
    for (const entity of json.entities) {
      if (entity.roles?.includes('registrar')) {
        registrar = extractVcardFn(entity);
        break;
      }
    }
  }

  // Extract events
  let creationDate = '';
  let expiryDate = '';
  let updatedDate = '';
  if (json.events) {
    for (const event of json.events) {
      if (event.eventAction === 'registration') creationDate = event.eventDate;
      if (event.eventAction === 'expiration') expiryDate = event.eventDate;
      if (event.eventAction === 'last changed') updatedDate = event.eventDate;
    }
  }

  // Extract nameservers
  const nameServers = (json.nameservers || []).map((ns) => ns.ldhName || '');

  // Extract registrant org
  let registrantOrg = '';
  if (json.entities) {
    for (const entity of json.entities) {
      if (entity.roles?.includes('registrant')) {
        registrantOrg = extractVcardFn(entity);
        break;
      }
      // Also check nested entities
      if (entity.entities) {
        for (const nested of entity.entities) {
          if (nested.roles?.includes('registrant')) {
            registrantOrg = extractVcardFn(nested);
            break;
          }
        }
      }
    }
  }

  return {
    domain: json.ldhName || domain,
    registrar,
    creationDate,
    expiryDate,
    updatedDate,
    nameServers,
    status: json.status || [],
    registrantOrg,
    raw: JSON.stringify(json, null, 2),
  };
}

export function WhoisLookupTool() {
  const { t } = useLocale();
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
        `/api/whois?domain=${encodeURIComponent(cleanDomain)}`,
        { signal: controller.signal }
      );

      if (res.status === 404) {
        throw new Error(`Domain "${cleanDomain}" not found in RDAP database.`);
      }

      if (!res.ok) {
        throw new Error(`RDAP lookup failed (${res.status})`);
      }

      const json: RdapResponse = await res.json();
      setData(parseRdap(json, cleanDomain));
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        setError('Lookup timed out after 15 seconds. Please try again.');
      } else {
        setError(
          err instanceof Error
            ? err.message
            : 'Failed to lookup domain information. Check the domain and try again.'
        );
      }
    } finally {
      clearTimeout(timeoutId);
      setLoading(false);
    }
  }, [domain]);

  const formatDate = (dateStr: string): string => {
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

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <label className="text-xs text-muted-foreground">{t('toolCommon.whois.domain')}</label>
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
                {t('common.loading')}
              </span>
            ) : (
              t('toolCommon.whois.lookup')
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
            <h3 className="text-xs text-muted-foreground mb-1">{t('toolCommon.whois.domain')}</h3>
            <p className="font-mono text-sm">{data.domain}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-md border bg-card p-3">
              <div className="text-xs text-muted-foreground">{t('toolCommon.whois.registrar')}</div>
              <div className="text-sm font-medium">{data.registrar || 'N/A'}</div>
            </div>
            {data.registrantOrg && (
              <div className="rounded-md border bg-card p-3">
                <div className="text-xs text-muted-foreground">Registrant</div>
                <div className="text-sm font-medium">{data.registrantOrg}</div>
              </div>
            )}
            <div className="rounded-md border bg-card p-3">
              <div className="text-xs text-muted-foreground">{t('toolCommon.whois.created')}</div>
              <div className="text-sm font-medium">{formatDate(data.creationDate)}</div>
            </div>
            <div className="rounded-md border bg-card p-3">
              <div className="text-xs text-muted-foreground">{t('toolCommon.whois.expires')}</div>
              <div className="text-sm font-medium">{formatDate(data.expiryDate)}</div>
            </div>
            {data.updatedDate && (
              <div className="rounded-md border bg-card p-3">
                <div className="text-xs text-muted-foreground">Last Updated</div>
                <div className="text-sm font-medium">{formatDate(data.updatedDate)}</div>
              </div>
            )}
          </div>

          {data.nameServers.length > 0 && (
            <div className="rounded-md border bg-card p-3">
              <div className="text-xs text-muted-foreground mb-1">Name Servers</div>
              <div className="space-y-1">
                {data.nameServers.map((ns, i) => (
                  <div key={i} className="text-sm font-mono">{ns}</div>
                ))}
              </div>
            </div>
          )}

          {data.status.length > 0 && (
            <div className="rounded-md border bg-card p-3">
              <div className="text-xs text-muted-foreground mb-1">Status</div>
              <div className="flex flex-wrap gap-1">
                {data.status.map((s, i) => (
                  <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-muted">{s}</span>
                ))}
              </div>
            </div>
          )}

          <details className="rounded-md border bg-card p-3">
            <summary className="text-xs text-muted-foreground cursor-pointer">Raw RDAP Data</summary>
            <pre className="mt-2 text-xs font-mono whitespace-pre-wrap max-h-48 overflow-y-auto">
              {data.raw}
            </pre>
          </details>
        </div>
      )}

      {!data && !error && !loading && (
        <div className="text-center text-sm text-muted-foreground py-8">
          {t('common.input')} {t('toolCommon.whois.domain')} {t('common.to')} {t('toolCommon.whois.lookup')}
        </div>
      )}
    </div>
  );
}
