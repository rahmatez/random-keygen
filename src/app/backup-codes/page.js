"use client";

import React, { useState, useEffect, useCallback } from "react";
import KeyRow from "@/components/KeyRow";
import BulkGenerator from "@/components/BulkGenerator";
import { FiPrinter, FiKey, FiLock, FiSlash } from "react-icons/fi";
import TerminalCommands from "@/components/TerminalCommands";
import { generatePassword } from "@/utils/crypto";

const generateBackupCode = () => {
  const chars = "abcdefghjkmnpqrstuvwxyz23456789";
  let code = "";
  for (let i = 0; i < 4; i++) code += chars[Math.floor(Math.random() * chars.length)];
  code += "-";
  for (let i = 0; i < 4; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
};

export default function BackupCodesPage() {
  const [codeCount, setCodeCount] = useState(10);
  const [codes, setCodes] = useState([]);

  const generate = useCallback(() => {
    const items = [];
    for (let i = 0; i < codeCount; i++) items.push(generateBackupCode());
    setCodes(items);
  }, [codeCount]);

  useEffect(() => {
    const t = setTimeout(generate, 0);
    return () => clearTimeout(t);
  }, [generate]);

  const handleCopyAll = async () => {
    const text = codes.map((c, i) => `${i + 1}. ${c}`).join("\n");
    try { await navigator.clipboard.writeText(text); } catch (err) { console.error(err); }
  };

  const handleDownload = () => {
    const text = "Backup Codes\n============\n" + codes.map((c, i) => `${i + 1}. ${c}`).join("\n") + "\n\nStore these safely!";
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "backup-codes.txt"; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">Backup Codes Generator</h1>
        <p className="text-sm text-(--muted)">
          Generate secure backup codes for two-factor authentication recovery. Store these safely — they&apos;re your last resort if you lose access to your 2FA device.
        </p>
      </div>

      {/* Settings */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Number of codes</label>
          <div className="flex flex-wrap gap-2">
            {[8, 10, 12, 16].map(n => (
              <button key={n} onClick={() => setCodeCount(n)}
                className={`px-4 py-2 text-sm font-semibold rounded-lg border cursor-pointer transition-all ${
                  codeCount === n ? "border-(--accent) bg-[rgba(16,185,129,0.08)] text-(--accent)" : "border-(--border) text-(--muted) hover:border-(--accent)"
                }`}
              >{n}</button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-3 justify-between items-center border-t border-(--border) pt-4">
          <button onClick={generate} className="btn-primary py-1.5 px-4 text-sm">Generate New</button>
          <div className="flex gap-2">
            <button onClick={handleCopyAll} className="btn-ghost py-1.5 px-3 text-xs font-semibold cursor-pointer">Copy All</button>
            <button onClick={handleDownload} className="btn-ghost py-1.5 px-3 text-xs font-semibold cursor-pointer">Download as Text</button>
          </div>
        </div>
      </div>

      {/* Code List */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-5 shadow-sm">
        <div className="space-y-1.5">
          {codes.map((code, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-xs text-(--muted) w-5 text-right shrink-0">{i + 1}.</span>
              <KeyRow value={code} />
            </div>
          ))}
        </div>
      </div>

      {/* How to store */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">How to Store Backup Codes Safely</h3>
        <ul className="space-y-2">
          {[
            { icon: <FiPrinter className="shrink-0 mt-0.5 text-(--accent)" size={14} />, text: "Print them — Store a physical copy in a safe or safety deposit box" },
            { icon: <FiKey className="shrink-0 mt-0.5 text-(--accent)" size={14} />, text: "Password manager — Store in a separate password manager from the account" },
            { icon: <FiLock className="shrink-0 mt-0.5 text-(--accent)" size={14} />, text: "Encrypted file — Keep in an encrypted disk image or container" },
            { icon: <FiSlash className="shrink-0 mt-0.5 text-red-400" size={14} />, text: "Never store — In email, cloud storage, or anywhere easily accessible" },
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-(--muted)">
              {tip.icon} {tip.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Using codes */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">Using Backup Codes</h3>
        <ul className="space-y-2">
          {[
            "Each code can typically only be used once",
            "Cross off or delete codes after using them",
            "Generate new codes before you run out",
            "If you think codes are compromised, regenerate immediately",
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-(--muted)">
              <span className="text-(--accent) shrink-0">→</span> {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
