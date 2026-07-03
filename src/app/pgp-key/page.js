"use client";

import React from "react";
import TerminalCommands from "@/components/TerminalCommands";
import CodeBlock from "@/components/CodeBlock";
import { FiCheck, FiSlash } from "react-icons/fi";

export default function PGPKeyPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">PGP Key Generation</h1>
        <p className="text-sm text-(--muted)">
          Generate PGP (Pretty Good Privacy) key pairs for email encryption, file signing, and secure communications. PGP keys must be generated locally for security.
        </p>
      </div>

      {/* Security warning */}
      <div className="bg-red-500/10 border border-red-500/40 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <FiSlash className="text-red-400 shrink-0" size={22} />
          <div>
            <p className="text-sm font-semibold text-red-400 mb-2">Generate PGP Keys Locally Only</p>
            <p className="text-sm text-(--muted)">PGP private keys must never be generated online. Use GnuPG (GPG) on your local machine to generate secure key pairs.</p>
          </div>
        </div>
      </div>

      {/* What is PGP */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">What is PGP?</h3>
        <p className="text-sm text-(--muted) leading-relaxed">
          PGP (Pretty Good Privacy) is an encryption program that uses asymmetric and symmetric cryptography. It&apos;s widely used for:
        </p>
        <div className="grid grid-cols-2 gap-3">
          {["Email encryption (Proton Mail, Thunderbird+Enigmail)", "File encryption and signing", "Software package verification", "Secure communications", "Digital signatures for code and documents", "Identity verification on platforms like GitHub, Keybase"].map((t, i) => (
            <p key={i} className="text-xs text-(--muted) flex items-start gap-1.5"><span className="text-(--accent) shrink-0">•</span> {t}</p>
          ))}
        </div>
      </div>

      {/* Install GPG */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">1. Install GnuPG (GPG)</h3>
        <TerminalCommands commands={[
          { label: "macOS (Homebrew)", code: "brew install gnupg" },
          { label: "macOS (with Pinentry)", code: "brew install gnupg pinentry-mac" },
          { label: "Ubuntu/Debian", code: "sudo apt install gnupg2" },
          { label: "Fedora", code: "sudo dnf install gnupg2" },
          { label: "Windows (Gpg4win)", code: "winget install GnuPG.Gpg4win" },
        ]} />
      </div>

      {/* Generate key */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">2. Generate Key Pair</h3>
        <TerminalCommands commands={[
          { label: "Interactive wizard (recommended)", code: "gpg --full-generate-key" },
          { label: "Quick generation with defaults", code: "gpg --gen-key" },
          { label: "Non-interactive (specify all options)", code: `gpg --batch --gen-key <<EOF
Key-Type: RSA
Key-Length: 4096
Subkey-Type: RSA
Subkey-Length: 4096
Name-Real: Your Name
Name-Email: you@example.com
Expire-Date: 2y
%commit
EOF` },
        ]} />
      </div>

      {/* List and Export */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">3. List & Export Keys</h3>
        <TerminalCommands commands={[
          { label: "List all public keys", code: "gpg --list-keys" },
          { label: "List all secret keys", code: "gpg --list-secret-keys" },
          { label: "Export public key (ASCII armored)", code: "gpg --armor --export you@example.com > my-public-key.asc" },
          { label: "Export to clipboard (macOS)", code: "gpg --armor --export you@example.com | pbcopy" },
        ]} />
      </div>

      {/* Share public key */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">4. Share Your Public Key</h3>
        <TerminalCommands commands={[
          { label: "Publish to a key server", code: "gpg --keyserver keys.openpgp.org --send-keys YOUR_KEY_ID" },
          { label: "Lookup a key by email", code: "gpg --keyserver keys.openpgp.org --search-keys user@example.com" },
          { label: "Import someone else's public key", code: "gpg --import their-public-key.asc" },
        ]} />
      </div>

      {/* Example public key */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-5 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">Example PGP Public Key</h3>
        <pre className="bg-(--code-bg) border border-(--border) rounded-lg p-3 text-[11px] font-mono text-(--code-fg) overflow-x-auto">
{`-----BEGIN PGP PUBLIC KEY BLOCK-----

mQENBGR... (this is a truncated example)
...
-----END PGP PUBLIC KEY BLOCK-----`}
        </pre>
        <p className="text-[11px] text-(--muted)">Your actual public key will be much longer. Share it freely — only your private key must be kept secret.</p>
      </div>

      {/* Key types */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { type: "RSA 4096", note: "Compatible with all PGP tools. Large key size for high security.", color: "border-(--accent)" },
          { type: "Ed25519 + Curve25519", note: "Modern elliptic curve crypto. Smaller, faster. Not all tools support it.", color: "border-(--border)" },
        ].map((item, i) => (
          <div key={i} className={`bg-(--card-bg) border ${item.color} rounded-xl p-5 shadow-sm`}>
            <p className="text-sm font-bold text-(--foreground) mb-2">{item.type}</p>
            <p className="text-xs text-(--muted)">{item.note}</p>
          </div>
        ))}
      </div>

      {/* Best practices */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-(--foreground) mb-3">PGP Best Practices</h3>
        <ul className="space-y-2">
          {["Always use a strong passphrase for your private key", "Set a key expiration date (1-2 years)", "Create a revocation certificate immediately after generating keys", "Keep backups of your private key in secure offline storage", "Use subkeys for day-to-day operations to protect your master key"].map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-(--muted)">
              <FiCheck className="text-(--accent) shrink-0 mt-0.5" size={14} /> {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
