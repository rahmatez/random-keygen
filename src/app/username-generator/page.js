"use client";

import React, { useState, useEffect, useCallback } from "react";

const STYLES = [
  { id: "gaming", label: "Gaming" },
  { id: "professional", label: "Professional" },
  { id: "memorable", label: "Memorable" },
  { id: "anonymous", label: "Anonymous" },
];

const GAMING_ADJECTIVES = ["Shadow", "Thunder", "Neon", "Iron", "Stealth", "Omega", "Quantum", "Dark", "Frozen", "Hidden", "Swift", "Zero", "Fast", "Calm", "Cosmic", "Cyber", "Hyper", "Night", "Rapid", "Storm"];
const GAMING_NOUNS = ["Wolf", "Dragon", "Phoenix", "Viper", "Scout", "Apex", "Echo", "Cipher", "Eagle", "Sage", "Blade", "Hawk", "Ghost", "Titan", "Wraith", "Hunter", "Rogue", "Phantom", "Cobra", "Rider"];
const PROFESSIONAL_PREFIXES = ["dev", "tech", "data", "code", "sys", "net", "api", "ops", "cloud", "sec"];
const PROFESSIONAL_SUFFIXES = ["phoenix", "sage", "ops", "forge", "lab", "hub", "core", "dev", "pilot", "pro"];
const MEMORABLE_ADJS = ["swift", "cosmic", "gentle", "brave", "silent", "bright", "fresh", "keen", "bold", "wise"];
const MEMORABLE_NOUNS = ["hawk", "blade", "river", "peak", "dawn", "star", "wind", "tide", "leaf", "stone"];
const ANON_CHARS = "abcdefghijklmnopqrstuvwxyz0123456789";

function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

function generateUsername(style, withNumbers) {
  const num = withNumbers ? randInt(10, 999) : "";
  switch (style) {
    case "gaming": return `${rand(GAMING_ADJECTIVES)}${rand(GAMING_NOUNS)}${num}`;
    case "professional": return `${rand(PROFESSIONAL_PREFIXES)}_${rand(PROFESSIONAL_SUFFIXES)}${num ? `_${num}` : ""}`;
    case "memorable": return `${rand(MEMORABLE_ADJS)}-${rand(MEMORABLE_NOUNS)}${num ? `-${num}` : ""}`;
    case "anonymous": {
      let r = "anon_";
      for (let i = 0; i < 8; i++) r += ANON_CHARS[Math.floor(Math.random() * ANON_CHARS.length)];
      return r;
    }
    default: return "username";
  }
}

export default function UsernameGeneratorPage() {
  const [style, setStyle] = useState("gaming");
  const [withNumbers, setWithNumbers] = useState(true);
  const [usernames, setUsernames] = useState([]);

  const generate = useCallback(() => {
    const items = [];
    for (let i = 0; i < 10; i++) items.push(generateUsername(style, withNumbers));
    setUsernames(items);
  }, [style, withNumbers]);

  useEffect(() => {
    const t = setTimeout(generate, 0);
    return () => clearTimeout(t);
  }, [generate]);

  const styleExamples = {
    gaming: { desc: "Bold, memorable names perfect for games and streaming.", examples: "ShadowNinja, CosmicDragon42, NeonPhantom" },
    professional: { desc: "Clean, work-appropriate usernames for business accounts.", examples: "dev_phoenix, tech_sage, data_ops" },
    memorable: { desc: "Easy to remember and type, with word-based patterns.", examples: "swift-hawk-77, cosmic-blade-33" },
    anonymous: { desc: "Random strings for privacy-focused accounts.", examples: "anon_8k3m7x9p, user_q2w4e6r8" },
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">Username Generator</h1>
        <p className="text-sm text-(--muted)">
          Generate unique, random usernames for gaming, social media, email accounts, and online services. Multiple styles to match your needs.
        </p>
      </div>

      {/* Settings */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Style</label>
            <div className="grid grid-cols-2 gap-2">
              {STYLES.map(s => (
                <button key={s.id} onClick={() => setStyle(s.id)}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg border cursor-pointer transition-all ${
                    style === s.id ? "border-(--accent) bg-[rgba(16,185,129,0.08)] text-(--accent)" : "border-(--border) text-(--muted) hover:border-(--accent)"
                  }`}
                >{s.label}</button>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <label className="flex items-center gap-2 text-sm text-(--foreground) cursor-pointer">
              <input type="checkbox" checked={withNumbers} onChange={(e) => setWithNumbers(e.target.checked)}
                className="w-4 h-4 rounded border-(--border) accent-(--accent)"
              />
              Include numbers
            </label>
          </div>
        </div>
        <div className="flex justify-end border-t border-(--border) pt-4">
          <button onClick={generate} className="btn-primary py-1.5 px-4 text-sm">Generate</button>
        </div>
      </div>

      {/* Style description */}
      {style && styleExamples[style] && (
        <div className="bg-(--code-bg) border border-(--border) rounded-xl p-4 space-y-1">
          <p className="text-sm text-(--foreground) font-semibold capitalize">{style}</p>
          <p className="text-xs text-(--muted)">{styleExamples[style].desc}</p>
          <p className="text-xs font-mono text-(--muted) opacity-70">{styleExamples[style].examples}</p>
        </div>
      )}

      {/* Usernames */}
      <div className="grid grid-cols-1 gap-2">
        {usernames.map((u, i) => <UsernameCard key={i} value={u} />)}
      </div>

      <div className="text-center">
        <button onClick={generate} className="btn-ghost py-2 px-6 text-sm cursor-pointer">Generate more</button>
      </div>

      {/* Styles explained */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">Username Styles Explained</h3>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(styleExamples).map(([key, val]) => (
            <div key={key} className="space-y-1.5">
              <p className="text-sm font-semibold text-(--foreground) capitalize">{key}</p>
              <p className="text-xs text-(--muted)">{val.desc}</p>
              <p className="text-[11px] font-mono text-(--muted) opacity-70">{val.examples}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Username tips */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-(--foreground) mb-3">Username Tips</h3>
        <ul className="space-y-2">
          {[
            "Check availability on your target platform before committing",
            "Avoid using personal information (real name, birthdate)",
            "Keep it easy to spell if others need to find you",
            "Consider using different usernames for different purposes",
            "Add numbers if your preferred username is taken",
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-(--muted)">
              <span className="text-(--accent) shrink-0 mt-0.5">•</span> {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function UsernameCard({ value }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 1500); }
    catch (err) { console.error(err); }
  };
  return (
    <button onClick={handleCopy}
      className="key-row group w-full text-left cursor-pointer"
    >
      <span className="key-value font-semibold">{value}</span>
      {copied ? <span className="tooltip">Copied!</span> : (
        <svg className="copy-icon w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
        </svg>
      )}
    </button>
  );
}
