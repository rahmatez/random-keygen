"use client";

import React, { useState, useEffect, useCallback } from "react";
import { generateRandomString } from "@/utils/crypto";
import KeyRow from "@/components/KeyRow";
import BulkGenerator from "@/components/BulkGenerator";
import TerminalCommands from "@/components/TerminalCommands";

const CHARSETS = [
  { id: "alphanumeric", label: "Alphanumeric (a-z, A-Z, 0-9)", chars: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", size: 62 },
  { id: "lowercase", label: "Lowercase (a-z)", chars: "abcdefghijklmnopqrstuvwxyz", size: 26 },
  { id: "uppercase", label: "Uppercase (A-Z)", chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", size: 26 },
  { id: "hex", label: "Hexadecimal (0-9, a-f)", chars: "0123456789abcdef", size: 16 },
  { id: "hex-upper", label: "Hex Uppercase (0-9, A-F)", chars: "0123456789ABCDEF", size: 16 },
  { id: "urlsafe", label: "URL-safe (a-z, A-Z, 0-9, -, _)", chars: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_", size: 64 },
];

function generateCustomString(length, charset) {
  const chars = charset;
  let result = "";
  const array = new Uint32Array(length);
  crypto.getRandomValues(array);
  for (let i = 0; i < length; i++) {
    result += chars[array[i] % chars.length];
  }
  return result;
}

export default function RandomStringPage() {
  const [length, setLength] = useState(32);
  const [charset, setCharset] = useState(CHARSETS[0]);
  const [strings, setStrings] = useState([]);

  const generate = useCallback(() => {
    const items = [];
    for (let i = 0; i < 5; i++) items.push(generateCustomString(length, charset.chars));
    setStrings(items);
  }, [length, charset]);

  useEffect(() => {
    const t = setTimeout(generate, 0);
    return () => clearTimeout(t);
  }, [generate]);

  const entropy = Math.round(length * Math.log2(charset.size));
  const generateSingle = useCallback(() => generateCustomString(length, charset.chars), [length, charset]);

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">Random String Generator</h1>
        <p className="text-sm text-(--muted)">
          Generate cryptographically secure random strings with customizable length and character sets. Perfect for tokens, identifiers, temporary passwords, and testing.
        </p>
      </div>

      {/* Settings */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Length: {length} characters</label>
          <div className="flex items-center gap-4">
            <input type="range" min="8" max="128" value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="flex-1 h-1.5 bg-(--border) rounded-lg appearance-none cursor-pointer accent-(--accent)"
            />
            <input type="number" min="1" max="256" value={length}
              onChange={(e) => setLength(Math.max(1, Math.min(256, parseInt(e.target.value) || 1)))}
              className="w-16 px-2 py-1 text-center text-sm border border-(--border) bg-(--background) rounded-lg focus:outline-none focus:border-(--accent)"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Character Set</label>
          <div className="flex flex-wrap gap-2">
            {CHARSETS.map(cs => (
              <button key={cs.id} onClick={() => setCharset(cs)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg border cursor-pointer transition-all ${
                  charset.id === cs.id ? "border-(--accent) bg-[rgba(16,185,129,0.08)] text-(--accent)" : "border-(--border) text-(--muted) hover:border-(--accent)"
                }`}
              >{cs.label}</button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-(--border) pt-4 text-xs text-(--muted)">
          <div>
            Entropy: <span className="font-semibold text-(--accent) bg-[rgba(16,185,129,0.1)] px-1.5 py-0.5 rounded-full">{entropy} bits</span>
            <span className="ml-2 opacity-70">({charset.size} unique characters, {length} length)</span>
          </div>
          <button onClick={generate} className="btn-primary py-1.5 px-4 text-sm">Generate</button>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-2">
        {strings.map((s, i) => <KeyRow key={i} value={s} />)}
      </div>

      {/* Use Cases */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">Common Use Cases</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: "Session IDs", desc: "32+ character alphanumeric strings for secure session identification." },
            { title: "Database IDs", desc: "URL-safe random strings as alternatives to auto-increment IDs." },
            { title: "Temporary Tokens", desc: "One-time verification codes, password reset tokens, email confirmations." },
            { title: "Test Data", desc: "Random strings for testing, mock data generation, and development." },
          ].map((uc, i) => (
            <div key={i} className="space-y-1">
              <p className="text-sm font-semibold text-(--foreground)">{uc.title}</p>
              <p className="text-xs text-(--muted) leading-relaxed">{uc.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cryptographic note */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
        <div className="flex items-start gap-2">
          <span className="text-blue-400 shrink-0">🔐</span>
          <div>
            <p className="text-sm font-semibold text-(--foreground) mb-1">Cryptographically Secure</p>
            <p className="text-sm text-(--muted)">These strings are generated using the Web Crypto API&apos;s <code className="font-mono text-xs bg-blue-500/20 px-1 rounded">crypto.getRandomValues()</code>, which provides cryptographically secure random values suitable for security-sensitive applications.</p>
          </div>
        </div>
      </div>

      <BulkGenerator generateFn={generateSingle} label="strings" />

      <TerminalCommands commands={[
        { label: "OpenSSL alphanumeric", code: "openssl rand -base64 32 | tr -dc 'a-zA-Z0-9' | head -c 32" },
        { label: "OpenSSL hex", code: "openssl rand -hex 16 | head -c 32" },
        { label: "Python URL-safe", code: "python3 -c \"import secrets; print(secrets.token_urlsafe(24))\"" },
        { label: "Node.js", code: "node -e \"console.log(require('crypto').randomBytes(16).toString('hex').slice(0, 32))\"" },
      ]} />
    </div>
  );
}
