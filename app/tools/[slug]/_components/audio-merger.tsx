'use client';

import { useState, useRef } from 'react';
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

interface AudioEntry {
  file: File;
  name: string;
  decoded: AudioBuffer;
}

export function AudioMergerTool() {
  const [entries, setEntries] = useState<AudioEntry[]>([]);
  const [mergedBlob, setMergedBlob] = useState<Blob | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addFiles = async (fileList: FileList) => {
    setError('');
    setMergedBlob(null);

    const newEntries: AudioEntry[] = [];
    for (const file of Array.from(fileList)) {
      if (!['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/mp3'].includes(file.type) &&
          !file.name.match(/\.(mp3|wav|ogg)$/i)) {
        setError(`"${file.name}" is not a supported audio format.`);
        continue;
      }
      try {
        const arrayBuffer = await file.arrayBuffer();
        const ctx = new AudioContext();
        const decoded = await ctx.decodeAudioData(arrayBuffer);
        newEntries.push({ file, name: file.name, decoded });
        ctx.close();
      } catch {
        setError(`Failed to decode "${file.name}".`);
      }
    }
    setEntries((prev) => [...prev, ...newEntries]);
  };

  const removeEntry = (index: number) => {
    setEntries((prev) => prev.filter((_, i) => i !== index));
    setMergedBlob(null);
  };

  const moveUp = (index: number) => {
    if (index === 0) return;
    setEntries((prev) => {
      const updated = [...prev];
      [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];
      return updated;
    });
    setMergedBlob(null);
  };

  const moveDown = (index: number) => {
    if (index >= entries.length - 1) return;
    setEntries((prev) => {
      const updated = [...prev];
      [updated[index], updated[index + 1]] = [updated[index + 1], updated[index]];
      return updated;
    });
    setMergedBlob(null);
  };

  const mergeTracks = async () => {
    if (entries.length < 2) return;
    setLoading(true);
    setError('');

    try {
      // Use the sample rate of the first track
      const sampleRate = entries[0].decoded.sampleRate;
      let totalSamples = 0;
      for (const entry of entries) {
        totalSamples += entry.decoded.getChannelData(0).length;
      }

      const offlineCtx = new OfflineAudioContext(1, totalSamples, sampleRate);
      let offset = 0;

      for (const entry of entries) {
        const source = offlineCtx.createBufferSource();
        const channelData = entry.decoded.getChannelData(0);

        // Resample if needed
        if (entry.decoded.sampleRate !== sampleRate) {
          const ratio = sampleRate / entry.decoded.sampleRate;
          const newLength = Math.floor(channelData.length * ratio);
          const resampledBuffer = offlineCtx.createBuffer(1, newLength, sampleRate);
          const resampledData = resampledBuffer.getChannelData(0);
          for (let i = 0; i < newLength; i++) {
            const origIdx = i / ratio;
            const idx1 = Math.floor(origIdx);
            const idx2 = Math.min(idx1 + 1, channelData.length - 1);
            const frac = origIdx - idx1;
            resampledData[i] = channelData[idx1] * (1 - frac) + channelData[idx2] * frac;
          }
          source.buffer = resampledBuffer;
        } else {
          const buf = offlineCtx.createBuffer(1, channelData.length, sampleRate);
          buf.getChannelData(0).set(channelData);
          source.buffer = buf;
        }

        source.connect(offlineCtx.destination);
        source.start(offset);
        offset += source.buffer!.length / sampleRate;
      }

      const rendered = await offlineCtx.startRendering();
      const blob = encodeWAV(rendered.getChannelData(0), sampleRate);
      setMergedBlob(blob);
    } catch {
      setError('Failed to merge audio tracks.');
    }
    setLoading(false);
  };

  const downloadMerged = () => {
    if (!mergedBlob) return;
    const url = URL.createObjectURL(mergedBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'merged_audio.wav';
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
        <label className="block text-sm font-medium mb-1">Add Audio Files (MP3, WAV, OGG)</label>
        <input
          ref={fileInputRef}
          type="file"
          accept="audio/mpeg,audio/wav,audio/ogg,.mp3,.wav,.ogg"
          multiple
          onChange={(e) => e.target.files && addFiles(e.target.files)}
          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-primary file:text-primary-foreground file:text-sm file:font-medium cursor-pointer"
        />
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      {entries.length > 0 && (
        <div className="rounded-md border bg-card divide-y">
          {entries.map((entry, i) => {
            const dur = entry.decoded.duration;
            return (
              <div key={i} className="flex items-center gap-2 p-3">
                <span className="flex-1 text-sm truncate">{entry.name}</span>
                <span className="text-xs text-muted-foreground">{formatTime(dur)}</span>
                <div className="flex gap-1">
                  <button
                    onClick={() => moveUp(i)}
                    disabled={i === 0}
                    className="px-2 py-1 text-xs rounded border border-input hover:bg-accent disabled:opacity-30"
                    title="Move up"
                  >
                    ↑
                  </button>
                  <button
                    onClick={() => moveDown(i)}
                    disabled={i >= entries.length - 1}
                    className="px-2 py-1 text-xs rounded border border-input hover:bg-accent disabled:opacity-30"
                    title="Move down"
                  >
                    ↓
                  </button>
                  <button
                    onClick={() => removeEntry(i)}
                    className="px-2 py-1 text-xs rounded border border-red-300 text-red-500 hover:bg-red-50"
                    title="Remove"
                  >
                    ✕
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {entries.length >= 2 && (
        <Button onClick={mergeTracks} disabled={loading}>
          {loading ? 'Merging...' : `🔗 Merge ${entries.length} Tracks`}
        </Button>
      )}

      {entries.length > 0 && entries.length < 2 && (
        <p className="text-sm text-muted-foreground">Add at least 2 audio files to merge.</p>
      )}

      {mergedBlob && (
        <div className="rounded-md border bg-card p-4 space-y-2">
          <p className="text-sm text-muted-foreground">Merged audio ready!</p>
          <Button onClick={downloadMerged}>⬇ Download Merged WAV</Button>
        </div>
      )}
    </div>
  );
}
