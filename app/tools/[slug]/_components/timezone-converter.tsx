'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface Timezone {
  value: string;
  label: string;
  offset: string;
}

const TIMEZONES: Timezone[] = [
  { value: 'Pacific/Midway', label: 'Midway', offset: 'UTC-11' },
  { value: 'Pacific/Honolulu', label: 'Honolulu', offset: 'UTC-10' },
  { value: 'America/Anchorage', label: 'Anchorage', offset: 'UTC-9' },
  { value: 'America/Los_Angeles', label: 'Los Angeles (PST)', offset: 'UTC-8' },
  { value: 'America/Tijuana', label: 'Tijuana', offset: 'UTC-8' },
  { value: 'America/Denver', label: 'Denver (MST)', offset: 'UTC-7' },
  { value: 'America/Phoenix', label: 'Phoenix', offset: 'UTC-7' },
  { value: 'America/Chicago', label: 'Chicago (CST)', offset: 'UTC-6' },
  { value: 'America/Mexico_City', label: 'Mexico City', offset: 'UTC-6' },
  { value: 'America/New_York', label: 'New York (EST)', offset: 'UTC-5' },
  { value: 'America/Bogota', label: 'Bogota', offset: 'UTC-5' },
  { value: 'America/Halifax', label: 'Halifax', offset: 'UTC-4' },
  { value: 'America/Caracas', label: 'Caracas', offset: 'UTC-4' },
  { value: 'America/Santiago', label: 'Santiago', offset: 'UTC-3' },
  { value: 'America/Sao_Paulo', label: 'São Paulo', offset: 'UTC-3' },
  { value: 'America/Argentina/Buenos_Aires', label: 'Buenos Aires', offset: 'UTC-3' },
  { value: 'America/St_Johns', label: 'St. Johns', offset: 'UTC-3:30' },
  { value: 'Atlantic/Azores', label: 'Azores', offset: 'UTC-1' },
  { value: 'UTC', label: 'UTC', offset: 'UTC+0' },
  { value: 'Europe/London', label: 'London (GMT/BST)', offset: 'UTC+0/+1' },
  { value: 'Europe/Dublin', label: 'Dublin', offset: 'UTC+0/+1' },
  { value: 'Europe/Lisbon', label: 'Lisbon', offset: 'UTC+0/+1' },
  { value: 'Africa/Casablanca', label: 'Casablanca', offset: 'UTC+0/+1' },
  { value: 'Europe/Berlin', label: 'Berlin (CET/CEST)', offset: 'UTC+1/+2' },
  { value: 'Europe/Paris', label: 'Paris', offset: 'UTC+1/+2' },
  { value: 'Europe/Madrid', label: 'Madrid', offset: 'UTC+1/+2' },
  { value: 'Europe/Rome', label: 'Rome', offset: 'UTC+1/+2' },
  { value: 'Europe/Amsterdam', label: 'Amsterdam', offset: 'UTC+1/+2' },
  { value: 'Europe/Vienna', label: 'Vienna', offset: 'UTC+1/+2' },
  { value: 'Europe/Stockholm', label: 'Stockholm', offset: 'UTC+1/+2' },
  { value: 'Europe/Prague', label: 'Prague', offset: 'UTC+1/+2' },
  { value: 'Europe/Warsaw', label: 'Warsaw', offset: 'UTC+1/+2' },
  { value: 'Europe/Budapest', label: 'Budapest', offset: 'UTC+1/+2' },
  { value: 'Europe/Athens', label: 'Athens (EET/EEST)', offset: 'UTC+2/+3' },
  { value: 'Europe/Helsinki', label: 'Helsinki', offset: 'UTC+2/+3' },
  { value: 'Europe/Istanbul', label: 'Istanbul', offset: 'UTC+3' },
  { value: 'Europe/Moscow', label: 'Moscow (MSK)', offset: 'UTC+3' },
  { value: 'Asia/Dubai', label: 'Dubai', offset: 'UTC+4' },
  { value: 'Asia/Baku', label: 'Baku', offset: 'UTC+4' },
  { value: 'Asia/Kabul', label: 'Kabul', offset: 'UTC+4:30' },
  { value: 'Asia/Karachi', label: 'Karachi', offset: 'UTC+5' },
  { value: 'Asia/Yekaterinburg', label: 'Yekaterinburg', offset: 'UTC+5' },
  { value: 'Asia/Kolkata', label: 'India (IST)', offset: 'UTC+5:30' },
  { value: 'Asia/Kathmandu', label: 'Kathmandu', offset: 'UTC+5:45' },
  { value: 'Asia/Dhaka', label: 'Dhaka', offset: 'UTC+6' },
  { value: 'Asia/Almaty', label: 'Almaty', offset: 'UTC+6' },
  { value: 'Asia/Yangon', label: 'Yangon', offset: 'UTC+6:30' },
  { value: 'Asia/Bangkok', label: 'Bangkok (ICT)', offset: 'UTC+7' },
  { value: 'Asia/Jakarta', label: 'Jakarta', offset: 'UTC+7' },
  { value: 'Asia/Ho_Chi_Minh', label: 'Ho Chi Minh', offset: 'UTC+7' },
  { value: 'Asia/Shanghai', label: 'Beijing/Shanghai (CST)', offset: 'UTC+8' },
  { value: 'Asia/Hong_Kong', label: 'Hong Kong', offset: 'UTC+8' },
  { value: 'Asia/Singapore', label: 'Singapore', offset: 'UTC+8' },
  { value: 'Asia/Taipei', label: 'Taipei', offset: 'UTC+8' },
  { value: 'Asia/Tokyo', label: 'Tokyo (JST)', offset: 'UTC+9' },
  { value: 'Asia/Seoul', label: 'Seoul (KST)', offset: 'UTC+9' },
  { value: 'Australia/Perth', label: 'Perth (AWST)', offset: 'UTC+8' },
  { value: 'Australia/Darwin', label: 'Darwin (ACST)', offset: 'UTC+9:30' },
  { value: 'Australia/Adelaide', label: 'Adelaide (ACST)', offset: 'UTC+9:30/+10:30' },
  { value: 'Australia/Sydney', label: 'Sydney (AEST)', offset: 'UTC+10/+11' },
  { value: 'Australia/Brisbane', label: 'Brisbane (AEST)', offset: 'UTC+10' },
  { value: 'Australia/Canberra', label: 'Canberra (AEST)', offset: 'UTC+10/+11' },
  { value: 'Pacific/Guam', label: 'Guam', offset: 'UTC+10' },
  { value: 'Pacific/Port_Moresby', label: 'Port Moresby', offset: 'UTC+10' },
  { value: 'Pacific/Fiji', label: 'Fiji', offset: 'UTC+12' },
  { value: 'Pacific/Auckland', label: 'Auckland (NZST/NZDT)', offset: 'UTC+12/+13' },
  { value: 'Pacific/Apia', label: 'Apia', offset: 'UTC+13' },
  { value: 'Pacific/Kiritimati', label: 'Kiritimati', offset: 'UTC+14' },
];

