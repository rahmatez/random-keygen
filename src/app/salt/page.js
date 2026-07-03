"use client";

import React, { useState, useEffect, useCallback } from "react";
import KeyRow from "@/components/KeyRow";
import BulkGenerator from "@/components/BulkGenerator";
import TerminalCommands from "@/components/TerminalCommands";
import CodeBlock from "@/components/CodeBlock";
import { FiCheck } from "react-icons/fi";

const SIZES = [
  { bytes: 8, bits: 64, label: "8 bytes (64 bits)" },
  { bytes: 16, bits: 128, label: "16 bytes (128 bits) — Recommended" },
  { bytes: 32, bits: 256, label: "32 bytes (256 bits) — High security" },
];

const FORMATS = [
  { id: "hex", label: "Hexadecimal" },
  { id: "base64", label: "Base64" },
];

function generateSalt(bytes, format) {
  const arr = new Uint8Array(bytes);
  crypto.getRandomValues(arr);
  if (format === "base64") return btoa(String.fromCharCode(...arr));
  return Array.from(arr).map(b => b.toString(16).padStart(2, "0")).join("");
}

export default function SaltPage() {
  const [size, setSize] = useState(SIZES[1]);
  const [format, setFormat] = useState("hex");
  const [salts, setSalts] = useState([]);

  const generate = useCallback(() => {
    const items = [];
    for (let i = 0; i < 6; i++) items.push(generateSalt(size.bytes, format));
    setSalts(items);
  }, [size, format]);

  useEffect(() => {
    const t = setTimeout(generate, 0);
    return () => clearTimeout(t);
  }, [generate]);

  const generateSingle = useCallback(() => generateSalt(size.bytes, format), [size, format]);
  const exSalt = salts[0] || "example-salt";

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">Salt Generator</h1>
        <p className="text-sm text-(--muted)">
          Generate cryptographically random salt values for password hashing and other cryptographic operations. Salts ensure identical inputs produce different outputs.
        </p>
      </div>

      {/* Settings */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Length (bytes)</label>
            <div className="flex flex-col gap-2">
              {SIZES.map(s => (
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
            <div className="flex gap-2">
              {FORMATS.map(f => (
                <button key={f.id} onClick={() => setFormat(f.id)}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg border cursor-pointer transition-all ${
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
        {salts.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-[10px] text-(--muted) bg-(--code-bg) border border-(--border) px-2 py-0.5 rounded whitespace-nowrap">{size.bits} bits</span>
            <KeyRow value={s} />
          </div>
        ))}
      </div>

      {/* Usage examples */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">Usage Examples</h3>
        <CodeBlock filename="Python (bcrypt)" code={`import bcrypt

password = b"user_password"

# bcrypt generates its own salt internally
hashed = bcrypt.hashpw(password, bcrypt.gensalt(rounds=12))

# Verify
if bcrypt.checkpw(password, hashed):
    print("Password matches!")`} />
        <CodeBlock filename="Node.js (argon2)" code={`const argon2 = require('argon2');

// argon2 generates salt internally
const hash = await argon2.hash('user_password');

// Verify
if (await argon2.verify(hash, 'user_password')) {
    console.log('Password matches!');
}`} />
        <CodeBlock filename="Manual salt usage (Node.js)" code={`const crypto = require('crypto');

const salt = '${exSalt}';
const password = 'user_password';

// PBKDF2 with custom salt
const hash = crypto.pbkdf2Sync(
  password,
  Buffer.from(salt, '${format}'),
  100000,  // iterations
  64,      // key length
  'sha512'
).toString('hex');`} />
      </div>

      {/* Why use salts */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-5 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">Why Use Salts?</h3>
        <ul className="space-y-2">
          {["Prevents rainbow table attacks", "Ensures identical passwords hash to different values", "Makes precomputation attacks infeasible", "Salts should be unique per password, not secret"].map((t, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-(--muted)">
              <FiCheck className="text-(--accent) shrink-0 mt-0.5" size={14} /> {t}
            </li>
          ))}
        </ul>
      </div>

      {/* Use proper password hashing notice */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
        <div className="flex items-start gap-2">
          <span className="text-blue-400 shrink-0"></span>
          <div>
            <p className="text-sm font-semibold text-(--foreground) mb-1">Use Proper Password Hashing</p>
            <p className="text-sm text-(--muted)">For password storage, use algorithms like bcrypt, argon2, or scrypt which handle salt generation internally. Only use manual salting for other cryptographic operations.</p>
          </div>
        </div>
      </div>

      <BulkGenerator generateFn={generateSingle} label="salts" />

      <TerminalCommands commands={[
        { label: "16-byte salt (hex)", code: "openssl rand -hex 16" },
        { label: "Python", code: "python3 -c \"import secrets; print(secrets.token_hex(16))\"" },
        { label: "Linux /dev/urandom", code: "head -c 16 /dev/urandom | xxd -p -c 64" },
      ]} />
    </div>
  );
}
