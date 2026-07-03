"use client";

import React, { useState, useEffect, useCallback } from "react";
import KeyRow from "@/components/KeyRow";
import BulkGenerator from "@/components/BulkGenerator";
import TerminalCommands from "@/components/TerminalCommands";
import CodeBlock from "@/components/CodeBlock";

const KEY_SIZES = [
  { bytes: 16, bits: 128, label: "16 bytes (128 bits)" },
  { bytes: 32, bits: 256, label: "32 bytes (256 bits) — Recommended" },
  { bytes: 64, bits: 512, label: "64 bytes (512 bits) — Maximum security" },
];

const FORMATS = [
  { id: "base64", label: "Base64" },
  { id: "hex", label: "Hexadecimal" },
  { id: "urlsafe", label: "URL-safe" },
];

function generateSecret(bytes, format) {
  const arr = new Uint8Array(bytes);
  crypto.getRandomValues(arr);
  if (format === "hex") return Array.from(arr).map(b => b.toString(16).padStart(2, "0")).join("");
  if (format === "urlsafe") return btoa(String.fromCharCode(...arr)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  return btoa(String.fromCharCode(...arr));
}

export default function SecretKeyPage() {
  const [size, setSize] = useState(KEY_SIZES[1]);
  const [format, setFormat] = useState("base64");
  const [secrets, setSecrets] = useState([]);

  const generate = useCallback(() => {
    const items = [];
    for (let i = 0; i < 5; i++) items.push(generateSecret(size.bytes, format));
    setSecrets(items);
  }, [size, format]);

  useEffect(() => {
    const t = setTimeout(generate, 0);
    return () => clearTimeout(t);
  }, [generate]);

  const generateSingle = useCallback(() => generateSecret(size.bytes, format), [size, format]);
  const secrets3 = secrets.slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">Secret Key Generator</h1>
        <p className="text-sm text-(--muted)">
          Generate cryptographically secure secrets for session management, API authentication, and other security-sensitive applications.
        </p>
      </div>

      {/* Settings */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Length (bytes)</label>
            <div className="flex flex-col gap-2">
              {KEY_SIZES.map(s => (
                <button key={s.bytes} onClick={() => setSize(s)}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg border cursor-pointer transition-all text-left ${
                    size.bytes === s.bytes ? "border-(--accent) bg-[rgba(16,185,129,0.08)] text-(--accent)" : "border-(--border) text-(--muted) hover:border-(--accent)"
                  }`}
                >{s.label}</button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Format</label>
            <div className="flex flex-col gap-2">
              {FORMATS.map(f => (
                <button key={f.id} onClick={() => setFormat(f.id)}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg border cursor-pointer transition-all text-left ${
                    format === f.id ? "border-(--accent) bg-[rgba(16,185,129,0.08)] text-(--accent)" : "border-(--border) text-(--muted) hover:border-(--accent)"
                  }`}
                >{f.label}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-(--border) pt-4 text-xs text-(--muted)">
          <div>Entropy: <span className="font-semibold text-(--accent) bg-[rgba(16,185,129,0.1)] px-1.5 py-0.5 rounded-full">{size.bits} bits</span></div>
          <button onClick={generate} className="btn-primary py-1.5 px-4 text-sm">Generate</button>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-2">
        {secrets.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-[10px] text-(--muted) bg-(--code-bg) border border-(--border) px-2 py-0.5 rounded whitespace-nowrap">{size.bits} bits</span>
            <KeyRow value={s} />
          </div>
        ))}
      </div>

      {/* Common uses */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">Common Uses</h3>
        <CodeBlock filename=".env" code={`# Session secret
SESSION_SECRET=${secrets3[0] || "generated-session-secret"}

# Cookie signing secret
COOKIE_SECRET=${secrets3[1] || "generated-cookie-secret"}

# CSRF token secret
CSRF_SECRET=${secrets3[2] || "generated-csrf-secret"}`} />
        <CodeBlock filename="Express.js session" code={`const session = require('express-session');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));`} />
      </div>

      {/* Length guidance */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-(--foreground) mb-3">Choosing Secret Length</h3>
        <ul className="space-y-2">
          {[
            ["128 bits (16 bytes)", "Minimum for most applications"],
            ["256 bits (32 bytes)", "Recommended for session secrets"],
            ["512 bits (64 bytes)", "Maximum security for sensitive operations"],
          ].map(([bits, desc], i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <code className="font-mono text-[11px] text-(--accent) bg-(--code-bg) border border-(--border) px-2 py-0.5 rounded whitespace-nowrap">{bits}</code>
              <span className="text-(--muted)">{desc}</span>
            </li>
          ))}
        </ul>
      </div>

      <BulkGenerator generateFn={generateSingle} label="secrets" />

      <TerminalCommands commands={[
        { label: "Base64", code: "openssl rand -base64 32" },
        { label: "Hexadecimal", code: "openssl rand -hex 32" },
        { label: "URL-safe (Python)", code: "python3 -c \"import secrets; print(secrets.token_urlsafe(32))\"" },
        { label: "Node.js", code: "node -e \"console.log(require('crypto').randomBytes(32).toString('base64'))\"" },
      ]} />
    </div>
  );
}
