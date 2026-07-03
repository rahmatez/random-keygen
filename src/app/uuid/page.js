"use client";

import React, { useState, useEffect, useCallback } from "react";
import KeyRow from "@/components/KeyRow";
import BulkGenerator from "@/components/BulkGenerator";
import TerminalCommands from "@/components/TerminalCommands";
import CodeBlock from "@/components/CodeBlock";

const FORMATS = [
  { id: "standard", label: "Standard (lowercase with dashes)" },
  { id: "uppercase", label: "UPPERCASE WITH DASHES" },
  { id: "nodash", label: "Without dashes" },
  { id: "braced", label: "{With braces}" },
  { id: "urn", label: "URN format" },
];

function generateUUID() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

function applyFormat(uuid, format) {
  switch (format) {
    case "uppercase": return uuid.toUpperCase();
    case "nodash": return uuid.replace(/-/g, "");
    case "braced": return `{${uuid}}`;
    case "urn": return `urn:uuid:${uuid}`;
    default: return uuid;
  }
}

export default function UUIDPage() {
  const [format, setFormat] = useState("standard");
  const [uuids, setUUIDs] = useState([]);

  const generate = useCallback(() => {
    const items = [];
    for (let i = 0; i < 6; i++) items.push(applyFormat(generateUUID(), format));
    setUUIDs(items);
  }, [format]);

  useEffect(() => {
    const t = setTimeout(generate, 0);
    return () => clearTimeout(t);
  }, [generate]);

  const generateSingle = useCallback(() => applyFormat(generateUUID(), format), [format]);

  const sampleUUID = "0d396dee-58de-4c94-a723-d7e30bb054f9";

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">UUID Generator</h1>
        <p className="text-sm text-(--muted)">
          Generate RFC 4122 compliant UUIDs (Universally Unique Identifiers). Version 4 UUIDs are randomly generated and have 122 bits of entropy.
        </p>
      </div>

      {/* Settings */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Format</label>
          <div className="flex flex-wrap gap-2">
            {FORMATS.map(f => (
              <button key={f.id} onClick={() => setFormat(f.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg border cursor-pointer transition-all ${
                  format === f.id ? "border-(--accent) bg-[rgba(16,185,129,0.08)] text-(--accent)" : "border-(--border) text-(--muted) hover:border-(--accent)"
                }`}
              >{f.label}</button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-(--border) pt-4 text-xs text-(--muted)">
          <div>Version: <span className="font-semibold text-(--foreground)">v4</span> <span className="ml-1 opacity-70">— Entropy: 122 bits</span></div>
          <button onClick={generate} className="btn-primary py-1.5 px-4 text-sm">Generate</button>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-2">
        {uuids.map((u, i) => <KeyRow key={i} value={u} />)}
      </div>

      {/* UUID v4 structure */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">UUID v4 Structure</h3>
        <div className="font-mono text-base bg-(--code-bg) border border-(--border) rounded-lg p-4 text-center text-(--code-fg)">
          <span className="text-blue-400">xxxxxxxx</span>-<span className="text-purple-400">xxxx</span>-<span className="text-green-400">4xxx</span>-<span className="text-amber-400">yxxx</span>-<span className="text-pink-400">xxxxxxxxxxxx</span>
        </div>
        <ul className="space-y-1.5 text-sm text-(--muted)">
          {["The 4 indicates version 4 (random)", "The y is one of 8, 9, a, or b (variant 1)", "All other characters are random hex digits", "Total: 32 hex characters = 128 bits (122 random + 6 version/variant)"].map((t, i) => (
            <li key={i} className="flex items-start gap-1.5"><span className="text-(--accent) shrink-0">→</span> {t}</li>
          ))}
        </ul>
      </div>

      {/* Usage examples */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">Usage Examples</h3>
        <CodeBlock filename="SQL (Primary Key)" code={`CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL
);

INSERT INTO users (id, email) VALUES
('${sampleUUID}', 'user@example.com');`} />
        <CodeBlock filename="JavaScript" code={`// Native (Node.js 14.17+ / modern browsers)
const uuid = crypto.randomUUID();

// With uuid package
import { v4 as uuidv4 } from 'uuid';
const id = uuidv4();`} />
      </div>

      <BulkGenerator generateFn={generateSingle} label="UUIDs" />

      <TerminalCommands commands={[
        { label: "macOS / Linux", code: "uuidgen" },
        { label: "Linux (kernel)", code: "cat /proc/sys/kernel/random/uuid" },
        { label: "Python", code: "python3 -c \"import uuid; print(uuid.uuid4())\"" },
        { label: "Node.js", code: "node -e \"console.log(require('crypto').randomUUID())\"" },
      ]} />
    </div>
  );
}
