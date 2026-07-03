"use client";

import React, { useState, useEffect, useCallback } from "react";
import { generateCreditCard, generatePIN } from "@/utils/crypto";
import KeyRow from "@/components/KeyRow";
import { FiAlertTriangle, FiCheck } from "react-icons/fi";

const BRANDS = ["visa", "mastercard", "amex", "discover"];

const BRAND_COLORS = {
  VISA: "#1a1f71",
  MASTERCARD: "#eb001b",
  AMEX: "#016fd0",
  DISCOVER: "#ff6600",
};

const BRAND_PREFIXES = {
  VISA: "4",
  MASTERCARD: "5X",
  AMEX: "37",
  DISCOVER: "6011",
};

const BRAND_DETAILS = {
  VISA: { digits: 16, cvv: 3 },
  MASTERCARD: { digits: 16, cvv: 3 },
  AMEX: { digits: 15, cvv: 4 },
  DISCOVER: { digits: 16, cvv: 3 },
};

function generateCard(brand) {
  const brandUpper = brand.toUpperCase();
  const expMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
  const expYear = String(new Date().getFullYear() + Math.floor(Math.random() * 5) + 1).slice(-2);
  return {
    brand: brandUpper,
    number: generateCreditCard(brand),
    cvv: generatePIN(BRAND_DETAILS[brandUpper]?.cvv || 3),
    expiry: `${expMonth}/${expYear}`,
    holder: "TEST CARDHOLDER",
  };
}

