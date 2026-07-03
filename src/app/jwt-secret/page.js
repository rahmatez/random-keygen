"use client";

import React, { useState, useEffect, useCallback } from "react";
import { generateJWTSecret } from "@/utils/crypto";
import KeyRow from "@/components/KeyRow";
import BulkGenerator from "@/components/BulkGenerator";
import TerminalCommands from "@/components/TerminalCommands";
import CodeBlock from "@/components/CodeBlock";
import { FiKey, FiShield, FiTool } from "react-icons/fi";

const ALGOS = [
  { id: "HS256", bits: 256, label: "HS256 (256-bit)", desc: "HMAC with SHA-256 (most common)" },
  { id: "HS384", bits: 384, label: "HS384 (384-bit)", desc: "HMAC with SHA-384" },
  { id: "HS512", bits: 512, label: "HS512 (512-bit)", desc: "HMAC with SHA-512" },
];

const FORMATS = [
  { id: "base64", label: "Base64" },
  { id: "hex", label: "Hexadecimal" },
  { id: "urlsafe", label: "URL-safe Base64" },
];

function generateFormatted(bits, format) {
  const secret = generateJWTSecret(bits);
  if (format === "hex") {
    // Convert base64 to hex
    try {
      const binary = atob(secret.replace(/-/g, "+").replace(/_/g, "/") + "==".slice((secret.length + 2) % 3));
      return Array.from(binary).map(c => c.charCodeAt(0).toString(16).padStart(2, "0")).join("").slice(0, bits / 4);
    } catch (e) { return secret; }
  }
  return secret;
}

