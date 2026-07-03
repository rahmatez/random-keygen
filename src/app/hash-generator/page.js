"use client";

import React, { useState, useCallback, useEffect } from "react";
import CodeBlock from "@/components/CodeBlock";

const ALGOS = ["MD5", "SHA-1", "SHA-256", "SHA-512"];

async function hashText(text, algo) {
  if (!text) return "";
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  try {
    const algoMap = { "MD5": null, "SHA-1": "SHA-1", "SHA-256": "SHA-256", "SHA-512": "SHA-512" };
    if (algo === "MD5") {
      // MD5 not supported in Web Crypto, return placeholder
      return "MD5 not available in browser (use Node.js/CLI)";
    }
    const hashBuffer = await crypto.subtle.digest(algoMap[algo], data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  } catch (err) {
    return "Error computing hash";
  }
}

export default function HashGeneratorPage() {
  const [text, setText] = useState("Hello, World!");
  const [hashes, setHashes] = useState({});

  const computeHashes = useCallback(async () => {
    const results = {};
    for (const algo of ALGOS) {
      results[algo] = await hashText(text, algo);
    }
    setHashes(results);
  }, [text]);

  useEffect(() => {
    const t = setTimeout(computeHashes, 100);
    return () => clearTimeout(t);
  }, [computeHashes]);

  const algoInfo = {
    "MD5": { bits: 128, chars: 32, status: "not-recommended" },
    "SHA-1": { bits: 160, chars: 40, status: "deprecated" },
    "SHA-256": { bits: 256, chars: 64, status: "recommended" },
    "SHA-512": { bits: 512, chars: 128, status: "high" },
  };

  const statusColor = { "not-recommended": "#ef4444", "deprecated": "#f59e0b", "recommended": "#10b981", "high": "#3b82f6" };
  const statusLabel = { "not-recommended": "Not for security", "deprecated": "Deprecated for security", "recommended": "Recommended", "high": "High security" };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">Hash Generator</h1>
        <p className="text-sm text-(--muted)">
          Generate cryptographic hashes using SHA-1, SHA-256, and SHA-512 algorithms. Useful for checksums, data integrity, and understanding password hashing.
        </p>
      </div>

      {/* Input */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-3">
        <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted)">Enter Text to Hash</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste text here..."
          className="w-full px-4 py-3 font-mono text-sm border border-(--border) bg-(--background) rounded-lg focus:outline-none focus:border-(--accent) resize-none"
          rows={4}
        />
      </div>

      {/* Hash outputs */}
      <div className="space-y-4">
        {ALGOS.map(algo => {
          const info = algoInfo[algo];
          const hash = hashes[algo] || "";
          return (
            <div key={algo} className="bg-(--card-bg) border border-(--border) rounded-xl p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-(--foreground)">{algo}</span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold" style={{ color: statusColor[info.status], background: `${statusColor[info.status]}20` }}>
                    {statusLabel[info.status]}
                  </span>
                </div>
                <span className="text-[11px] text-(--muted)">{info.bits}-bit ({info.chars} hex chars)</span>
              </div>
              <HashRow value={hash} disabled={!text} />
            </div>
          );
        })}
      </div>

      {/* Password hashing */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 space-y-3">
        <h3 className="text-sm font-semibold text-amber-400">Password Hashing with bcrypt</h3>
        <p className="text-sm text-(--muted)">For password storage, use bcrypt, Argon2, or scrypt — NOT MD5/SHA. These algorithms are intentionally slow and include salting.</p>
        <CodeBlock filename="Node.js" code={`const bcrypt = require('bcrypt');

// Hash a password
const hash = await bcrypt.hash('password', 10);
// $2b$10$N9qo8uLOickgx2ZMRZoMye...

// Verify a password
const isValid = await bcrypt.compare('password', hash);`} />
      </div>

      {/* Hash vs Encryption */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-5 shadow-sm space-y-2">
        <h3 className="text-sm font-semibold text-(--foreground)">Important: Hash vs Encryption</h3>
        <ul className="space-y-1.5">
          {[
            "Hashing is one-way — you cannot recover the original text from a hash",
            "MD5 and SHA-1 are broken — don't use for security purposes",
            "Never store plain SHA hashes of passwords — use bcrypt/Argon2 instead",
            "Hashes are deterministic — same input always produces same output",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-(--muted)">
              <span className="text-(--accent) shrink-0 mt-0.5">→</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Use cases */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { title: "File Checksums", desc: "Verify file integrity after downloads. SHA-256 is the standard for software verification." },
          { title: "Data Deduplication", desc: "Identify duplicate content by comparing hashes instead of full content." },
          { title: "Digital Signatures", desc: "Sign a hash of a document instead of the entire document for efficiency." },
          { title: "Caching Keys", desc: "Generate unique cache keys from request parameters or content." },
        ].map((uc, i) => (
          <div key={i} className="bg-(--card-bg) border border-(--border) rounded-xl p-4 shadow-sm">
            <p className="text-sm font-semibold text-(--foreground) mb-1">{uc.title}</p>
            <p className="text-xs text-(--muted) leading-relaxed">{uc.desc}</p>
          </div>
        ))}
      </div>

      {/* Terminal commands */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground) mb-3">Generate Hashes in Terminal</h3>
        <CodeBlock filename="macOS / Linux" code={`# SHA-256
echo -n "text" | sha256sum

# SHA-512
echo -n "text" | sha512sum

# File hash
sha256sum filename.txt`} />
        <CodeBlock filename="Python" code={`import hashlib

text = "text"
print(hashlib.sha256(text.encode()).hexdigest())`} />
      </div>
    </div>
  );
}

function HashRow({ value, disabled }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    if (!value || disabled) return;
    try { await navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 1500); }
    catch (err) { console.error(err); }
  };
  return (
    <div onClick={handleCopy}
      className={`key-row group font-mono ${disabled ? "opacity-40" : "cursor-pointer"}`}
    >
      <span className="key-value select-all text-sm">{disabled ? "Enter text above to generate hash" : value}</span>
      {!disabled && (copied ? <span className="tooltip">Copied!</span> : (
        <svg className="copy-icon w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
        </svg>
      ))}
    </div>
  );
}