export default function CreditCardGeneratorPage() {
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [cards, setCards] = useState([]);

  const generate = useCallback(() => {
    const brands = selectedBrand === "all" ? BRANDS : [selectedBrand];
    setCards(brands.map(b => generateCard(b)));
  }, [selectedBrand]);

  useEffect(() => {
    const t = setTimeout(generate, 0);
    return () => clearTimeout(t);
  }, [generate]);

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">Test Credit Card Generator</h1>
        <p className="text-sm text-(--muted)">
          Generate valid test credit card numbers for sandbox payments, e-commerce flow testing, and QA integrations. All numbers pass the Luhn algorithm check.
        </p>
      </div>

      {/* Testing Only Warning */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
        <div className="flex items-start gap-2">
          <FiAlertTriangle className="text-amber-400 shrink-0 mt-0.5" size={16} />
          <div>
            <p className="text-sm font-semibold text-amber-400">For Testing Only</p>
            <p className="text-sm text-(--muted) mt-1">These are dummy card numbers for development testing only. They <strong>cannot process real payments</strong> and are not linked to any financial account. They&apos;re only valid for format and Luhn algorithm checks.</p>
          </div>
        </div>
      </div>

      {/* Filter & generate */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-5 shadow-sm space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Card Brand</label>
          <div className="flex flex-wrap gap-2">
            {["all", ...BRANDS].map(b => (
              <button key={b} onClick={() => setSelectedBrand(b)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg border cursor-pointer transition-all capitalize ${
                  selectedBrand === b ? "border-(--accent) bg-[rgba(16,185,129,0.08)] text-(--accent)" : "border-(--border) text-(--muted) hover:border-(--accent)"
                }`}
              >{b === "all" ? "All Brands" : b}</button>
            ))}
          </div>
        </div>
        <button onClick={generate} className="btn-primary py-2 px-5 text-sm w-full">Generate Test Cards</button>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {cards.map((card, i) => (
          <CreditCardCard key={i} card={card} onRegenerate={() => {
            const newCards = [...cards];
            newCards[i] = generateCard(card.brand.toLowerCase());
            setCards(newCards);
          }} />
        ))}
      </div>

      {/* Network details */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-(--border)">
          <h3 className="text-sm font-semibold text-(--foreground)">Network Details</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead className="bg-(--code-bg) text-(--muted) uppercase tracking-wider">
              <tr>{["Network", "Prefix", "Length", "CVV Length"].map(h => <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>)}</tr>
            </thead>
            <tbody>
              {[
                ["Visa", "4", "16 digits", "3 (CVV)"],
                ["Mastercard", "51-55, 2221-2720", "16 digits", "3 (CVC)"],
                ["American Express", "34, 37", "15 digits", "4 (CID)"],
                ["Discover", "6011, 622126-622925, 644-649, 65", "16 digits", "3 (CID)"],
              ].map((row, i) => (
                <tr key={i} className={`border-t border-(--border) ${i % 2 === 0 ? "" : "bg-(--code-bg)/40"}`}>
                  {row.map((cell, j) => <td key={j} className={`px-4 py-3 text-(--foreground) ${j === 0 ? "font-semibold" : ""}`}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Luhn algorithm */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">What is the Luhn Algorithm?</h3>
        <p className="text-sm text-(--muted) leading-relaxed">
          The Luhn algorithm is a simple checksum formula used to validate credit card numbers. It was created by IBM scientist Hans Peter Luhn to detect accidental errors in card number entry. All valid card numbers pass this check.
        </p>
        <ul className="space-y-1.5">
          {["Provides a basic integrity check, not security", "Most major card networks use it", "Does not prevent fraudulent card numbers from passing the check", "Used for input validation in payment forms"].map((t, i) => (
            <li key={i} className="text-sm text-(--muted) flex items-start gap-1.5"><span className="text-(--accent) shrink-0 mt-0.5">→</span> {t}</li>
          ))}
        </ul>
      </div>

      {/* Dedicated test card numbers */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">Official Test Card Numbers</h3>
        <p className="text-sm text-(--muted)">For Stripe/Braintree sandbox testing, use their official test card numbers:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead className="bg-(--code-bg) text-(--muted) uppercase tracking-wider">
              <tr>{["Card Number", "Brand", "Description"].map(h => <th key={h} className="px-3 py-2 text-left font-semibold">{h}</th>)}</tr>
            </thead>
            <tbody>
              {[
                ["4242 4242 4242 4242", "Visa", "Always succeeds"],
                ["4000 0000 0000 0002", "Visa", "Always declined"],
                ["5555 5555 5555 4444", "Mastercard", "Always succeeds"],
                ["3782 822463 10005", "Amex", "Always succeeds"],
              ].map((row, i) => (
                <tr key={i} className={`border-t border-(--border) ${i % 2 === 0 ? "" : "bg-(--code-bg)/40"}`}>
                  {row.map((cell, j) => <td key={j} className={`px-3 py-2 font-mono text-(--foreground) ${j === 0 ? "font-semibold" : "font-sans"}`}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function CreditCardCard({ card, onRegenerate }) {
  const [copiedField, setCopiedField] = useState(null);
  const copy = async (value, field) => {
    try { await navigator.clipboard.writeText(value); setCopiedField(field); setTimeout(() => setCopiedField(null), 1500); }
    catch (err) { console.error(err); }
  };
  const color = BRAND_COLORS[card.brand] || "#16a34a";
  const formatted = card.number.replace(/(.{4})/g, "$1 ").trim();

  return (
    <div className="rounded-2xl overflow-hidden shadow-md">
      {/* Card visual */}
      <div className="p-5 relative" style={{ background: `linear-gradient(135deg, ${color}ee, ${color}99)` }}>
        <div className="flex items-start justify-between mb-6">
          <div className="w-8 h-6 bg-amber-300 rounded opacity-80"></div>
          <span className="text-xs font-bold text-white/80 uppercase tracking-wider">{card.brand}</span>
        </div>
        <div className="font-mono text-lg font-bold text-white tracking-widest mb-4">{formatted}</div>
        <div className="flex items-center justify-between text-xs text-white/70">
          <div>
            <p className="text-[9px] uppercase tracking-wider mb-0.5">Card Holder</p>
            <p className="font-semibold text-white text-[11px]">{card.holder}</p>
          </div>
          <div className="text-right">
            <p className="text-[9px] uppercase tracking-wider mb-0.5">Expires</p>
            <p className="font-semibold text-white text-[11px]">{card.expiry}</p>
          </div>
        </div>
      </div>

      {/* Fields */}
      <div className="bg-(--card-bg) border border-(--border) border-t-0 rounded-b-2xl p-4 space-y-2">
        {[
          { label: "Card Number", value: card.number },
          { label: "Expiry", value: card.expiry },
          { label: "CVV", value: card.cvv },
        ].map(({ label, value }) => (
          <div key={label} className="flex items-center justify-between text-sm">
            <span className="text-xs text-(--muted) font-semibold uppercase tracking-wider">{label}</span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm text-(--foreground)">{value}</span>
              <button onClick={() => copy(value, label)}
                className="text-xs text-(--muted) hover:text-(--accent) cursor-pointer"
              >{copiedField === label ? "✓" : "Copy"}</button>
            </div>
          </div>
        ))}
        <button onClick={onRegenerate} className="w-full text-center text-xs text-(--muted) hover:text-(--accent) cursor-pointer mt-2 pt-2 border-t border-(--border)">↻ New card</button>
      </div>
    </div>
  );
}
