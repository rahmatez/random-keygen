"use client";

import React, { useState, useEffect, useCallback } from "react";
import { generatePassphrase } from "@/utils/crypto";
import KeyRow from "@/components/KeyRow";
import BulkGenerator from "@/components/BulkGenerator";
import TerminalCommands from "@/components/TerminalCommands";



const NUM = 5;

export default function PassphrasePage() {
  const [numWords, setNumWords] = useState(4);
  const [separator, setSeparator] = useState("-");
  const [capitalize, setCapitalize] = useState(false);
  const [passphrases, setPassphrases] = useState([]);

  const generate = useCallback(() => {
    const items = [];
    for (let i = 0; i < NUM; i++) {
      let phrase = generatePassphrase(numWords, separator);
      if (capitalize) phrase = phrase.split(separator).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(separator);
      items.push(phrase);
    }
    setPassphrases(items);
  }, [numWords, separator, capitalize]);

  useEffect(() => {
    const t = setTimeout(generate, 0);
    return () => clearTimeout(t);
  }, [generate]);

  const entropy = Math.round(numWords * Math.log2(768));
  const generateSingle = useCallback(() => {
    let phrase = generatePassphrase(numWords, separator);
    if (capitalize) phrase = phrase.split(separator).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(separator);
    return phrase;
  }, [numWords, separator, capitalize]);

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">Passphrase Generator</h1>
        <p className="text-sm text-(--muted)">
          Generate memorable passphrases using the EFF wordlist. Easier to remember than random characters, but still cryptographically strong.
        </p>
      </div>

      {/* Settings */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Words: {numWords}</label>
            <input type="range" min="3" max="10" value={numWords}
              onChange={(e) => setNumWords(parseInt(e.target.value))}
              className="w-full h-1.5 bg-(--border) rounded-lg appearance-none cursor-pointer accent-(--accent)"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-(--muted) mb-2">Separator</label>
            <input type="text" maxLength="5" value={separator}
              onChange={(e) => setSeparator(e.target.value)}
              className="w-full px-3 py-1.5 text-sm border border-(--border) bg-(--background) rounded-lg focus:outline-none focus:border-(--accent)"
            />
          </div>
          <div className="flex items-end pb-0.5">
            <label className="flex items-center gap-2 text-sm text-(--foreground) cursor-pointer">
              <input type="checkbox" checked={capitalize} onChange={(e) => setCapitalize(e.target.checked)}
                className="w-4 h-4 rounded border-(--border) accent-(--accent)"
              />
              Capitalize words
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-(--border) pt-4 text-xs text-(--muted)">
          <div>
            Entropy: <span className="font-semibold text-(--accent) bg-[rgba(16,185,129,0.1)] px-1.5 py-0.5 rounded-full">{entropy} bits</span>
            <span className="ml-2 opacity-60">(~768 word vocabulary)</span>
          </div>
          <button onClick={generate} className="btn-primary py-1.5 px-4 text-sm">Generate</button>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-2">
        {passphrases.map((p, i) => <KeyRow key={i} value={p} />)}
      </div>

      {/* Why Passphrases */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">Why Passphrases?</h3>
        <p className="text-sm text-(--muted) leading-relaxed">
          Passphrases like <span className="font-mono text-(--foreground) bg-(--code-bg) px-1 rounded">correct-horse-battery-staple</span> are often more secure than complex passwords because they&apos;re longer and harder to crack, while being easier to remember.
        </p>
        <div className="bg-(--code-bg) border border-(--border) rounded-xl p-4 text-sm text-(--muted) leading-relaxed">
          A 4-word passphrase from a 7,776-word list has approximately <strong className="text-(--foreground)">52 bits of entropy</strong>, equivalent to a random 8-character password using all character types.
        </div>
      </div>

      {/* Bulk */}
      <BulkGenerator generateFn={generateSingle} label="passphrases" />

      {/* Terminal */}
      <TerminalCommands commands={[
        { label: "Linux (using system dictionary)", code: `shuf -n 4 /usr/share/dict/words | tr '\\n' '-' | sed 's/-$//'` },
        { label: "Python (with custom wordlist)", code: `python3 -c "import secrets; words=['apple','banana','cherry',...]; print('-'.join(secrets.choice(words) for _ in range(4)))"` }
      ]} />
    </div>
  );
}
