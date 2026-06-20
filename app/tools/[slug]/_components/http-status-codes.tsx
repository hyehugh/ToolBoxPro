'use client';

import { useState } from 'react';
import { useLocale } from '@/lib/i18n/context';

interface StatusCode {
  code: number;
  name: string;
  description: string;
}

const STATUS_CODES: StatusCode[] = [
  // 1xx Informational
  { code: 100, name: 'Continue', description: 'The server has received the request headers and the client should proceed to send the request body.' },
  { code: 101, name: 'Switching Protocols', description: 'The requester has asked the server to switch protocols and the server has agreed.' },
  { code: 102, name: 'Processing', description: 'The server has received and is processing the request, but no response is available yet.' },
  { code: 103, name: 'Early Hints', description: 'Used to return some response headers before the final HTTP message.' },

  // 2xx Success
  { code: 200, name: 'OK', description: 'Standard response for successful HTTP requests.' },
  { code: 201, name: 'Created', description: 'The request has been fulfilled and a new resource has been created.' },
  { code: 202, name: 'Accepted', description: 'The request has been accepted for processing, but processing is not yet complete.' },
  { code: 203, name: 'Non-Authoritative Information', description: 'The server is a transforming proxy that received a 200 OK from its origin.' },
  { code: 204, name: 'No Content', description: 'The server successfully processed the request and is not returning any content.' },
  { code: 205, name: 'Reset Content', description: 'The server successfully processed the request, asks that the requester reset its document view.' },
  { code: 206, name: 'Partial Content', description: 'The server is delivering only part of the resource due to a range header sent by the client.' },

  // 3xx Redirection
  { code: 300, name: 'Multiple Choices', description: 'Indicates multiple options for the resource that the client may follow.' },
  { code: 301, name: 'Moved Permanently', description: 'The requested resource has been permanently moved to a new URL.' },
  { code: 302, name: 'Found', description: 'The requested resource resides temporarily under a different URL.' },
  { code: 303, name: 'See Other', description: 'The response to the request can be found under another URL using a GET method.' },
  { code: 304, name: 'Not Modified', description: 'Indicates the resource has not been modified since the last request.' },
  { code: 307, name: 'Temporary Redirect', description: 'The requested resource resides temporarily under a different URL.' },
  { code: 308, name: 'Permanent Redirect', description: 'The requested resource has been permanently moved to a new URL.' },

  // 4xx Client Errors
  { code: 400, name: 'Bad Request', description: 'The server cannot process the request due to a client error (malformed syntax, etc.).' },
  { code: 401, name: 'Unauthorized', description: 'Authentication is required and has failed or has not been provided.' },
  { code: 402, name: 'Payment Required', description: 'Reserved for future use (originally intended for digital payment systems).' },
  { code: 403, name: 'Forbidden', description: 'The server understood the request but refuses to authorize it.' },
  { code: 404, name: 'Not Found', description: 'The requested resource could not be found on the server.' },
  { code: 405, name: 'Method Not Allowed', description: 'The request method is not supported for the requested resource.' },
  { code: 406, name: 'Not Acceptable', description: 'The server cannot produce a response matching the Accept headers.' },
  { code: 407, name: 'Proxy Authentication Required', description: 'The client must first authenticate itself with the proxy.' },
  { code: 408, name: 'Request Timeout', description: 'The server timed out waiting for the request.' },
  { code: 409, name: 'Conflict', description: 'The request conflicts with the current state of the server.' },
  { code: 410, name: 'Gone', description: 'The requested resource is no longer available and will not be available again.' },
  { code: 411, name: 'Length Required', description: 'The request did not specify the length of its content, which is required.' },
  { code: 412, name: 'Precondition Failed', description: 'The server does not meet one of the preconditions specified in the request.' },
  { code: 413, name: 'Payload Too Large', description: 'The request is larger than the server is willing or able to process.' },
  { code: 414, name: 'URI Too Long', description: 'The URI provided was too long for the server to process.' },
  { code: 415, name: 'Unsupported Media Type', description: 'The media format of the requested data is not supported.' },
  { code: 416, name: 'Range Not Satisfiable', description: 'The range specified in the Range header cannot be fulfilled.' },
  { code: 417, name: 'Expectation Failed', description: 'The expectation indicated by the Expect header could not be met.' },
  { code: 418, name: "I'm a Teapot", description: 'A playful status: the server refuses to brew coffee because it is a teapot.' },
  { code: 422, name: 'Unprocessable Entity', description: 'The request was well-formed but was unable to be followed due to semantic errors.' },
  { code: 429, name: 'Too Many Requests', description: 'The user has sent too many requests in a given amount of time (rate limiting).' },

  // 5xx Server Errors
  { code: 500, name: 'Internal Server Error', description: 'A generic error message when the server encounters an unexpected condition.' },
  { code: 501, name: 'Not Implemented', description: 'The server does not support the functionality required to fulfill the request.' },
  { code: 502, name: 'Bad Gateway', description: 'The server received an invalid response from the upstream server.' },
  { code: 503, name: 'Service Unavailable', description: 'The server is currently unavailable (overloaded or down for maintenance).' },
  { code: 504, name: 'Gateway Timeout', description: 'The server did not receive a timely response from the upstream server.' },
  { code: 505, name: 'HTTP Version Not Supported', description: 'The server does not support the HTTP protocol version used in the request.' },
  { code: 507, name: 'Insufficient Storage', description: 'The server is unable to store the representation needed to complete the request.' },
  { code: 508, name: 'Loop Detected', description: 'The server detected an infinite loop while processing the request.' },
  { code: 511, name: 'Network Authentication Required', description: 'The client needs to authenticate to gain network access.' },
];

