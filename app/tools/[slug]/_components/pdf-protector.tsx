"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function PdfProtectorTool() {
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const protect = async () => {
    if (!file || !password) return;
    setLoading(true);
    try {
      const { PDFDocument } = await import("pdf-lib");
      const bytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);
      (pdf as any).encrypt({
        userPassword: password,
        ownerPassword: password,
        permissions: {
          printing: "highResolution",
          modifying: false,
          copying: false,
          annotating: false,
          fillingForms: false,
          contentAccessibility: true,
          documentAssembly: false,
        },
      });
      const pdfBytes = await pdf.save();
      const blob = new Blob([pdfBytes as BlobPart], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = `protected-${file.name}`; a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error("Protect failed:", e);
    }
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <div
        className="border-2 border-dashed border-input rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); e.dataTransfer.files[0] && setFile(e.dataTransfer.files[0]); }}
        onClick={() => {
          const input = document.createElement("input");
          input.type = "file"; input.accept = "application/pdf";
          input.onchange = (e: any) => e.target.files[0] && setFile(e.target.files[0]);
          input.click();
        }}
      >
        {file ? (
          <p className="text-muted-foreground">{file.name}</p>
        ) : (
          <p className="text-muted-foreground">Drop a PDF here or click to upload</p>
        )}
      </div>

      {file && (
        <div className="space-y-3">
          <input
            type="password"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
          />
          <div className="text-xs text-muted-foreground space-y-1">
            <p>🔒 Printing: Allowed</p>
            <p>🚫 Editing: Restricted</p>
            <p>🚫 Copying: Restricted</p>
          </div>
          <Button onClick={protect} disabled={loading || !password}>
            {loading ? "Protecting..." : "Protect PDF"}
          </Button>
        </div>
      )}
    </div>
  );
}
