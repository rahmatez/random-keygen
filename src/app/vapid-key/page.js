"use client";

import React, { useState, useCallback } from "react";
import TerminalCommands from "@/components/TerminalCommands";
import { FiCheck } from "react-icons/fi";

export default function VAPIDKeyPage() {
  const [keyPair, setKeyPair] = useState(null);
  const [loading, setLoading] = useState(false);

  const generate = useCallback(async () => {
    setLoading(true);
    try {
      const pair = await crypto.subtle.generateKey(
        { name: "ECDSA", namedCurve: "P-256" },
        true,
        ["sign", "verify"]
      );

      const exportKey = async (key, format) => {
        const raw = await crypto.subtle.exportKey(format, key);
        return btoa(String.fromCharCode(...new Uint8Array(raw)))
          .replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      };

      const publicKey = await exportKey(pair.publicKey, "raw");
      const privateKey = await exportKey(pair.privateKey, "pkcs8");

      setKeyPair({ publicKey, privateKey });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">VAPID Key Generator</h1>
        <p className="text-sm text-(--muted)">
          Generate VAPID (Voluntary Application Server Identification) key pairs for Web Push notifications. Required for sending push notifications through browsers.
        </p>
      </div>

      {/* Info row */}
      <div className="grid grid-cols-2 gap-4">
        {[{ label: "Algorithm", val: "ECDSA P-256" }, { label: "Format", val: "URL-safe Base64" }].map((item, i) => (
          <div key={i} className="bg-(--card-bg) border border-(--border) rounded-xl p-4 text-center shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-wider text-(--muted) mb-1">{item.label}</p>
            <p className="text-sm font-semibold text-(--foreground)">{item.val}</p>
          </div>
        ))}
      </div>

      {/* Generate button */}
      <div className="text-center">
        <button onClick={generate} disabled={loading}
          className="btn-primary py-3 px-8 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
        >{loading ? "Generating..." : "Generate VAPID Keys"}</button>
      </div>

      {!keyPair && !loading && (
        <div className="bg-(--card-bg) border border-(--border) rounded-xl p-8 text-center shadow-sm">
          <p className="text-(--muted) text-sm">Click &quot;Generate VAPID Keys&quot; to create a new key pair.</p>
        </div>
      )}

      {loading && (
        <div className="bg-(--card-bg) border border-(--border) rounded-xl p-8 text-center shadow-sm">
          <div className="w-8 h-8 border-2 border-(--accent) border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
          <p className="text-(--muted) text-sm">Generating VAPID key pair...</p>
        </div>
      )}

      {keyPair && (
        <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
          <KeyField label="Public Key (safe to expose in client-side code)" value={keyPair.publicKey} />
          <KeyField label="Private Key (store securely as environment variable)" value={keyPair.privateKey} isPrivate />
        </div>
      )}

      {/* Important notes */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 space-y-2">
        <h3 className="text-sm font-semibold text-amber-400">Important</h3>
        <ul className="space-y-2">
          {["Generate keys once and reuse them for your application", "If you change keys, all existing subscriptions become invalid", "Store the private key securely as an environment variable", "The public key is safe to expose in client-side code"].map((t, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-(--muted)">
              <span className="text-amber-400 shrink-0 mt-0.5">→</span> {t}
            </li>
          ))}
        </ul>
      </div>

      {/* What is VAPID */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">What is VAPID?</h3>
        <p className="text-sm text-(--muted) leading-relaxed">
          VAPID (Voluntary Application Server Identification) is a specification that allows your application server to identify itself to push services when sending push notifications.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {["No need to register with each push service", "Works with all major browsers", "Provides sender identification", "Enables rate limiting and abuse prevention"].map((t, i) => (
            <p key={i} className="text-xs text-(--muted) flex items-start gap-1.5"><FiCheck className="text-(--accent) shrink-0" size={13} /> {t}</p>
          ))}
        </div>
      </div>

      {/* Browser Support */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-5 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">Browser Support</h3>
        <div className="flex flex-wrap gap-2">
          {["Chrome / Edge (Chromium)", "Firefox", "Safari (macOS/iOS 16+)", "Opera"].map((b, i) => (
            <span key={i} className="text-xs font-semibold bg-(--code-bg) border border-(--accent)/30 text-(--accent) px-3 py-1.5 rounded-lg">✓ {b}</span>
          ))}
        </div>
      </div>

      <TerminalCommands commands={[
        { label: "Node.js web-push (recommended)", code: "npx web-push generate-vapid-keys" },
        { label: "Python py-vapid", code: "pip install py-vapid && vapid --gen" },
        { label: "OpenSSL (generates PEM format)", code: "openssl ecparam -name prime256v1 -genkey -noout -out vapid_private.pem" },
      ]} />
    </div>
  );
}

function KeyField({ label, value, isPrivate }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 1500); }
    catch (err) { console.error(err); }
  };
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-xs font-semibold text-(--muted) uppercase tracking-wider">{label}</label>
        {isPrivate && <span className="text-[10px] text-red-400 bg-red-500/10 border border-red-500/30 px-1.5 py-0.5 rounded font-semibold">KEEP SECRET</span>}
      </div>
      <div className={`flex items-center gap-2 bg-(--code-bg) border rounded-lg px-3 py-2.5 ${isPrivate ? "border-red-500/30" : "border-(--border)"}`}>
        <span className="font-mono text-[11px] text-(--code-fg) break-all flex-1 select-all">{value}</span>
        <button onClick={handleCopy} className="text-xs font-semibold text-(--muted) hover:text-(--accent) cursor-pointer shrink-0">
          {copied ? "✓" : "Copy"}
        </button>
      </div>
    </div>
  );
}
