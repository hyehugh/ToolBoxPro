"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function JwtDecoderTool() {
  const [token, setToken] = useState("");
  const [header, setHeader] = useState("");
  const [payload, setPayload] = useState("");
  const [error, setError] = useState("");

  const base64UrlDecode = (str: string) => {
    try {
      // Replace URL-safe chars and pad
      const base64 = str.replace(/-/g, "+").replace(/_/g, "/");
      const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), "=");
      return atob(padded);
    } catch {
      return null;
    }
  };

  const decode = () => {
    setHeader("");
    setPayload("");
    setError("");

    const parts = token.trim().split(".");
    if (parts.length !== 3) {
      setError("Invalid JWT format. Expected 3 parts separated by dots.");
      return;
    }

    const headerStr = base64UrlDecode(parts[0]);
    const payloadStr = base64UrlDecode(parts[1]);

    if (!headerStr || !payloadStr) {
      setError("Invalid Base64 encoding in JWT parts.");
      return;
    }

    try {
      const headerObj = JSON.parse(headerStr);
      const payloadObj = JSON.parse(payloadStr);
      setHeader(JSON.stringify(headerObj, null, 2));
      setPayload(JSON.stringify(payloadObj, null, 2));
    } catch {
      setError("Decoded parts are not valid JSON.");
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">JWT Token</label>
        <textarea
          className="w-full h-24 p-3 border rounded font-mono text-sm"
          placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
      </div>
      <Button onClick={decode}>Decode JWT</Button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {(header || payload) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Header</label>
            <textarea
              className="w-full h-40 p-3 border rounded font-mono text-sm bg-muted"
              value={header}
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Payload</label>
            <textarea
              className="w-full h-40 p-3 border rounded font-mono text-sm bg-muted"
              value={payload}
              readOnly
            />
          </div>
        </div>
      )}
    </div>
  );
}
