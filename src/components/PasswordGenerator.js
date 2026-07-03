"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  generatePassword,
  generatePassphrase,
  generatePronounceablePassword,
  calculateEntropy,
  getStrengthLabel
} from "@/utils/crypto";
import BulkGenerator from "@/components/BulkGenerator";
import TerminalCommands from "@/components/TerminalCommands";
import RelatedTools from "@/components/RelatedTools";
import CodeBlock from "@/components/CodeBlock";
import { FiCheck, FiRefreshCw } from "react-icons/fi";

const NUM_PASSWORDS = 6;

export default function PasswordGenerator({ initialMode = "random", initialLength = 16, initialOptions = {}, title, description }) {
  const [mode, setMode] = useState(initialMode);
  const [length, setLength] = useState(initialLength);
  const [numWords, setNumWords] = useState(4);
  const [separator, setSeparator] = useState("-");
  const [passwords, setPasswords] = useState([]);

  const [opts, setOpts] = useState({
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true,
    excludeAmbiguous: false,
    ...initialOptions
  });

  const handleOptChange = (key) => {
    setOpts(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleGenerate = useCallback(() => {
    const results = [];
    for (let i = 0; i < NUM_PASSWORDS; i++) {
      let result = "";
      if (mode === "random" || mode === "memorable") {
        result = generatePassword(length, opts);
      } else if (mode === "passphrase") {
        result = generatePassphrase(numWords, separator);
      } else if (mode === "pronounceable") {
        result = generatePronounceablePassword(length);
      }
      results.push(result);
    }
    setPasswords(results);
  }, [mode, length, numWords, separator, opts]);

  useEffect(() => {
    const timer = setTimeout(() => { handleGenerate(); }, 0);
    return () => clearTimeout(timer);
  }, [handleGenerate]);

  const getEntropyForPassword = (pw) => {
    let charsetSize = 0;
    let actualLength = pw.length;
    if (mode === "random" || mode === "memorable") {
      if (opts.lowercase) charsetSize += 26;
      if (opts.uppercase) charsetSize += 26;
      if (opts.numbers) charsetSize += 10;
      if (opts.symbols) charsetSize += 28;
      if (opts.excludeAmbiguous) charsetSize -= 5;
    } else if (mode === "passphrase") {
      charsetSize = 250;
      actualLength = numWords;
    } else if (mode === "pronounceable") {
      charsetSize = 26;
    }
    return calculateEntropy(actualLength, Math.max(charsetSize, 26));
  };

  const entropy = passwords.length > 0 ? getEntropyForPassword(passwords[0]) : 0;

  const generateSingle = useCallback(() => {
    if (mode === "random" || mode === "memorable") return generatePassword(length, opts);
    if (mode === "passphrase") return generatePassphrase(numWords, separator);
    return generatePronounceablePassword(length);
  }, [mode, length, numWords, separator, opts]);

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">
          {title || "Secure Password Generator"}
        </h1>
        <p className="text-sm text-(--muted)">
          {description || "Generate cryptographically secure passwords with strength visualization, passphrase mode, pronounceable passwords, and bulk CSV export."}
        </p>
      </div>

      {/* Mode Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {[
          { id: "random", label: "Random", desc: "Traditional random passwords" },
          { id: "passphrase", label: "Passphrase", desc: "Memorable word combinations" },
          { id: "pronounceable", label: "Pronounceable", desc: "Easy to say passwords" },
          { id: "memorable", label: "Memorable", desc: "Pattern-based passwords" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setMode(tab.id)}
            className={`p-3 text-left border rounded-xl transition-all cursor-pointer ${
              mode === tab.id
                ? "border-(--accent) bg-[rgba(16,185,129,0.04)] shadow-sm"
                : "border-(--border) bg-(--card-bg) hover:bg-(--code-bg)"
            }`}
          >
            <div className={`font-semibold text-sm ${mode === tab.id ? "text-(--accent)" : "text-(--foreground)"}`}>
              {tab.label}
            </div>
            <div className="text-[10px] text-(--muted) mt-0.5">{tab.desc}</div>
          </button>
        ))}
      </div>

      {/* Settings Panel */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm">
        {mode === "passphrase" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">
                Words: {numWords}
              </label>
              <input type="range" min="3" max="12" value={numWords}
                onChange={(e) => setNumWords(parseInt(e.target.value))}
                className="w-full h-1.5 bg-(--border) rounded-lg appearance-none cursor-pointer accent-(--accent)"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Separator</label>
              <input type="text" maxLength="5" value={separator}
                onChange={(e) => setSeparator(e.target.value)}
                className="w-full px-3 py-1.5 text-sm border border-(--border) bg-(--background) rounded-lg focus:outline-none focus:border-(--accent)"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">
                  Length: {length}
                </label>
                <div className="flex items-center gap-4">
                  <input type="range" min="6" max="64" value={length}
                    onChange={(e) => setLength(parseInt(e.target.value))}
                    className="flex-1 h-1.5 bg-(--border) rounded-lg appearance-none cursor-pointer accent-(--accent)"
                  />
                  <input type="number" min="6" max="128" value={length}
                    onChange={(e) => setLength(Math.max(6, Math.min(128, parseInt(e.target.value) || 6)))}
                    className="w-16 px-2 py-1 text-center text-sm border border-(--border) bg-(--background) rounded-lg focus:outline-none focus:border-(--accent)"
                  />
                </div>
              </div>
              {(mode === "random" || mode === "memorable") && (
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-3">Character Types</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "lowercase", label: "Lowercase (a-z)" },
                      { id: "uppercase", label: "Uppercase (A-Z)" },
                      { id: "numbers", label: "Numbers (0-9)" },
                      { id: "symbols", label: "Symbols (!@#$%^&*)" },
                    ].map((item) => (
                      <label key={item.id} className="flex items-center gap-2 text-xs text-(--foreground) cursor-pointer">
                        <input type="checkbox" checked={opts[item.id]} onChange={() => handleOptChange(item.id)}
                          className="w-3.5 h-3.5 rounded border-(--border) accent-(--accent)"
                        />
                        {item.label}
                      </label>
                    ))}
                  </div>
                  <label className="flex items-center gap-2 text-xs text-(--foreground) cursor-pointer mt-2">
                    <input type="checkbox" checked={opts.excludeAmbiguous} onChange={() => handleOptChange("excludeAmbiguous")}
                      className="w-3.5 h-3.5 rounded border-(--border) accent-(--accent)"
                    />
                    Exclude ambiguous (0O1lI)
                  </label>
                </div>
              )}
            </div>
          </div>
        )}
        <div className="flex items-center justify-between border-t border-(--border) mt-6 pt-4 text-xs text-(--muted)">
          <div>Entropy: <span className="font-semibold text-(--accent) bg-[rgba(16,185,129,0.1)] px-1.5 py-0.5 rounded-full">{entropy} bits</span></div>
          <button onClick={handleGenerate} className="btn-primary py-1.5 px-4 text-sm">Generate</button>
        </div>
      </div>

      {/* Password List */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-(--muted) mb-3">Generated Passwords</h3>
        <div className="space-y-2">
          {passwords.map((pw, idx) => {
            const ent = getEntropyForPassword(pw);
            const str = getStrengthLabel(ent);
            return (
              <PasswordRow key={idx} value={pw} entropy={ent} strength={str} onRegenerate={() => {
                const newPw = generateSingle();
                setPasswords(prev => { const n = [...prev]; n[idx] = newPw; return n; });
              }} />
            );
          })}
        </div>
      </div>

      {/* Strength Guide */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-(--foreground) mb-4">Password Strength Guide</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-(--muted) mb-2">Entropy Levels</p>
            {[
              { range: "50–69 bits", label: "Minimum for online accounts", color: "#f59e0b" },
              { range: "70–99 bits", label: "Good for most accounts", color: "#10b981" },
              { range: "100–127 bits", label: "Strong protection", color: "#3b82f6" },
              { range: "128+ bits", label: "Excellent for critical accounts", color: "#8b5cf6" },
            ].map((row, i) => (
              <div key={i} className="flex items-start gap-2 text-xs">
                <div className="w-2 h-2 rounded-full mt-1 shrink-0" style={{ background: row.color }} />
                <span className="font-mono font-semibold text-(--foreground)">{row.range}:</span>
                <span className="text-(--muted)">{row.label}</span>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-(--muted) mb-2">Mode Recommendations</p>
            {[
              { mode: "Passphrase", rec: "Easy to remember, very secure" },
              { mode: "Random", rec: "Maximum entropy per character" },
              { mode: "Pronounceable", rec: "Balance of usability and security" },
              { mode: "Memorable", rec: "Pattern-based, moderate security" },
            ].map((row, i) => (
              <div key={i} className="flex items-start gap-2 text-xs">
                <span className="font-semibold text-(--foreground) w-24 shrink-0">{row.mode}:</span>
                <span className="text-(--muted)">{row.rec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bulk Generator */}
      <BulkGenerator generateFn={generateSingle} label="passwords" />

      {/* Password Manager Integration */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-5">
        <h3 className="text-sm font-semibold text-(--foreground)">Password Manager Integration</h3>
        <div className="space-y-4">
          {[
            {
              name: "1Password",
              desc: "Generate and store passwords directly in 1Password",
              code: `op item create --category=login --title="My Account" \\\n  --vault="Private" login.username=user \\\n  login.password="$(node -e 'console.log(require("crypto").randomBytes(16).toString("hex"))')"`
            },
            {
              name: "Bitwarden",
              desc: "Create secure entries with Bitwarden CLI",
              code: `bw generate --length 20 --uppercase --lowercase --number --special\nbw create item '{"type":1,"name":"My Account","login":{"username":"user","password":"generated_password"}}'`
            },
            {
              name: "KeePass",
              desc: "Generate CSV format for KeePass import",
              code: `echo "Group,Title,Username,Password,URL" > passwords.csv\necho "Internet,My Account,user,$(openssl rand -base64 20 | tr -dc 'a-zA-Z0-9!@#$%^&*' | head -c16),https://example.com" >> passwords.csv`
            }
          ].map((mgr) => (
            <div key={mgr.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-(--foreground)">{mgr.name}</p>
                <span className="text-[11px] text-(--muted)">{mgr.desc}</span>
              </div>
              <CodeBlock code={mgr.code} />
            </div>
          ))}
        </div>
      </div>

      {/* Terminal Commands */}
      <TerminalCommands commands={[
        { label: "OpenSSL with special characters", code: `openssl rand -base64 12 | tr -dc 'a-zA-Z0-9!@#$%^&*' | head -c 16` },
        { label: "Linux /dev/urandom", code: `LC_ALL=C tr -dc 'a-zA-Z0-9!@#$%^&*' < /dev/urandom | head -c 16` },
        { label: "Python secrets module", code: `python3 -c "import secrets, string; print(''.join(secrets.choice(string.ascii_letters + string.digits + '!@#$%^&*') for _ in range(16)))"` }
      ]} />

      {/* Security Tips */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-(--foreground) mb-3">Security Tips</h3>
        <ul className="space-y-2">
          {[
            "Use unique passwords for every account",
            "Enable 2FA wherever possible",
            "Use a password manager to store credentials",
            "Never share passwords via email or text"
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-(--muted)">
              <FiCheck className="text-(--accent) mt-0.5 shrink-0" size={14} /> {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* Related Tools */}
      <RelatedTools tools={[
        { name: "8 Character Password", href: "/password/8-character", desc: "Legacy system compatible" },
        { name: "Password Strength Checker", href: "/password-strength", desc: "Test your password security" },
        { name: "Passphrase Generator", href: "/passphrase", desc: "Easy to remember passwords" },
        { name: "Memorable Passwords", href: "/memorable-password", desc: "Word-based passwords" },
        { name: "PIN Generator", href: "/pin-generator", desc: "Secure 4-6 digit PINs" },
        { name: "Bulk Generator", href: "/bulk-password-generator", desc: "Generate hundreds at once" },
      ]} />
    </div>
  );
}

function PasswordRow({ value, entropy, strength, onRegenerate }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) { console.error(err); }
  };

  return (
    <div className="bg-(--card-bg) border border-(--border) rounded-xl p-4 shadow-sm group hover:border-(--accent) transition-all">
      <div className="flex items-center justify-between gap-3 mb-2">
        <span className="font-mono text-base break-all text-(--foreground) select-all flex-1">{value}</span>
        <div className="flex items-center gap-1 shrink-0">
          <button onClick={onRegenerate} className="p-1.5 text-(--muted) hover:text-(--accent) cursor-pointer transition-colors" title="Regenerate this password">
            <FiRefreshCw className="w-3.5 h-3.5" />
          </button>
          <button onClick={handleCopy} className="p-1.5 text-(--muted) hover:text-(--accent) cursor-pointer transition-colors" title="Copy">
            {copied ? (
              <span className="text-[11px] font-semibold text-(--accent)">Copied!</span>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex-1 bg-(--border) h-1.5 rounded-full overflow-hidden">
          <div className="h-full transition-all duration-300" style={{ width: `${Math.min(100, (entropy / 120) * 100)}%`, backgroundColor: strength.color }} />
        </div>
        <span className="text-[11px] font-semibold whitespace-nowrap" style={{ color: strength.color }}>{strength.label}</span>
        <span className="text-[11px] text-(--muted) whitespace-nowrap">{entropy} bits</span>
      </div>
    </div>
  );
}
