"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

type ChartType = "bar" | "line" | "pie" | "scatter";

interface ParsedData {
  headers: string[];
  rows: string[][];
}

/* ---------- CSV parser (no external deps) ---------- */
function parseCSV(text: string): string[][] {
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentField = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (inQuotes) {
      if (char === '"' && nextChar === '"') {
        currentField += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        currentField += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === "," || char === ";" || char === "\t") {
        currentRow.push(currentField.trim());
        currentField = "";
      } else if (char === "\n" || (char === "\r" && nextChar === "\n")) {
        currentRow.push(currentField.trim());
        if (currentRow.some((cell) => cell !== "")) {
          rows.push(currentRow);
        }
        currentRow = [];
        currentField = "";
        if (char === "\r") i++;
      } else if (char === "\r") {
        currentRow.push(currentField.trim());
        if (currentRow.some((cell) => cell !== "")) {
          rows.push(currentRow);
        }
        currentRow = [];
        currentField = "";
      } else {
        currentField += char;
      }
    }
  }
  currentRow.push(currentField.trim());
  if (currentRow.some((cell) => cell !== "")) {
    rows.push(currentRow);
  }
  return rows;
}

function toNumber(v: string): number {
  const n = parseFloat(v.replace(/[, ]/g, ""));
  return isNaN(n) ? 0 : n;
}

function isNumeric(v: string): boolean {
  const trimmed = v.trim();
  if (trimmed === "") return false;
  const cleaned = trimmed.replace(/[, ]/g, "");
  return cleaned !== "" && !isNaN(Number(cleaned));
}

/* ---------- palette ---------- */
const PALETTE = [
  "#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6",
  "#ec4899", "#06b6d4", "#84cc16", "#f97316", "#6366f1",
];

