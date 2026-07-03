"use client";

import React, { useState, useEffect, useCallback } from "react";
import { generatePassphrase } from "@/utils/crypto";
import KeyRow from "@/components/KeyRow";
import BulkGenerator from "@/components/BulkGenerator";
import { FiCheck } from "react-icons/fi";

export default function MemorablePasswordPage() {
  const [numWords, setNumWords] = useState(4);
  const [separator, setSeparator] = useState("-");
  const [passwords, setPasswords] = useState([]);

  const generate = useCallback(() => {
    const items = [];
    for (let i = 0; i < 5; i++) {
      // Capitalize each word for memorable style
      const phrase = generatePassphrase(numWords, separator);
      const capitalized = phrase.split(separator).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(separator);
      items.push(capitalized);
    }
    setPasswords(items);
  }, [numWords, separator]);

  useEffect(() => {
    const t = setTimeout(generate, 0);
    return () => clearTimeout(t);
  }, [generate]);

  const entropy = Math.round(numWords * Math.log2(768));
  const generateSingle = useCallback(() => {
    const phrase = generatePassphrase(numWords, separator);
    return phrase.split(separator).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(separator);
  }, [numWords, separator]);

  const separatorOptions = [
    { label: "Hyphen (-)", value: "-" },
    { label: "Underscore (_)", value: "_" },
    { label: "Space ( )", value: " " },
    { label: "Period (.)", value: "." },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">Memorable Password Generator</h1>
        <p className="text-sm text-(--muted)">
          Generate passwords that are both secure AND easy to remember. Using word-based patterns makes passwords memorable without sacrificing security.
        </p>
      </div>

      {/* Settings */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Word Count</label>
            <div className="flex flex-wrap gap-2">
              {[3, 4, 5, 6].map((n) => (
                <button key={n} onClick={() => setNumWords(n)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                    numWords === n ? "border-(--accent) bg-[rgba(16,185,129,0.08)] text-(--accent)" : "border-(--border) bg-(--background) text-(--muted) hover:border-(--accent) hover:text-(--accent)"
                  }`}
                >
                  {n} words{n === 4 ? " (recommended)" : ""}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Separator</label>
            <select value={separator} onChange={(e) => setSeparator(e.target.value)}
              className="w-full px-3 py-1.5 text-sm border border-(--border) bg-(--background) rounded-lg focus:outline-none focus:border-(--accent)"
            >
              {separatorOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-(--border) pt-4 text-xs text-(--muted)">
          <div>
            Entropy: <span className="font-semibold text-(--accent) bg-[rgba(16,185,129,0.1)] px-1.5 py-0.5 rounded-full">~{entropy} bits</span>
            <span className="ml-2 opacity-60">({numWords} words from 768 word list)</span>
          </div>
          <button onClick={generate} className="btn-primary py-1.5 px-4 text-sm">Generate</button>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-2">
        {passwords.map((p, i) => <KeyRow key={i} value={p} />)}
      </div>

      {/* XKCD section */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">Why Word-Based Passwords?</h3>
        <p className="text-sm text-(--muted) leading-relaxed">
          As famously illustrated by <span className="font-semibold text-(--foreground)">XKCD #936</span>, a password like <span className="font-mono bg-(--code-bg) px-1 rounded text-(--foreground)">correct-horse-battery-staple</span> is both easier to remember AND more secure than something like <span className="font-mono bg-(--code-bg) px-1 rounded text-(--foreground)">Tr0ub4dor&3</span>.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[
            { pw: "Tr0ub4dor&3", bits: "~28 bits entropy", note: "hard to remember" },
            { pw: "correct-horse-battery-staple", bits: "~44 bits entropy", note: "easy to remember" },
          ].map((item, i) => (
            <div key={i} className={`p-4 rounded-xl border ${i === 1 ? "border-(--accent) bg-[rgba(16,185,129,0.04)]" : "border-(--border) bg-(--code-bg)"}`}>
              <p className="font-mono text-sm font-semibold text-(--foreground) break-all mb-1">{item.pw}</p>
              <p className="text-[11px] text-(--muted)">{item.bits}, {item.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-(--foreground) mb-3">Tips for Memorable Passwords</h3>
        <ul className="space-y-2">
          {[
            "Create a mental image or story connecting the words",
            "4+ words provides excellent security (comparable to 12+ random characters)",
            "Adding a number or symbol increases security with minimal memory burden",
            "Each additional word doubles the time to crack",
            "Still use unique passwords for each account — use a password manager!"
          ].map((t, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-(--muted)">
              <FiCheck className="text-(--accent) mt-0.5 shrink-0" size={14} /> {t}
            </li>
          ))}
        </ul>
      </div>

      {/* Security comparison table */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-(--border)">
          <h3 className="text-sm font-semibold text-(--foreground)">Security Comparison</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead className="bg-(--code-bg) text-(--muted) uppercase tracking-wider">
              <tr>
                {["Words", "Entropy", "Equivalent Random Chars"].map(h => (
                  <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["3 words", "~39 bits", "~8 random characters"],
                ["4 words", "~52 bits", "~10 random characters"],
                ["5 words", "~64 bits", "~12 random characters"],
                ["6 words", "~77 bits", "~14 random characters"],
              ].map((row, i) => (
                <tr key={i} className={`border-t border-(--border) ${i % 2 === 0 ? "bg-(--background)" : "bg-(--card-bg)"}`}>
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-3 text-(--foreground) ${j === 0 ? "font-semibold" : ""}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <BulkGenerator generateFn={generateSingle} label="passwords" />
    </div>
  );
}
