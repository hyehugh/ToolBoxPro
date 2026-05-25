"use client";

import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

function createZip(files: { name: string; data: Uint8Array }[]): Blob {
  // Simple ZIP creator using STORE (no compression)
  const localHeader = (name: string, size: number, crc: number) => {
    const encodedName = new TextEncoder().encode(name);
    const buf = new ArrayBuffer(30 + encodedName.length);
    const dv = new DataView(buf);
    dv.setUint32(0, 0x04034b50, true); // local file header signature
    dv.setUint16(4, 20, true); // version needed
    dv.setUint16(6, 0, true); // flags
    dv.setUint16(8, 0, true); // compression method (stored)
    dv.setUint16(10, 0, true); // last mod time
    dv.setUint16(12, 0, true); // last mod date
    dv.setUint32(14, crc, true); // crc-32
    dv.setUint32(18, size, true); // compressed size
    dv.setUint32(22, size, true); // uncompressed size
    dv.setUint16(26, encodedName.length, true); // file name length
    dv.setUint16(28, 0, true); // extra field length
    new Uint8Array(buf, 30, encodedName.length).set(encodedName);
    return new Uint8Array(buf);
  };

  const centralDir = (name: string, size: number, crc: number, offset: number) => {
    const encodedName = new TextEncoder().encode(name);
    const buf = new ArrayBuffer(46 + encodedName.length);
    const dv = new DataView(buf);
    dv.setUint32(0, 0x02014b50, true); // central directory file header
    dv.setUint16(4, 20, true); // version made by
    dv.setUint16(6, 20, true); // version needed
    dv.setUint16(8, 0, true); // flags
    dv.setUint16(10, 0, true); // compression method
    dv.setUint16(12, 0, true); // last mod time
    dv.setUint16(14, 0, true); // last mod date
    dv.setUint32(16, crc, true);
    dv.setUint32(20, size, true);
    dv.setUint32(24, size, true);
    dv.setUint16(28, encodedName.length, true);
    dv.setUint16(30, 0, true); // extra field length
    dv.setUint16(32, 0, true); // file comment length
    dv.setUint16(34, 0, true); // disk number start
    dv.setUint16(36, 0, true); // internal file attributes
    dv.setUint32(38, 0, true); // external file attributes
    dv.setUint32(42, offset, true); // relative offset of local header
    new Uint8Array(buf, 46, encodedName.length).set(encodedName);
    return new Uint8Array(buf);
  };

  const eocd = (cdOffset: number, cdSize: number, totalEntries: number) => {
    const buf = new ArrayBuffer(22);
    const dv = new DataView(buf);
    dv.setUint32(0, 0x06054b50, true); // end of central directory signature
    dv.setUint16(4, 0, true); // disk number
    dv.setUint16(6, 0, true); // disk with central directory
    dv.setUint16(8, totalEntries, true); // entries on this disk
    dv.setUint16(10, totalEntries, true); // total entries
    dv.setUint32(12, cdSize, true); // size of central directory
    dv.setUint32(16, cdOffset, true); // offset of central directory
    dv.setUint16(20, 0, true); // comment length
    return new Uint8Array(buf);
  };

  // Simple CRC32
  const crcTable: number[] = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    crcTable[n] = c;
  }
  const crc32 = (data: Uint8Array): number => {
    let crc = 0xffffffff;
    for (let i = 0; i < data.length; i++) {
      crc = crcTable[(crc ^ data[i]) & 0xff] ^ (crc >>> 8);
    }
    return (crc ^ 0xffffffff) >>> 0;
  };

  const parts: Uint8Array[] = [];
  let offset = 0;
  const cdHeaders: Uint8Array[] = [];

  for (const file of files) {
    const crc = crc32(file.data);
    const lh = localHeader(file.name, file.data.length, crc);
    parts.push(lh, file.data);
    const cd = centralDir(file.name, file.data.length, crc, offset);
    cdHeaders.push(cd);
    offset += lh.length + file.data.length;
  }

  const cdSize = cdHeaders.reduce((s, h) => s + h.length, 0);
  const cdOffset = offset;
  const eocdRecord = eocd(cdOffset, cdSize, files.length);

  const all = new Uint8Array(offset + cdSize + eocdRecord.length);
  let pos = 0;
  for (const p of [...parts, ...cdHeaders, eocdRecord]) {
    all.set(p, pos);
    pos += p.length;
  }

  return new Blob([all], { type: "application/zip" });
}

