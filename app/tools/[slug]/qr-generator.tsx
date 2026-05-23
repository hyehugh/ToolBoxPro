"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";

type InputType = "url" | "text" | "phone" | "sms" | "email" | "wifi";

export function QrGeneratorTool() {
  const [type, setType] = useState<InputType>("url");
  const [input, setInput] = useState("");
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [size, setSize] = useState(256);

  const generate = useCallback(() => {
    if (!input) return;
    // Use a simple QR generation via a public API or inline
    // For now, use https://api.qrserver.com
    let data = input;
    if (type === "sms") data = `SMSTO:${input}`;
    if (type === "phone") data = `TEL:${input}`;
    if (type === "email") data = `mailto:${input}`;

    const encoded = encodeURIComponent(data);
    setQrDataUrl(`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encoded}`);
  }, [input, type, size]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {[
          { id: "url" as InputType, label: "URL" },
          { id: "text" as InputType, label: "Text" },
          { id: "phone" as InputType, label: "Phone" },
          { id: "sms" as InputType, label: "SMS" },
          { id: "email" as InputType, label: "Email" },
          { id: "wifi" as InputType, label: "WiFi" },
        ].map(({ id, label }) => (
          <Button
            key={id}
            variant={type === id ? "default" : "outline"}
            size="sm"
            onClick={() => { setType(id); setQrDataUrl(""); }}
          >
            {label}
          </Button>
        ))}
      </div>

      {type === "wifi" ? (
        <div className="space-y-2">
          <input placeholder="SSID (WiFi name)..." value={input} onChange={(e) => setInput(e.target.value)}
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm" />
          <input placeholder="Password..." type="password" className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm" />
        </div>
      ) : (
        <textarea
          placeholder={type === "url" ? "https://example.com" : "Enter content..."}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full h-20 p-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      )}

      <div className="flex items-center gap-3">
        <Button onClick={generate}>Generate QR Code</Button>
        <label className="text-sm text-muted-foreground">
          Size:
          <select
            value={size}
            onChange={(e) => setSize(+e.target.value)}
            className="ml-2 px-2 py-1 rounded border border-input bg-background text-sm"
          >
            <option value="128">128px</option>
            <option value="256">256px</option>
            <option value="512">512px</option>
            <option value="1024">1024px</option>
          </select>
        </label>
      </div>

      {qrDataUrl && (
        <div className="space-y-3">
          <div className="flex justify-center p-4 rounded-lg border bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={qrDataUrl} alt="QR Code" width={size} height={size} className="max-w-full" />
          </div>
          <div className="flex gap-2 justify-center">
            <Button variant="outline" size="sm" onClick={() => {
              const a = document.createElement("a");
              a.href = qrDataUrl; a.download = `qrcode-${size}.png`; a.click();
            }}>Download PNG</Button>
          </div>
        </div>
      )}
    </div>
  );
}
