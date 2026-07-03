"use client";

import React, { useState, useEffect, useCallback } from "react";
import KeyRow from "@/components/KeyRow";
import BulkGenerator from "@/components/BulkGenerator";
import TerminalCommands from "@/components/TerminalCommands";
import CodeBlock from "@/components/CodeBlock";

const KEY_SIZES = [
  { bits: 128, bytes: 16, label: "AES-128 (16 bytes)" },
  { bits: 192, bytes: 24, label: "AES-192 (24 bytes)" },
  { bits: 256, bytes: 32, label: "AES-256 (32 bytes) — Recommended" },
];

function genHex(bytes) {
  const arr = new Uint8Array(bytes);
  crypto.getRandomValues(arr);
  return Array.from(arr).map(b => b.toString(16).padStart(2, "0")).join("");
}

export default function AESKeyPage() {
  const [keySize, setKeySize] = useState(KEY_SIZES[2]);
  const [pairs, setPairs] = useState([]);

  const generate = useCallback(() => {
    const items = [];
    for (let i = 0; i < 4; i++) {
      items.push({ key: genHex(keySize.bytes), iv: genHex(16) });
    }
    setPairs(items);
  }, [keySize]);

  useEffect(() => {
    const t = setTimeout(generate, 0);
    return () => clearTimeout(t);
  }, [generate]);

  const exKey = pairs[0]?.key || "";
  const exIV = pairs[0]?.iv || "";

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">AES Encryption Keys</h1>
        <p className="text-sm text-(--muted)">
          Generate keys for AES (Advanced Encryption Standard) symmetric encryption. Includes initialization vectors for CBC and GCM modes.
        </p>
      </div>

      {/* Settings */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Key Size</label>
          <div className="flex flex-wrap gap-2">
            {KEY_SIZES.map(ks => (
              <button key={ks.bits} onClick={() => setKeySize(ks)}
                className={`px-3 py-2 text-sm font-semibold rounded-lg border cursor-pointer transition-all ${
                  keySize.bits === ks.bits ? "border-(--accent) bg-[rgba(16,185,129,0.08)] text-(--accent)" : "border-(--border) text-(--muted) hover:border-(--accent)"
                }`}
              >{ks.label}</button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-(--border) pt-4 text-xs text-(--muted)">
          <span>Security: <span className="font-semibold text-(--accent) bg-[rgba(16,185,129,0.1)] px-1.5 py-0.5 rounded-full">{keySize.bits} bits</span></span>
          <button onClick={generate} className="btn-primary py-1.5 px-4 text-sm">Generate</button>
        </div>
      </div>

      {/* Key+IV pairs */}
      <div className="space-y-4">
        {pairs.map(({ key, iv }, i) => (
          <div key={i} className="bg-(--card-bg) border border-(--border) rounded-xl p-5 shadow-sm space-y-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-(--muted)">AES-{keySize.bits} Key</span>
                <span className="text-[10px] text-(--muted)">{keySize.bits} bits</span>
                <span className="text-[10px] text-(--muted) bg-(--code-bg) border border-(--border) rounded px-1.5 py-0.5">hex</span>
              </div>
              <KeyRow value={key} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-(--muted)">IV (Initialization Vector)</span>
                <span className="text-[10px] text-(--muted)">128 bits</span>
                <span className="text-[10px] text-(--muted) bg-(--code-bg) border border-(--border) rounded px-1.5 py-0.5">hex, 16 bytes</span>
              </div>
              <KeyRow value={iv} />
            </div>
          </div>
        ))}
      </div>

      {/* Usage example */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">Usage Example</h3>
        <CodeBlock filename="Python (cryptography)" code={`from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
import os

key = bytes.fromhex('${exKey}')
iv = bytes.fromhex('${exIV}')

# Encrypt
cipher = Cipher(algorithms.AES(key), modes.GCM(iv))
encryptor = cipher.encryptor()
ciphertext = encryptor.update(b"Secret message") + encryptor.finalize()
tag = encryptor.tag

# Decrypt
cipher = Cipher(algorithms.AES(key), modes.GCM(iv, tag))
decryptor = cipher.decryptor()
plaintext = decryptor.update(ciphertext) + decryptor.finalize()`} />
      </div>

      {/* Notice */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
        <p className="text-sm text-(--muted)">For production encryption, generate keys locally. <strong className="text-(--foreground)">Never transmit encryption keys over the network.</strong></p>
      </div>

      <BulkGenerator generateFn={() => genHex(keySize.bytes)} label="keys" />

      <TerminalCommands commands={[
        { label: "AES-256 key", code: "openssl rand -hex 32" },
        { label: "IV (16 bytes)", code: "openssl rand -hex 16" },
        { label: "Python", code: "python3 -c \"import secrets; print(secrets.token_hex(32))\"" },
      ]} />
    </div>
  );
}
