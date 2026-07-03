"use client";

import React, { useState, useEffect, useCallback } from "react";
import { generatePassword, calculateEntropy, getStrengthLabel } from "@/utils/crypto";
import KeyRow from "@/components/KeyRow";
import BulkGenerator from "@/components/BulkGenerator";
import { FiUser, FiLock, FiTool, FiGift, FiCheck } from "react-icons/fi";

const EXPIRY_OPTIONS = [
  { label: "1 hour", secs: 3600 },
  { label: "4 hours", secs: 14400 },
  { label: "24 hours", secs: 86400 },
  { label: "7 days", secs: 604800 },
];

export default function TemporaryPasswordPage() {
  const [length, setLength] = useState(16);
  const [expiry, setExpiry] = useState(EXPIRY_OPTIONS[2]);
  const [passwords, setPasswords] = useState([]);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const generate = useCallback(() => {
    const items = [];
    for (let i = 0; i < 5; i++) {
      items.push({
        password: generatePassword(length, { lowercase: true, uppercase: true, numbers: true, symbols: false }),
        createdAt: new Date(),
      });
    }
    setPasswords(items);
  }, [length]);

  useEffect(() => {
    const t = setTimeout(generate, 0);
    return () => clearTimeout(t);
  }, [generate]);

  const entropy = calculateEntropy(length, 62);
  const { label: strengthLabel, color: strengthColor } = getStrengthLabel(entropy);

  const generateSingle = useCallback(() =>
    generatePassword(length, { lowercase: true, uppercase: true, numbers: true, symbols: false }),
    [length]
  );

  const formatExpiry = (createdAt) => {
    if (!now || !createdAt) return "";
    const expiresAt = new Date(createdAt.getTime() + expiry.secs * 1000);
    const msLeft = expiresAt - now;
    if (msLeft <= 0) return "Expired";
    const hours = Math.floor(msLeft / 3600000);
    const mins = Math.floor((msLeft % 3600000) / 60000);
    const secs = Math.floor((msLeft % 60000) / 1000);
    if (hours > 0) return `Expires in ${hours}h ${mins}m`;
    if (mins > 0) return `Expires in ${mins}m ${secs}s`;
    return `Expires in ${secs}s`;
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">Temporary Password Generator</h1>
        <p className="text-sm text-(--muted)">
          Generate secure temporary passwords with expiry tracking. Perfect for onboarding new users, sharing temporary access, and IT administration.
        </p>
      </div>

      {/* Settings */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Length: {length}</label>
            <input type="range" min="8" max="32" value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-full h-1.5 bg-(--border) rounded-lg appearance-none cursor-pointer accent-(--accent)"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Validity Period</label>
            <div className="flex flex-wrap gap-2">
              {EXPIRY_OPTIONS.map(opt => (
                <button key={opt.label} onClick={() => setExpiry(opt)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border cursor-pointer transition-all ${
                    expiry.label === opt.label ? "border-(--accent) bg-[rgba(16,185,129,0.08)] text-(--accent)" : "border-(--border) text-(--muted) hover:border-(--accent)"
                  }`}
                >{opt.label}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-(--border) pt-4 text-xs text-(--muted)">
          <div>
            Entropy: <span className="font-semibold text-(--accent) bg-[rgba(16,185,129,0.1)] px-1.5 py-0.5 rounded-full">{entropy} bits</span>
            <span className="ml-2 px-1.5 py-0.5 rounded-full text-[11px] font-semibold" style={{ color: strengthColor, background: `${strengthColor}20` }}>{strengthLabel}</span>
          </div>
          <button onClick={generate} className="btn-primary py-1.5 px-4 text-sm">Generate</button>
        </div>
      </div>

      {/* Passwords with expiry */}
      <div className="space-y-3">
        {passwords.map((item, i) => (
          <div key={i} className="bg-(--card-bg) border border-(--border) rounded-xl p-4 shadow-sm space-y-2">
            <KeyRow value={item.password} />
            <div className="flex items-center justify-between text-xs text-(--muted)">
              <span>Created: {item.createdAt ? item.createdAt.toLocaleTimeString() : ""}</span>
              <span className="text-amber-400 font-medium">{formatExpiry(item.createdAt)}</span>
            </div>
            <div className="h-1 bg-(--border) rounded-full overflow-hidden">
              <div className="h-full bg-amber-400 rounded-full transition-all" style={{
                width: now && item.createdAt ? `${Math.max(0, 100 - ((now - item.createdAt) / (expiry.secs * 1000)) * 100)}%` : "100%"
              }} />
            </div>
          </div>
        ))}
      </div>

      {/* Use cases */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">Use Cases for Temporary Passwords</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: <FiUser size={14} className="shrink-0 mt-0.5 text-(--accent)" />, title: "New User Onboarding", desc: "Give new employees or users an initial password they must change immediately." },
            { icon: <FiLock size={14} className="shrink-0 mt-0.5 text-(--accent)" />, title: "Shared Access", desc: "Provide temporary access to a shared resource or system." },
            { icon: <FiTool size={14} className="shrink-0 mt-0.5 text-(--accent)" />, title: "Password Reset", desc: "Send a temporary password when a user can't access their email." },
            { icon: <FiGift size={14} className="shrink-0 mt-0.5 text-(--accent)" />, title: "Event Access", desc: "Temporary codes for events, demo systems, or short-term access." },
          ].map((uc, i) => (
            <div key={i} className="flex items-start gap-2">
              {uc.icon}
              <div>
                <p className="text-sm font-semibold text-(--foreground)">{uc.title}</p>
                <p className="text-xs text-(--muted) mt-0.5">{uc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Best practices */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-(--foreground) mb-3">Best Practices</h3>
        <ul className="space-y-2">
          {["Force password change on first login", "Set server-side expiry — don't just rely on the UI", "Use secure channels to communicate the temporary password", "Log temporary password creation for audit purposes"].map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-(--muted)">
              <FiCheck className="text-(--accent) shrink-0 mt-0.5" size={14} /> {tip}
            </li>
          ))}
        </ul>
      </div>

      <BulkGenerator generateFn={generateSingle} label="passwords" />
    </div>
  );
}
