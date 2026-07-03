"use client";

import React, { useState, useCallback } from "react";
import TerminalCommands from "@/components/TerminalCommands";
import CodeBlock from "@/components/CodeBlock";

export default function WireGuardKeyPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">WireGuard Key Generation</h1>
        <p className="text-sm text-(--muted)">
          Guide for generating WireGuard VPN keys securely on your local machine. WireGuard keys should always be generated locally.
        </p>
      </div>

      {/* Never online warning */}
      <div className="bg-red-500/10 border border-red-500/40 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <span className="text-red-400 text-xl shrink-0">🚫</span>
          <div>
            <p className="text-sm font-semibold text-red-400 mb-2">Never Generate VPN Keys Online</p>
            <p className="text-sm text-(--muted)">WireGuard private keys control access to your VPN network. Always generate them locally on the machine where they will be used. A compromised private key allows attackers to intercept all your VPN traffic.</p>
          </div>
        </div>
      </div>

      {/* Install WireGuard */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">Install WireGuard</h3>
        <TerminalCommands commands={[
          { label: "macOS (Homebrew)", code: "brew install wireguard-tools" },
          { label: "Debian/Ubuntu", code: "sudo apt install wireguard" },
          { label: "Fedora", code: "sudo dnf install wireguard-tools" },
        ]} />
      </div>

      {/* Generate Key Pair */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">Generate Key Pair</h3>
        <TerminalCommands commands={[
          { label: "Generate private and public key files", code: "wg genkey | tee privatekey | wg pubkey > publickey" },
          { label: "Generate private key only (outputs to stdout)", code: "wg genkey" },
          { label: "Derive public key from private key", code: "echo 'PRIVATE_KEY' | wg pubkey" },
        ]} />
      </div>

      {/* Preshared Key */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">Preshared Key (Optional)</h3>
        <p className="text-sm text-(--muted)">For additional security, you can add a preshared key between peers:</p>
        <TerminalCommands commands={[
          { label: "Generate preshared key", code: "wg genpsk" },
          { label: "Save to file", code: "wg genpsk > preshared.key" },
        ]} />
      </div>

      {/* Example Configuration */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">Example Configuration</h3>
        <CodeBlock filename="/etc/wireguard/wg0.conf (Server)" code={`[Interface]
# Server's private key
PrivateKey = SERVER_PRIVATE_KEY_HERE
Address = 10.0.0.1/24
ListenPort = 51820
PostUp = iptables -A FORWARD -i wg0 -j ACCEPT
PostDown = iptables -D FORWARD -i wg0 -j ACCEPT

[Peer]
# Client's public key
PublicKey = CLIENT_PUBLIC_KEY_HERE
AllowedIPs = 10.0.0.2/32`} />
        <CodeBlock filename="/etc/wireguard/wg0.conf (Client)" code={`[Interface]
# Client's private key
PrivateKey = CLIENT_PRIVATE_KEY_HERE
Address = 10.0.0.2/24
DNS = 1.1.1.1

[Peer]
# Server's public key
PublicKey = SERVER_PUBLIC_KEY_HERE
Endpoint = vpn.example.com:51820
AllowedIPs = 0.0.0.0/0
PersistentKeepalive = 25`} />
      </div>

      {/* Management Commands */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">Management Commands</h3>
        <TerminalCommands commands={[
          { label: "Start WireGuard interface", code: "sudo wg-quick up wg0" },
          { label: "Stop WireGuard interface", code: "sudo wg-quick down wg0" },
          { label: "Show WireGuard status", code: "sudo wg show" },
          { label: "Enable on boot (systemd)", code: "sudo systemctl enable wg-quick@wg0" },
        ]} />
      </div>

      {/* Best practices */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-(--foreground) mb-3">WireGuard Best Practices</h3>
        <ul className="space-y-2">
          {[
            "Generate unique key pairs for each device",
            "Never share private keys between devices",
            "Set restrictive permissions on config files (chmod 600)",
            "Use preshared keys for additional security on sensitive connections",
            "Regularly rotate keys, especially if a device is lost or compromised",
            "Keep the AllowedIPs as restrictive as possible",
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-(--muted)">
              <span className="text-(--accent) shrink-0 mt-0.5">✓</span> {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
