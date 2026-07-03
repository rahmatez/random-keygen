"use client";

import React, { useState, useEffect, useCallback } from "react";
import KeyRow from "@/components/KeyRow";
import BulkGenerator from "@/components/BulkGenerator";
import TerminalCommands from "@/components/TerminalCommands";
import CodeBlock from "@/components/CodeBlock";
import { FiAlertTriangle, FiCheck } from "react-icons/fi";

const KEY_SIZES = [
  { bits: 128, bytes: 16, label: "AES-128 (16 bytes)" },
  { bits: 192, bytes: 24, label: "AES-192 (24 bytes)" },
  { bits: 256, bytes: 32, label: "AES-256 (32 bytes) — Recommended" },
];

const FORMATS = [
  { id: "hex", label: "Hexadecimal" },
  { id: "base64", label: "Base64" },
];

function generateAESKeyHex(bytes) {
  const arr = new Uint8Array(bytes);
  crypto.getRandomValues(arr);
  return Array.from(arr).map(b => b.toString(16).padStart(2, "0")).join("");
}

function generateAESKeyBase64(bytes) {
  const arr = new Uint8Array(bytes);
  crypto.getRandomValues(arr);
  return btoa(String.fromCharCode(...arr));
}

function generateIV(format) {
  const arr = new Uint8Array(16);
  crypto.getRandomValues(arr);
  if (format === "base64") return btoa(String.fromCharCode(...arr));
  return Array.from(arr).map(b => b.toString(16).padStart(2, "0")).join("");
}

