"use client";

import React, { useState, useEffect, useCallback } from "react";
import { generatePassword, calculateEntropy } from "@/utils/crypto";
import KeyRow from "@/components/KeyRow";
import BulkGenerator from "@/components/BulkGenerator";
import { FiAlertTriangle, FiCheck } from "react-icons/fi";

export default function WiFiPasswordPage() {
  const [length, setLength] = useState(20);
  const [passwords, setPasswords] = useState([]);

  const opts = { lowercase: true, uppercase: true, numbers: true, symbols: true };

  const generate = useCallback(() => {
    const items = [];
    for (let i = 0; i < 5; i++) items.push(generatePassword(length, opts));
    setPasswords(items);
  }, [length]);

  useEffect(() => {
    const t = setTimeout(generate, 0);
    return () => clearTimeout(t);
  }, [generate]);

  const entropy = calculateEntropy(length, 90);
  const generateSingle = useCallback(() => generatePassword(length, opts), [length]);

  const routerBrands = [
    { name: "NETGEAR", addr: "192.168.1.1 or routerlogin.net", path: "Wireless → Security Options", wpa3: "Available on newer models (AX series)", setting: "WPA2-PSK [AES] or WPA3-Personal" },
    { name: "Linksys", addr: "192.168.1.1 or myrouter.local", path: "WiFi Settings → Security", wpa3: "Velop series and newer WiFi 6 routers", setting: "WPA2/WPA3 Mixed or WPA3 Only" },
    { name: "ASUS", addr: "192.168.1.1 or router.asus.com", path: "Wireless → General", wpa3: "AX series and newer AC routers", setting: "WPA2/WPA3-Personal" },
    { name: "TP-Link", addr: "192.168.0.1 or tplinkwifi.net", path: "Wireless → Wireless Security", wpa3: "Archer AX series and newer models", setting: "WPA/WPA2/WPA3-Personal" },
    { name: "D-Link", addr: "192.168.0.1 or dlinkrouter.local", path: "Setup → Wireless Settings", wpa3: "DIR-X series and newer models", setting: "WPA2-PSK/WPA3-SAE" },
    { name: "Eero (Amazon)", addr: "Eero app only (no web interface)", path: "Settings → Network → Password", wpa3: "All current models support WPA3", setting: "Automatic WPA2/WPA3 selection" },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">WiFi Password Generator</h1>
        <p className="text-sm text-(--muted)">
          Generate strong, secure passwords for your wireless network. Compatible with all router brands including Netgear, Linksys, TP-Link, ASUS, and D-Link.
        </p>
      </div>

      {/* Popular Router Brands */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-(--foreground) mb-3">Popular Router Brands & Admin URLs</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {["Netgear", "Linksys", "TP-Link", "ASUS", "D-Link", "Eero"].map((brand, i) => (
            <div key={i} className="text-center p-2 bg-(--code-bg) border border-(--border) rounded-lg">
              <p className="text-xs font-semibold text-(--foreground)">{brand}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Settings */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">
            Password Length: {length} characters {length >= 20 ? "(recommended)" : ""}
          </label>
          <input type="range" min="12" max="63" value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full h-1.5 bg-(--border) rounded-lg appearance-none cursor-pointer accent-(--accent)"
          />
        </div>
        <div className="flex items-center justify-between border-t border-(--border) pt-4 text-xs text-(--muted)">
          <div>
            Entropy: <span className="font-semibold text-(--accent) bg-[rgba(16,185,129,0.1)] px-1.5 py-0.5 rounded-full">{entropy} bits</span>
            <span className="ml-2 opacity-60">(WPA requires 8-63 printable ASCII characters)</span>
          </div>
          <button onClick={generate} className="btn-primary py-1.5 px-4 text-sm">Generate New Passwords</button>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-2">
        {passwords.map((p, i) => <KeyRow key={i} value={p} />)}
      </div>

      {/* How to set WiFi password */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">How to Set Your WiFi Password</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold text-(--foreground) mb-1">1. Access Your Router Admin Panel</p>
            <p className="text-sm text-(--muted) mb-2">Open a browser and go to your router&apos;s admin page. Try these common addresses:</p>
            <div className="flex flex-wrap gap-2">
              {["192.168.1.1", "192.168.0.1", "10.0.0.1", "192.168.1.254"].map(addr => (
                <code key={addr} className="text-xs font-mono bg-(--code-bg) border border-(--border) px-2 py-1 rounded text-(--foreground)">{addr}</code>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-(--foreground) mb-1">2. Login with Admin Credentials</p>
            <p className="text-sm text-(--muted)">Use admin credentials (check router label or manual if using defaults)</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-(--foreground) mb-1">3. Navigate to WiFi Security Settings</p>
            <p className="text-sm text-(--muted)">Look for sections named Wireless, WiFi, Security, or Network settings</p>
          </div>
        </div>
      </div>

      {/* Router-specific instructions */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-(--border)">
          <h3 className="text-sm font-semibold text-(--foreground)">Router-Specific Instructions</h3>
        </div>
        <div className="divide-y divide-(--border)">
          {routerBrands.map((router, i) => (
            <div key={i} className="p-4 hover:bg-(--code-bg) transition-colors">
              <p className="text-sm font-bold text-(--foreground) mb-2">{router.name}</p>
              <div className="grid grid-cols-2 gap-2 text-xs text-(--muted)">
                <div><span className="text-(--foreground) font-medium">Address:</span> {router.addr}</div>
                <div><span className="text-(--foreground) font-medium">Path:</span> {router.path}</div>
                <div><span className="text-(--foreground) font-medium">WPA3:</span> {router.wpa3}</div>
                <div><span className="text-(--foreground) font-medium">Setting:</span> {router.setting}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WPA2 vs WPA3 comparison */}
      <div className="grid grid-cols-2 gap-5">
        {[
          {
            title: "WPA2 (2004)",
            color: "border-amber-500/30",
            pros: ["Universal device support", "AES-256 encryption"],
            cons: ["Vulnerable to KRACK attacks (patched)", "Susceptible to dictionary attacks"],
            note: "Minimum 20 characters with mixed case, numbers, and symbols"
          },
          {
            title: "WPA3 (2018)",
            color: "border-green-500/30",
            pros: ["Protected Management Frames", "SAE (Simultaneous Authentication)", "Stronger against brute force"],
            cons: ["Limited older device support"],
            note: "12+ characters sufficient due to improved security"
          },
        ].map((card, i) => (
          <div key={i} className={`bg-(--card-bg) border ${card.color} rounded-xl p-5 shadow-sm`}>
            <h4 className="text-sm font-semibold text-(--foreground) mb-3">{card.title}</h4>
            {card.pros.map((pro, j) => <p key={j} className="text-xs text-green-500 mb-1 flex items-center gap-1"><FiCheck size={11} className="shrink-0" /> {pro}</p>)}
            {card.cons.map((con, j) => <p key={j} className="text-xs text-amber-400 mb-1 flex items-center gap-1"><FiAlertTriangle size={11} className="shrink-0" /> {con}</p>)}
            <p className="text-[11px] text-(--muted) mt-2 border-t border-(--border) pt-2">Recommendation: {card.note}</p>
          </div>
        ))}
      </div>

      {/* Security tips */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">WiFi Security Tips</h3>
        <ul className="space-y-2">
          {[
            "Use WPA3 if your router supports it, otherwise WPA2",
            "Never use WEP — it's broken and easily cracked",
            "Use at least 12 characters (20+ is better)",
            "Change default router admin password too",
            "Consider hiding your network name (SSID) for extra privacy",
            "Create a separate guest network for visitors",
          ].map((tip, i) => (
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
