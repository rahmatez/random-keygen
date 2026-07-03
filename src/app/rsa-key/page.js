"use client";

import React, { useState, useCallback } from "react";
import TerminalCommands from "@/components/TerminalCommands";
import CodeBlock from "@/components/CodeBlock";
import { FiAlertTriangle, FiCheck } from "react-icons/fi";

export default function RSAKeyPage() {
  const [keySize, setKeySize] = useState(2048);
  const [keyPair, setKeyPair] = useState(null);
  const [loading, setLoading] = useState(false);

  const generate = useCallback(async () => {
    setLoading(true);
    setKeyPair(null);
    try {
      const pair = await crypto.subtle.generateKey(
        { name: "RSA-OAEP", modulusLength: keySize, publicExponent: new Uint8Array([1, 0, 1]), hash: "SHA-256" },
        true,
        ["encrypt", "decrypt"]
      );
      const publicKeyDer = await crypto.subtle.exportKey("spki", pair.publicKey);
      const privateKeyDer = await crypto.subtle.exportKey("pkcs8", pair.privateKey);

      const toPEM = (type, buf) => {
        const base64 = btoa(String.fromCharCode(...new Uint8Array(buf)));
        const lines = base64.match(/.{1,64}/g).join("\n");
        return `-----BEGIN ${type}-----\n${lines}\n-----END ${type}-----`;
      };

      setKeyPair({
        public: toPEM("PUBLIC KEY", publicKeyDer),
        private: toPEM("PRIVATE KEY", privateKeyDer),
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [keySize]);

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">RSA Key Pair Generator</h1>
        <p className="text-sm text-(--muted)">
          Generate RSA public and private key pairs for asymmetric encryption, digital signatures, and secure key exchange.
        </p>
      </div>

      {/* Settings */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Key Size</label>
          <div className="flex gap-3">
            {[
              { bits: 2048, label: "2048 bits (standard)" },
              { bits: 4096, label: "4096 bits (high security)" },
            ].map(({ bits, label }) => (
              <button key={bits} onClick={() => setKeySize(bits)}
                className={`px-4 py-2 text-sm font-semibold rounded-lg border cursor-pointer transition-all ${
                  keySize === bits ? "border-(--accent) bg-[rgba(16,185,129,0.08)] text-(--accent)" : "border-(--border) text-(--muted) hover:border-(--accent)"
                }`}
              >{label}</button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-(--border) pt-4 text-xs text-(--muted)">
          <div>Algorithm: <span className="font-semibold text-(--foreground)">RSA-OAEP with SHA-256</span>
            <span className="ml-2 opacity-70">Key Size: {keySize} bits</span>
          </div>
          <button onClick={generate} disabled={loading}
            className="btn-primary py-1.5 px-4 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >{loading ? "Generating..." : "Generate Key Pair"}</button>
        </div>
      </div>

      {/* Initial prompt */}
      {!keyPair && !loading && (
        <div className="bg-(--card-bg) border border-(--border) rounded-xl p-8 text-center shadow-sm">
          <p className="text-(--muted) text-sm">Click &quot;Generate Key Pair&quot; to create a new RSA key pair.</p>
        </div>
      )}

      {loading && (
        <div className="bg-(--card-bg) border border-(--border) rounded-xl p-8 text-center shadow-sm">
          <div className="w-8 h-8 border-2 border-(--accent) border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
          <p className="text-(--muted) text-sm">Generating {keySize}-bit RSA key pair...</p>
        </div>
      )}

      {/* Key output */}
      {keyPair && (
        <div className="space-y-4">
          <KeyOutput label="Public Key" value={keyPair.public} />
          <KeyOutput label="Private Key (Keep secret!)" value={keyPair.private} isPrivate />
        </div>
      )}

      {/* Security Notice */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5">
        <div className="flex items-start gap-2">
          <span className="text-amber-400 shrink-0"></span>
          <div>
            <p className="text-sm font-semibold text-(--foreground) mb-1">Security Notice</p>
            <p className="text-sm text-(--muted)">While these keys are generated securely in your browser, for production use you should generate keys locally using OpenSSL or your operating system&apos;s tools. Never share your private key or transmit it over the network.</p>
          </div>
        </div>
      </div>

      {/* Common use cases */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { title: "Encryption", desc: "Encrypt sensitive data with the public key. Only the private key holder can decrypt it." },
          { title: "Digital Signatures", desc: "Sign documents or code with your private key. Anyone can verify with your public key." },
          { title: "JWT Signing (RS256)", desc: "Sign JWTs with RSA for scenarios where multiple parties need to verify tokens." },
          { title: "Key Exchange", desc: "Securely exchange symmetric keys by encrypting them with the recipient's public key." },
        ].map((uc, i) => (
          <div key={i} className="bg-(--card-bg) border border-(--border) rounded-xl p-4 shadow-sm">
            <p className="text-sm font-semibold text-(--foreground) mb-1">{uc.title}</p>
            <p className="text-xs text-(--muted) leading-relaxed">{uc.desc}</p>
          </div>
        ))}
      </div>

      {/* Key size recommendations */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-(--border)">
          <h3 className="text-sm font-semibold text-(--foreground)">Key Size Recommendations</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead className="bg-(--code-bg) text-(--muted) uppercase tracking-wider">
              <tr>{["Key Size", "Security Level", "Recommended For"].map(h => <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>)}</tr>
            </thead>
            <tbody>
              {[
                ["2048 bits", "~112 bits", "General use, adequate until ~2030"],
                ["4096 bits", "~140 bits", "High security, long-term protection"],
              ].map((row, i) => (
                <tr key={i} className={`border-t border-(--border) ${i % 2 === 0 ? "" : "bg-(--code-bg)/40"}`}>
                  {row.map((cell, j) => <td key={j} className={`px-4 py-3 text-(--foreground) ${j === 0 ? "font-mono font-semibold" : ""}`}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <TerminalCommands commands={[
        { label: "Generate private key (OpenSSL)", code: "openssl genrsa -out private.pem 2048" },
        { label: "Extract public key", code: "openssl rsa -in private.pem -pubout -out public.pem" },
        { label: "Generate with passphrase (more secure)", code: "openssl genrsa -aes256 -out private.pem 4096" },
        { label: "Generate SSH key pair", code: "ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa" },
      ]} />
    </div>
  );
}

function KeyOutput({ label, value, isPrivate }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 1500); }
    catch (err) { console.error(err); }
  };
  return (
    <div className={`bg-(--card-bg) border rounded-xl shadow-sm ${isPrivate ? "border-red-500/40" : "border-(--border)"}`}>
      <div className="flex items-center justify-between px-4 py-3 border-b border-(--border)">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-(--muted)">{label}</span>
          {isPrivate && <span className="text-[10px] text-red-400 bg-red-500/10 border border-red-500/30 px-1.5 py-0.5 rounded font-semibold">KEEP SECRET</span>}
        </div>
        <button onClick={handleCopy} className="text-xs font-semibold text-(--muted) hover:text-(--accent) cursor-pointer transition-colors">
          {copied ? <FiCheck size={14} /> : "Copy"}
        </button>
      </div>
      <pre className="p-4 text-[11px] font-mono text-(--code-fg) overflow-x-auto whitespace-pre select-all">{value}</pre>
    </div>
  );
}
