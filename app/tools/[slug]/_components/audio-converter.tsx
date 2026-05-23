'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

function floatTo16BitPCM(samples: Float32Array): ArrayBuffer {
  const buffer = new ArrayBuffer(samples.length * 2);
  const view = new DataView(buffer);
  for (let i = 0; i < samples.length; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(i * 2, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }
  return buffer;
}

function encodeWAV(samples: Float32Array, sampleRate: number): Blob {
  const numChannels = 1;
  const bitsPerSample = 16;
  const byteRate = sampleRate * numChannels * bitsPerSample / 8;
  const blockAlign = numChannels * bitsPerSample / 8;
  const dataSize = samples.length * numChannels * bitsPerSample / 8;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  const writeString = (offset: number, str: string) => {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  };

  writeString(0, 'RIFF');
  view.setUint32(4, 36 + dataSize, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitsPerSample, true);
  writeString(36, 'data');
  view.setUint32(40, dataSize, true);

  const pcmBuffer = floatTo16BitPCM(samples);
  new Uint8Array(buffer).set(new Uint8Array(pcmBuffer), 44);
  return new Blob([buffer], { type: 'audio/wav' });
}

const SAMPLE_RATES = [8000, 11025, 16000, 22050, 44100, 48000, 96000];
const OUTPUT_FORMATS = [
  { value: 'wav', label: 'WAV (PCM 16-bit)' },
  { value: 'wav-8bit', label: 'WAV (PCM 8-bit)' },
  { value: 'wav-24bit', label: 'WAV (PCM 24-bit)' },
];

export function AudioConverterTool() {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
  const [outputFormat, setOutputFormat] = useState('wav');
  const [sampleRate, setSampleRate] = useState(44100);
  const [convertedBlob, setConvertedBlob] = useState<Blob | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [fileInfo, setFileInfo] = useState<{ name: string; duration: number; origSampleRate: number; channels: number } | null>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/mp3'].includes(file.type) &&
        !file.name.match(/\.(mp3|wav|ogg)$/i)) {
      setError('Please upload MP3, WAV, or OGG audio files.');
      return;
    }

    setError('');
    setLoading(true);
    setAudioFile(file);
    setConvertedBlob(null);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const ctx = new AudioContext();
      const decoded = await ctx.decodeAudioData(arrayBuffer);
      setAudioBuffer(decoded);
      setFileInfo({
        name: file.name,
        duration: decoded.duration,
        origSampleRate: decoded.sampleRate,
        channels: decoded.numberOfChannels,
      });
      ctx.close();
    } catch {
      setError('Failed to decode audio file.');
    }
    setLoading(false);
  };

  const convertAudio = async () => {
    if (!audioBuffer) return;
    setLoading(true);
    setError('');
    setConvertedBlob(null);

    try {
      const originalData = audioBuffer.getChannelData(0);
      const targetSampleRate = Number(sampleRate);
      const offlineCtx = new OfflineAudioContext(1, Math.floor(originalData.length * targetSampleRate / audioBuffer.sampleRate), targetSampleRate);

      const source = offlineCtx.createBufferSource();
      const buf = offlineCtx.createBuffer(1, originalData.length, audioBuffer.sampleRate);
      buf.getChannelData(0).set(originalData);
      source.buffer = buf;
      source.connect(offlineCtx.destination);
      source.start();

      const rendered = await offlineCtx.startRendering();
      const channelData = rendered.getChannelData(0);

      let blob: Blob;
      if (outputFormat === 'wav') {
        // 16-bit
        blob = encodeWAV(channelData, targetSampleRate);
      } else if (outputFormat === 'wav-8bit') {
        // 8-bit unsigned WAV
        blob = encodeWAV8bit(channelData, targetSampleRate);
      } else if (outputFormat === 'wav-24bit') {
        // 24-bit WAV
        blob = encodeWAV24bit(channelData, targetSampleRate);
      } else {
        // Default 16-bit
        blob = encodeWAV(channelData, targetSampleRate);
      }

      setConvertedBlob(blob);
    } catch {
      setError('Failed to convert audio.');
    }
    setLoading(false);
  };

  const downloadConverted = () => {
    if (!convertedBlob || !audioFile) return;
    const url = URL.createObjectURL(convertedBlob);
    const a = document.createElement('a');
    a.href = url;
    const baseName = audioFile.name.replace(/\.[^/.]+$/, '');
    const extLabel = outputFormat.startsWith('wav') ? 'wav' : 'wav';
    a.download = `${baseName}_converted.${extLabel}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const formatTime = (t: number) => {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Upload Audio (MP3, WAV, OGG)</label>
        <input
          type="file"
          accept="audio/mpeg,audio/wav,audio/ogg,.mp3,.wav,.ogg"
          onChange={handleFileUpload}
          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-primary file:text-primary-foreground file:text-sm file:font-medium cursor-pointer"
        />
      </div>

      {loading && <p className="text-sm text-muted-foreground">Processing...</p>}
      {error && <p className="text-sm text-red-500">{error}</p>}

      {fileInfo && (
        <div className="rounded-md border bg-card p-3 space-y-1 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">File:</span>
            <span className="font-mono">{fileInfo.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Duration:</span>
            <span>{formatTime(fileInfo.duration)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Sample Rate:</span>
            <span>{fileInfo.origSampleRate} Hz</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Channels:</span>
            <span>{fileInfo.channels}</span>
          </div>
        </div>
      )}

      {audioBuffer && (
        <>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">Output Format</label>
              <select
                value={outputFormat}
                onChange={(e) => setOutputFormat(e.target.value)}
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {OUTPUT_FORMATS.map((fmt) => (
                  <option key={fmt.value} value={fmt.value}>{fmt.label}</option>
                ))}
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">Sample Rate (Hz)</label>
              <select
                value={sampleRate}
                onChange={(e) => setSampleRate(Number(e.target.value))}
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {SAMPLE_RATES.map((sr) => (
                  <option key={sr} value={sr}>{sr} Hz</option>
                ))}
              </select>
            </div>
          </div>

          <Button onClick={convertAudio} disabled={loading}>
            {loading ? 'Converting...' : '🔄 Convert Audio'}
          </Button>
        </>
      )}

      {convertedBlob && (
        <div className="rounded-md border bg-card p-4 space-y-2">
          <p className="text-sm text-green-600 font-medium">Conversion complete!</p>
          <p className="text-xs text-muted-foreground">
            Format: {OUTPUT_FORMATS.find((f) => f.value === outputFormat)?.label} @ {sampleRate} Hz
          </p>
          <Button onClick={downloadConverted}>⬇ Download Converted Audio</Button>
        </div>
      )}
    </div>
  );
}

// 8-bit unsigned WAV
function encodeWAV8bit(samples: Float32Array, sampleRate: number): Blob {
  const numChannels = 1;
  const bitsPerSample = 8;
  const byteRate = sampleRate * numChannels * bitsPerSample / 8;
  const blockAlign = numChannels * bitsPerSample / 8;
  const dataSize = samples.length * numChannels * bitsPerSample / 8;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  const writeString = (offset: number, str: string) => {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  };

  writeString(0, 'RIFF');
  view.setUint32(4, 36 + dataSize, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitsPerSample, true);
  writeString(36, 'data');
  view.setUint32(40, dataSize, true);

  for (let i = 0; i < samples.length; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    view.setUint8(44 + i, Math.round((s + 1) * 127.5));
  }
  return new Blob([buffer], { type: 'audio/wav' });
}

// 24-bit signed WAV
function encodeWAV24bit(samples: Float32Array, sampleRate: number): Blob {
  const numChannels = 1;
  const bitsPerSample = 24;
  const byteRate = sampleRate * numChannels * bitsPerSample / 8;
  const blockAlign = numChannels * bitsPerSample / 8;
  const dataSize = samples.length * numChannels * bitsPerSample / 8;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  const writeString = (offset: number, str: string) => {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  };

  writeString(0, 'RIFF');
  view.setUint32(4, 36 + dataSize, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitsPerSample, true);
  writeString(36, 'data');
  view.setUint32(40, dataSize, true);

  let offset = 44;
  for (let i = 0; i < samples.length; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    const intVal = s < 0 ? Math.round(s * 0x800000) : Math.round(s * 0x7fffff);
    // Write 24-bit little-endian
    view.setUint8(offset++, intVal & 0xff);
    view.setUint8(offset++, (intVal >> 8) & 0xff);
    view.setUint8(offset++, (intVal >> 16) & 0xff);
  }
  return new Blob([buffer], { type: 'audio/wav' });
}
