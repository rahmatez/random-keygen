"use client";

import React, { useState, useEffect, useCallback } from "react";
import { generatePIN } from "@/utils/crypto";
import BulkGenerator from "@/components/BulkGenerator";
import { FiCreditCard, FiSmartphone, FiRadio, FiMonitor, FiLock, FiHome } from "react-icons/fi";

export default function PINGeneratorPage() {
  const [pinLength, setPinLength] = useState(4);
  const [pins, setPins] = useState([]);

  const generate = useCallback(() => {
    const items = [];
    for (let i = 0; i < 8; i++) items.push(generatePIN(pinLength));
    setPins(items);
  }, [pinLength]);

  useEffect(() => {
    const t = setTimeout(generate, 0);
    return () => clearTimeout(t);
  }, [generate]);

  const combinations = Math.pow(10, pinLength).toLocaleString();
  const generateSingle = useCallback(() => generatePIN(pinLength), [pinLength]);

  const useCases = [
    { icon: <FiCreditCard size={15} className="shrink-0 mt-0.5 text-(--accent)" />, title: "ATM & Banking PINs", desc: "Debit cards, credit cards, and ATM access. Most banks require 4-digit PINs, though some allow 5-6 digits for enhanced security." },
    { icon: <FiSmartphone size={15} className="shrink-0 mt-0.5 text-(--accent)" />, title: "Device PINs", desc: "Smartphone screen locks, tablet security, laptop TPM chips, and smart device access codes. 4-6 digits are most common." },
    { icon: <FiRadio size={15} className="shrink-0 mt-0.5 text-(--accent)" />, title: "SIM Card PUKs", desc: "Personal Unblocking Keys for SIM cards are typically 8-digit codes. Essential backup codes for mobile phone security." },
    { icon: <FiMonitor size={15} className="shrink-0 mt-0.5 text-(--accent)" />, title: "Parental Control PINs", desc: "TV parental controls, gaming console restrictions, router settings, and streaming service child locks." },
    { icon: <FiLock size={15} className="shrink-0 mt-0.5 text-(--accent)" />, title: "App & Service PINs", desc: "Banking apps, password managers, secure messaging apps, and financial service passcodes." },
    { icon: <FiHome size={15} className="shrink-0 mt-0.5 text-(--accent)" />, title: "Security Systems", desc: "Home alarms, building access, safes, keypad locks, and access control systems." },
  ];

  const commonPins = ["1234", "1111", "0000", "1212", "7777", "1004", "2000", "4444", "2222", "6969", "9999", "3333", "5555", "6666", "1122", "1313"];

  const comparisonRows = [
    ["4 digits", "10,000", "~9 years"],
    ["5 digits", "100,000", "~91 years"],
    ["6 digits", "1,000,000", "~913 years"],
    ["8 digits", "100,000,000", "~91,324 years"],
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">PIN Generator</h1>
        <p className="text-sm text-(--muted)">
          Generate cryptographically secure random PIN codes. Perfect for ATM cards, phone locks, app passcodes, and security systems.
        </p>
      </div>

      {/* Settings */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">PIN Length</label>
          <div className="flex flex-wrap gap-2">
            {[
              { n: 4, label: "4 digits (standard)" },
              { n: 5, label: "5 digits" },
              { n: 6, label: "6 digits (more secure)" },
              { n: 8, label: "8 digits (PUK)" },
            ].map(({ n, label }) => (
              <button key={n} onClick={() => setPinLength(n)}
                className={`px-3 py-2 text-xs font-semibold rounded-lg border cursor-pointer transition-all ${
                  pinLength === n ? "border-(--accent) bg-[rgba(16,185,129,0.08)] text-(--accent)" : "border-(--border) text-(--muted) hover:border-(--accent)"
                }`}
              >{label}</button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-(--border) pt-4 text-xs text-(--muted)">
          <span>Possible combinations: <span className="font-mono font-semibold text-(--foreground)">{combinations}</span></span>
          <button onClick={generate} className="btn-primary py-1.5 px-4 text-sm">Generate</button>
        </div>
      </div>

      {/* PIN List */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {pins.map((pin, i) => (
          <PINCard key={i} value={pin} />
        ))}
      </div>

      <div className="text-center">
        <button onClick={generate} className="btn-ghost py-2 px-6 text-sm cursor-pointer">Generate more PINs</button>
      </div>

      {/* Use Cases */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">PIN Generator Use Cases</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {useCases.map((uc, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-xl shrink-0">{uc.icon}</span>
              <div>
                <p className="text-sm font-semibold text-(--foreground)">{uc.title}</p>
                <p className="text-xs text-(--muted) mt-0.5 leading-relaxed">{uc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Tips */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">PIN Security Tips</h3>
        <ul className="space-y-2">
          {[
            "Avoid obvious PINs: 1234, 0000, 1111, birth years",
            "Don't use the same PIN for multiple accounts",
            "Use 6+ digits when possible (100x more combinations than 4 digits)",
            "Never write your PIN on your card or store it nearby",
            "Shield the keypad when entering your PIN in public",
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-(--muted)">
              <span className="text-(--accent) mt-0.5 shrink-0">•</span> {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* Common PINs to avoid */}
      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5 space-y-3">
        <h3 className="text-sm font-semibold text-red-400">Most Common PINs to Avoid</h3>
        <p className="text-xs text-(--muted)">These PINs account for over 25% of all 4-digit PINs used. Never use them:</p>
        <div className="flex flex-wrap gap-2">
          {commonPins.map((pin, i) => (
            <span key={i} className="font-mono text-sm px-2 py-1 bg-red-500/20 text-red-400 rounded-lg font-semibold">{pin}</span>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">PIN Security FAQ</h3>
        <div className="space-y-4">
          {[
            {
              q: "What makes a PIN secure?",
              a: "A secure PIN is completely random, not based on personal information (birthdays, addresses), and at least 6 digits when possible. Avoid sequential numbers (1234) or repeated digits (1111)."
            },
            {
              q: "How many digits should my PIN be?",
              a: "Use the longest PIN your system allows. 4 digits = 10,000 combinations, 6 digits = 1,000,000 combinations. For critical accounts, always choose 6+ digits when available."
            },
            {
              q: "Should I use the same PIN for multiple accounts?",
              a: "No. Use unique PINs for different accounts and devices. If one PIN is compromised, your other accounts remain secure."
            },
            {
              q: "Can someone guess my PIN by watching me type?",
              a: "Yes, this is called \"shoulder surfing.\" Always shield the keypad when entering your PIN, especially at ATMs and in public places."
            },
          ].map((faq, i) => (
            <div key={i} className="border-t border-(--border) pt-4 first:border-none first:pt-0">
              <p className="text-sm font-semibold text-(--foreground) mb-1">{faq.q}</p>
              <p className="text-sm text-(--muted) leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <BulkGenerator generateFn={generateSingle} label="PINs" />

      {/* Length Comparison table */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-(--border)">
          <h3 className="text-sm font-semibold text-(--foreground)">PIN Length Comparison</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead className="bg-(--code-bg) text-(--muted) uppercase tracking-wider">
              <tr>
                {["Length", "Combinations", "Time to Guess (3 tries/day)"].map(h => (
                  <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={i} className={`border-t border-(--border) ${i % 2 === 0 ? "" : "bg-(--code-bg)/50"}`}>
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-3 font-mono text-(--foreground) ${j === 0 ? "font-semibold" : ""}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function PINCard({ value }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 1500); }
    catch (err) { console.error(err); }
  };
  return (
    <button onClick={handleCopy}
      className="group relative bg-(--card-bg) border border-(--border) rounded-xl p-5 hover:border-(--accent) transition-all cursor-pointer text-center"
    >
      <div className="text-3xl font-mono font-bold text-(--foreground) tracking-widest mb-1">{value}</div>
      <div className="text-[11px] text-(--muted) group-hover:text-(--accent) transition-colors">
        {copied ? "Copied!" : "Click to copy"}
      </div>
    </button>
  );
}
