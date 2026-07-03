"use client";

import React, { useState, useEffect, useCallback } from "react";
import { generatePassword, calculateEntropy } from "@/utils/crypto";
import KeyRow from "@/components/KeyRow";
import BulkGenerator from "@/components/BulkGenerator";

export default function GamingPasswordPage() {
  const [length, setLength] = useState(16);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [passwords, setPasswords] = useState([]);

  const opts = { lowercase: true, uppercase: true, numbers: true, symbols: includeSymbols };

  const generate = useCallback(() => {
    const items = [];
    for (let i = 0; i < 6; i++) items.push(generatePassword(length, opts));
    setPasswords(items);
  }, [length, includeSymbols]);

  useEffect(() => {
    const t = setTimeout(generate, 0);
    return () => clearTimeout(t);
  }, [generate]);

  const entropy = calculateEntropy(length, 62 + (includeSymbols ? 28 : 0));
  const generateSingle = useCallback(() => generatePassword(length, opts), [length, includeSymbols]);

  const platforms = [
    { name: "Xbox Live", req: "8-16 chars" },
    { name: "PlayStation Network", req: "8-30 chars" },
    { name: "Steam", req: "8-64 chars" },
    { name: "Epic Games", req: "7-64 chars" },
    { name: "Nintendo", req: "8-20 chars" },
    { name: "Battle.net", req: "8-16 chars" },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">Gaming Password Generator</h1>
        <p className="text-sm text-(--muted)">
          Generate secure passwords for your gaming accounts. Optimized for compatibility with Xbox Live, PlayStation Network, Steam, and other platforms.
        </p>
      </div>

      {/* Settings */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Length: {length}</label>
            <input type="range" min="8" max="30" value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-full h-1.5 bg-(--border) rounded-lg appearance-none cursor-pointer accent-(--accent)"
            />
          </div>
          <div className="flex items-end pb-1">
            <label className="flex items-center gap-2 text-sm text-(--foreground) cursor-pointer">
              <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)}
                className="w-4 h-4 rounded border-(--border) accent-(--accent)"
              />
              Include symbols (may cause issues on some platforms)
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-(--border) pt-4 text-xs text-(--muted)">
          <span>Entropy: <span className="font-semibold text-(--accent) bg-[rgba(16,185,129,0.1)] px-1.5 py-0.5 rounded-full">{entropy} bits</span></span>
          <button onClick={generate} className="btn-primary py-1.5 px-4 text-sm">Generate</button>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-2">
        {passwords.map((p, i) => <KeyRow key={i} value={p} />)}
      </div>

      {/* Platform Requirements */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-(--border)">
          <h3 className="text-sm font-semibold text-(--foreground)">Platform Requirements</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3">
          {platforms.map((p, i) => (
            <div key={i} className={`p-4 border-(--border) ${i % 3 !== 2 ? "border-r" : ""} ${i >= 3 ? "border-t" : ""}`}>
              <p className="text-sm font-semibold text-(--foreground)">{p.name}</p>
              <p className="text-xs text-(--muted) mt-1">{p.req}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Security Tips */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">Gaming Account Security Tips</h3>
        <ul className="space-y-2">
          {[
            "Enable 2FA on all gaming accounts",
            "Use unique passwords for each platform",
            "Never share your password, even with friends",
            "Be wary of phishing links in game chats",
            "Check for official domain names before logging in",
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-(--muted)">
              <span className="text-(--accent) shrink-0 mt-0.5">✓</span> {tip}
            </li>
          ))}
        </ul>
      </div>

      <BulkGenerator generateFn={generateSingle} label="passwords" />
    </div>
  );
}
