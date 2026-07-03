"use client";

import React, { useState, useCallback } from "react";
import CodeBlock from "@/components/CodeBlock";

const generateWPKey = () => {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";
  let result = "";
  const arr = new Uint32Array(64);
  crypto.getRandomValues(arr);
  for (let i = 0; i < 64; i++) result += chars[arr[i] % chars.length];
  return result;
};

const KEY_NAMES = ["AUTH_KEY", "SECURE_AUTH_KEY", "LOGGED_IN_KEY", "NONCE_KEY", "AUTH_SALT", "SECURE_AUTH_SALT", "LOGGED_IN_SALT", "NONCE_SALT"];

function generateAllKeys() {
  const result = {};
  KEY_NAMES.forEach(name => { result[name] = generateWPKey(); });
  return result;
}

export default function WordPressSaltsPage() {
  const [keys, setKeys] = useState(() => generateAllKeys());

  const handleRegenerate = () => setKeys(generateAllKeys());

  const defineStatements = KEY_NAMES.map(name => `define('${name}', '${keys[name]}');`).join("\n");

  const fullConfig = `define('AUTH_KEY',         '${keys["AUTH_KEY"]}');
define('SECURE_AUTH_KEY',  '${keys["SECURE_AUTH_KEY"]}');
define('LOGGED_IN_KEY',    '${keys["LOGGED_IN_KEY"]}');
define('NONCE_KEY',        '${keys["NONCE_KEY"]}');
define('AUTH_SALT',        '${keys["AUTH_SALT"]}');
define('SECURE_AUTH_SALT', '${keys["SECURE_AUTH_SALT"]}');
define('LOGGED_IN_SALT',   '${keys["LOGGED_IN_SALT"]}');
define('NONCE_SALT',       '${keys["NONCE_SALT"]}');`;

  const handleCopyAll = async () => {
    try { await navigator.clipboard.writeText(defineStatements); } catch (err) { console.error(err); }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">WordPress Security Keys & Salts</h1>
        <p className="text-sm text-(--muted)">
          Generate secure authentication keys and salts for your WordPress wp-config.php file. These enhance the security of cookies and user sessions.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <button onClick={handleRegenerate} className="btn-primary py-2 px-4 text-sm">🔄 Regenerate All</button>
        <button onClick={handleCopyAll} className="btn-ghost py-2 px-4 text-sm cursor-pointer">Copy All</button>
      </div>

      {/* Keys display */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-3">
        <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted)">wp-config.php</label>
        <div className="space-y-2">
          {KEY_NAMES.map((name) => (
            <KeyDefineRow key={name} name={name} value={keys[name]} />
          ))}
        </div>
      </div>

      {/* Full snippet to copy */}
      <CodeBlock filename="wp-config.php (full snippet)" code={`<?php
/**
 * Authentication Unique Keys and Salts.
 * Change these to different unique phrases!
 * https://api.wordpress.org/secret-key/1.1/salt/
 */
${fullConfig}

/* That's all, stop editing! */`} />

      {/* What these keys do */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">What These Keys Do</h3>
        <div className="space-y-2">
          {[
            { key: "AUTH_KEY / SALT", desc: "Encrypts admin cookies" },
            { key: "SECURE_AUTH_KEY / SALT", desc: "Encrypts SSL admin cookies" },
            { key: "LOGGED_IN_KEY / SALT", desc: "Encrypts non-SSL logged-in cookies" },
            { key: "NONCE_KEY / SALT", desc: "Protects nonces against CSRF attacks" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-sm">
              <code className="font-mono text-xs text-(--accent) bg-(--code-bg) border border-(--border) px-2 py-0.5 rounded whitespace-nowrap">{item.key}</code>
              <span className="text-(--muted)">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* When to regenerate */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 space-y-2">
        <h3 className="text-sm font-semibold text-amber-400">⚠️ When to Regenerate</h3>
        <p className="text-sm text-(--muted)">Regenerate these keys if you suspect your site has been compromised. This will invalidate all existing logged-in sessions, forcing all users (including yourself) to log in again.</p>
      </div>

      {/* Official WordPress salt generator */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">Official WordPress Salt Generator</h3>
        <p className="text-sm text-(--muted)">WordPress also provides an official API for generating salts:</p>
        <CodeBlock label="Fetch from WordPress.org API" code="curl https://api.wordpress.org/secret-key/1.1/salt/" />
      </div>
    </div>
  );
}

function KeyDefineRow({ name, value }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(`define('${name}', '${value}');`); setCopied(true); setTimeout(() => setCopied(false), 1500); }
    catch (err) { console.error(err); }
  };
  return (
    <div onClick={handleCopy} className="group key-row cursor-pointer">
      <span className="key-value font-mono text-xs whitespace-nowrap overflow-hidden text-ellipsis">
        <span className="text-(--accent)">define(</span>
        <span className="text-(--foreground)">&apos;{name}&apos;</span>
        <span className="text-(--muted)">, </span>
        <span className="text-(--foreground)">&apos;{value.slice(0, 20)}...&apos;</span>
        <span className="text-(--accent)">)</span>
      </span>
      {copied ? <span className="tooltip">Copied!</span> : <svg className="copy-icon w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>}
    </div>
  );
}
