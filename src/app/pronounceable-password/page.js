"use client";

import React, { useState, useEffect, useCallback } from "react";
import { generatePronounceablePassword } from "@/utils/crypto";
import KeyRow from "@/components/KeyRow";
import BulkGenerator from "@/components/BulkGenerator";
import RelatedTools from "@/components/RelatedTools";

export default function PronounceablePage() {
  const [length, setLength] = useState(12);
  const [capitalize, setCapitalize] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [passwords, setPasswords] = useState([]);

  const generate = useCallback(() => {
    const items = [];
    for (let i = 0; i < 8; i++) {
      let pw = generatePronounceablePassword(length);
      if (capitalize) {
        pw = pw.split("").map((c, idx) => idx === 0 ? c.toUpperCase() : (Math.random() < 0.15 ? c.toUpperCase() : c)).join("");
      }
      if (includeNumbers) {
        const pos = Math.floor(pw.length * 0.6);
        const digit = Math.floor(Math.random() * 10).toString();
        pw = pw.slice(0, pos) + digit + pw.slice(pos + 1);
      }
      items.push(pw);
    }
    setPasswords(items);
  }, [length, capitalize, includeNumbers]);

  useEffect(() => {
    const t = setTimeout(generate, 0);
    return () => clearTimeout(t);
  }, [generate]);

  const entropy = Math.round(length * Math.log2(26) * 0.65);
  const generateSingle = useCallback(() => {
    let pw = generatePronounceablePassword(length);
    if (capitalize) pw = pw.charAt(0).toUpperCase() + pw.slice(1);
    return pw;
  }, [length, capitalize]);

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">Pronounceable Password Generator</h1>
        <p className="text-sm text-(--muted)">
          Generate secure passwords that are easy to pronounce and say out loud. Perfect for sharing over phone or when you need to read a password to someone.
        </p>
      </div>

      {/* Settings */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Length: {length}</label>
            <div className="flex items-center gap-4">
              <input type="range" min="6" max="32" value={length}
                onChange={(e) => setLength(parseInt(e.target.value))}
                className="flex-1 h-1.5 bg-(--border) rounded-lg appearance-none cursor-pointer accent-(--accent)"
              />
              <input type="number" min="6" max="32" value={length}
                onChange={(e) => setLength(Math.max(6, Math.min(32, parseInt(e.target.value) || 6)))}
                className="w-16 px-2 py-1 text-center text-sm border border-(--border) bg-(--background) rounded-lg focus:outline-none focus:border-(--accent)"
              />
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-(--muted)">Options</p>
            <label className="flex items-center gap-2 text-sm text-(--foreground) cursor-pointer">
              <input type="checkbox" checked={capitalize} onChange={(e) => setCapitalize(e.target.checked)}
                className="w-4 h-4 rounded border-(--border) accent-(--accent)"
              />
              Capitalize some letters
            </label>
            <label className="flex items-center gap-2 text-sm text-(--foreground) cursor-pointer">
              <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)}
                className="w-4 h-4 rounded border-(--border) accent-(--accent)"
              />
              Include numbers
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-(--border) pt-4 text-xs text-(--muted)">
          <span>Estimated entropy: <span className="font-semibold text-(--accent) bg-[rgba(16,185,129,0.1)] px-1.5 py-0.5 rounded-full">~{entropy} bits</span></span>
          <button onClick={generate} className="btn-primary py-1.5 px-4 text-sm">Generate</button>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-2">
        {passwords.map((p, i) => <KeyRow key={i} value={p} />)}
      </div>

      {/* How it works */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">How Pronounceable Passwords Work</h3>
        <p className="text-sm text-(--muted) leading-relaxed">
          These passwords use alternating consonant-vowel patterns (like <span className="font-mono bg-(--code-bg) px-1 rounded text-(--foreground)">ba-ke-lo-mi</span>) which makes them easier to say and remember while still being secure. The tradeoff is slightly lower entropy compared to fully random passwords.
        </p>
        <p className="text-sm text-(--muted) leading-relaxed">
          For maximum security with memorability, consider using a <a href="/passphrase" className="text-(--accent) hover:underline">passphrase</a> instead.
        </p>
      </div>

      {/* Related + Bulk */}
      <RelatedTools tools={[
        { name: "Passphrase", href: "/passphrase", desc: "Memorable word combinations" },
        { name: "Memorable Password", href: "/memorable-password", desc: "Word-based patterns" },
        { name: "Random Password", href: "/password", desc: "Maximum entropy" },
      ]} />
      <BulkGenerator generateFn={generateSingle} label="passwords" />
    </div>
  );
}
