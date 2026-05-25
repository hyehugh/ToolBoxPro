"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export function IpCalculatorTool() {
  const { t } = useLocale();
  const [input, setInput] = useState("");
  const [result, setResult] = useState<{
    ipAddress: string;
    subnetMask: string;
    networkAddress: string;
    broadcastAddress: string;
    hostRange: string;
    totalHosts: number;
    usableHosts: number;
    cidr: number;
  } | null>(null);
  const [error, setError] = useState("");

  const ipToBinary = (ip: string): number => {
    const parts = ip.split(".").map(Number);
    return ((parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3]) >>> 0;
  };

  const binaryToIp = (num: number): string => {
    return [
      (num >>> 24) & 255,
      (num >>> 16) & 255,
      (num >>> 8) & 255,
      num & 255,
    ].join(".");
  };

  const cidrToMask = (cidr: number): number => {
    return (0xffffffff << (32 - cidr)) >>> 0;
  };

  const calculate = () => {
    setError("");
    setResult(null);

    const trimmed = input.trim();
    if (!trimmed) {
      setError(t('toolCommon.ipCalc.enterIp'));
      return;
    }

    const match = trimmed.match(/^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})\/(\d{1,2})$/);
    if (!match) {
      setError(t('toolCommon.ipCalc.invalidFormat'));
      return;
    }

    const ipStr = match[1];
    const cidr = parseInt(match[2], 10);

    if (cidr < 0 || cidr > 32) {
      setError(t('toolCommon.ipCalc.cidrRange'));
      return;
    }

    const ipParts = ipStr.split(".").map(Number);
    for (const part of ipParts) {
      if (part < 0 || part > 255) {
        setError(t('toolCommon.ipCalc.octetRange'));
        return;
      }
    }

    const ipNum = ipToBinary(ipStr);
    const maskNum = cidrToMask(cidr);
    const networkNum = (ipNum & maskNum) >>> 0;
    const broadcastNum = (networkNum | ~maskNum) >>> 0;

    const totalHosts = Math.pow(2, 32 - cidr);
    const usableHosts = cidr >= 31 ? Math.max(0, totalHosts) : Math.max(0, totalHosts - 2);

    const hostStart = cidr >= 31 ? networkNum : (networkNum + 1) >>> 0;
    const hostEnd = cidr >= 31 ? broadcastNum : (broadcastNum - 1) >>> 0;

    setResult({
      ipAddress: ipStr,
      subnetMask: binaryToIp(maskNum),
      networkAddress: binaryToIp(networkNum),
      broadcastAddress: binaryToIp(broadcastNum),
      hostRange: `${binaryToIp(hostStart)} - ${binaryToIp(hostEnd)}`,
      totalHosts: totalHosts,
      usableHosts: usableHosts,
      cidr,
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">{t('toolCommon.ipCalc.ipAddress')} / CIDR</label>
        <input
          type="text"
          className="w-full p-3 border rounded font-mono text-sm"
          placeholder="192.168.1.0/24"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <p className="text-xs text-muted-foreground mt-1">
          {t('toolCommon.ipCalc.cidrHint')}
        </p>
      </div>
      <Button onClick={calculate}>{t('common.calculate')}</Button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {result && (
        <div className="border rounded p-4 space-y-2 bg-muted/30">
          <h3 className="font-medium text-sm mb-2">{t('common.result')}</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-muted-foreground">{t('toolCommon.ipCalc.ipAddress')}:</span>
              <span className="ml-2 font-mono">{result.ipAddress}</span>
            </div>
            <div>
              <span className="text-muted-foreground">CIDR:</span>
              <span className="ml-2 font-mono">/{result.cidr}</span>
            </div>
            <div>
              <span className="text-muted-foreground">{t('toolCommon.ipCalc.subnetMask')}:</span>
              <span className="ml-2 font-mono">{result.subnetMask}</span>
            </div>
            <div>
              <span className="text-muted-foreground">{t('toolCommon.ipCalc.networkAddress')}:</span>
              <span className="ml-2 font-mono">{result.networkAddress}</span>
            </div>
            <div>
              <span className="text-muted-foreground">{t('toolCommon.ipCalc.broadcast')}:</span>
              <span className="ml-2 font-mono">{result.broadcastAddress}</span>
            </div>
            <div>
              <span className="text-muted-foreground">{t('toolCommon.ipCalc.usableHosts')}:</span>
              <span className="ml-2 font-mono">{result.usableHosts.toLocaleString()}</span>
            </div>
            <div>
              <span className="text-muted-foreground">{t('toolCommon.ipCalc.totalHosts')}:</span>
              <span className="ml-2 font-mono">{result.totalHosts.toLocaleString()}</span>
            </div>
            <div className="col-span-2">
              <span className="text-muted-foreground">{t('toolCommon.ipCalc.hostRange')}:</span>
              <span className="ml-2 font-mono">{result.hostRange}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