export function CsvVisualizerTool() {
  const { locale } = useLocale();
  const isZh = locale === "zh";

  const [input, setInput] = useState("");
  const [data, setData] = useState<ParsedData | null>(null);
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [xCol, setXCol] = useState(0);
  const [yCol, setYCol] = useState(1);
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");

  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* ---------- handlers ---------- */
  const handleParse = useCallback(() => {
    setError("");
    if (!input.trim()) {
      setError(isZh ? "请输入或上传 CSV 数据。" : "Please enter or upload CSV data.");
      setData(null);
      return;
    }
    try {
      const rows = parseCSV(input);
      if (rows.length === 0) {
        setError(isZh ? "未找到数据。" : "No data found.");
        setData(null);
        return;
      }
      const headers = rows[0].map((h, i) => h || `Column ${i + 1}`);
      const dataRows = rows.slice(1);
      setData({ headers, rows: dataRows });
      setXCol(0);
      setYCol(Math.min(1, headers.length - 1));
    } catch {
      setError(isZh ? "解析失败，请检查格式。" : "Failed to parse CSV. Check the format.");
      setData(null);
    }
  }, [input, isZh]);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      setInput(String(reader.result || ""));
    };
    reader.readAsText(file);
  };

  const loadSample = () => {
    setInput(`Month,Revenue,Cost
Jan,4200,2100
Feb,5100,2400
Mar,6300,2800
Apr,5800,2600
May,7200,3100
Jun,8400,3500`);
  };

  /* ---------- chart drawing ---------- */
  const drawChart = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !data || data.rows.length === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    // clear with white background for PNG export
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, W, H);

    const padding = { top: 30, right: 30, bottom: 50, left: 60 };
    const chartW = W - padding.left - padding.right;
    const chartH = H - padding.top - padding.bottom;

    const xLabels = data.rows.map((r) => r[xCol] ?? "");
    const yValues = data.rows.map((r) => toNumber(r[yCol] ?? "0"));
    const yMax = Math.max(...yValues, 1); void yMax;
    const yMin = Math.min(...yValues, 0);

    ctx.font = "12px sans-serif";
    ctx.textBaseline = "alphabetic";

    if (chartType === "bar") {
      drawBar(ctx, xLabels, yValues, padding, chartW, chartH, W, H, data.headers[yCol] || "Y");
    } else if (chartType === "line") {
      drawLine(ctx, xLabels, yValues, padding, chartW, chartH, W, H, yMin, data.headers[yCol] || "Y");
    } else if (chartType === "pie") {
      drawPie(ctx, xLabels, yValues, padding, W, H);
    } else {
      drawScatter(ctx, yValues, data.rows, xCol, yCol, padding, chartW, chartH, data.headers[xCol] || "X", data.headers[yCol] || "Y");
    }
  }, [data, chartType, xCol, yCol]);

  useEffect(() => {
    drawChart();
  }, [drawChart]);

  /* ---------- download ---------- */
  const downloadPNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `chart-${chartType}-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  /* ---------- numeric column detection ---------- */
  const numericCols = data
    ? data.headers.map((_, i) => i).filter((i) => data.rows.some((r) => isNumeric(r[i] ?? "")))
    : [];

  return (
    <div className="space-y-4">
      {/* input */}
      <div>
        <label className="block text-sm font-medium mb-1">
          {isZh ? "CSV 数据" : "CSV Data"}
        </label>
        <textarea
          className="w-full h-32 p-3 border rounded font-mono text-sm bg-background"
          placeholder={isZh ? "粘贴 CSV 文本或上传文件…" : "Paste CSV text or upload a file…"}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button onClick={handleParse}>{isZh ? "解析数据" : "Parse Data"}</Button>
        <label className="cursor-pointer text-sm text-primary hover:underline">
          <input type="file" accept=".csv,text/csv,text/plain" onChange={handleFile} className="hidden" />
          {isZh ? "📁 上传 CSV 文件" : "📁 Upload CSV File"}
        </label>
        <button
          onClick={loadSample}
          className="text-sm text-muted-foreground hover:underline"
        >
          {isZh ? "加载示例数据" : "Load sample data"}
        </button>
        {fileName && <span className="text-sm text-muted-foreground">{fileName}</span>}
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* controls */}
      {data && data.rows.length > 0 && (
        <div className="flex flex-wrap items-end gap-4 p-4 border rounded bg-muted/30">
          <div>
            <label className="block text-xs text-muted-foreground mb-1">
              {isZh ? "图表类型" : "Chart Type"}
            </label>
            <select
              className="border rounded px-2 py-1 text-sm bg-background"
              value={chartType}
              onChange={(e) => setChartType(e.target.value as ChartType)}
            >
              <option value="bar">{isZh ? "柱状图" : "Bar Chart"}</option>
              <option value="line">{isZh ? "折线图" : "Line Chart"}</option>
              <option value="pie">{isZh ? "饼图" : "Pie Chart"}</option>
              <option value="scatter">{isZh ? "散点图" : "Scatter Plot"}</option>
            </select>
          </div>

          <div>
            <label className="block text-xs text-muted-foreground mb-1">
              {isZh ? "X / 标签列" : "X / Label Column"}
            </label>
            <select
              className="border rounded px-2 py-1 text-sm bg-background max-w-[160px]"
              value={xCol}
              onChange={(e) => setXCol(Number(e.target.value))}
            >
              {data.headers.map((h, i) => (
                <option key={i} value={i}>{h}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs text-muted-foreground mb-1">
              {isZh ? "Y / 数值列" : "Y / Value Column"}
            </label>
            <select
              className="border rounded px-2 py-1 text-sm bg-background max-w-[160px]"
              value={yCol}
              onChange={(e) => setYCol(Number(e.target.value))}
            >
              {(numericCols.length > 0 ? numericCols : data.headers.map((_, i) => i)).map((i) => (
                <option key={i} value={i}>{data.headers[i]}</option>
              ))}
            </select>
          </div>

          <Button onClick={downloadPNG} variant="outline">
            {isZh ? "⬇ 下载 PNG" : "⬇ Download PNG"}
          </Button>
        </div>
      )}

      {/* canvas */}
      {data && data.rows.length > 0 && (
        <div className="border rounded p-2 overflow-x-auto bg-white">
          <canvas ref={canvasRef} width={800} height={450} className="w-full max-w-full" />
        </div>
      )}

      {/* data preview */}
      {data && data.rows.length > 0 && (
        <div>
          <p className="text-sm text-muted-foreground mb-2">
            {isZh
              ? `数据预览（${data.rows.length} 行 × ${data.headers.length} 列）`
              : `Data preview (${data.rows.length} rows × ${data.headers.length} cols)`}
          </p>
          <div className="overflow-x-auto border rounded max-h-48">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-muted sticky top-0">
                  {data.headers.map((h, i) => (
                    <th key={i} className="p-2 border text-left font-medium whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.rows.slice(0, 50).map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                    {data.headers.map((_, j) => (
                      <td key={j} className="p-2 border whitespace-nowrap">{row[j] ?? ""}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

/* ===================== Chart renderers ===================== */

function drawBar(
  ctx: CanvasRenderingContext2D,
  xLabels: string[],
  yValues: number[],
  pad: { top: number; right: number; bottom: number; left: number },
  cw: number,
  ch: number,
  W: number,
  H: number,
  yLabel: string,
) {
  const max = Math.max(...yValues, 1);
  const barCount = yValues.length;
  const barWidth = (cw / barCount) * 0.7;
  const gap = (cw / barCount) * 0.3;

  // axes
  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(pad.left, pad.top);
  ctx.lineTo(pad.left, pad.top + ch);
  ctx.lineTo(pad.left + cw, pad.top + ch);
  ctx.stroke();

  // y-axis grid + labels
  ctx.fillStyle = "#64748b";
  ctx.textAlign = "right";
  const ticks = 5;
  for (let i = 0; i <= ticks; i++) {
    const val = (max / ticks) * i;
    const y = pad.top + ch - (val / max) * ch;
    ctx.fillText(formatNum(val), pad.left - 8, y + 4);
    ctx.strokeStyle = "#e2e8f0";
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(pad.left + cw, y);
    ctx.stroke();
  }

  // bars
  yValues.forEach((val, i) => {
    const x = pad.left + i * (barWidth + gap) + gap / 2;
    const h = (val / max) * ch;
    const y = pad.top + ch - h;
    ctx.fillStyle = PALETTE[i % PALETTE.length];
    ctx.fillRect(x, y, barWidth, h);

    // x label
    ctx.fillStyle = "#64748b";
    ctx.textAlign = "center";
    const label = xLabels[i] ?? String(i + 1);
    ctx.fillText(truncate(label, 10), x + barWidth / 2, pad.top + ch + 18);
  });

  // y label
  ctx.save();
  ctx.fillStyle = "#334155";
  ctx.font = "bold 13px sans-serif";
  ctx.textAlign = "center";
  ctx.translate(16, pad.top + ch / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(truncate(yLabel, 30), 0, 0);
  ctx.restore();
}

function drawLine(
  ctx: CanvasRenderingContext2D,
  xLabels: string[],
  yValues: number[],
  pad: { top: number; right: number; bottom: number; left: number },
  cw: number,
  ch: number,
  W: number,
  H: number,
  yMin: number,
  yLabel: string,
) {
  const max = Math.max(...yValues, 1);
  const range = max - Math.min(yMin, 0) || 1;
  const stepX = yValues.length > 1 ? cw / (yValues.length - 1) : cw;

  // axes
  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(pad.left, pad.top);
  ctx.lineTo(pad.left, pad.top + ch);
  ctx.lineTo(pad.left + cw, pad.top + ch);
  ctx.stroke();

  // grid + y labels
  ctx.fillStyle = "#64748b";
  ctx.textAlign = "right";
  const ticks = 5;
  for (let i = 0; i <= ticks; i++) {
    const val = (range / ticks) * i + Math.min(yMin, 0);
    const y = pad.top + ch - ((val - Math.min(yMin, 0)) / range) * ch;
    ctx.fillText(formatNum(val), pad.left - 8, y + 4);
    ctx.strokeStyle = "#e2e8f0";
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(pad.left + cw, y);
    ctx.stroke();
  }

  // line
  ctx.strokeStyle = PALETTE[0];
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  yValues.forEach((val, i) => {
    const x = pad.left + i * stepX;
    const y = pad.top + ch - ((val - Math.min(yMin, 0)) / range) * ch;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // points
  yValues.forEach((val, i) => {
    const x = pad.left + i * stepX;
    const y = pad.top + ch - ((val - Math.min(yMin, 0)) / range) * ch;
    ctx.fillStyle = PALETTE[0];
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fill();

    // x label
    ctx.fillStyle = "#64748b";
    ctx.textAlign = "center";
    ctx.fillText(truncate(xLabels[i] ?? String(i + 1), 10), x, pad.top + ch + 18);
  });

  // y label
  ctx.save();
  ctx.fillStyle = "#334155";
  ctx.font = "bold 13px sans-serif";
  ctx.textAlign = "center";
  ctx.translate(16, pad.top + ch / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(truncate(yLabel, 30), 0, 0);
  ctx.restore();
}

function drawPie(
  ctx: CanvasRenderingContext2D,
  xLabels: string[],
  yValues: number[],
  pad: { top: number; right: number; bottom: number; left: number },
  W: number,
  H: number,
) {
  const total = yValues.reduce((s, v) => s + Math.max(v, 0), 0) || 1;
  const cx = W / 2 - 80;
  const cy = H / 2;
  const radius = Math.min(W, H) / 2 - 60;

  let startAngle = -Math.PI / 2;
  yValues.forEach((val, i) => {
    const slice = (Math.max(val, 0) / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, radius, startAngle, startAngle + slice);
    ctx.closePath();
    ctx.fillStyle = PALETTE[i % PALETTE.length];
    ctx.fill();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.stroke();
    startAngle += slice;
  });

  // legend
  const legendX = W - 150;
  let legendY = 30;
  ctx.font = "12px sans-serif";
  ctx.textAlign = "left";
  yValues.forEach((val, i) => {
    if (i >= 12) return;
    ctx.fillStyle = PALETTE[i % PALETTE.length];
    ctx.fillRect(legendX, legendY, 14, 14);
    ctx.fillStyle = "#334155";
    const pct = ((Math.max(val, 0) / total) * 100).toFixed(1);
    ctx.fillText(`${truncate(xLabels[i] ?? `#${i + 1}`, 12)} (${pct}%)`, legendX + 20, legendY + 12);
    legendY += 22;
  });
}

function drawScatter(
  ctx: CanvasRenderingContext2D,
  _yValues: number[],
  rows: string[][],
  xCol: number,
  yCol: number,
  pad: { top: number; right: number; bottom: number; left: number },
  cw: number,
  ch: number,
  xLabel: string,
  yLabel: string,
) {
  const points = rows
    .map((r) => ({ x: toNumber(r[xCol] ?? "0"), y: toNumber(r[yCol] ?? "0") }))
    .filter((p) => !isNaN(p.x) && !isNaN(p.y));

  if (points.length === 0) {
    ctx.fillStyle = "#94a3b8";
    ctx.textAlign = "center";
    ctx.font = "14px sans-serif";
    ctx.fillText("No numeric data for scatter plot", pad.left + cw / 2, pad.top + ch / 2);
    return;
  }

  const xMax = Math.max(...points.map((p) => p.x), 1);
  const xMin = Math.min(...points.map((p) => p.x), 0);
  const yMax = Math.max(...points.map((p) => p.y), 1);
  const yMin = Math.min(...points.map((p) => p.y), 0);
  const xRange = xMax - xMin || 1;
  const yRange = yMax - yMin || 1;

  // axes
  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(pad.left, pad.top);
  ctx.lineTo(pad.left, pad.top + ch);
  ctx.lineTo(pad.left + cw, pad.top + ch);
  ctx.stroke();

  // grid + labels
  ctx.font = "11px sans-serif";
  ctx.fillStyle = "#64748b";
  const ticks = 5;
  for (let i = 0; i <= ticks; i++) {
    // y
    const yVal = (yRange / ticks) * i + yMin;
    const y = pad.top + ch - (i / ticks) * ch;
    ctx.textAlign = "right";
    ctx.fillText(formatNum(yVal), pad.left - 8, y + 4);
    ctx.strokeStyle = "#e2e8f0";
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(pad.left + cw, y);
    ctx.stroke();
    // x
    const xVal = (xRange / ticks) * i + xMin;
    const x = pad.left + (i / ticks) * cw;
    ctx.textAlign = "center";
    ctx.fillText(formatNum(xVal), x, pad.top + ch + 18);
    ctx.strokeStyle = "#e2e8f0";
    ctx.beginPath();
    ctx.moveTo(x, pad.top);
    ctx.lineTo(x, pad.top + ch);
    ctx.stroke();
  }

  // points
  points.forEach((p, i) => {
    const px = pad.left + ((p.x - xMin) / xRange) * cw;
    const py = pad.top + ch - ((p.y - yMin) / yRange) * ch;
    ctx.fillStyle = PALETTE[i % PALETTE.length] + "cc";
    ctx.beginPath();
    ctx.arc(px, py, 5, 0, Math.PI * 2);
    ctx.fill();
  });

  // axis labels
  ctx.save();
  ctx.fillStyle = "#334155";
  ctx.font = "bold 13px sans-serif";
  ctx.textAlign = "center";
  ctx.translate(16, pad.top + ch / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(truncate(yLabel, 30), 0, 0);
  ctx.restore();

  ctx.fillStyle = "#334155";
  ctx.font = "bold 13px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(truncate(xLabel, 30), pad.left + cw / 2, pad.top + ch + 42);
}

/* ---------- helpers ---------- */
function formatNum(n: number): string {
  if (Math.abs(n) >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (Math.abs(n) >= 1_000) return (n / 1_000).toFixed(1) + "k";
  return Number.isInteger(n) ? String(n) : n.toFixed(1);
}

function truncate(s: string, max: number): string {
  return s.length > max ? s.slice(0, max - 1) + "…" : s;
}
