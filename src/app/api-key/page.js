"use client";

import React, { useState, useEffect, useCallback } from "react";
import { generateAPIKey } from "@/utils/crypto";
import KeyRow from "@/components/KeyRow";
import BulkGenerator from "@/components/BulkGenerator";
import TerminalCommands from "@/components/TerminalCommands";
import CodeBlock from "@/components/CodeBlock";

const PROVIDERS = [
  { id: "stripe", label: "Stripe", prefix: "sk_live_", format: "sk_live_[random-48]", desc: "Payment processing API keys" },
  { id: "aws_access", label: "AWS Access Key", prefix: "AKIA", format: "AKIA[random-16]", desc: "AWS IAM access key ID" },
  { id: "aws_secret", label: "AWS Secret Key", prefix: "", format: "[random-40]", desc: "AWS IAM secret access key" },
  { id: "github", label: "GitHub Token", prefix: "ghp_", format: "ghp_[random-36]", desc: "GitHub personal access token" },
];

const FORMATS = [
  { id: "hex", label: "Hex" },
  { id: "base64", label: "Base64" },
  { id: "alphanumeric", label: "Alphanumeric" },
];

const GEN_CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
function genCustomKey(len, format) {
  const arr = new Uint32Array(len);
  crypto.getRandomValues(arr);
  if (format === "hex") {
    const raw = new Uint8Array(Math.ceil(len / 2));
    crypto.getRandomValues(raw);
    return Array.from(raw).map(b => b.toString(16).padStart(2, "0")).join("").slice(0, len);
  }
  if (format === "base64") {
    const raw = new Uint8Array(Math.ceil(len * 3 / 4));
    crypto.getRandomValues(raw);
    return btoa(String.fromCharCode(...raw)).slice(0, len);
  }
  return Array.from(arr).map(n => GEN_CHARS[n % GEN_CHARS.length]).join("");
}

export default function APIKeyPage() {
  const [providerKeys, setProviderKeys] = useState({});
  const [customLength, setCustomLength] = useState(32);
  const [customFormat, setCustomFormat] = useState("alphanumeric");
  const [customKeys, setCustomKeys] = useState([]);

  const generateProviders = useCallback(() => {
    const result = {};
    PROVIDERS.forEach(p => {
      result[p.id] = [generateAPIKey(p.id), generateAPIKey(p.id), generateAPIKey(p.id)];
    });
    setProviderKeys(result);
  }, []);

  const generateCustom = useCallback(() => {
    const items = [];
    for (let i = 0; i < 5; i++) items.push(genCustomKey(customLength, customFormat));
    setCustomKeys(items);
  }, [customLength, customFormat]);

  useEffect(() => {
    const t = setTimeout(() => {
      generateProviders();
      generateCustom();
    }, 0);
    return () => clearTimeout(t);
  }, [generateProviders, generateCustom]);

  const generateSingle = useCallback(() => genCustomKey(customLength, customFormat), [customLength, customFormat]);

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">API Key Generator</h1>
        <p className="text-sm text-(--muted)">
          Generate development API keys matching real service formats. Use these for testing and development — real service keys must be obtained from their respective platforms.
        </p>
      </div>

      {/* Dev disclaimer */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
        <div className="flex items-start gap-2">
          <span className="text-blue-400 shrink-0">ℹ️</span>
          <p className="text-sm text-(--muted)">These are <strong className="text-(--foreground)">test/development keys</strong> for format reference. To get real API keys, visit each platform&apos;s developer portal.</p>
        </div>
      </div>

      {/* Provider keys */}
      <div className="space-y-6">
        {PROVIDERS.map(provider => (
          <div key={provider.id} className="bg-(--card-bg) border border-(--border) rounded-xl p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-(--foreground)">{provider.label}</h3>
                <p className="text-xs text-(--muted)">{provider.desc}</p>
              </div>
              <div className="text-right">
                <code className="text-[11px] font-mono text-(--accent) bg-(--code-bg) border border-(--border) px-2 py-1 rounded">{provider.format}</code>
              </div>
            </div>
            <div className="space-y-2">
              {(providerKeys[provider.id] || []).map((key, i) => <KeyRow key={i} value={key} />)}
            </div>
            <button onClick={generateProviders} className="text-xs text-(--muted) hover:text-(--accent) cursor-pointer">↻ Regenerate</button>
          </div>
        ))}
      </div>

      {/* Custom generator */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-5">
        <h3 className="text-sm font-semibold text-(--foreground)">Custom API Key Generator</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Length: {customLength}</label>
            <input type="range" min="16" max="128" value={customLength}
              onChange={(e) => setCustomLength(parseInt(e.target.value))}
              className="w-full h-1.5 bg-(--border) rounded-lg appearance-none cursor-pointer accent-(--accent)"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Format</label>
            <div className="flex gap-2 flex-wrap">
              {FORMATS.map(f => (
                <button key={f.id} onClick={() => setCustomFormat(f.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border cursor-pointer transition-all ${
                    customFormat === f.id ? "border-(--accent) bg-[rgba(16,185,129,0.08)] text-(--accent)" : "border-(--border) text-(--muted) hover:border-(--accent)"
                  }`}
                >{f.label}</button>
              ))}
            </div>
          </div>
        </div>
        <button onClick={generateCustom} className="btn-primary py-1.5 px-4 text-sm">Generate Custom Keys</button>
        <div className="space-y-2">
          {customKeys.map((k, i) => <KeyRow key={i} value={k} />)}
        </div>
      </div>

      {/* API Key security */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-5 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">API Key Security Best Practices</h3>
        <ul className="space-y-2">
          {["Store API keys as environment variables, never in source code", "Implement rate limiting on your API endpoints", "Rotate keys periodically and immediately if compromised", "Use the principle of least privilege (minimal permissions)", "Log and monitor API key usage for anomalies", "Never expose API keys in client-side JavaScript"].map((t, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-(--muted)">
              <span className="text-(--accent) shrink-0 mt-0.5">✓</span> {t}
            </li>
          ))}
        </ul>
      </div>

      <BulkGenerator generateFn={generateSingle} label="keys" />

      <TerminalCommands commands={[
        { label: "Alphanumeric API key (32 chars)", code: "openssl rand -base64 24 | tr -dc 'a-zA-Z0-9' | head -c 32" },
        { label: "Hex API key (64 chars)", code: "openssl rand -hex 32" },
        { label: "Python secrets", code: "python3 -c \"import secrets; print(secrets.token_urlsafe(32))\"" },
      ]} />
    </div>
  );
}
