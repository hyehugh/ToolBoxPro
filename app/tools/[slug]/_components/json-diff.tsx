'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLocale } from "@/lib/i18n/context";

interface DiffEntry {
  key: string;
  type: 'added' | 'removed' | 'changed';
  oldValue?: string;
  newValue?: string;
}

function flattenKeys(obj: unknown, prefix = ''): Record<string, string> {
  const result: Record<string, string> = {};
  if (obj === null || obj === undefined) {
    result[prefix || '(root)'] = String(obj);
    return result;
  }
  if (typeof obj !== 'object') {
    result[prefix || '(root)'] = JSON.stringify(obj);
    return result;
  }
  if (Array.isArray(obj)) {
    obj.forEach((item, idx) => {
      const key = `${prefix}[${idx}]`;
      if (typeof item === 'object' && item !== null) {
        Object.assign(result, flattenKeys(item, key));
      } else {
        result[key] = JSON.stringify(item);
      }
    });
    return result;
  }
  for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
    const fullKey = prefix ? `${prefix}.${k}` : k;
    if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
      Object.assign(result, flattenKeys(v, fullKey));
    } else if (Array.isArray(v)) {
      v.forEach((item, idx) => {
        const arrKey = `${fullKey}[${idx}]`;
        if (typeof item === 'object' && item !== null) {
          Object.assign(result, flattenKeys(item, arrKey));
        } else {
          result[arrKey] = JSON.stringify(item);
        }
      });
    } else {
      result[fullKey] = JSON.stringify(v);
    }
  }
  return result;
}

export function JsonDiffTool() {
  const { t } = useLocale();
  const [left, setLeft] = useState('');
  const [right, setRight] = useState('');
  const [diffs, setDiffs] = useState<DiffEntry[]>([]);
  const [error, setError] = useState('');

  const handleCompare = () => {
    setError('');
    setDiffs([]);
    try {
      const leftParsed = JSON.parse(left);
      const rightParsed = JSON.parse(right);

      const leftKeys = flattenKeys(leftParsed);
      const rightKeys = flattenKeys(rightParsed);

      const allKeys = new Set([...Object.keys(leftKeys), ...Object.keys(rightKeys)]);
      const results: DiffEntry[] = [];

      for (const key of allKeys) {
        if (key in leftKeys && !(key in rightKeys)) {
          results.push({ key, type: 'removed', oldValue: leftKeys[key] });
        } else if (!(key in leftKeys) && key in rightKeys) {
          results.push({ key, type: 'added', newValue: rightKeys[key] });
        } else if (leftKeys[key] !== rightKeys[key]) {
          results.push({
            key,
            type: 'changed',
            oldValue: leftKeys[key],
            newValue: rightKeys[key],
          });
        }
      }

      // Sort: removed first, then changed, then added
      results.sort((a, b) => {
        const order = { removed: 0, changed: 1, added: 2 };
        return order[a.type] - order[b.type] || a.key.localeCompare(b.key);
      });

      setDiffs(results);
    } catch (e) {
      setError(e instanceof SyntaxError ? t('toolCommon.jsonDiff.invalidJson') : t('toolCommon.jsonDiff.compareFailed'));
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{t('toolCommon.jsonDiff.title')}</h2>
      <p className="text-sm text-muted-foreground">
        {t('toolCommon.jsonDiff.description')}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">{t('toolCommon.jsonDiff.left')}</label>
          <textarea
            className="w-full h-48 p-3 border rounded-md resize-y font-mono text-sm"
            placeholder='{"key": "value"}'
            value={left}
            onChange={(e) => setLeft(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{t('toolCommon.jsonDiff.right')}</label>
          <textarea
            className="w-full h-48 p-3 border rounded-md resize-y font-mono text-sm"
            placeholder='{"key": "new_value"}'
            value={right}
            onChange={(e) => setRight(e.target.value)}
          />
        </div>
      </div>
      <Button onClick={handleCompare}>{t('toolCommon.jsonDiff.compare')}</Button>
      {error && (
        <div className="p-3 border border-red-300 bg-red-50 rounded-md text-sm text-red-700">
          {error}
        </div>
      )}
      {diffs.length > 0 && !error && (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-2 text-left">{t('toolCommon.jsonDiff.status')}</th>
                <th className="border p-2 text-left">Key</th>
                <th className="border p-2 text-left">{t('toolCommon.jsonDiff.oldValue')}</th>
                <th className="border p-2 text-left">{t('toolCommon.jsonDiff.newValue')}</th>
              </tr>
            </thead>
            <tbody>
              {diffs.length === 0 && (
                <tr>
                  <td className="border p-2 text-green-600 font-medium" colSpan={4}>
                    ✓ {t('toolCommon.jsonDiff.noDifferences')}
                  </td>
                </tr>
              )}
              {diffs.map((d, i) => (
                <tr
                  key={i}
                  className={
                    d.type === 'added'
                      ? 'bg-green-50'
                      : d.type === 'removed'
                        ? 'bg-red-50'
                        : 'bg-yellow-50'
                  }
                >
                  <td className="border p-2 font-medium">
                    {d.type === 'added' && (
                      <span className="text-green-700">{t('toolCommon.jsonDiff.added')}</span>
                    )}
                    {d.type === 'removed' && (
                      <span className="text-red-700">{t('toolCommon.jsonDiff.removed')}</span>
                    )}
                    {d.type === 'changed' && (
                      <span className="text-yellow-700">{t('toolCommon.jsonDiff.changed')}</span>
                    )}
                  </td>
                  <td className="border p-2 font-mono text-xs">{d.key}</td>
                  <td className="border p-2 font-mono text-xs max-w-xs truncate">
                    {d.oldValue ?? <span className="text-muted-foreground">—</span>}
                  </td>
                  <td className="border p-2 font-mono text-xs max-w-xs truncate">
                    {d.newValue ?? <span className="text-muted-foreground">—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">
            {t('toolCommon.jsonDiff.total')}: {diffs.length} {t('toolCommon.jsonDiff.differences')}
          </p>
        </div>
      )}
      {diffs.length === 0 && !error && left && right && (
        <div className="p-3 border border-green-300 bg-green-50 rounded-md text-sm text-green-700">
          ✓ {t('toolCommon.jsonDiff.identical')}
        </div>
      )}
    </div>
  );
}
