"use client";

import React, { useState, useEffect, useCallback } from "react";
import { generatePassword } from "@/utils/crypto";
import KeyRow from "@/components/KeyRow";
import { FiEdit2, FiCamera, FiUser, FiCheckCircle } from "react-icons/fi";

const FORMATS = {
  "6x4": { groups: 6, len: 4, label: "6 × 4 (Apple style)" },
  "8x4": { groups: 8, len: 4, label: "8 × 4 (Microsoft style)" },
  "5x5": { groups: 5, len: 5, label: "5 × 5 (Custom)" },
};

const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

const generateKey = (groups, len) => {
  const parts = [];
  for (let i = 0; i < groups; i++) {
    let part = "";
    for (let j = 0; j < len; j++) {
      part += CHARS[Math.floor(Math.random() * CHARS.length)];
    }
    parts.push(part);
  }
  return parts.join("-");
};

const computeEntropy = (groups, len) => Math.round(groups * len * Math.log2(32));

export default function RecoveryKeyPage() {
  const [format, setFormat] = useState("6x4");
  const [keys, setKeys] = useState([]);

  const generate = useCallback(() => {
    const { groups, len } = FORMATS[format];
    const items = [];
    for (let i = 0; i < 4; i++) items.push(generateKey(groups, len));
    setKeys(items);
  }, [format]);

  useEffect(() => {
    const t = setTimeout(generate, 0);
    return () => clearTimeout(t);
  }, [generate]);

  const { groups, len } = FORMATS[format];
  const entropy = computeEntropy(groups, len);

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">Recovery Key Generator</h1>
        <p className="text-sm text-(--muted)">
          Generate secure recovery keys in the style of Apple, Google, and Microsoft. Used as a last resort to regain access to your account.
        </p>
      </div>

      {/* Settings */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Format</label>
          <div className="flex flex-wrap gap-2">
            {Object.entries(FORMATS).map(([key, { label }]) => (
              <button key={key} onClick={() => setFormat(key)}
                className={`px-3 py-2 text-xs font-semibold rounded-lg border cursor-pointer transition-all ${
                  format === key ? "border-(--accent) bg-[rgba(16,185,129,0.08)] text-(--accent)" : "border-(--border) text-(--muted) hover:border-(--accent)"
                }`}
              >{label}</button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-(--border) pt-4 text-xs text-(--muted)">
          <span>Entropy: <span className="font-semibold text-(--accent) bg-[rgba(16,185,129,0.1)] px-1.5 py-0.5 rounded-full">{entropy} bits</span></span>
          <button onClick={generate} className="btn-primary py-1.5 px-4 text-sm">Generate</button>
        </div>
      </div>

      {/* Keys */}
      <div className="space-y-2">
        {keys.map((key, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-xs text-(--muted) w-6 text-right shrink-0">{entropy} bits</span>
            <KeyRow value={key} />
          </div>
        ))}
      </div>

      {/* Security tips */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">Recovery Key Security</h3>
        <ul className="space-y-2">
          {[
            { icon: <FiEdit2 className="shrink-0 mt-0.5 text-(--accent)" />, text: "Write it down — Store a physical copy in a secure location" },
            { icon: <FiCamera className="shrink-0 mt-0.5 text-red-400" />, text: "Don't screenshot — Photos can be synced to cloud services" },
            { icon: <FiUser className="shrink-0 mt-0.5 text-(--accent)" />, text: "Tell someone trusted — In case of emergency, someone should know where it is" },
            { icon: <FiCheckCircle className="shrink-0 mt-0.5 text-(--accent)" />, text: "Test it works — Verify the key before relying on it" },
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-(--muted)">{tip.icon} {tip.text}</li>
          ))}
        </ul>
      </div>

      {/* Comparison */}
      <div className="grid grid-cols-2 gap-5">
        {[
          { title: "Recovery Key", color: "border-(--accent)", items: ["Single long key", "Can be used multiple times", "Full account recovery", "Higher security"] },
          { title: "Backup Codes", color: "border-(--border)", items: ["Multiple short codes", "One-time use each", "2FA bypass only", "Easier to manage"] },
        ].map((card, i) => (
          <div key={i} className={`bg-(--card-bg) border ${card.color} rounded-xl p-5 shadow-sm`}>
            <h4 className="text-sm font-semibold text-(--foreground) mb-3">{card.title}</h4>
            <ul className="space-y-1.5">
              {card.items.map((item, j) => (
                <li key={j} className="text-xs text-(--muted) flex items-center gap-1.5">
                  <span className="text-(--accent) shrink-0">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
