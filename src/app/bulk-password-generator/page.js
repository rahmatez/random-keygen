"use client";

import React, { useState, useEffect, useCallback } from "react";
import { generatePassword, calculateEntropy } from "@/utils/crypto";
import KeyRow from "@/components/KeyRow";
import BulkGenerator from "@/components/BulkGenerator";
import { FiUser, FiCpu, FiWifi, FiTag, FiDatabase, FiAlertTriangle } from "react-icons/fi";

export default function BulkPasswordGeneratorPage() {
  const [count, setCount] = useState(50);
  const [length, setLength] = useState(16);
  const [opts, setOpts] = useState({ lowercase: true, uppercase: true, numbers: true, symbols: true });
  const [passwords, setPasswords] = useState([]);

  const generate = useCallback(() => {
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push(generatePassword(length, opts));
    }
    setPasswords(items);
  }, [count, length, opts]);

  useEffect(() => {
    const t = setTimeout(generate, 0);
    return () => clearTimeout(t);
  }, [generate]);

  const entropy = calculateEntropy(length,
    (opts.lowercase ? 26 : 0) + (opts.uppercase ? 26 : 0) + (opts.numbers ? 10 : 0) + (opts.symbols ? 28 : 0) || 26
  );

  const handleCopyAll = async () => {
    try { await navigator.clipboard.writeText(passwords.join("\n")); } catch (err) { console.error(err); }
  };

  const handleDownload = (type) => {
    let content, mime, ext;
    if (type === "csv") {
      content = "index,password\n" + passwords.map((p, i) => `${i + 1},"${p}"`).join("\n");
      mime = "text/csv"; ext = "csv";
    } else {
      content = passwords.join("\n");
      mime = "text/plain"; ext = "txt";
    }
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `bulk-passwords.${ext}`; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">Bulk Password Generator</h1>
        <p className="text-sm text-(--muted)">
          Generate hundreds of secure passwords at once. Perfect for user onboarding, IT administration, and creating test accounts.
        </p>
      </div>

      {/* Settings */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Count</label>
            <div className="flex flex-wrap gap-2">
              {[10, 25, 50, 100, 250, 500].map(n => (
                <button key={n} onClick={() => setCount(n)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border cursor-pointer transition-all ${
                    count === n ? "border-(--accent) bg-[rgba(16,185,129,0.08)] text-(--accent)" : "border-(--border) text-(--muted) hover:border-(--accent)"
                  }`}
                >{n}</button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Length: {length}</label>
            <input type="range" min="8" max="64" value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-full h-1.5 bg-(--border) rounded-lg appearance-none cursor-pointer accent-(--accent)"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Characters</label>
          <div className="flex flex-wrap gap-4">
            {[
              { id: "lowercase", label: "a-z" },
              { id: "uppercase", label: "A-Z" },
              { id: "numbers", label: "0-9" },
              { id: "symbols", label: "!@#$" },
            ].map(item => (
              <label key={item.id} className="flex items-center gap-1.5 text-sm text-(--foreground) cursor-pointer">
                <input type="checkbox" checked={opts[item.id]}
                  onChange={() => setOpts(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                  className="w-4 h-4 rounded border-(--border) accent-(--accent)"
                />
                <code className="text-xs font-mono">{item.label}</code>
              </label>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-(--border) pt-4 text-xs text-(--muted)">
          <span>Entropy per password: <span className="font-semibold text-(--accent) bg-[rgba(16,185,129,0.1)] px-1.5 py-0.5 rounded-full">{entropy} bits</span></span>
          <button onClick={generate} className="btn-primary py-1.5 px-4 text-sm">Generate {count} Passwords</button>
        </div>
      </div>

      {/* Actions */}
      {passwords.length > 0 && (
        <div className="flex flex-wrap gap-3">
          <button onClick={handleCopyAll} className="btn-ghost py-2 px-4 text-sm cursor-pointer">Copy All</button>
          <button onClick={() => handleDownload("csv")} className="btn-ghost py-2 px-4 text-sm cursor-pointer">Download CSV</button>
          <button onClick={() => handleDownload("txt")} className="btn-ghost py-2 px-4 text-sm cursor-pointer">Download TXT</button>
        </div>
      )}

      {/* Password list */}
      {passwords.length > 0 && (
        <div className="bg-(--card-bg) border border-(--border) rounded-xl shadow-sm overflow-hidden">
          <div className="max-h-128 overflow-y-auto p-4 space-y-1.5">
            {passwords.map((pw, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-xs text-(--muted) w-8 text-right shrink-0">{i + 1}.</span>
                <KeyRow value={pw} />
              </div>
            ))}
          </div>
          <div className="px-4 py-2 border-t border-(--border) bg-(--code-bg)">
            <p className="text-[11px] text-(--muted) text-center">Click any password to copy it individually</p>
          </div>
        </div>
      )}

      {/* Use cases */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">Use Cases for Bulk Passwords</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { icon: <FiUser size={14} className="shrink-0 mt-0.5 text-(--accent)" />, title: "User onboarding", desc: "Generate initial passwords for new employees" },
            { icon: <FiCpu size={14} className="shrink-0 mt-0.5 text-(--accent)" />, title: "Testing", desc: "Create test accounts for QA and development" },
            { icon: <FiWifi size={14} className="shrink-0 mt-0.5 text-(--accent)" />, title: "WiFi guest networks", desc: "Rotating access credentials" },
            { icon: <FiTag size={14} className="shrink-0 mt-0.5 text-(--accent)" />, title: "Event registration", desc: "Temporary access codes for attendees" },
            { icon: <FiDatabase size={14} className="shrink-0 mt-0.5 text-(--accent)" />, title: "Database seeding", desc: "Populate test data with realistic passwords" },
          ].map((uc, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              {uc.icon}
              <div>
                <span className="font-semibold text-(--foreground)">{uc.title}</span>
                <span className="text-(--muted)"> — {uc.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security reminder */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5">
        <div className="flex items-start gap-2">
          <FiAlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={16} />
          <div>
            <p className="text-sm font-semibold text-(--foreground) mb-1">Security Reminder</p>
            <p className="text-sm text-(--muted)">When distributing bulk passwords, always use secure channels (not plain email) and require users to change their password on first login.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
