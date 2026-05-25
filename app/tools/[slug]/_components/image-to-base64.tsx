"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export function ImageToBase64Tool() {
  const { t } = useLocale();
  const [base64, setBase64] = useState("");
  const [preview, setPreview] = useState("");
  const [fileName, setFileName] = useState("");
  const [copied, setCopied] = useState(false);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setBase64(result);
      setPreview(result);
    };
    reader.readAsDataURL(file);
  };

  const copyBase64 = async () => {
    await navigator.clipboard.writeText(base64);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={handleFile}
          className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 cursor-pointer"
        />
      </div>
      {preview && (
        <div className="space-y-3">
          <div className="rounded-md border bg-card p-4 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={preview}
              alt={fileName}
              className="max-w-full max-h-64 object-contain rounded"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                Base64 string ({Math.ceil(base64.length / 1024)} KB)
              </span>
              <Button variant="outline" size="sm" onClick={copyBase64}>
                {copied ? "Copied!" : "Copy Base64"}
              </Button>
            </div>
            <div className="p-3 rounded-md border bg-card text-xs font-mono break-all max-h-48 overflow-y-auto">
              {base64}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
