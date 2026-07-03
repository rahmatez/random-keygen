"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import KeyCard from "@/components/KeyCard";
import { FiLock, FiKey, FiCreditCard, FiShield, FiSliders, FiTerminal, FiMail, FiCheck, FiRefreshCw } from "react-icons/fi";
import {
  generatePassword,
  generatePassphrase,
  generateUUID,
  generateHex,
  generateAPIKey,
  generateJWTSecret,
  generateDjangoSecret,
  generateMongoId,
  generateWPAKey,
} from "@/utils/crypto";

export default function Home() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Global regeneration function
  const regenerateAll = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  // Keyboard shortcut listener for 'R'
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Ignore keypresses when typing in inputs
      if (
        document.activeElement.tagName === "INPUT" ||
        document.activeElement.tagName === "TEXTAREA"
      ) {
        return;
      }
      if (e.key === "r" || e.key === "R") {
        regenerateAll();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="page-container pb-16">
      {/* Hero Section */}
      <section className="text-center py-10 md:py-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-(--foreground) mb-3">
          Secure Keys & Passwords
        </h1>
        <p className="text-sm md:text-base text-(--muted) mb-8">
          Click any key to copy
        </p>

        <div className="flex items-center justify-center gap-3">
          <button onClick={regenerateAll} className="btn-primary">
            <FiRefreshCw className="w-3.5 h-3.5" />
            Regenerate
          </button>
          <span className="text-xs text-(--muted) hidden sm:inline">
            or press{" "}
            <kbd className="px-1.5 py-0.5 rounded border border-(--border) bg-(--code-bg) font-mono text-[10px] shadow-sm">
              R
            </kbd>
          </span>
        </div>
      </section>

      {/* Main Keys Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <KeyCard
          title="Memorable"
          href="/passphrase"
          badge="39b"
          generatorFn={() => generatePassphrase(3, "-")}
          count={4}
          refreshTrigger={refreshTrigger}
          cols={2}
        />
        <KeyCard
          title="Strong (16 char)"
          href="/password/16-character"
          badge="103b"
          generatorFn={() => generatePassword(16)}
          count={4}
          refreshTrigger={refreshTrigger}
        />
        <KeyCard
          title="Fort Knox (32 char)"
          href="/password"
          badge="206b"
          generatorFn={() => generatePassword(32)}
          count={3}
          refreshTrigger={refreshTrigger}
        />
        <KeyCard
          title="Alphanumeric"
          href="/password-generator/no-special-characters"
          badge="142b"
          generatorFn={() => generatePassword(24, { symbols: false })}
          count={3}
          refreshTrigger={refreshTrigger}
        />
        <KeyCard
          title="UUID v4"
          href="/uuid"
          badge="122b"
          generatorFn={generateUUID}
          count={4}
          refreshTrigger={refreshTrigger}
        />
        <KeyCard
          title="API Keys"
          href="/api-key"
          badge="190b"
          generatorFn={() => generateAPIKey("stripe")}
          count={3}
          refreshTrigger={refreshTrigger}
        />
        <KeyCard
          title="128-bit Hex"
          href="/encryption-key"
          badge="128b"
          generatorFn={() => generateHex(128)}
          count={4}
          refreshTrigger={refreshTrigger}
        />
        <KeyCard
          title="256-bit Hex"
          href="/aes-key"
          badge="256b"
          generatorFn={() => generateHex(256)}
          count={4}
          refreshTrigger={refreshTrigger}
        />
        <KeyCard
          title="JWT Secrets"
          href="/jwt-secret"
          badge="256b"
          generatorFn={() => generateJWTSecret(256)}
          count={3}
          refreshTrigger={refreshTrigger}
        />
        <KeyCard
          title="Django Secret"
          href="/django-secret-key"
          badge="282b"
          generatorFn={generateDjangoSecret}
          count={2}
          refreshTrigger={refreshTrigger}
        />
        <KeyCard
          title="MongoDB ObjectId"
          href="/random-string"
          badge="96b"
          generatorFn={generateMongoId}
          count={4}
          refreshTrigger={refreshTrigger}
        />
        <KeyCard
          title="WiFi / WPA"
          href="/wifi-password"
          badge="123b"
          generatorFn={() => generateWPAKey(160)}
          count={2}
          refreshTrigger={refreshTrigger}
        />
      </section>

      {/* Complete Keygen Toolkit */}
      <section className="bg-(--card-bg) border border-(--border) rounded-xl p-8 text-center mb-16 shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Complete Keygen Toolkit</h2>
        <p className="text-sm text-(--muted) max-w-2xl mx-auto mb-6">
          Generate any type of cryptographic key instantly. Our keygen tools
          cover everything from simple passwords to complex encryption keys, all
          running securely in your browser.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/password"
            className="flex items-center justify-center gap-2 p-3 text-sm font-medium border border-(--border) rounded-lg hover:border-(--accent) hover:bg-(--code-bg) transition-colors">
            <FiLock className="text-(--accent)" /> Password Keygen
          </Link>
          <Link
            href="/api-key"
            className="flex items-center justify-center gap-2 p-3 text-sm font-medium border border-(--border) rounded-lg hover:border-(--accent) hover:bg-(--code-bg) transition-colors">
            <FiKey className="text-(--accent)" /> API Key Generator
          </Link>
          <Link
            href="/jwt-secret"
            className="flex items-center justify-center gap-2 p-3 text-sm font-medium border border-(--border) rounded-lg hover:border-(--accent) hover:bg-(--code-bg) transition-colors">
            <FiCreditCard className="text-(--accent)" /> JWT Secret Keygen
          </Link>
          <Link
            href="/encryption-key"
            className="flex items-center justify-center gap-2 p-3 text-sm font-medium border border-(--border) rounded-lg hover:border-(--accent) hover:bg-(--code-bg) transition-colors">
            <FiShield className="text-(--accent)" /> Encryption Keygen
          </Link>
          <Link
            href="/uuid"
            className="flex items-center justify-center gap-2 p-3 text-sm font-medium border border-(--border) rounded-lg hover:border-(--accent) hover:bg-(--code-bg) transition-colors">
            <FiSliders className="text-(--accent)" /> UUID Keygen
          </Link>
          <Link
            href="/ssh-key"
            className="flex items-center justify-center gap-2 p-3 text-sm font-medium border border-(--border) rounded-lg hover:border-(--accent) hover:bg-(--code-bg) transition-colors">
            <FiTerminal className="text-(--accent)" /> SSH Key Generator
          </Link>
          <Link
            href="/pgp-key"
            className="flex items-center justify-center gap-2 p-3 text-sm font-medium border border-(--border) rounded-lg hover:border-(--accent) hover:bg-(--code-bg) transition-colors">
            <FiMail className="text-(--accent)" /> PGP Key Keygen
          </Link>
          <Link
            href="/random-string"
            className="flex items-center justify-center gap-2 p-3 text-sm font-medium border border-(--border) rounded-lg hover:border-(--accent) hover:bg-(--code-bg) transition-colors">
            <FiCheck className="text-(--accent)" /> Secret Key Gen
          </Link>
        </div>
      </section>

      {/* Why RandomKeygen Comparison */}
      <section className="bg-(--card-bg) border border-(--border) rounded-xl p-8 mb-16 shadow-sm">
        <h2 className="text-2xl font-bold text-center mb-8">
          Why RandomKeygen?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-base font-semibold text-(--accent) mb-4">
              RandomKeygen
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span> No signup or
                registration required
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span> 50+
                specialized key generators
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span> 100%
                client-side generation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span> Instant
                generation, no waiting
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span> Free
                forever, no premium tiers
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span> Works
                offline after first load
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-(--muted) mb-4">
              Traditional Password Managers
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-(--muted)">
                <span className="text-red-500 font-bold">✗</span> Require
                account creation
              </li>
              <li className="flex items-center gap-2 text-(--muted)">
                <span className="text-yellow-500 font-bold">~</span> Limited
                keygen tools
              </li>
              <li className="flex items-center gap-2 text-(--muted)">
                <span className="text-yellow-500 font-bold">~</span> Data synced
                to cloud
              </li>
              <li className="flex items-center gap-2 text-(--muted)">
                <span className="text-yellow-500 font-bold">~</span> May require
                app installation
              </li>
              <li className="flex items-center gap-2 text-(--muted)">
                <span className="text-red-500 font-bold">✗</span> Premium
                features cost money
              </li>
              <li className="flex items-center gap-2 text-(--muted)">
                <span className="text-red-500 font-bold">✗</span> Requires
                internet connection
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 p-4 rounded-lg bg-[rgba(59,130,246,0.05)] border border-[rgba(59,130,246,0.1)] text-center text-sm">
          <span className="font-semibold text-blue-500">
            Perfect for developers:
          </span>{" "}
          Get any type of cryptographic key instantly without the overhead of
          password manager UIs. Just generate, copy, and use.
        </div>
      </section>

      {/* Popular Generators */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-center mb-8">
          Popular Generators
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/password"
            className="block p-4 border border-(--border) rounded-xl hover:border-(--accent) hover:shadow-sm transition-all bg-(--card-bg)">
            <h4 className="font-semibold text-sm mb-1">Password Generator</h4>
            <p className="text-xs text-(--muted)">Strong random passwords</p>
          </Link>
          <Link
            href="/password/8-character"
            className="block p-4 border border-(--border) rounded-xl hover:border-(--accent) hover:shadow-sm transition-all bg-(--card-bg)">
            <h4 className="font-semibold text-sm mb-1">
              8-Character Passwords
            </h4>
            <p className="text-xs text-(--muted)">Legacy system compatible</p>
          </Link>
          <Link
            href="/jwt-secret"
            className="block p-4 border border-(--border) rounded-xl hover:border-(--accent) hover:shadow-sm transition-all bg-(--card-bg)">
            <h4 className="font-semibold text-sm mb-1">JWT Secret Generator</h4>
            <p className="text-xs text-(--muted)">256-bit signing keys</p>
          </Link>
          <Link
            href="/uuid"
            className="block p-4 border border-(--border) rounded-xl hover:border-(--accent) hover:shadow-sm transition-all bg-(--card-bg)">
            <h4 className="font-semibold text-sm mb-1">UUID Generator</h4>
            <p className="text-xs text-(--muted)">Unique identifiers</p>
          </Link>
          <Link
            href="/api-key"
            className="block p-4 border border-(--border) rounded-xl hover:border-(--accent) hover:shadow-sm transition-all bg-(--card-bg)">
            <h4 className="font-semibold text-sm mb-1">API Key Generator</h4>
            <p className="text-xs text-(--muted)">Secure API tokens</p>
          </Link>
          <Link
            href="/pin-generator"
            className="block p-4 border border-(--border) rounded-xl hover:border-(--accent) hover:shadow-sm transition-all bg-(--card-bg)">
            <h4 className="font-semibold text-sm mb-1">PIN Generator</h4>
            <p className="text-xs text-(--muted)">Banking & device PINs</p>
          </Link>
          <Link
            href="/aes-key"
            className="block p-4 border border-(--border) rounded-xl hover:border-(--accent) hover:shadow-sm transition-all bg-(--card-bg)">
            <h4 className="font-semibold text-sm mb-1">AES Key Generator</h4>
            <p className="text-xs text-(--muted)">Encryption keys</p>
          </Link>
          <Link
            href="/rsa-key"
            className="block p-4 border border-(--border) rounded-xl hover:border-(--accent) hover:shadow-sm transition-all bg-(--card-bg)">
            <h4 className="font-semibold text-sm mb-1">RSA Key Generator</h4>
            <p className="text-xs text-(--muted)">Public/private pairs</p>
          </Link>
        </div>

        <div className="mt-8 text-center text-xs text-(--muted)">
          🛡 All generation happens client-side using{" "}
          <code className="px-1.5 py-0.5 rounded border border-(--border) bg-(--code-bg) font-mono text-(--accent)">
            crypto.getRandomValues()
          </code>
        </div>
      </section>
    </div>
  );
}
