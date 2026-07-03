"use client";

import React, { useState, useEffect, useCallback } from "react";
import { generatePassphrase, generatePassword, calculateEntropy, getStrengthLabel } from "@/utils/crypto";
import Link from "next/link";

const NUM = 4;

export default function MasterPasswordPage() {
  const [type, setType] = useState("passphrase");
  const [numWords, setNumWords] = useState(5);
  const [length, setLength] = useState(20);
  const [passwords, setPasswords] = useState([]);

  const generate = useCallback(() => {
    const items = [];
    for (let i = 0; i < NUM; i++) {
      if (type === "passphrase") {
        items.push(generatePassphrase(numWords, "-"));
      } else {
        items.push(generatePassword(length, { lowercase: true, uppercase: true, numbers: true, symbols: false }));
      }
    }
    setPasswords(items);
  }, [type, numWords, length]);

  useEffect(() => {
    const t = setTimeout(generate, 0);
    return () => clearTimeout(t);
  }, [generate]);

  const entropy = type === "passphrase"
    ? Math.round(numWords * Math.log2(768))
    : calculateEntropy(length, 62);

  const { label: strengthLabel, color: strengthColor } = getStrengthLabel(entropy);

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">Master Password Generator</h1>
        <p className="text-sm text-(--muted)">
          Generate an ultra-secure master password for your password manager. This is the most important password you&apos;ll ever create — make it strong.
        </p>
      </div>

      {/* Settings */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-5">
        {/* Type selector */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Type</label>
          <div className="flex gap-3">
            {[
              { id: "passphrase", label: "Passphrase (Recommended)" },
              { id: "random", label: "Random" },
            ].map(t => (
              <button key={t.id} onClick={() => setType(t.id)}
                className={`px-4 py-2 text-sm font-semibold rounded-lg border transition-all cursor-pointer ${
                  type === t.id ? "border-(--accent) bg-[rgba(16,185,129,0.08)] text-(--accent)" : "border-(--border) bg-(--background) text-(--muted) hover:border-(--accent)"
                }`}
              >{t.label}</button>
            ))}
          </div>
        </div>

        {type === "passphrase" ? (
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Words</label>
            <div className="flex flex-wrap gap-2">
              {[4, 5, 6, 7].map(n => (
                <button key={n} onClick={() => setNumWords(n)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border cursor-pointer transition-all ${
                    numWords === n ? "border-(--accent) bg-[rgba(16,185,129,0.08)] text-(--accent)" : "border-(--border) text-(--muted) hover:border-(--accent)"
                  }`}
                >{n} words</button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Length: {length}</label>
            <input type="range" min="16" max="64" value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-full h-1.5 bg-(--border) rounded-lg appearance-none cursor-pointer accent-(--accent)"
            />
          </div>
        )}

        <div className="flex items-center justify-between border-t border-(--border) pt-4">
          <div className="text-xs text-(--muted) flex items-center gap-2">
            <span>Entropy: <span className="font-semibold text-(--accent) bg-[rgba(16,185,129,0.1)] px-1.5 py-0.5 rounded-full">{entropy} bits</span></span>
            <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold" style={{ color: strengthColor, background: `${strengthColor}20` }}>{strengthLabel}</span>
          </div>
          <button onClick={generate} className="btn-primary py-1.5 px-4 text-sm">Generate</button>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-3">
        {passwords.map((pw, i) => (
          <MasterPasswordRow key={i} value={pw} entropy={entropy} strengthColor={strengthColor} />
        ))}
      </div>

      {/* Security Tips */}
      <div className="bg-(--card-bg) border border-amber-400/30 rounded-xl p-6 shadow-sm space-y-3">
        <div className="flex items-start gap-2">
          <span className="text-amber-400 text-lg">⚠️</span>
          <h3 className="text-sm font-semibold text-(--foreground)">Master Password Security Is Critical</h3>
        </div>
        <ul className="space-y-2">
          {[
            { icon: "🧠", text: "Memorize it — Don't write it down anywhere digitally" },
            { icon: "🔒", text: "Never reuse — Use it only for your password manager" },
            { icon: "📱", text: "Enable 2FA — Add another layer of protection" },
            { icon: "🗄️", text: "Write it down securely — Store a physical backup in a safe place" },
            { icon: "✏️", text: "Test your memory — Practice typing it before relying on it" },
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-(--muted)">
              <span className="mt-0.5 shrink-0">{tip.icon}</span> {tip.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Why passphrases */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">Why Passphrases Are Recommended</h3>
        <p className="text-sm text-(--muted) leading-relaxed">
          A 5-word passphrase like <span className="font-mono text-(--foreground) bg-(--code-bg) px-1 rounded">correct-horse-battery-staple</span> is easier to remember than a random string but can have comparable entropy. The key is using truly random words, not a phrase you make up.
        </p>
        <Link href="/passphrase" className="text-sm text-(--accent) hover:underline font-semibold">
          Learn more about passphrases →
        </Link>
      </div>
    </div>
  );
}

function MasterPasswordRow({ value, entropy, strengthColor }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 1500); }
    catch (err) { console.error(err); }
  };
  return (
    <div className="bg-(--card-bg) border border-(--border) rounded-xl p-5 shadow-sm hover:border-(--accent) transition-all">
      <div className="flex items-center justify-between gap-3 mb-3">
        <span className="text-xs font-semibold" style={{ color: strengthColor }}>{entropy} bits</span>
        <button onClick={handleCopy} className="text-xs font-semibold text-(--muted) hover:text-(--accent) cursor-pointer transition-colors">
          {copied ? "✓ Copied!" : "Copy"}
        </button>
      </div>
      <p className="font-mono text-base md:text-lg break-all text-(--foreground) select-all">{value}</p>
    </div>
  );
}
