"use client";

import React, { useState } from "react";
import { calculateEntropy, getStrengthLabel } from "@/utils/crypto";
import Link from "next/link";

export default function PasswordStrengthChecker() {
  const [pwd, setPwd] = useState("");
  const [show, setShow] = useState(false);

  const analyzePassword = () => {
    if (!pwd) return { entropy: 0, strength: { label: "No Password", color: "var(--muted)" }, metrics: [], crackTime: "" };

    let charsetSize = 0;
    const hasLower = /[a-z]/.test(pwd);
    const hasUpper = /[A-Z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSymbol = /[^a-zA-Z0-9]/.test(pwd);

    if (hasLower) charsetSize += 26;
    if (hasUpper) charsetSize += 26;
    if (hasNumber) charsetSize += 10;
    if (hasSymbol) charsetSize += 33;

    const entropy = calculateEntropy(pwd.length, Math.max(charsetSize, 26));
    const strength = getStrengthLabel(entropy);

    const metrics = [
      { name: "Lowercase characters (a-z)", status: hasLower },
      { name: "Uppercase characters (A-Z)", status: hasUpper },
      { name: "Numerical digits (0-9)", status: hasNumber },
      { name: "Special symbols (!@#...)", status: hasSymbol },
      { name: "Length is 12+ characters", status: pwd.length >= 12 },
      { name: "Length is 16+ characters", status: pwd.length >= 16 },
    ];

    let crackTime = "Instantly";
    if (entropy > 120) crackTime = "Universe age+";
    else if (entropy > 80) crackTime = "Centuries";
    else if (entropy > 60) crackTime = "Several years";
    else if (entropy > 45) crackTime = "A few days";
    else if (entropy > 30) crackTime = "Hours";

    return { entropy, strength, metrics, crackTime };
  };

  const { entropy, strength, metrics, crackTime } = analyzePassword();

  return (
    <div className="max-w-xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">Password Strength Checker</h1>
        <p className="text-sm text-(--muted)">
          Test how secure your password is. Get instant feedback on strength, estimated crack time, and suggestions for improvement.
        </p>
      </div>

      {/* Input */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted)">
          Enter Password to Check
        </label>
        <div className="relative">
          <input
            type={show ? "text" : "password"}
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            placeholder="Type or paste a password..."
            className="w-full px-4 py-3 pr-20 font-mono text-base border border-(--border) bg-(--background) rounded-lg focus:outline-none focus:border-(--accent) transition-colors"
          />
          <button
            onClick={() => setShow(!show)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-(--muted) hover:text-(--accent) cursor-pointer"
          >
            {show ? "Hide" : "Show"}
          </button>
        </div>

        {/* Strength bar always visible */}
        <div>
          <div className="w-full bg-(--border) h-2 rounded-full overflow-hidden mb-1">
            <div className="h-full transition-all duration-500"
              style={{ width: pwd ? `${Math.min(100, (entropy / 120) * 100)}%` : "0%", backgroundColor: strength.color }}
            />
          </div>
          <div className="flex items-center justify-between text-xs text-(--muted)">
            <span>Strength: <span className="font-semibold" style={{ color: strength.color }}>{strength.label}</span></span>
            {pwd && <span>{entropy} bits</span>}
          </div>
        </div>
      </div>

      {/* Privacy notice */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
        <div className="flex items-start gap-2">
          <span className="text-blue-400 shrink-0">🔒</span>
          <div>
            <p className="text-sm font-semibold text-(--foreground) mb-1">Your Privacy</p>
            <p className="text-sm text-(--muted)">This tool runs entirely in your browser. Your password is never sent to any server, stored, or logged. You can verify this by disconnecting from the internet and testing — it will still work.</p>
          </div>
        </div>
      </div>

      {/* Analysis */}
      {pwd && (
        <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-(--code-bg) rounded-xl p-4">
              <div className="text-[10px] uppercase font-bold tracking-wider text-(--muted) mb-1">Entropy Score</div>
              <div className="text-2xl font-bold text-(--foreground)">{entropy} bits</div>
            </div>
            <div className="bg-(--code-bg) rounded-xl p-4">
              <div className="text-[10px] uppercase font-bold tracking-wider text-(--muted) mb-1">Crack Time</div>
              <div className="text-2xl font-bold text-(--foreground)">{crackTime}</div>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-(--muted) mb-3">Metrics Analysis</h4>
            <ul className="space-y-2">
              {metrics.map((m, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <span className={`font-bold ${m.status ? "text-green-500" : "text-red-500"}`}>{m.status ? "✓" : "✗"}</span>
                  <span className={m.status ? "text-(--foreground)" : "text-(--muted)"}>{m.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Need a strong password */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">Need a Strong Password?</h3>
        <p className="text-sm text-(--muted)">Generate a cryptographically secure password with our generator:</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/password" className="btn-primary py-2 px-4 text-sm">Password Generator</Link>
          <Link href="/passphrase" className="btn-ghost py-2 px-4 text-sm">Passphrase Generator</Link>
        </div>
      </div>

      {/* Best practices */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-green-500 mb-3">Do ✓</h3>
          <ul className="space-y-1.5">
            {["Use 12+ characters minimum", "Mix uppercase, lowercase, numbers, symbols", "Use a unique password for each account", "Consider using a passphrase", "Use a password manager"].map((t, i) => (
              <li key={i} className="text-sm text-(--muted) flex items-start gap-1.5"><span className="text-green-500 shrink-0">•</span> {t}</li>
            ))}
          </ul>
        </div>
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-red-400 mb-3">Don&apos;t ✗</h3>
          <ul className="space-y-1.5">
            {["Use personal info (names, birthdays)", "Use common words or phrases", "Use keyboard patterns (qwerty, 123456)", "Reuse passwords across sites", "Share passwords via email or text"].map((t, i) => (
              <li key={i} className="text-sm text-(--muted) flex items-start gap-1.5"><span className="text-red-400 shrink-0">•</span> {t}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* How strength calculated */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">How Password Strength Is Calculated</h3>
        <div className="space-y-3">
          {[
            { title: "Entropy", desc: "A measure of randomness based on password length and character set diversity. Higher entropy = more combinations to guess." },
            { title: "Character Variety", desc: "Using lowercase, uppercase, numbers, and symbols increases the possible combinations exponentially." },
            { title: "Length", desc: "Each additional character multiplies the total combinations by the charset size." },
            { title: "Pattern Detection", desc: "Common patterns, repeated characters, and dictionary words make passwords easier to crack." },
          ].map((item, i) => (
            <div key={i} className="text-sm">
              <span className="font-semibold text-(--foreground)">{item.title}</span>
              <span className="text-(--muted)"> — {item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
