"use client";

import React, { useState, useEffect, useCallback } from "react";
import { generateTOTPSecret } from "@/utils/crypto";
import KeyRow from "@/components/KeyRow";
import BulkGenerator from "@/components/BulkGenerator";
import TerminalCommands from "@/components/TerminalCommands";
import CodeBlock from "@/components/CodeBlock";
import { FiCheck } from "react-icons/fi";

const SIZES = [
  { bits: 80, bytes: 10, label: "80 bits (10 bytes) - Minimum" },
  { bits: 160, bytes: 20, label: "160 bits (20 bytes) - Recommended" },
  { bits: 256, bytes: 32, label: "256 bits (32 bytes) - High security" },
];

export default function TOTPSecretPage() {
  const [size, setSize] = useState(SIZES[1]);
  const [secrets, setSecrets] = useState([]);
  const [issuer, setIssuer] = useState("MyApp");
  const [account, setAccount] = useState("user@example.com");

  const generate = useCallback(() => {
    const items = [];
    for (let i = 0; i < 5; i++) items.push(generateTOTPSecret(size.bytes * 1.6 | 0));
    setSecrets(items);
  }, [size]);

  useEffect(() => {
    const t = setTimeout(generate, 0);
    return () => clearTimeout(t);
  }, [generate]);

  const generateSingle = useCallback(() => generateTOTPSecret(size.bytes * 1.6 | 0), [size]);

  const firstSecret = secrets[0] || "";
  const otpauthURI = firstSecret
    ? `otpauth://totp/${encodeURIComponent(issuer)}:${encodeURIComponent(account)}?secret=${firstSecret}&issuer=${encodeURIComponent(issuer)}&algorithm=SHA1&digits=6&period=30`
    : "";

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">TOTP Secret Key Generator</h1>
        <p className="text-sm text-(--muted)">
          Generate Base32-encoded secrets for Time-based One-Time Password (TOTP) authentication. Compatible with Google Authenticator, Authy, Microsoft Authenticator, and other 2FA apps.
        </p>
      </div>

      {/* Settings */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Secret Size</label>
          <div className="flex flex-wrap gap-2">
            {SIZES.map((s, i) => (
              <button key={i} onClick={() => setSize(s)}
                className={`px-3 py-2 text-xs font-semibold rounded-lg border cursor-pointer transition-all ${
                  size.bits === s.bits ? "border-(--accent) bg-[rgba(16,185,129,0.08)] text-(--accent)" : "border-(--border) text-(--muted) hover:border-(--accent)"
                }`}
              >{s.label}</button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-(--border) pt-4 text-xs text-(--muted)">
          <div>
            Entropy: <span className="font-semibold text-(--accent) bg-[rgba(16,185,129,0.1)] px-1.5 py-0.5 rounded-full">{size.bits} bits</span>
            <span className="ml-2 opacity-70">Format: Base32 (RFC 4648)</span>
          </div>
          <button onClick={generate} className="btn-primary py-1.5 px-4 text-sm">Generate</button>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-2">
        {secrets.map((s, i) => <KeyRow key={i} value={s} />)}
      </div>

      {/* OTPAuth URI Builder */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">OTPAuth URI (for QR Codes)</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-(--muted) uppercase tracking-wider mb-1">Issuer (App Name)</label>
            <input value={issuer} onChange={(e) => setIssuer(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-(--border) bg-(--background) rounded-lg focus:outline-none focus:border-(--accent)"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-(--muted) uppercase tracking-wider mb-1">Account</label>
            <input value={account} onChange={(e) => setAccount(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-(--border) bg-(--background) rounded-lg focus:outline-none focus:border-(--accent)"
            />
          </div>
        </div>
        {otpauthURI && (
          <div>
            <p className="text-xs text-(--muted) mb-1 font-semibold uppercase tracking-wider">Generated URI</p>
            <div className="bg-(--code-bg) border border-(--border) rounded-lg p-3 font-mono text-[11px] text-(--code-fg) break-all select-all">
              {otpauthURI}
            </div>
            <p className="text-[11px] text-(--muted) mt-2">Use this URI to generate a QR code that users can scan with their authenticator app.</p>
          </div>
        )}
      </div>

      {/* Implementation examples */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">Implementation Examples</h3>
        <CodeBlock filename="Python (pyotp)" code={`import pyotp

# Store this secret securely for each user
secret = "${firstSecret}"

# Generate current TOTP code
totp = pyotp.TOTP(secret)
print(totp.now())  # e.g., "492039"

# Verify a code from user
is_valid = totp.verify("492039")`} />
        <CodeBlock filename="Node.js (otplib)" code={`const { authenticator } = require('otplib');

const secret = "${firstSecret}";

// Generate current code
const token = authenticator.generate(secret);

// Verify user's code
const isValid = authenticator.verify({ token: userCode, secret });`} />
      </div>

      {/* How TOTP works */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">How TOTP Works</h3>
        <p className="text-sm text-(--muted) leading-relaxed">
          TOTP generates a 6-digit code that changes every 30 seconds. Both the server and the user&apos;s authenticator app share the same secret key, allowing them to generate matching codes without network communication.
        </p>
        <ul className="space-y-1.5">
          {["Based on HMAC-SHA1 algorithm (RFC 6238)", "Uses Unix timestamp divided by 30-second intervals", "Base32 encoding makes secrets easy to type manually"].map((t, i) => (
            <li key={i} className="text-sm text-(--muted) flex items-start gap-2">
              <span className="text-(--accent) shrink-0 mt-0.5">•</span> {t}
            </li>
          ))}
        </ul>
      </div>

      {/* Security Considerations */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-(--foreground) mb-3">Security Considerations</h3>
        <ul className="space-y-2">
          {["Store secrets encrypted in your database", "Show the secret/QR code only once during setup", "Provide backup codes for account recovery", "Use 160+ bits (20+ bytes) for production systems"].map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-(--muted)">
              <FiCheck className="text-(--accent) shrink-0 mt-0.5" size={14} /> {tip}
            </li>
          ))}
        </ul>
      </div>

      <BulkGenerator generateFn={generateSingle} label="secrets" />

      <TerminalCommands commands={[
        { label: "Python", code: "python3 -c \"import base64, secrets; print(base64.b32encode(secrets.token_bytes(20)).decode())\"" },
        { label: "OpenSSL + base32", code: "openssl rand -hex 20 | xxd -r -p | base32" },
        { label: "Node.js (URL-safe variant)", code: "node -e \"console.log(require('crypto').randomBytes(20).toString('base64').replace(/[+/=]/g, c => ({'+':'-','/':'_','=':''}[c])))\"" },
      ]} />
    </div>
  );
}
