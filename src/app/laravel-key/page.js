"use client";

import React, { useState, useEffect, useCallback } from "react";
import { generateLaravelKey } from "@/utils/crypto";
import KeyRow from "@/components/KeyRow";
import BulkGenerator from "@/components/BulkGenerator";
import TerminalCommands from "@/components/TerminalCommands";
import CodeBlock from "@/components/CodeBlock";

export default function LaravelKeyPage() {
  const [keys, setKeys] = useState([]);

  const generate = useCallback(() => {
    const items = [];
    for (let i = 0; i < 5; i++) items.push(generateLaravelKey());
    setKeys(items);
  }, []);

  useEffect(() => {
    const t = setTimeout(generate, 0);
    return () => clearTimeout(t);
  }, [generate]);

  const exampleKey = keys[0] || "base64:YOUR_KEY_HERE";

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">Laravel APP_KEY Generator</h1>
        <p className="text-sm text-(--muted)">
          Generate secure application encryption keys for Laravel projects. These keys are used for encrypting cookies, sessions, and other sensitive data.
        </p>
      </div>

      {/* Info row */}
      <div className="grid grid-cols-3 gap-4">
        {[{ label: "Format", val: "base64:<32 bytes>" }, { label: "Key Size", val: "256 bits" }, { label: "Cipher", val: "AES-256-CBC" }].map((item, i) => (
          <div key={i} className="bg-(--card-bg) border border-(--border) rounded-xl p-4 text-center shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-wider text-(--muted) mb-1">{item.label}</p>
            <p className="text-sm font-semibold text-(--foreground)">{item.val}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button onClick={generate} className="btn-primary py-2 px-5 text-sm">Generate New Keys</button>
      </div>

      {/* Keys */}
      <div className="space-y-2">
        {keys.map((k, i) => <KeyRow key={i} value={k} />)}
      </div>

      {/* Installation guide */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">Installation Guide</h3>
        <div className="space-y-3">
          {[
            { step: "1. Copy the key", desc: "Click on any generated key above to copy it to your clipboard." },
            { step: "2. Update your .env file", desc: "Paste the key as the value of APP_KEY in your Laravel project's .env file." },
            { step: "3. Clear config cache (if needed)", code: "php artisan config:clear" },
          ].map((item, i) => (
            <div key={i} className="space-y-2">
              <p className="text-sm font-semibold text-(--foreground)">{item.step}</p>
              {item.desc && <p className="text-sm text-(--muted)">{item.desc}</p>}
              {item.code && <CodeBlock code={item.code} />}
            </div>
          ))}
        </div>
        <CodeBlock filename=".env" code={`APP_KEY=${exampleKey}`} />
      </div>

      {/* Why Laravel needs APP_KEY */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">Why Laravel Needs APP_KEY</h3>
        <ul className="space-y-2">
          {["Encrypts session data to prevent tampering", "Secures cookies containing sensitive information", "Used by Laravel's encryption facade for encrypt() and decrypt()", "Protects CSRF tokens and other security features", "Required for signed URLs and password reset tokens"].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-(--muted)">
              <span className="text-(--accent) shrink-0 mt-0.5">✓</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Production warning */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5">
        <div className="flex items-start gap-2">
          <span className="text-amber-400 shrink-0">⚠️</span>
          <div>
            <p className="text-sm font-semibold text-(--foreground) mb-1">Production Warning</p>
            <p className="text-sm text-(--muted)">Changing APP_KEY in production will invalidate all encrypted data, including user sessions, cookies, and any data encrypted with the old key. Only change it during initial setup or if you suspect the key has been compromised.</p>
          </div>
        </div>
      </div>

      <BulkGenerator generateFn={generateLaravelKey} label="keys" />

      <TerminalCommands commands={[
        { label: "Laravel Artisan (preferred)", code: "php artisan key:generate" },
        { label: "OpenSSL", code: "echo \"base64:$(openssl rand -base64 32)\"" },
        { label: "PHP CLI", code: "php -r \"echo 'base64:' . base64_encode(random_bytes(32)) . PHP_EOL;\"" },
      ]} />
    </div>
  );
}