export default function JwtSecretPage() {
  const [algo, setAlgo] = useState(ALGOS[0]);
  const [format, setFormat] = useState("base64");
  const [secrets, setSecrets] = useState([]);

  const generate = useCallback(() => {
    const items = [];
    for (let i = 0; i < 4; i++) items.push(generateFormatted(algo.bits, format));
    setSecrets(items);
  }, [algo, format]);

  useEffect(() => {
    const t = setTimeout(generate, 0);
    return () => clearTimeout(t);
  }, [generate]);

  const generateSingle = useCallback(() => generateFormatted(algo.bits, format), [algo, format]);

  const exampleSecret = secrets[0] || "YOUR_JWT_SECRET_HERE";

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">Generate Production-Ready JWT Secrets in One Click</h1>
        <p className="text-sm text-(--muted)">
          Create cryptographically secure JWT signing secrets instantly. Get 256-bit, 384-bit, or 512-bit secrets ready for immediate use in your authentication system.
        </p>
      </div>

      {/* Settings */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Algorithm</label>
            <div className="flex flex-wrap gap-2">
              {ALGOS.map(a => (
                <button key={a.id} onClick={() => setAlgo(a)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border cursor-pointer transition-all ${
                    algo.id === a.id ? "border-(--accent) bg-[rgba(16,185,129,0.08)] text-(--accent)" : "border-(--border) text-(--muted) hover:border-(--accent)"
                  }`}
                >{a.label}</button>
              ))}
            </div>
          </div>
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
        </div>
        <div className="flex items-center justify-between border-t border-(--border) pt-4 text-xs text-(--muted)">
          <div>
            Security: <span className="font-semibold text-(--accent) bg-[rgba(16,185,129,0.1)] px-1.5 py-0.5 rounded-full">{algo.bits} bits</span>
            <span className="ml-2 opacity-70">({algo.bits / 8} bytes) — {algo.desc}</span>
          </div>
          <button onClick={generate} className="btn-primary py-1.5 px-4 text-sm">Generate</button>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-2">
        {secrets.map((s, i) => <KeyRow key={i} value={s} />)}
      </div>

      {/* JWT Decoder */}
      <JwtDecoder />

      {/* Algorithm comparison table */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-(--border)">
          <h3 className="text-sm font-semibold text-(--foreground)">JWT Algorithm Comparison</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead className="bg-(--code-bg) text-(--muted) uppercase tracking-wider">
              <tr>{["Algorithm", "Type", "Key Length", "Security", "Performance", "Use Cases"].map(h => <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>)}</tr>
            </thead>
            <tbody>
              {[
                ["HS256", "HMAC-SHA256", "256 bits (32 bytes)", "Good", "Fastest", "Most common, good for web apps"],
                ["HS384", "HMAC-SHA384", "384 bits (48 bytes)", "Better", "Medium", "Higher security requirements"],
                ["HS512", "HMAC-SHA512", "512 bits (64 bytes)", "Best", "Slower", "Maximum security, critical systems"],
                ["RS256", "RSA-SHA256", "2048+ bits", "High", "Slow", "Public key verification"],
                ["ES256", "ECDSA-SHA256", "256 bits", "High", "Fast", "Modern alternative to RSA"],
              ].map((row, i) => (
                <tr key={i} className={`border-t border-(--border) ${i % 2 === 0 ? "" : "bg-(--code-bg)/40"}`}>
                  {row.map((cell, j) => <td key={j} className={`px-4 py-3 text-(--foreground) ${j === 0 ? "font-mono font-semibold" : ""}`}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Usage examples */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">Usage Examples</h3>
        <CodeBlock filename=".env" code={`JWT_SECRET=${exampleSecret}`} />
        <CodeBlock filename="Node.js (jsonwebtoken)" code={`const jwt = require('jsonwebtoken');

const token = jwt.sign(
  { userId: '123', role: 'admin' },
  process.env.JWT_SECRET,
  { algorithm: 'HS256', expiresIn: '24h' }
);`} />
      </div>

      {/* Security Best Practices */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">JWT Secret Security Best Practices</h3>
        <div className="space-y-3 text-sm text-(--muted)">
          <div>
            <p className="font-semibold text-(--foreground) mb-1">Secret Length Requirements</p>
            <ul className="space-y-1 text-xs">
              {["HS256 requires at least 256 bits (32 bytes)", "HS384 requires at least 384 bits (48 bytes)", "HS512 requires at least 512 bits (64 bytes)"].map((t, i) => (
                <li key={i} className="flex items-center gap-1.5"><span className="text-(--accent)">→</span> {t}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-(--foreground) mb-1">Secure Secret Storage</p>
            <ul className="space-y-1 text-xs">
              {["Environment Variables: Store secrets in environment variables, never in source code", "Secret Management: Use AWS Secrets Manager, Azure Key Vault, or HashiCorp Vault", "Version Control: Never commit secrets to Git repositories"].map((t, i) => (
                <li key={i} className="flex items-start gap-1.5"><span className="text-(--accent) shrink-0">→</span> {t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Security audit checklist */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">JWT Security Audit Checklist</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-(--muted) mb-2 flex items-center gap-1.5"><FiKey size={12} /> Secret & Configuration</p>
            {["Secret meets minimum length (32+ bytes for HS256)", "Algorithm explicitly specified in verification", "Issuer (iss) and audience (aud) claims validated", "Appropriate expiration times set (15min-1hr)", "Secret stored securely (env vars, not code)"].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-(--muted) mb-1.5">
                <span className="text-green-500 shrink-0">☐</span> {item}
              </div>
            ))}
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-(--muted) mb-2 flex items-center gap-1.5"><FiShield size={12} /> Implementation Security</p>
            {["HTTPS enforced in production", "Rate limiting on auth endpoints", "Proper error handling (no info leakage)", "Token blacklist/revocation mechanism", "Minimal payload data (no sensitive info)"].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-(--muted) mb-1.5">
                <span className="text-green-500 shrink-0">☐</span> {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <BulkGenerator generateFn={generateSingle} label="secrets" />

      <TerminalCommands commands={[
        { label: "OpenSSL (256-bit, base64)", code: "openssl rand -base64 32" },
        { label: "OpenSSL (256-bit, hex)", code: "openssl rand -hex 32" },
        { label: "Python secrets module", code: "python3 -c \"import secrets; print(secrets.token_urlsafe(32))\"" },
        { label: "Node.js crypto", code: "node -e \"console.log(require('crypto').randomBytes(32).toString('base64'))\"" },
      ]} />
    </div>
  );
}

function JwtDecoder() {
  const DEFAULT_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
  const [token, setToken] = useState(DEFAULT_JWT);
  const [decoded, setDecoded] = useState(null);
  const [error, setError] = useState(null);

  const decode = useCallback(() => {
    try {
      const parts = token.trim().split(".");
      if (parts.length !== 3) throw new Error("Invalid JWT format");
      const header = JSON.parse(atob(parts[0].replace(/-/g, "+").replace(/_/g, "/")));
      const payload = JSON.parse(atob(parts[1].replace(/-/g, "+").replace(/_/g, "/")));
      setDecoded({ header, payload, sig: parts[2].slice(0, 20) + "..." });
      setError(null);
    } catch (err) {
      setDecoded(null);
      setError("Invalid JWT token");
    }
  }, [token]);

  useEffect(() => { decode(); }, [decode]);

  return (
    <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
      <div className="flex items-center gap-2">
        <FiTool size={15} className="text-(--accent) shrink-0" />
        <h3 className="text-sm font-semibold text-(--foreground)">Interactive JWT Decoder</h3>
      </div>
      <div>
        <label className="block text-xs font-semibold text-(--muted) uppercase tracking-wider mb-1">JWT Token (paste here)</label>
        <textarea
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="w-full px-3 py-2 font-mono text-[11px] border border-(--border) bg-(--code-bg) rounded-lg focus:outline-none focus:border-(--accent) resize-none"
          rows={3}
        />
      </div>
      {error && <p className="text-xs text-red-400">{error}</p>}
      {decoded && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-xs font-bold uppercase tracking-wider text-(--muted)">Header</p>
            <pre className="bg-(--code-bg) border border-(--border) rounded-lg p-3 text-[11px] font-mono text-(--code-fg) overflow-x-auto">
              {JSON.stringify(decoded.header, null, 2)}
            </pre>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-bold uppercase tracking-wider text-(--muted)">Payload</p>
            <pre className="bg-(--code-bg) border border-(--border) rounded-lg p-3 text-[11px] font-mono text-(--code-fg) overflow-x-auto">
              {JSON.stringify(decoded.payload, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