export function ImageSplitterTool() {
  const { t } = useLocale();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);
  const [tiles, setTiles] = useState<{ url: string; index: number }[]>([]);
  const [loading, setLoading] = useState(false);
  const [imageSize, setImageSize] = useState({ w: 0, h: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFile = (file: File) => {
    setImageFile(file);
    setImageUrl(URL.createObjectURL(file));
    setTiles([]);
  };

  const split = useCallback(async () => {
    if (!imageUrl) return;
    setLoading(true);
    setTiles([]);

    const img = new Image();
    img.src = imageUrl;
    await new Promise((r) => (img.onload = r));
    setImageSize({ w: img.width, h: img.height });

    const tileW = Math.floor(img.width / cols);
    const tileH = Math.floor(img.height / rows);
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const newTiles: { url: string; index: number }[] = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const sx = c * tileW;
        const sy = r * tileH;
        const tw = c === cols - 1 ? img.width - sx : tileW;
        const th = r === rows - 1 ? img.height - sy : tileH;

        canvas.width = tw;
        canvas.height = th;
        ctx.drawImage(img, sx, sy, tw, th, 0, 0, tw, th);

        const blob = await new Promise<Blob | null>((resolve) =>
          canvas.toBlob(resolve, "image/png")
        );
        if (blob) {
          newTiles.push({ url: URL.createObjectURL(blob), index: r * cols + c });
        }
      }
    }

    setTiles(newTiles);
    setLoading(false);
  }, [imageUrl, rows, cols]);

  const downloadAll = async () => {
    if (tiles.length === 0) return;
    const zipFiles = await Promise.all(
      tiles.map(async (tile) => {
        const resp = await fetch(tile.url);
        const buf = await resp.arrayBuffer();
        return {
          name: `tile_${tile.index + 1}.png`,
          data: new Uint8Array(buf),
        };
      })
    );
    const zip = createZip(zipFiles);
    const a = document.createElement("a");
    a.href = URL.createObjectURL(zip);
    a.download = imageFile
      ? imageFile.name.replace(/\.[^.]+$/, "") + "_tiles.zip"
      : "tiles.zip";
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="space-y-4">
      <canvas ref={canvasRef} className="hidden" />
      {!imageUrl ? (
        <div
          className="border-2 border-dashed border-input rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => { e.preventDefault(); handleFile(e.dataTransfer.files[0]); }}
          onClick={() => {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = "image/jpeg,image/png,image/webp,image/gif";
            input.onchange = (e: any) => e.target.files[0] && handleFile(e.target.files[0]);
            input.click();
          }}
        >
          <p className="text-muted-foreground">Drop an image here or click to upload</p>
          <p className="text-xs text-muted-foreground mt-1">Supports JPG, PNG, WebP, GIF</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {imageSize.w > 0 ? `${imageSize.w} × ${imageSize.h} px` : "Image loaded"}
            </p>
            <Button variant="outline" size="sm" onClick={() => {
              setImageUrl(""); setImageFile(null); setTiles([]);
            }}>
              New Image
            </Button>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageUrl} alt="Source" className="max-w-full max-h-64 object-contain rounded-lg border" />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium block mb-1">Rows: {rows}</label>
              <input
                type="range"
                min={2}
                max={6}
                value={rows}
                onChange={(e) => { setRows(Number(e.target.value)); setTiles([]); }}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Columns: {cols}</label>
              <input
                type="range"
                min={2}
                max={6}
                value={cols}
                onChange={(e) => { setCols(Number(e.target.value)); setTiles([]); }}
                className="w-full"
              />
            </div>
          </div>

          <Button onClick={split} disabled={loading}>
            {loading ? "Splitting..." : "Split Image"}
          </Button>

          {tiles.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">
                  Tiles ({tiles.length})
                </p>
                <Button variant="outline" size="sm" onClick={downloadAll}>
                  Download All as ZIP
                </Button>
              </div>
              <div
                className="grid gap-2"
                style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
              >
                {tiles.map((tile) => (
                  <div key={tile.index} className="space-y-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tile.url}
                      alt={`Tile ${tile.index + 1}`}
                      className="rounded-lg border w-full object-contain"
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full text-xs"
                      onClick={() => {
                        const a = document.createElement("a");
                        a.href = tile.url;
                        a.download = `tile_${tile.index + 1}.png`;
                        a.click();
                      }}
                    >
                      Download #{tile.index + 1}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
