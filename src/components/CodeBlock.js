"use client";

import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

export default function CodeBlock({ code, language = "bash", filename = null }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="relative group rounded-xl overflow-hidden border border-(--border) bg-(--code-bg)">
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-(--border) bg-(--card-bg)">
          <span className="text-[11px] font-mono text-(--muted)">{filename}</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-[11px] font-semibold text-(--muted) hover:text-(--accent) transition-colors cursor-pointer"
          >
            {copied ? <><FiCheck size={12} /> Copied!</> : <><FiCopy size={12} /> Copy</>}
          </button>
        </div>
      )}
      <div className="relative">
        <pre className="p-4 text-[12px] font-mono text-(--code-fg) overflow-x-auto leading-relaxed whitespace-pre">
          <code>{code}</code>
        </pre>
        {!filename && (
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-(--card-bg) border border-(--border) text-(--muted) hover:text-(--accent) hover:border-(--accent) cursor-pointer"
          >
            {copied ? <><FiCheck size={12} /> Copied</> : <><FiCopy size={12} /> Copy</>}
          </button>
        )}
      </div>
    </div>
  );
}