export function TimezoneConverterTool() {
  const [fromTz, setFromTz] = useState('UTC');
  const [toTz, setToTz] = useState('America/New_York');
  const [dateTime, setDateTime] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleConvert = () => {
    setError('');
    setResult('');

    if (!dateTime.trim()) {
      setError('Please enter a date and time.');
      return;
    }

    try {
      // Try parsing the input as a date/time string
      const date = new Date(dateTime.trim());

      if (isNaN(date.getTime())) {
        // Try with current date if only time was provided
        const now = new Date();
        const timeMatch = dateTime.trim().match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)?$/i);
        if (timeMatch) {
          let hours = parseInt(timeMatch[1]);
          const minutes = parseInt(timeMatch[2]);
          const seconds = timeMatch[3] ? parseInt(timeMatch[3]) : 0;
          const ampm = timeMatch[4]?.toUpperCase();

          if (ampm === 'PM' && hours < 12) hours += 12;
          if (ampm === 'AM' && hours === 12) hours = 0;

          now.setHours(hours, minutes, seconds, 0);
          const fromDate = new Date(
            now.toLocaleString('en-US', { timeZone: fromTz })
          );
          // We need to work with the input as being in the from timezone
          // Create a date string that the system interprets correctly
          const inputStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}T${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
          const fromDate2 = new Date(inputStr + getOffsetSuffix(fromTz));

          const options: Intl.DateTimeFormatOptions = {
            timeZone: toTz,
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
          };
          setResult(
            new Intl.DateTimeFormat('en-US', options).format(fromDate2)
          );
          return;
        }

        setError(
          'Invalid date/time format. Try formats like:\n' +
            '- 2024-12-25 15:30\n' +
            '- 3:30 PM\n' +
            '- 2024-12-25T15:30:00'
        );
        return;
      }

      // Format the output in the target timezone
      const options: Intl.DateTimeFormatOptions = {
        timeZone: toTz,
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };

      // We need to reinterpret the input date as being in the FROM timezone
      // Get the ISO string parts
      const isoStr = date.toISOString();
      const datePart = isoStr.slice(0, 10);
      const timePart = isoStr.slice(11, 19);

      // Create a date that treats the input as from-timezone
      const fromDate = new Date(`${datePart}T${timePart}${getOffsetSuffix(fromTz)}`);

      setResult(
        new Intl.DateTimeFormat('en-US', {
          ...options,
          timeZone: toTz,
        }).format(fromDate) +
          ` (${toTz})`
      );
    } catch (e) {
      setError('Conversion failed. Please check your input.');
    }
  };

  const handleNow = () => {
    const now = new Date();
    setDateTime(
      now.toISOString().slice(0, 16).replace('T', ' ')
    );
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Timezone Converter</h2>
      <p className="text-sm text-muted-foreground">
        Convert a date and time from one timezone to another.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">From Timezone</label>
          <select
            className="w-full p-2 border rounded-md text-sm"
            value={fromTz}
            onChange={(e) => setFromTz(e.target.value)}
          >
            {TIMEZONES.map((tz) => (
              <option key={tz.value} value={tz.value}>
                {tz.label} ({tz.offset})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">To Timezone</label>
          <select
            className="w-full p-2 border rounded-md text-sm"
            value={toTz}
            onChange={(e) => setToTz(e.target.value)}
          >
            {TIMEZONES.map((tz) => (
              <option key={tz.value} value={tz.value}>
                {tz.label} ({tz.offset})
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">
          Date &amp; Time ({fromTz})
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 p-2 border rounded-md font-mono text-sm"
            placeholder="e.g. 2024-12-25 15:30 or 3:30 PM"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
          <Button variant="outline" onClick={handleNow}>
            Now
          </Button>
        </div>
      </div>
      <Button onClick={handleConvert}>Convert</Button>
      {error && (
        <div className="p-3 border border-red-300 bg-red-50 rounded-md text-sm text-red-700 whitespace-pre-line">
          {error}
        </div>
      )}
      {result && !error && (
        <div className="p-4 border border-green-300 bg-green-50 rounded-md">
          <label className="block text-sm font-medium text-green-800 mb-1">
            Result ({toTz}):
          </label>
          <div className="text-lg font-bold text-green-900">{result}</div>
          <Button
            variant="outline"
            className="mt-2"
            onClick={() => navigator.clipboard.writeText(result)}
          >
            Copy to Clipboard
          </Button>
        </div>
      )}
    </div>
  );
}

function getOffsetSuffix(tz: string): string {
  // Get the current offset for the timezone
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    timeZoneName: 'longOffset',
  });
  const parts = formatter.formatToParts(now);
  const offsetPart = parts.find((p) => p.type === 'timeZoneName');
  if (!offsetPart) return '+00:00';

  const offset = offsetPart.value.replace('GMT', '').trim();
  if (!offset) return '+00:00';
  // Ensure format is +HH:MM or -HH:MM
  if (/^[+-]\d{1,2}$/.test(offset)) {
    const hours = parseInt(offset);
    const sign = hours >= 0 ? '+' : '-';
    const abs = Math.abs(hours);
    return `${sign}${String(abs).padStart(2, '0')}:00`;
  }
  if (/^[+-]\d{1,2}:\d{2}$/.test(offset)) {
    return offset;
  }
  return '+00:00';
}
