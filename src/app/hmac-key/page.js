"use client";

import React, { useState, useEffect, useCallback } from "react";
import KeyRow from "@/components/KeyRow";
import BulkGenerator from "@/components/BulkGenerator";
import TerminalCommands from "@/components/TerminalCommands";
import CodeBlock from "@/components/CodeBlock";

const ALGOS = [
  { id: "SHA256", bits: 256, label: "HMAC-SHA256 (Recommended)" },
  { id: "SHA384", bits: 384, label: "HMAC-SHA384" },
  { id: "SHA512", bits: 512, label: "HMAC-SHA512" },
];

const FORMATS = [
  { id: "base64", label: "Base64" },
  { id: "hex", label: "Hexadecimal" },
  { id: "urlsafe", label: "URL-safe" },
];

function generateHMACSecret(bits, format) {
  const bytes = bits / 8;
  const arr = new Uint8Array(bytes);
  crypto.getRandomValues(arr);
  if (format === "hex") return Array.from(arr).map(b => b.toString(16).padStart(2, "0")).join("");
  if (format === "urlsafe") return btoa(String.fromCharCode(...arr)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  return btoa(String.fromCharCode(...arr));
}

export default function HMACKeyPage() {
  const [algo, setAlgo] = useState(ALGOS[0]);
  const [format, setFormat] = useState("base64");
  const [secrets, setSecrets] = useState([]);

  const generate = useCallback(() => {
    const items = [];
    for (let i = 0; i < 4; i++) items.push(generateHMACSecret(algo.bits, format));
    setSecrets(items);
  }, [algo, format]);

  useEffect(() => {
    const t = setTimeout(generate, 0);
    return () => clearTimeout(t);
  }, [generate]);

  const generateSingle = useCallback(() => generateHMACSecret(algo.bits, format), [algo, format]);
  const exampleSecret = secrets[0] || "your-hmac-secret-here";

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">HMAC Secret Generator</h1>
        <p className="text-sm text-(--muted)">
          Generate secure secrets for HMAC (Hash-based Message Authentication Code). Used to verify data integrity and authenticity.
        </p>
      </div>

      {/* Settings */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Hash Algorithm</label>
            <div className="flex flex-col gap-2">
              {ALGOS.map(a => (
                <button key={a.id} onClick={() => setAlgo(a)}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg border cursor-pointer transition-all text-left ${
                    algo.id === a.id ? "border-(--accent) bg-[rgba(16,185,129,0.08)] text-(--accent)" : "border-(--border) text-(--muted) hover:border-(--accent)"
                  }`}
                >{a.label}</button>
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
          <div>Key size: <span className="font-semibold text-(--accent) bg-[rgba(16,185,129,0.1)] px-1.5 py-0.5 rounded-full">{algo.bits} bits</span>
            <span className="ml-1 opacity-70">({algo.bits / 8} bytes)</span>
          </div>
          <button onClick={generate} className="btn-primary py-1.5 px-4 text-sm">Generate</button>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-2">
        {secrets.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-xs text-(--muted) bg-(--code-bg) border border-(--border) px-2 py-0.5 rounded whitespace-nowrap">{algo.bits} bits</span>
            <KeyRow value={s} />
          </div>
        ))}
      </div>

      {/* Usage examples */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">Usage Examples</h3>
        <CodeBlock filename="Node.js" code={`const crypto = require('crypto');

const secret = '${exampleSecret}';
const message = 'Data to authenticate';

const hmac = crypto.createHmac('sha256', Buffer.from(secret, '${format === "hex" ? "hex" : "base64"}'));
hmac.update(message);
const signature = hmac.digest('hex');

console.log(signature);`} />
        <CodeBlock filename="Python" code={`import hmac
import hashlib
import base64

secret = ${format === "hex" ? `bytes.fromhex('${exampleSecret}')` : `base64.b64decode('${exampleSecret}')`}
message = b'Data to authenticate'

signature = hmac.new(secret, message, hashlib.sha256).hexdigest()
print(signature)`} />
      </div>

      {/* When to use HMAC */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-(--foreground) mb-3">When to Use HMAC</h3>
        <ul className="space-y-2">
          {["Verifying API request signatures (e.g., webhooks)", "Creating secure session tokens", "Authenticating messages between services", "Implementing signed URLs"].map((t, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-(--muted)">
              <span className="text-(--accent) shrink-0 mt-0.5">•</span> {t}
            </li>
          ))}
        </ul>
      </div>

      <BulkGenerator generateFn={generateSingle} label="secrets" />

      <TerminalCommands commands={[
        { label: "OpenSSL (base64)", code: "openssl rand -base64 32" },
        { label: "OpenSSL (hex)", code: "openssl rand -hex 32" },
        { label: "Python", code: "python3 -c \"import secrets; print(secrets.token_urlsafe(32))\"" },
      ]} />
    </div>
  );
}
