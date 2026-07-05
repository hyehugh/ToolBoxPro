"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export function JwtGeneratorTool() {
  const { t } = useLocale();
  const [headerJson, setHeaderJson] = useState(JSON.stringify({ alg: "HS256", typ: "JWT" }, null, 2));
  const [payloadJson, setPayloadJson] = useState(JSON.stringify({ sub: "1234567890", name: "John Doe", iat: 1516239022 }, null, 2));
  const [secret, setSecret] = useState("your-secret-key");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  // Base64Url-encode a UTF-8 string (safe for JSON containing non-ASCII chars)
  const base64UrlEncode = (str: string): string => {
    const bytes = new TextEncoder().encode(str);
    let binary = "";
    for (const b of bytes) binary += String.fromCharCode(b);
    return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  };

  // Real HMAC-SHA256 signature using the Web Crypto API
  const signHs256 = async (unsignedToken: string, secret: string): Promise<string> => {
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );
    const sig = new Uint8Array(await crypto.subtle.sign("HMAC", key, encoder.encode(unsignedToken)));
    let binary = "";
    for (const b of sig) binary += String.fromCharCode(b);
    return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  };

  const generate = async () => {
    setError("");
    setOutput("");

    try {
      const header = JSON.parse(headerJson);
      const payload = JSON.parse(payloadJson);

      if (typeof header !== "object" || header === null || Array.isArray(header)) {
        throw new Error("Header must be a JSON object");
      }
      if (typeof payload !== "object" || payload === null || Array.isArray(payload)) {
        throw new Error("Payload must be a JSON object");
      }

      const headerStr = JSON.stringify(header);
      const payloadStr = JSON.stringify(payload);

      const unsignedToken = `${base64UrlEncode(headerStr)}.${base64UrlEncode(payloadStr)}`;
      const signature = await signHs256(unsignedToken, secret);

      setOutput(`${unsignedToken}.${signature}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : t('toolCommon.jwt.generatorInvalidJson'));
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">{t('toolCommon.jwt.header')} (JSON)</label>
          <textarea
            className="w-full h-32 p-3 border rounded font-mono text-sm"
            placeholder='{"alg": "HS256", "typ": "JWT"}'
            value={headerJson}
            onChange={(e) => setHeaderJson(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{t('toolCommon.jwt.payload')} (JSON)</label>
          <textarea
            className="w-full h-32 p-3 border rounded font-mono text-sm"
            placeholder='{"sub": "1234567890", "name": "John Doe"}'
            value={payloadJson}
            onChange={(e) => setPayloadJson(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">{t('toolCommon.jwt.secretKey')}</label>
        <input
          type="text"
          className="w-full p-3 border rounded font-mono text-sm"
          placeholder="your-secret-key"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
        />
      </div>
      <Button onClick={generate}>{t('common.generate')} JWT</Button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {output && (
        <div>
          <label className="block text-sm font-medium mb-1">{t('toolCommon.jwt.generatedJwt')}</label>
          <textarea
            className="w-full h-24 p-3 border rounded font-mono text-sm bg-muted"
            value={output}
            readOnly
          />
          <p className="text-xs text-muted-foreground mt-1">
            {t('toolCommon.jwt.signatureNote')}
          </p>
        </div>
      )}
    </div>
  );
}