export default function EncryptionKeyPage() {
  const [keySize, setKeySize] = useState(KEY_SIZES[2]);
  const [format, setFormat] = useState("hex");
  const [includeIV, setIncludeIV] = useState(true);
  const [pairs, setPairs] = useState([]);

  const generate = useCallback(() => {
    const items = [];
    for (let i = 0; i < 4; i++) {
      const key = format === "hex"
        ? generateAESKeyHex(keySize.bytes)
        : generateAESKeyBase64(keySize.bytes);
      const iv = generateIV(format);
      items.push({ key, iv });
    }
    setPairs(items);
  }, [keySize, format]);

  useEffect(() => {
    const t = setTimeout(generate, 0);
    return () => clearTimeout(t);
  }, [generate]);

  const generateSingle = useCallback(() => (
    format === "hex" ? generateAESKeyHex(keySize.bytes) : generateAESKeyBase64(keySize.bytes)
  ), [keySize, format]);

  const exampleKey = pairs[0]?.key || "example-key";
  const exampleIV = pairs[0]?.iv || "example-iv";

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">Encryption Key Generator</h1>
        <p className="text-sm text-(--muted)">
          Generate cryptographically secure keys for AES encryption. Includes initialization vectors (IVs) for CBC and GCM modes.
        </p>
      </div>

      {/* Settings */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Key Size</label>
            <div className="flex flex-col gap-2">
              {KEY_SIZES.map(ks => (
                <button key={ks.bits} onClick={() => setKeySize(ks)}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg border cursor-pointer transition-all text-left ${
                    keySize.bits === ks.bits ? "border-(--accent) bg-[rgba(16,185,129,0.08)] text-(--accent)" : "border-(--border) text-(--muted) hover:border-(--accent)"
                  }`}
                >{ks.label}</button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Format</label>
              <div className="flex gap-2">
                {FORMATS.map(f => (
                  <button key={f.id} onClick={() => setFormat(f.id)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg border cursor-pointer transition-all ${
                      format === f.id ? "border-(--accent) bg-[rgba(16,185,129,0.08)] text-(--accent)" : "border-(--border) text-(--muted) hover:border-(--accent)"
                    }`}
                  >{f.label}</button>
                ))}
              </div>
            </div>
            <label className="flex items-center gap-2 text-sm text-(--foreground) cursor-pointer">
              <input type="checkbox" checked={includeIV} onChange={(e) => setIncludeIV(e.target.checked)}
                className="w-4 h-4 rounded border-(--border) accent-(--accent)"
              />
              Include Initialization Vector (IV)
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-(--border) pt-4 text-xs text-(--muted)">
          <div>Security: <span className="font-semibold text-(--accent) bg-[rgba(16,185,129,0.1)] px-1.5 py-0.5 rounded-full">{keySize.bits} bits</span>
            <span className="ml-2 opacity-70">({keySize.bytes} bytes) — AES-{keySize.bits} {keySize.bits === 256 ? "(strongest, recommended)" : ""}</span>
          </div>
          <button onClick={generate} className="btn-primary py-1.5 px-4 text-sm">Generate</button>
        </div>
      </div>

      {/* Key+IV pairs */}
      <div className="space-y-4">
        {pairs.map(({ key, iv }, i) => (
          <div key={i} className="bg-(--card-bg) border border-(--border) rounded-xl p-5 shadow-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-(--muted) bg-(--code-bg) border border-(--border) px-2 py-0.5 rounded">AES-{keySize.bits} Key</span>
              <span className="text-[10px] text-(--muted)">{keySize.bits} bits</span>
            </div>
            <KeyRow value={key} />
            {includeIV && (
              <>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-(--muted) bg-(--code-bg) border border-(--border) px-2 py-0.5 rounded">Initialization Vector (IV)</span>
                  <span className="text-[10px] text-(--muted)">128 bits (16 bytes)</span>
                </div>
                <KeyRow value={iv} />
              </>
            )}
          </div>
        ))}
      </div>

      {/* Usage example */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">Usage Example</h3>
        <CodeBlock filename="Node.js (crypto)" code={`const crypto = require('crypto');

const key = Buffer.from('${exampleKey}', '${format}');
const iv = Buffer.from('${exampleIV}', '${format}');

// Encrypt
const cipher = crypto.createCipheriv('aes-${keySize.bits}-gcm', key, iv);
let encrypted = cipher.update('Hello, World!', 'utf8', 'hex');
encrypted += cipher.final('hex');
const authTag = cipher.getAuthTag();

// Decrypt
const decipher = crypto.createDecipheriv('aes-${keySize.bits}-gcm', key, iv);
decipher.setAuthTag(authTag);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');`} />
      </div>

      {/* AES Key Sizes Explained */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { name: "AES-128", bits: 128, rounds: 10, security: "~2¹²⁶ operations", use: "Fast, sufficient for most applications" },
          { name: "AES-192", bits: 192, rounds: 12, security: "~2¹⁹⁰ operations", use: "Intermediate security/performance" },
          { name: "AES-256", bits: 256, rounds: 14, security: "~2²⁵⁴ operations", use: "Maximum security, government/financial" },
        ].map((aes, i) => (
          <div key={i} className={`bg-(--card-bg) border rounded-xl p-5 shadow-sm ${keySize.bits === aes.bits ? "border-(--accent)" : "border-(--border)"}`}>
            <p className="text-sm font-bold text-(--foreground) mb-3">{aes.name}</p>
            <div className="space-y-1.5 text-xs text-(--muted)">
              <p><span className="font-semibold text-(--foreground)">Key:</span> {aes.bits} bits ({aes.bits / 8} bytes)</p>
              <p><span className="font-semibold text-(--foreground)">Rounds:</span> {aes.rounds}</p>
              <p><span className="font-semibold text-(--foreground)">Security:</span> {aes.security}</p>
              <p className="text-(--foreground) opacity-70 mt-2">{aes.use}</p>
            </div>
          </div>
        ))}
      </div>

      {/* AES Modes comparison */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-(--border)">
          <h3 className="text-sm font-semibold text-(--foreground)">AES Encryption Modes</h3>
        </div>
        <div className="grid grid-cols-2 divide-x divide-(--border)">
          {[
            {
              name: "GCM (Galois/Counter Mode)", pros: ["Authenticated encryption (integrity + confidentiality)", "Parallel processing possible", "No padding required", "Industry standard for modern applications"],
              note: "IV size: 96 bits (12 bytes) recommended"
            },
            {
              name: "CBC (Cipher Block Chaining)", pros: ["Widely supported and understood"],
              cons: ["Requires separate MAC for authentication", "Sequential processing only", "Padding oracle vulnerabilities possible"],
              note: "IV size: 128 bits (16 bytes) required"
            }
          ].map((mode, i) => (
            <div key={i} className="p-5">
              <p className="text-sm font-semibold text-(--foreground) mb-3">{mode.name}</p>
              {mode.pros.map((p, j) => <p key={j} className="text-xs text-green-500 mb-1 flex items-center gap-1"><FiCheck size={11} className="shrink-0" /> {p}</p>)}
              {mode.cons?.map((c, j) => <p key={j} className="text-xs text-amber-400 mb-1 flex items-center gap-1"><FiAlertTriangle size={11} className="shrink-0" /> {c}</p>)}
              <p className="text-[11px] text-(--muted) mt-2 border-t border-(--border) pt-2">{mode.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* For demonstration notice */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
        <div className="flex items-start gap-2">
          <FiAlertTriangle className="text-amber-400 shrink-0 mt-0.5" size={16} />
          <p className="text-sm text-(--muted)">For production encryption, generate keys on your local machine or server. <strong className="text-(--foreground)">Never transmit encryption keys over the network.</strong></p>
        </div>
      </div>

      <BulkGenerator generateFn={generateSingle} label="keys" />

      <TerminalCommands commands={[
        { label: "AES-256 key (hex)", code: "openssl rand -hex 32" },
        { label: "AES-256 key (base64)", code: "openssl rand -base64 32" },
        { label: "Initialization vector (IV)", code: "openssl rand -hex 16" },
        { label: "Python secrets module", code: "python3 -c \"import secrets; print(secrets.token_hex(32))\"" },
        { label: "Linux /dev/urandom", code: "head -c 32 /dev/urandom | xxd -p -c 64" },
      ]} />
    </div>
  );
}