export function HttpStatusCodesTool() {
  const { t } = useLocale();
  const [search, setSearch] = useState('');

  const filtered = search.trim()
    ? STATUS_CODES.filter(
        (s) =>
          String(s.code).includes(search.trim()) ||
          s.name.toLowerCase().includes(search.trim().toLowerCase()) ||
          s.description.toLowerCase().includes(search.trim().toLowerCase())
      )
    : STATUS_CODES;

  const getCategoryColor = (code: number): string => {
    if (code < 200) return 'text-blue-600';
    if (code < 300) return 'text-green-600';
    if (code < 400) return 'text-yellow-600';
    if (code < 500) return 'text-red-600';
    return 'text-red-800';
  };

  const getCategoryBg = (code: number): string => {
    if (code < 200) return 'bg-blue-50';
    if (code < 300) return 'bg-green-50';
    if (code < 400) return 'bg-yellow-50';
    if (code < 500) return 'bg-red-50';
    return 'bg-red-100';
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{t('toolCommon.httpStatus.title')}</h2>
      <p className="text-sm text-muted-foreground">
        {t('toolCommon.httpStatus.description')}
      </p>
      <input
        type="text"
        className="w-full p-2 border rounded-md font-mono text-sm"
        placeholder={t('toolCommon.httpStatus.search')}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="overflow-x-auto max-h-[600px] overflow-y-auto border rounded-md">
        <table className="w-full text-sm border-collapse">
          <thead className="sticky top-0 bg-muted">
            <tr>
              <th className="border p-2 text-left w-20">{t('toolCommon.httpStatus.code')}</th>
              <th className="border p-2 text-left w-48">{t('toolCommon.httpStatus.name')}</th>
              <th className="border p-2 text-left">{t('toolCommon.httpStatus.description')}</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td className="border p-4 text-center text-muted-foreground" colSpan={3}>
                  {t('toolCommon.httpStatus.noResults', { search })}
                </td>
              </tr>
            ) : (
              filtered.map((s) => (
                <tr key={s.code} className={`${getCategoryBg(s.code)} hover:opacity-80`}>
                  <td className={`border p-2 font-mono font-bold ${getCategoryColor(s.code)}`}>
                    {s.code}
                  </td>
                  <td className="border p-2 font-medium">{s.name}</td>
                  <td className="border p-2 text-muted-foreground">{s.description}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted-foreground">
        {t('toolCommon.httpStatus.showing', { count: filtered.length, total: STATUS_CODES.length })}
      </p>
    </div>
  );
}
