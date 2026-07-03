"use client";

import React, { useState, useEffect, useCallback } from "react";
import { generateFlaskSecret } from "@/utils/crypto";
import KeyRow from "@/components/KeyRow";
import BulkGenerator from "@/components/BulkGenerator";
import TerminalCommands from "@/components/TerminalCommands";
import CodeBlock from "@/components/CodeBlock";
import { FiCheck } from "react-icons/fi";

const KEY_SIZES = [
  { bytes: 24, bits: 192, label: "24 bytes (192 bits)" },
  { bytes: 32, bits: 256, label: "32 bytes (256 bits) — Recommended" },
  { bytes: 64, bits: 512, label: "64 bytes (512 bits) — High security" },
];

const FORMATS = [
  { id: "hex", label: "Hexadecimal string" },
  { id: "base64", label: "Base64" },
];

export default function FlaskSecretKeyPage() {
  const [size, setSize] = useState(KEY_SIZES[0]);
  const [format, setFormat] = useState("hex");
  const [keys, setKeys] = useState([]);

  const generateKey = useCallback(() => {
    const arr = new Uint8Array(size.bytes);
    crypto.getRandomValues(arr);
    if (format === "hex") return Array.from(arr).map(b => b.toString(16).padStart(2, "0")).join("");
    return btoa(String.fromCharCode(...arr));
  }, [size, format]);

  const generate = useCallback(() => {
    const items = [];
    for (let i = 0; i < 5; i++) items.push(generateKey());
    setKeys(items);
  }, [generateKey]);

  useEffect(() => {
    const t = setTimeout(generate, 0);
    return () => clearTimeout(t);
  }, [generate]);

  const exampleKey = keys[0] || "your-flask-secret-key-here";

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">Flask Secret Key Generator</h1>
        <p className="text-sm text-(--muted)">
          Generate secure SECRET_KEY values for Flask applications. Essential for session security, CSRF protection, and cookie signing.
        </p>
      </div>

      {/* Settings */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Format</label>
            <div className="flex flex-wrap gap-2">
              {FORMATS.map(f => (
                <button key={f.id} onClick={() => setFormat(f.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border cursor-pointer transition-all ${
                    format === f.id ? "border-(--accent) bg-[rgba(16,185,129,0.08)] text-(--accent)" : "border-(--border) text-(--muted) hover:border-(--accent)"
                  }`}
                >{f.label}</button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Key Size (bytes)</label>
            <div className="flex flex-wrap gap-2">
              {KEY_SIZES.map(s => (
                <button key={s.bytes} onClick={() => setSize(s)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border cursor-pointer transition-all ${
                    size.bytes === s.bytes ? "border-(--accent) bg-[rgba(16,185,129,0.08)] text-(--accent)" : "border-(--border) text-(--muted) hover:border-(--accent)"
                  }`}
                >{s.label}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-(--border) pt-4 text-xs text-(--muted)">
          <div>Entropy: <span className="font-semibold text-(--accent) bg-[rgba(16,185,129,0.1)] px-1.5 py-0.5 rounded-full">{size.bits} bits</span></div>
          <button onClick={generate} className="btn-primary py-1.5 px-4 text-sm">Generate</button>
        </div>
      </div>

      {/* Keys */}
      <div className="space-y-2">
        {keys.map((k, i) => <KeyRow key={i} value={k} />)}
      </div>

      {/* Usage */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">Usage in Flask</h3>
        <CodeBlock filename="config.py" code={`import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or '${exampleKey}'`} />
        <CodeBlock filename=".env" code={`SECRET_KEY=${exampleKey}`} />
        <CodeBlock filename="app.py" code={`from flask import Flask
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)
app.config.from_object('config.Config')`} />
      </div>

      {/* What SECRET_KEY protects */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { title: "Session Data", desc: "Flask sessions are cryptographically signed using SECRET_KEY to prevent tampering." },
          { title: "CSRF Tokens", desc: "Flask-WTF uses SECRET_KEY to generate and validate CSRF protection tokens." },
          { title: "Cookies", desc: "Secure cookies are signed to ensure they haven't been modified by clients." },
          { title: "Flask-Login", desc: "Remember-me tokens and session authentication rely on SECRET_KEY." },
        ].map((item, i) => (
          <div key={i} className="bg-(--card-bg) border border-(--border) rounded-xl p-4 shadow-sm">
            <p className="text-sm font-semibold text-(--foreground) mb-1">{item.title}</p>
            <p className="text-xs text-(--muted) leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Security Best Practices */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-(--foreground) mb-3">Security Best Practices</h3>
        <ul className="space-y-2">
          {["Never commit SECRET_KEY to version control", "Use environment variables in production", "Use at least 24 bytes (192 bits) for security", "Changing the key invalidates all existing sessions"].map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-(--muted)">
              <FiCheck className="text-(--accent) shrink-0 mt-0.5" size={14} /> {tip}
            </li>
          ))}
        </ul>
      </div>

      <BulkGenerator generateFn={generateKey} label="keys" />

      <TerminalCommands commands={[
        { label: "Python secrets (recommended)", code: "python3 -c \"import secrets; print(secrets.token_hex(24))\"" },
        { label: "Python os.urandom", code: "python3 -c \"import os; print(os.urandom(24).hex())\"" },
        { label: "OpenSSL", code: "openssl rand -hex 24" },
      ]} />
    </div>
  );
}
