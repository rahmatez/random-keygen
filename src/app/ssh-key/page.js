"use client";

import React, { useState, useEffect, useCallback } from "react";
import KeyRow from "@/components/KeyRow";
import BulkGenerator from "@/components/BulkGenerator";
import TerminalCommands from "@/components/TerminalCommands";
import CodeBlock from "@/components/CodeBlock";
import { FiCheck, FiSlash } from "react-icons/fi";

export default function SSHKeyPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">SSH Key Generation</h1>
        <p className="text-sm text-(--muted)">
          Guide for generating secure SSH key pairs locally. SSH keys should always be generated on your local machine for maximum security.
        </p>
      </div>

      {/* Never generate online warning */}
      <div className="bg-red-500/10 border border-red-500/40 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <FiSlash className="text-red-400 shrink-0" size={22} />
          <div>
            <p className="text-sm font-semibold text-red-400 mb-2">Never Generate SSH Keys Online</p>
            <p className="text-sm text-(--muted)">SSH private keys must be generated on your local machine and never transmitted over the internet. A compromised private key gives attackers full access to any system where you&apos;ve added the public key.</p>
            <p className="text-sm text-(--muted) mt-2">Use the terminal commands below to generate keys securely on your own system.</p>
          </div>
        </div>
      </div>

      {/* Ed25519 (Recommended) */}
      <div className="bg-(--card-bg) border border-(--accent)/40 rounded-xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-(--accent) bg-(--accent)/10 border border-(--accent)/30 px-2 py-0.5 rounded">Recommended</span>
          <h3 className="text-sm font-semibold text-(--foreground)">Ed25519</h3>
        </div>
        <p className="text-sm text-(--muted)">Ed25519 is a modern, secure algorithm. It&apos;s faster and has smaller keys than RSA while providing equivalent security.</p>
        <TerminalCommands commands={[
          { label: "Generate Ed25519 key pair", code: `ssh-keygen -t ed25519 -C "your_email@example.com"` },
          { label: "With custom filename", code: `ssh-keygen -t ed25519 -C "your_email@example.com" -f ~/.ssh/id_ed25519_github` },
          { label: "Without passphrase (not recommended)", code: `ssh-keygen -t ed25519 -C "your_email@example.com" -N ""` },
        ]} />
      </div>

      {/* RSA Legacy */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">RSA (Legacy Compatibility)</h3>
        <p className="text-sm text-(--muted)">Use RSA if you need compatibility with older systems. Always use at least 4096 bits.</p>
        <TerminalCommands commands={[
          { label: "Generate RSA 4096-bit key pair", code: "ssh-keygen -t rsa -b 4096 -C \"your_email@example.com\"" },
          { label: "With stronger key derivation", code: "ssh-keygen -t rsa -b 4096 -o -a 100 -C \"your_email@example.com\"" },
        ]} />
      </div>

      {/* View & Copy Public Key */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">View & Copy Public Key</h3>
        <TerminalCommands commands={[
          { label: "View Ed25519 public key", code: "cat ~/.ssh/id_ed25519.pub" },
          { label: "View RSA public key", code: "cat ~/.ssh/id_rsa.pub" },
          { label: "Copy to clipboard (macOS)", code: "pbcopy < ~/.ssh/id_ed25519.pub" },
          { label: "Copy to clipboard (Linux)", code: "xclip -sel clip < ~/.ssh/id_ed25519.pub" },
        ]} />
      </div>

      {/* Example output */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-5 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">Example Output</h3>
        <p className="text-xs text-(--muted)">Your public key will look similar to this (this is an example, not a real key):</p>
        <CodeBlock filename="~/.ssh/id_ed25519.pub (example)" code="ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOMqqnkVzrm0SdG6UOoqKLsabgH5C9okWi0dh2l9GKJl user@example.com" />
      </div>

      {/* Add to SSH Agent */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">Add to SSH Agent</h3>
        <TerminalCommands commands={[
          { label: "Start SSH agent", code: "eval $(ssh-agent -s)" },
          { label: "Add key to agent", code: "ssh-add ~/.ssh/id_ed25519" },
          { label: "Add to macOS Keychain", code: "ssh-add --apple-use-keychain ~/.ssh/id_ed25519" },
        ]} />
      </div>

      {/* SSH Config Example */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">SSH Config Example</h3>
        <CodeBlock filename="~/.ssh/config" code={`# GitHub
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_github
  AddKeysToAgent yes

# Work server
Host work
  HostName server.company.com
  User deploy
  IdentityFile ~/.ssh/id_ed25519_work
  Port 22`} />
      </div>

      {/* Best practices */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-(--foreground) mb-3">SSH Key Best Practices</h3>
        <ul className="space-y-2">
          {[
            "Always use a strong passphrase to protect your private key",
            "Use Ed25519 for new keys unless legacy compatibility is required",
            "Keep your private key permissions at 600 (chmod 600 ~/.ssh/id_ed25519)",
            "Use different keys for different services when possible",
            "Rotate keys periodically and remove unused public keys from servers",
            "Never share your private key or store it in version control",
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-(--muted)">
              <FiCheck className="text-(--accent) shrink-0 mt-0.5" size={14} /> {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
