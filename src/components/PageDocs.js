"use client";

import React, { useState } from "react";

function CodeBlock({ code, filename }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-(--code-bg) border border-(--border) rounded-xl overflow-hidden my-4 text-xs">
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 bg-(--card-bg) border-b border-(--border) text-(--muted) font-mono">
          <span>{filename}</span>
          <button onClick={handleCopy} className="text-(--muted) hover:text-(--accent) transition-colors text-xs font-semibold cursor-pointer">
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      )}
      <div className="relative p-4 font-mono overflow-x-auto text-(--code-fg) whitespace-pre leading-relaxed">
        {!filename && (
          <button onClick={handleCopy} className="absolute right-4 top-4 text-(--muted) hover:text-(--accent) transition-colors text-xs font-semibold cursor-pointer">
            {copied ? "Copied!" : "Copy"}
          </button>
        )}
        <code>{code}</code>
      </div>
    </div>
  );
}

export default function PageDocs({ section }) {
  switch (section) {
    case 1:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">Secure Password Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate cryptographically secure passwords with strength visualization, passphrase mode, pronounceable passwords, and bulk CSV export. Advanced password generator with manager integration guides.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generator Mode</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Random</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Traditional random passwords</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Passphrase</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Memorable word combinations</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Pronounceable</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Easy to say passwords</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Memorable</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Pattern-based passwords</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Length</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">16</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Character Types</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Lowercase (a-z)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Uppercase (A-Z)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Numbers (0-9)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Symbols (!@#$%^&amp;\)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Exclude ambiguous (0O1lI)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Entropy:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">99 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">(74 characters in set)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generated Passwords</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">+zaY8Yv@pQqa-^IM</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Strong</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">104 bits • Universe age+</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">GvAQfHBrb7eWJc5&amp;</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Strong</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">104 bits • Universe age+</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">sJei3F!yN-HE%R3s</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Strong</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">104 bits • Universe age+</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">6C=g6!Y#O#R!sp^K</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Strong</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">104 bits • Universe age+</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">q#jHid!iwF^%+i$w</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Strong</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">102 bits • Universe age+</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Add numbers (0-9)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">cv-@PBVjD!H$hvMe</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Strong</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">102 bits • Universe age+</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Add numbers (0-9)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Password strength guide</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Entropy Levels:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">50-69 bits: Minimum for online accounts</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">70-99 bits: Good for most accounts</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">100-127 bits: Strong protection</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">128+ bits: Excellent for critical accounts</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Mode Recommendations:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Passphrase: Easy to remember, very secure</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Random: Maximum entropy per character</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Pronounceable: Balance of usability and security</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Memorable: Pattern-based, moderate security</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Bulk Generation</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">10</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">passwords</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Export 100 to CSV</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Downloads a CSV file with 100 passwords and their strength analysis</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Password Manager Integration</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">1Password</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate and store passwords directly in 1Password</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Bitwarden</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Create secure entries with Bitwarden CLI</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">KeePass</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate CSV format for KeePass import</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate in Terminal</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">OpenSSL with special characters</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">openssl rand -base64 12 | tr -dc &apos;a-zA-Z0-9!@#$%^&amp;\&apos; | head -c 16</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Linux /dev/urandom</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">LC_ALL=C tr -dc &apos;a-zA-Z0-9!@#$%^&amp;\&apos; &lt; /dev/urandom | head -c 16</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Python secrets module</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">python3 -c &quot;import secrets; import string; print(&apos;&apos;.join(secrets.choice(string.asciiletters + string.digits + &apos;!@#$%^&amp;\&apos;) for  in range(16)))&quot;</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Related Tools</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">8 Character Password</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Legacy system compatible</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Password Strength Checker</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Test your password security</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Passphrase Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Easy to remember passwords</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Memorable Passwords</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Word-based passwords</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">PIN Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Secure 4-6 digit PINs</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Security Tips</p>
<ul className="list-disc pl-5 space-y-1.5 text-xs text-(--muted) mb-4">
  <li>Use unique passwords for every account</li>
  <li>Enable 2FA wherever possible</li>
  <li>Use a password manager to store credentials</li>
  <li>Never share passwords via email or text</li>
</ul>
        </div>
      );
    case 2:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">Passphrase Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate memorable passphrases using the EFF wordlist. Easier to remember than random characters, but still cryptographically strong.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Words</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">4 words</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Separator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Hyphen (-)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Capitalize words</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Entropy:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">38 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">(768 word vocabulary)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">pact-jar-win-naive</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">aisle-world-wool-wisdom</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">mandate-object-alter-ocean</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">endorse-neglect-gauge-alarm</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">salt-hero-zone-law</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Why passphrases?</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Passphrases like correct-horse-battery-staple are often more secure than complex passwords because they&apos;re longer and harder to crack, while being easier to remember.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">A 4-word passphrase from a 7,776-word list has approximately 52 bits of entropy, equivalent to a random 8-character password using all character types.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Bulk Generation</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">10</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">passphrases</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate in Terminal</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">For production systems, consider generating passphrases locally:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Linux (using system dictionary)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">shuf -n 4 /usr/share/dict/words | tr &apos;\n&apos; &apos;-&apos; | sed &apos;s/-$//&apos;</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Python (with custom wordlist)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">python3 -c &quot;import secrets; words=[&apos;apple&apos;,&apos;banana&apos;,&apos;cherry&apos;,...]; print(&apos;-&apos;.join(secrets.choice(words) for \_ in range(4)))&quot;</p>
        </div>
      );
    case 3:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">Pronounceable Password Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate secure passwords that are easy to pronounce and say out loud. Perfect for sharing over phone or when you need to read a password to someone.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Length</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">12</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Options</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Capitalize some letters</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Include numbers</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Estimated entropy:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">~50 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">TiPowukic9x8</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">BifusUz9w4da</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Hohu3o4erEba</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Naxuje52taZO</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">GekoM3Luku2a</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">X9Ho0edewepo</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">G3zufuge3Uto</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">To2u6itebEca</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">How pronounceable passwords work</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">These passwords use alternating consonant-vowel patterns (like &quot;ba-ke-lo-mi&quot;) which makes them easier to say and remember while still being secure. The tradeoff is slightly lower entropy compared to fully random passwords.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">For maximum security with memorability, consider using a passphrase instead.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Related Generators</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Passphrase</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Memorable Password</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Random Password</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Bulk Generation</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">10</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">passwords</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
        </div>
      );
    case 4:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">Memorable Password Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate passwords that are both secure AND easy to remember. Using word-based patterns makes passwords memorable without sacrificing security.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Style</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Words (Correct-Horse-Battery)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Word Count</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">4 words (recommended)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Separator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Hyphen (-)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Entropy:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">~38 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">(4 words from 768 word list)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Edit-Major-Around-Base</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Battle-Enable-Actress-Olive</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Eight-Nephew-Uncle-Hammer</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Tennis-Approve-Often-Garlic</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Wealth-Laptop-Universe-Endless</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Why Word-Based Passwords?</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">As famously illustrated by XKCD #936, a password like correct-horse-battery-staple is both easier to remember AND more secure than something like Tr0ub4dor&amp;3.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Tr0ub4dor&amp;3</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">~28 bits entropy, hard to remember</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">correct-horse-battery-staple</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">~44 bits entropy, easy to remember</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Tips for Memorable Passwords</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Create a mental image or story connecting the words</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">4+ words provides excellent security (comparable to 12+ random characters)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Adding a number or symbol increases security with minimal memory burden</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Each additional word doubles the time to crack</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Still use unique passwords for each account - use a password manager!</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Security Comparison</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Words Entropy Equivalent Random Chars</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">3 words ~39 bits ~8 random characters</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">4 words ~52 bits ~10 random characters</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">5 words ~64 bits ~12 random characters</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">6 words ~77 bits ~14 random characters</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Bulk Generation</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">10</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">passwords</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
        </div>
      );
    case 5:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">Master Password Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate an ultra-secure master password for your password manager. This is the most important password you&apos;ll ever create - make it strong.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Type</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Passphrase (Recommended)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Random</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Words</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">4 words</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">5 words</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">6 words</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">7 words</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Entropy:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">47 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Good</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">47 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">almost-web-wasp-blanket-joke</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">47 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">announce-omit-few-arena-become</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">47 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">laugh-yellow-help-earn-glimpse</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">47 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">joy-talk-outer-deposit-hidden</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Master password security is critical</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Memorize it - Don&apos;t write it down anywhere digitally</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Never reuse - Use it only for your password manager</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Enable 2FA - Add another layer of protection</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Write it down securely - Store a physical backup in a safe place (safety deposit box)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Test your memory - Practice typing it before relying on it</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Why passphrases are recommended</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">A 5-word passphrase like correct-horse-battery-staple is easier to remember than a random string but can have comparable entropy. The key is using truly random words, not a phrase you make up.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Learn more about passphrases →</p>
        </div>
      );
    case 6:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">Bulk Password Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate hundreds of secure passwords at once. Perfect for user onboarding, IT administration, and creating test accounts.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Count</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">10</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">25</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">50</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">100</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">250</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">500</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Length: 16</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Characters</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">a-z</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">A-Z</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">0-9</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">!@#$</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate 50 Passwords</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Entropy per password:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">95 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Copy All</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Download CSV</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Download TXT</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">1.  rKmqWKyemPXY85vl</p>
<ul className="list-disc pl-5 space-y-1.5 text-xs text-(--muted) mb-4">
  <li>l1mZz3RtJBwHf3tT</li>
  <li>kBO9ZgjlAaYjAcCl</li>
  <li>Wokrtyhf0neSvnMi</li>
  <li>dlkrEu6mtMna9UaB</li>
  <li>OVTQuoM6SRT8PPqV</li>
  <li>ot8MacrJGy7UstWn</li>
  <li>grFmYkZ6cvYXBaEL</li>
  <li>6wGpvIGFxE0SAvbQ</li>
  <li>1uyFlidax8cTcjE1</li>
  <li>CIs2kqpbw6SffMm0</li>
  <li>BhH68UiT9qG5przi</li>
  <li>jP78KvlAbOQdUTKM</li>
  <li>rJhrsLNwkmPplV9Z</li>
  <li>SQjW066Xx0Z0cvqI</li>
  <li>oUItvI0JvUlvR1gI</li>
  <li>qUrX3igXquBRDyeU</li>
  <li>QP6UEdoiw2rpicZV</li>
  <li>KhsbaDOyHCKOrcov</li>
  <li>A0J9JU2HgQ2mqKeK</li>
  <li>O05HHgaG4a9hAAg5</li>
  <li>xgrV1Slqhkz0HKuI</li>
  <li>316Vv2aA1La8phvL</li>
  <li>uiuLcp2jcaVQq3P4</li>
  <li>kvH4Da6i1P0tOBFo</li>
  <li>gA8IoLDf3NpZ2UyM</li>
  <li>hOr9cHzuGHhJuv10</li>
  <li>AjhjjQajQPsojArk</li>
  <li>aXXYjaF3clRlvJnr</li>
  <li>WbOoJNlWRBezGREP</li>
  <li>0YkqmxkGtQ6J9Gis</li>
  <li>4wiEYfNfoKHEwWN6</li>
  <li>lNAZQia9yjffA2gX</li>
  <li>YjcOJD1JNbbxwuH4</li>
  <li>o6s0xcIrCbOdOIS8</li>
  <li>72btfl08pcFlwENI</li>
  <li>EClAGJ96j29VqysT</li>
  <li>lNcVQQeLDCUVOUaS</li>
  <li>RyiqkqZUC5l5LEWd</li>
  <li>fFUQhU4eCvOdCKYV</li>
  <li>kadkOT3WOaheBgsM</li>
  <li>ZBK9ocxX6l67KqGv</li>
  <li>iujwGjWK9We0Qrsi</li>
  <li>bUY6EnXdHhNOiod8</li>
  <li>3dcANhNXrHqOowZW</li>
  <li>ZyP2wr6Z3sjgRSRr</li>
  <li>K2CcYnoVLPDwhzxI</li>
  <li>CKjdy4EGJZuU4aTQ</li>
  <li>pRUtrudqrjWBZ5d4</li>
  <li>lbYKLeu2QDQIbw4J</li>
</ul>
<div className="overflow-x-auto my-4 border border-(--border) rounded-xl bg-(--card-bg)"><table className="w-full text-[11px] text-left border-collapse"><thead><tr className="border-b border-(--border) bg-(--code-bg) text-(--muted) font-semibold"><th className="px-4 py-2 font-semibold">Click any password to copy it individually</th></tr></thead><tbody></tbody></table></div>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Use cases for bulk passwords</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">User onboarding - Generate initial passwords for new employees</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Testing - Create test accounts for QA and development</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">WiFi guest networks - Rotating access credentials</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Event registration - Temporary access codes for attendees</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Database seeding - Populate test data with realistic passwords</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Security reminder</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">When distributing bulk passwords, always use secure channels (not plain email) and require users to change their password on first login.</p>
        </div>
      );
    case 7:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">Bulk Password Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate hundreds of secure passwords at once. Perfect for user onboarding, IT administration, and creating test accounts.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Count</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">10</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">25</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">50</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">100</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">250</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">500</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Length: 16</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Characters</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">a-z</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">A-Z</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">0-9</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">!@#$</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate 50 Passwords</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Entropy per password:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">95 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Copy All</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Download CSV</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Download TXT</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">1.  rKmqWKyemPXY85vl</p>
<ul className="list-disc pl-5 space-y-1.5 text-xs text-(--muted) mb-4">
  <li>l1mZz3RtJBwHf3tT</li>
  <li>kBO9ZgjlAaYjAcCl</li>
  <li>Wokrtyhf0neSvnMi</li>
  <li>dlkrEu6mtMna9UaB</li>
  <li>OVTQuoM6SRT8PPqV</li>
  <li>ot8MacrJGy7UstWn</li>
  <li>grFmYkZ6cvYXBaEL</li>
  <li>6wGpvIGFxE0SAvbQ</li>
  <li>1uyFlidax8cTcjE1</li>
  <li>CIs2kqpbw6SffMm0</li>
  <li>BhH68UiT9qG5przi</li>
  <li>jP78KvlAbOQdUTKM</li>
  <li>rJhrsLNwkmPplV9Z</li>
  <li>SQjW066Xx0Z0cvqI</li>
  <li>oUItvI0JvUlvR1gI</li>
  <li>qUrX3igXquBRDyeU</li>
  <li>QP6UEdoiw2rpicZV</li>
  <li>KhsbaDOyHCKOrcov</li>
  <li>A0J9JU2HgQ2mqKeK</li>
  <li>O05HHgaG4a9hAAg5</li>
  <li>xgrV1Slqhkz0HKuI</li>
  <li>316Vv2aA1La8phvL</li>
  <li>uiuLcp2jcaVQq3P4</li>
  <li>kvH4Da6i1P0tOBFo</li>
  <li>gA8IoLDf3NpZ2UyM</li>
  <li>hOr9cHzuGHhJuv10</li>
  <li>AjhjjQajQPsojArk</li>
  <li>aXXYjaF3clRlvJnr</li>
  <li>WbOoJNlWRBezGREP</li>
  <li>0YkqmxkGtQ6J9Gis</li>
  <li>4wiEYfNfoKHEwWN6</li>
  <li>lNAZQia9yjffA2gX</li>
  <li>YjcOJD1JNbbxwuH4</li>
  <li>o6s0xcIrCbOdOIS8</li>
  <li>72btfl08pcFlwENI</li>
  <li>EClAGJ96j29VqysT</li>
  <li>lNcVQQeLDCUVOUaS</li>
  <li>RyiqkqZUC5l5LEWd</li>
  <li>fFUQhU4eCvOdCKYV</li>
  <li>kadkOT3WOaheBgsM</li>
  <li>ZBK9ocxX6l67KqGv</li>
  <li>iujwGjWK9We0Qrsi</li>
  <li>bUY6EnXdHhNOiod8</li>
  <li>3dcANhNXrHqOowZW</li>
  <li>ZyP2wr6Z3sjgRSRr</li>
  <li>K2CcYnoVLPDwhzxI</li>
  <li>CKjdy4EGJZuU4aTQ</li>
  <li>pRUtrudqrjWBZ5d4</li>
  <li>lbYKLeu2QDQIbw4J</li>
</ul>
<div className="overflow-x-auto my-4 border border-(--border) rounded-xl bg-(--card-bg)"><table className="w-full text-[11px] text-left border-collapse"><thead><tr className="border-b border-(--border) bg-(--code-bg) text-(--muted) font-semibold"><th className="px-4 py-2 font-semibold">Click any password to copy it individually</th></tr></thead><tbody></tbody></table></div>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Use cases for bulk passwords</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">User onboarding - Generate initial passwords for new employees</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Testing - Create test accounts for QA and development</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">WiFi guest networks - Rotating access credentials</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Event registration - Temporary access codes for attendees</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Database seeding - Populate test data with realistic passwords</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Security reminder</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">When distributing bulk passwords, always use secure channels (not plain email) and require users to change their password on first login.</p>
        </div>
      );
    case 8:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">Password Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">/</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">16 Characters</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">16 Character Password Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate secure 16-character passwords. This length provides excellent security for most applications.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Include</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">a-z</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">A-Z</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">0-9</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">!@#$%</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Entropy:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">99 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">K=EyKr8Omo2ziYDV</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">&amp;pgIkcHPRcIlpAXC</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">ajB@%bog4T3ldiTb</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">\yA%igTKthmqO5G#</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">lAio6ruvlQPVn^T6</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">x6B\HQ#Faecoa09k</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">qU69nxK7E5Z^\gHB</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">nl$3N5FA@OAG#MpL</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Other Lengths</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">8 characters</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">12 characters</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">20 characters</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">24 characters</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">32 characters</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Bulk Generation</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">10</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">passwords</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
        </div>
      );
    case 9:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">Password Generator Without Special Characters</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate secure passwords using only letters and numbers. Perfect for systems that don&apos;t allow special characters or have strict character restrictions.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Length</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">16</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Include</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Lowercase (a-z)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Uppercase (A-Z)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Numbers (0-9)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Entropy:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">95 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">(62 characters in set)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">95 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">yMTwkBwmygpnflv1</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">95 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">nw8DRR8l0pvg1VdK</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">95 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">BjnaYbvx1FfS5blF</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">95 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">HrxDjEyufoKUiVV6</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">95 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">LKX24ah76Dof5w4m</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">95 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">CQY4hX2lefWnahxf</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">95 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">z0BcmOfP219FiNbJ</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">95 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Al2xfnOpV8xJyOQR</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">When to use alphanumeric passwords</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Older systems that don&apos;t support special characters</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">WiFi passwords shared verbally</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Systems with strict character whitelists</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Applications where special chars cause escaping issues</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Since there&apos;s no symbols, consider using a longer password (20+ chars) to maintain security.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Other Password Types</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Full Character Set</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Letters Only</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Pronounceable</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Passphrase</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Bulk Generation</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">10</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">passwords</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
        </div>
      );
    case 10:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">Letters Only Password Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate passwords using only alphabetic characters. No numbers or symbols - just letters from A to Z.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Length</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">20</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Case</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Lowercase (a-z)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Uppercase (A-Z)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Entropy:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">114 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">(52 characters)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">114 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">BmxmhfbyVqqhbWUSjnXC</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">114 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">EVHCokvlItTXyCpaFvLd</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">114 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">akIdAyxfBlwZLtobgpFU</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">114 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">FqcGoqeijzLnKDzhGlnh</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">114 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">vMkAWsYvdtrkXIbypbAf</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">114 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">NcJQuWzpywtvNnnwQsFp</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">114 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">bFWPNPqsCEcbbximufLN</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">114 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">GzTWCUqheVXMJYiwWlmk</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Other Password Types</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Full Character Set</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Alphanumeric</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Numbers Only</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Pronounceable</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Bulk Generation</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">10</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">passwords</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
        </div>
      );
    case 11:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">PIN Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate cryptographically secure random PIN codes. Perfect for ATM cards, phone locks, app passcodes, and security systems.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">PIN Length</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">4 digits (standard)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Possible combinations:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">10,000</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">4973</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Click to copy</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">9296</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Click to copy</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">0364</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Click to copy</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">7157</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Click to copy</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">5266</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Click to copy</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">0550</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Click to copy</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">8135</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Click to copy</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">6241</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Click to copy</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate more PINs</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">PIN Generator Use Cases</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">ATM &amp; Banking PINs</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Debit cards, credit cards, and ATM access. Most banks require 4-digit PINs, though some allow 5-6 digits for enhanced security.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Device PINs</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Smartphone screen locks, tablet security, laptop TPM chips, and smart device access codes. 4-6 digits are most common.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">SIM Card PUKs</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Personal Unblocking Keys for SIM cards are typically 8-digit codes. Essential backup codes for mobile phone security.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Parental Control PINs</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">TV parental controls, gaming console restrictions, router settings, and streaming service child locks.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">App &amp; Service PINs</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Banking apps, password managers, secure messaging apps, and financial service passcodes.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Security Systems</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Home alarms, building access, safes, keypad locks, and access control systems.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">PIN Security Tips</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Avoid obvious PINs: 1234, 0000, 1111, birth years</p>
<h4 className="text-xs font-bold uppercase tracking-wider text-rose-500 mt-6 mb-2">✗ Don&apos;t</h4>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Use 6+ digits when possible (100x more combinations than 4 digits)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Never write your PIN on your card or store it nearby</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Shield the keypad when entering your PIN in public</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Most Common PINs to Avoid</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">These PINs account for over 25% of all 4-digit PINs used. Never use them:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">1234</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">1111</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">0000</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">1212</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">7777</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">1004</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">2000</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">4444</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">2222</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">6969</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">9999</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">3333</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">5555</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">6666</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">1122</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">1313</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">PIN Security FAQ</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">What makes a PIN secure?</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">A secure PIN is completely random, not based on personal information (birthdays, addresses), and at least 6 digits when possible. Avoid sequential numbers (1234) or repeated digits (1111).</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">How many digits should my PIN be?</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Use the longest PIN your system allows. 4 digits = 10,000 combinations, 6 digits = 1,000,000 combinations. For critical accounts, always choose 6+ digits when available.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Should I use the same PIN for multiple accounts?</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">No. Use unique PINs for different accounts and devices. If one PIN is compromised, your other accounts remain secure. Consider using a password manager to track different PINs.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">How do I remember multiple random PINs?</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Write them down and store securely in a password manager or encrypted note app. For ATM cards, many banks allow you to change your PIN to something more memorable while still secure.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Can someone guess my PIN by watching me type?</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Yes, this is called &quot;shoulder surfing.&quot; Always shield the keypad when entering your PIN, especially at ATMs and in public places. Be aware of cameras and people nearby.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Bulk Generation</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">10</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">PINs</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">PIN Length Comparison</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Length Combinations Time to Guess (3 tries/day)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">4 digits 10,000 ~9 years</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">5 digits 100,000 ~91 years</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">6 digits 1,000,000 ~913 years</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">8 digits 100,000,000 ~91,324 years</p>
        </div>
      );
    case 12:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">Password Strength Checker</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Test how secure your password is. Get instant feedback on strength, estimated crack time, and suggestions for improvement.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Enter Password to Check</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Type or paste a password...</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Show</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Strength:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">No Password</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Your Privacy</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">This tool runs entirely in your browser. Your password is never sent to any server, stored, or logged. You can verify this by disconnecting from the internet and testing - it will still work.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Need a Strong Password?</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate a cryptographically secure password with our generator:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Password Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Passphrase Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Password Best Practices</p>
<h4 className="text-xs font-bold uppercase tracking-wider text-emerald-500 mt-6 mb-2">✓ Do</h4>
<ul className="list-disc pl-5 space-y-1.5 text-xs text-(--muted) mb-4">
  <li>Use 12+ characters minimum</li>
  <li>Mix uppercase, lowercase, numbers, symbols</li>
  <li>Use a unique password for each account</li>
  <li>Consider using a passphrase</li>
  <li>Use a password manager</li>
</ul>
<h4 className="text-xs font-bold uppercase tracking-wider text-rose-500 mt-6 mb-2">✗ Don&apos;t</h4>
<ul className="list-disc pl-5 space-y-1.5 text-xs text-(--muted) mb-4">
  <li>Use personal info (names, birthdays)</li>
  <li>Use common words or phrases</li>
  <li>Use keyboard patterns (qwerty, 123456)</li>
  <li>Reuse passwords across sites</li>
  <li>Share passwords via email or text</li>
</ul>
<p className="text-xs text-(--muted) leading-relaxed mb-3">How Password Strength Is Calculated</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Password strength is calculated based on several factors:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Entropy - A measure of randomness based on password length and character set diversity. Higher entropy = more combinations to guess.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Character Variety - Using lowercase, uppercase, numbers, and symbols increases the possible combinations exponentially.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Length - Each additional character multiplies the total combinations by the charset size.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Pattern Detection - Common patterns, repeated characters, and dictionary words make passwords easier to crack.</p>
        </div>
      );
    case 13:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">Backup Codes Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate secure backup codes for two-factor authentication recovery. Store these safely - they&apos;re your last resort if you lose access to your 2FA device.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Number of codes</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">8</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">10</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">12</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">16</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate New</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">1.hcnp-3a2o</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">2.9kqu-yy71</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">3.7tij-fl25</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">4.3hx2-wjs7</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">5.tpa9-fdfy</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">6.2qsu-ciqc</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">7.g1bx-kdcf</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">8.as35-bvza</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">9.pfhe-ybac</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">10.qmzt-sxo6</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Copy All</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Download as Text</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">How to store backup codes safely</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Print them - Store a physical copy in a safe or safety deposit box</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Password manager - Store in a separate password manager from the account</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Encrypted file - Keep in an encrypted disk image or container</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Never store - In email, cloud storage, or anywhere easily accessible</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Using backup codes</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Each code can typically only be used once</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Cross off or delete codes after using them</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate new codes before you run out</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">If you think codes are compromised, regenerate immediately</p>
        </div>
      );
    case 14:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">Recovery Key Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate secure recovery keys in the style of Apple, Google, and Microsoft. Used as a last resort to regain access to your account.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Format</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">6 x 4 (Apple style)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">8 x 4 (Microsoft style)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">5 x 5 (Custom)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Entropy:124 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">124 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">PCCN-GI5M-JO0Z-J1AC-3GLG-TCWK</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">124 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">7C1K-FHHB-O3T3-LHIZ-MRJK-2L8O</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">124 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">WDPE-SVGC-4CYW-IKXZ-JWGQ-ASZY</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">124 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">9CQS-YEL8-T5YG-APGA-JAYB-NLRD</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Recovery key security</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Write it down - Store a physical copy in a secure location</p>
<h4 className="text-xs font-bold uppercase tracking-wider text-rose-500 mt-6 mb-2">✗ Don&apos;t</h4>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Tell someone trusted - In case of emergency, someone should know where it is</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Test it works - Verify the key before relying on it</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Recovery key vs backup codes</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Recovery Key</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Single long key</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Can be used multiple times</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Full account recovery</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Higher security</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Backup Codes</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Multiple short codes</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">One-time use each</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">2FA bypass only</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Easier to manage</p>
        </div>
      );
    case 15:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">Temporary Password Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate temporary passwords for one-time use. Easy to read and type, perfect for new user onboarding and password resets.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Length</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">8</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">10</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">12</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">16</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Easy to type (no 0/O, 1/l/I)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Entropy:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">69 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">EqAuKFvDrDat</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">KT7kXkgQvgAq</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">VUnea3k6ZJFY</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">e7ECj6NANQZE</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">uy8FvF2uzxny</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">SfcX4TJkmVU7</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Fdrauf2htQUc</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">v4QMvQSuDcnN</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">aCxgKjPqwqKP</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Pc57JRuhjywA</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Important: Temporary passwords should be temporary</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Force users to change these passwords on first login</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Set a short expiration time (24-72 hours)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Send via secure channel (not plain email if possible)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Never reuse temporary passwords</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Log all temporary password usage</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Bulk Generation</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">10</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">passwords</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
        </div>
      );
    case 16:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">Gaming Password Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate secure passwords for your gaming accounts. Optimized for compatibility with Xbox Live, PlayStation Network, Steam, and other platforms.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Length</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">16</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Options</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Include symbols (may cause issues on some platforms)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Entropy:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">95 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Srcwv05OYzZFeNRB</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">nvX68IkBwenLvOTR</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">odbKZwkp10dLxvuN</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">pjHCbPLm54r05Dbh</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Af5wG0EtZgGbDfxf</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">zdK9LjMwWUKtmIQF</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Platform Requirements</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Xbox Live</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">8-16 chars</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">PlayStation Network</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">8-30 chars</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Steam</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">8-64 chars</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Epic Games</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">7-64 chars</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Nintendo</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">8-20 chars</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Battle.net</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">8-16 chars</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Gaming account security tips</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Enable 2FA on all gaming accounts</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Use unique passwords for each platform</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Never share your password, even with friends</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Be wary of phishing links in game chats</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Check for official domain names before logging in</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Bulk Generation</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">10</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">passwords</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
        </div>
      );
    case 17:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">WiFi Password Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate strong, secure passwords for your wireless network. Compatible with all router brands including Netgear, Linksys, TP-Link, ASUS, and D-Link.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Popular Router Brands &amp; Admin URLs</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Netgear</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">routerlogin.net</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">192.168.1.1</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Linksys</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">192.168.1.1</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">myrouter.local</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">TP-Link</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">tplinkwifi.net</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">192.168.0.1</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Password Length</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">20 characters (recommended)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate New Passwords</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Entropy:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">124 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">(WPA requires 8-63 printable ASCII characters)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">BlHX+@5l+Ae^2K-Q-D^n</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">fv2\F0BBukJYgsoegCem</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">ogSXb5KmyxW=Hqp$kd6m</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">IK7wAwWsk1Iq_YD5QppY</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">B4ZGTIDqn&amp;unjwD_a!42</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">How to Set Your WiFi Password</p>
<ul className="list-disc pl-5 space-y-1.5 text-xs text-(--muted) mb-4">
  <li>Access Your Router Admin Panel</li>
</ul>
<div className="overflow-x-auto my-4 border border-(--border) rounded-xl bg-(--card-bg)"><table className="w-full text-[11px] text-left border-collapse"><thead><tr className="border-b border-(--border) bg-(--code-bg) text-(--muted) font-semibold"><th className="px-4 py-2 font-semibold">Open a browser and go to your router&apos;s admin page. Try these common addresses:</th></tr></thead><tbody></tbody></table></div>
<div className="overflow-x-auto my-4 border border-(--border) rounded-xl bg-(--card-bg)"><table className="w-full text-[11px] text-left border-collapse"><thead><tr className="border-b border-(--border) bg-(--code-bg) text-(--muted) font-semibold"><th className="px-4 py-2 font-semibold">192.168.1.1</th></tr></thead><tbody><tr className="border-b border-(--border) hover:bg-(--code-bg)/50"><td className="px-4 py-2 text-(--foreground)">192.168.0.1</td></tr><tr className="border-b border-(--border) hover:bg-(--code-bg)/50"><td className="px-4 py-2 text-(--foreground)">10.0.0.1</td></tr><tr className=" hover:bg-(--code-bg)/50"><td className="px-4 py-2 text-(--foreground)">192.168.1.254</td></tr></tbody></table></div>
<ul className="list-disc pl-5 space-y-1.5 text-xs text-(--muted) mb-4">
  <li>Login with Admin Credentials</li>
</ul>
<div className="overflow-x-auto my-4 border border-(--border) rounded-xl bg-(--card-bg)"><table className="w-full text-[11px] text-left border-collapse"><thead><tr className="border-b border-(--border) bg-(--code-bg) text-(--muted) font-semibold"><th className="px-4 py-2 font-semibold">Use admin credentials (check router label or manual if using defaults)</th></tr></thead><tbody></tbody></table></div>
<ul className="list-disc pl-5 space-y-1.5 text-xs text-(--muted) mb-4">
  <li>Navigate to WiFi Security Settings</li>
</ul>
<div className="overflow-x-auto my-4 border border-(--border) rounded-xl bg-(--card-bg)"><table className="w-full text-[11px] text-left border-collapse"><thead><tr className="border-b border-(--border) bg-(--code-bg) text-(--muted) font-semibold"><th className="px-4 py-2 font-semibold">Look for sections named Wireless, WiFi, Security, or Network settings</th></tr></thead><tbody></tbody></table></div>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Router-Specific Instructions</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">NETGEAR</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Address: 192.168.1.1 or routerlogin.net</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Path: Wireless → Security Options</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">WPA3: Available on newer models (AX series)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Setting: WPA2-PSK [AES] or WPA3-Personal</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Linksys</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Address: 192.168.1.1 or myrouter.local</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Path: WiFi Settings → Security</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">WPA3: Velop series and newer WiFi 6 routers</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Setting: WPA2/WPA3 Mixed or WPA3 Only</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">ASUS</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Address: 192.168.1.1 or router.asus.com</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Path: Wireless → General</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">WPA3: AX series and newer AC routers</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Setting: WPA2/WPA3-Personal</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">TP-Link</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Address: 192.168.0.1 or tplinkwifi.net</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Path: Wireless → Wireless Security</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">WPA3: Archer AX series and newer models</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Setting: WPA/WPA2/WPA3-Personal</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">D-Link</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Address: 192.168.0.1 or dlinkrouter.local</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Path: Setup → Wireless Settings</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">WPA3: DIR-X series and newer models</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Setting: WPA2-PSK/WPA3-SAE</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Eero (Amazon)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Setup: Eero app only (no web interface)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Path: Settings → Network → Password</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">WPA3: All current models support WPA3</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Setting: Automatic WPA2/WPA3 selection</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">📡 ISP-Provided Router Notes</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Xfinity/Comcast: Gateway address usually 10.0.0.1</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Verizon FiOS: Address typically 192.168.1.1</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Spectrum: Varies by model, try 192.168.1.1 first</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">AT&amp;T: Often 192.168.1.254 or 192.168.1.1</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">CenturyLink: Usually 192.168.0.1</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Cox: Typically 192.168.0.1</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">WiFi Security Tips</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Use WPA3 if your router supports it, otherwise WPA2</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Never use WEP - it&apos;s broken and easily cracked</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Use at least 12 characters (20+ is better)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Change default router admin password too</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Consider hiding your network name (SSID) for extra privacy</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Create a separate guest network for visitors</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Guest Network Best Practices</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Why Set Up a Guest Network?</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Isolates visitor devices from your main network</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Protects your personal files and devices</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Easier to share simple credentials</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Can set bandwidth limits for guests</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Guest Network Setup Tips</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Use a memorable but secure password (16+ characters)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Enable client isolation to prevent guest-to-guest communication</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Set time limits if your router supports it</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Consider simpler names like &quot;YourNameGuest&quot; for easy identification</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Regularly change guest password, especially after events</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">WPA2 vs WPA3: Which Should You Choose?</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">WPA2 (2004)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">✓</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Universal device support</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">✓</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">AES-256 encryption</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">⚠</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Vulnerable to KRACK attacks (patched)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">⚠</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Susceptible to dictionary attacks</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Password recommendation: Minimum 20 characters with mixed case, numbers, and symbols</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">WPA3 (2018)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">✓</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Protected Management Frames</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">✓</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">SAE (Simultaneous Authentication)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">✓</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Stronger against brute force</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">✗</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Limited older device support</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Password recommendation: 12+ characters sufficient due to improved security</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Standard Security Recommendation</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">WEP Broken Never use - can be cracked in minutes</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">WPA Weak Avoid - vulnerable to attacks</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">WPA2 Good Recommended minimum standard</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">WPA3 Best Use if supported by all your devices</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">💡 Migration Strategy</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Start with WPA2/WPA3 mixed mode if available. This ensures older devices can connect while newer ones use WPA3. Once all devices support WPA3, switch to WPA3-only for maximum security.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Phase 1: Enable WPA2/WPA3 mixed mode (6-12 months)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Phase 2: Audit device compatibility</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Phase 3: Switch to WPA3-only when all devices support it</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">WPA3 Technical Improvements</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Enhanced Security Features</p>
<ul className="list-disc pl-5 space-y-1.5 text-xs text-(--muted) mb-4">
  <li>SAE (Dragonfly): Replaces PSK with forward secrecy</li>
  <li>192-bit Security: Available in WPA3-Enterprise</li>
  <li>Protected Management Frames: Prevents deauth attacks</li>
  <li>Opportunistic Wireless Encryption: Open network protection</li>
</ul>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Attack Resistance</p>
<ul className="list-disc pl-5 space-y-1.5 text-xs text-(--muted) mb-4">
  <li>KRACK immunity: Not vulnerable to key reinstallation</li>
  <li>Dictionary attack protection: SAE makes offline attacks impossible</li>
  <li>Brute force resistance: Built-in rate limiting</li>
  <li>Perfect Forward Secrecy: Past traffic stays secure</li>
</ul>
<p className="text-xs text-(--muted) leading-relaxed mb-3">✅ WPA3 Device Compatibility (2024)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Smartphones</p>
<ul className="list-disc pl-5 space-y-1.5 text-xs text-(--muted) mb-4">
  <li>iPhone: iOS 13+ (2019+)</li>
  <li>Android: 10+ (2019+)</li>
  <li>Samsung: Galaxy S10+ (2019+)</li>
</ul>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Computers</p>
<ul className="list-disc pl-5 space-y-1.5 text-xs text-(--muted) mb-4">
  <li>Windows: 10 May 2019+</li>
  <li>macOS: 10.15 Catalina+</li>
  <li>Linux: Recent kernels</li>
</ul>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Other Devices</p>
<ul className="list-disc pl-5 space-y-1.5 text-xs text-(--muted) mb-4">
  <li>Smart TVs: 2020+ models</li>
  <li>Gaming consoles: PS5, Xbox Series</li>
  <li>IoT: Varies widely</li>
</ul>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Share via QR Code</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Most phones can generate a WiFi QR code from Settings &gt; WiFi &gt; Share. Guests can scan it to connect without typing the password.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Bulk Generation</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">10</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">passwords</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
        </div>
      );
    case 18:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">API Token Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate secure API tokens with customizable prefixes. Perfect for authentication tokens, API credentials, and access management.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Prefix</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">sk_test (Stripe-style)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Length (after prefix)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">32 characters</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Entropy:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">190 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">(alphanumeric, 32 characters)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generated Values</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">sk_test_FF5LdRpdEZHowA0odAREVRC9NBDXkgSv</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">sk_test_0xh6ls9Q3rkVt90mJMMgolq44OuL0KYj</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">sk_test_6d8vwyu4s3asGrFwiOSC3rNcZgjHtlOp</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">sk_test_V6braGmri0ZQrIl1EeFLtdChylWZQeEB</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">sk_test_oRsHRngkdRlHXZXxNBNDdb1NuhjpTy1L</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">🔐 API Key Permissions Builder</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Define granular permissions and access controls for your API keys with preset templates and custom scopes.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Permission Presets</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Read Only</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Safe for public dashboards</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">users:read, posts:read, analytics:read</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Content Manager</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Create and edit content</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">posts:read, posts:write, media:upload</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">User Admin</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Full user management</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">users:read, users:write, users:delete</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Full Access</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">All permissions (admin)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">_:_</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Individual Permissions</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">users:read</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">users:write</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">users:delete</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">posts:read</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">posts:write</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">posts:delete</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">comments:read</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">comments:write</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">comments:moderate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">analytics:read</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">analytics:export</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">payments:read</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">payments:process</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">payments:refund</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">media:upload</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">media:delete</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">webhooks:create</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">webhooks:delete</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">admin:settings</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">admin:audit</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Custom Scopes</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">resource:action (e.g. files:download)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Add Custom Scope</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">API Configuration</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Rate Limiting</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">1,000 requests/hour (Standard)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">API Version</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">v1 (Stable)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Selected Permissions</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">No permissions selected</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">API Key Configuration</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">json</p>
<CodeBlock code={`{
"api_key": "sk_test_FF5LdRpdEZHowA0odAREVRC9NBDXkgSv",
"permissions": [
"users:read"
],
"rate_limit": "1000/hour",
"api_version": "v1",
"created_at": "2026-07-03T04:27:26.666Z",
"expires_at": "2027-07-03"
}`} filename="" />
<CodeBlock code={`const apiKeys = new Map([
['sk_test_FF5LdRpdEZHowA0odAREVRC9NBDXkgSv', {
permissions: ['users:read'],
rate_limit: '1000/hour',
api_version: 'v1'
}]
]);

function requirePermission(requiredPermission) {
return (req, res, next) => {
const apiKey = req.headers['authorization']?.replace('Bearer ', '');

    if (!apiKey) {
      return res.status(401).json({ error: 'API key required' });
    }

    const keyData = apiKeys.get(apiKey);
    if (!keyData) {
      return res.status(401).json({ error: 'Invalid API key' });
    }

    // Check permission
    const hasPermission = keyData.permissions.includes('*:*') ||
                         keyData.permissions.includes(requiredPermission);

    if (!hasPermission) {
      return res.status(403).json({
        error: 'Insufficient permissions',
        required: requiredPermission,
        granted: keyData.permissions
      });
    }

    req.apiKey = keyData;
    next();

};
}

// Usage
app.get('/users', requirePermission('users:read'), (req, res) => {
res.json({ users: [] });
});

app.post('/users', requirePermission('users:write'), (req, res) => {
res.json({ message: 'User created' });
});`} filename="" />
<CodeBlock code={`from functools import wraps
from flask import request, jsonify

API_KEYS = {
'sk_test_FF5LdRpdEZHowA0odAREVRC9NBDXkgSv': {
'permissions': ['users:read'],
'rate_limit': '1000/hour',
'api_version': 'v1'
}
}

def require_permission(required_permission):
def decorator(f):
@wraps(f)
def decorated_function(\*args, \*\*kwargs):
auth_header = request.headers.get('Authorization', '')

            if not auth_header.startswith('Bearer '):
                return jsonify({'error': 'API key required'}), 401

            api_key = auth_header[7:]  # Remove 'Bearer '
            key_data = API_KEYS.get(api_key)

            if not key_data:
                return jsonify({'error': 'Invalid API key'}), 401

            permissions = key_data['permissions']
            has_permission = ('*:*' in permissions or
                            required_permission in permissions)

            if not has_permission:
                return jsonify({
                    'error': 'Insufficient permissions',
                    'required': required_permission,
                    'granted': permissions
                }), 403

            request.api_key_data = key_data
            return f(*args, **kwargs)
        return decorated_function
    return decorator

# Usage

@app.route('/users')
@require_permission('users:read')
def get_users():
return jsonify({'users': []})

@app.route('/users', methods=['POST'])
@require_permission('users:write')  
def create_user():
return jsonify({'message': 'User created'})`} filename="" />
<CodeBlock code={`
# Store your API token securely

API_KEY=sk_test_FF5LdRpdEZHowA0odAREVRC9NBDXkgSv
Token prefixes

Prefixes like sk* (secret) and pk* (public) help identify token types at a glance and prevent accidental exposure. The \\_live and \\_test suffixes distinguish production from development environments.

Bulk Generation
Generate

10
tokens
Generate
Generate in Terminal
For production systems, generate tokens locally:

OpenSSL with prefix

echo "sk*live*\$(openssl rand -base64 32 | tr -dc 'a-zA-Z0-9' | head -c 32)"

Python secrets module

python3 -c "import secrets; print(f'sk*live*{secrets.token_urlsafe(24)}')"

Node.js crypto

node -e "console.log('sk*live*' + require('crypto').randomBytes(24).toString('base64url'))"

Related Tools
API Key Generator
Secure API tokens
JWT Secret Generator
Token signing keys
Django Secret Key
For Django settings
UUID Generator
Unique identifiers
Backup Codes
2FA recovery codes
Security Tips

- Use prefixes to identify key types (sk*, pk*)`} filename="" />
        </div>
      );
    case 19:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">Generate Production-Ready JWT Secrets in One Click</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Create cryptographically secure JWT signing secrets instantly. Get 256-bit, 384-bit, or 512-bit secrets ready for immediate use in your authentication system.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Algorithm</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">HS256 (256-bit)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Format</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Base64</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Security:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">256 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">(32 bytes) — HMAC with SHA-256 (most common)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">1psQ0QgfH/wckr+rE37DbQvLHFiF9ZpuvgYLe3wZgRM=</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">0IgbMiKMTsbopHjjNUyMgkqUtUuSdBv+pFbEQRgYBb4=</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">BkLHqVS7+vdEM+zAsW/B/pF8+mreMEYeT/saOKiRAVg=</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">y+TSbfgau51peMqvWp1XBn8Au6EbZpjl+PVMv3gMRus=</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">🔧 Interactive JWT Decoder &amp; Encoder</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Decode existing JWTs to inspect their structure, or build new ones with custom claims.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">JWT Decoder</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">JWT Token (paste here)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE1MTYyNDI2MjJ9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Header</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">{"{"}</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">&quot;alg&quot;: &quot;HS256&quot;,</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">&quot;typ&quot;: &quot;JWT&quot;</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">{"}"}</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Payload</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">{"{"}</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">&quot;sub&quot;: &quot;1234567890&quot;,</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">&quot;name&quot;: &quot;John Doe&quot;,</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">&quot;iat&quot;: 1516239022,</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">&quot;exp&quot;: 1516242622</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">{"}"}</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Signature (truncated)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">SflKxwRJSMeKKF2QT4fw...</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">JWT Builder</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Header (JSON)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">{"{"}</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">&quot;alg&quot;: &quot;HS256&quot;,</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">&quot;typ&quot;: &quot;JWT&quot;</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">{"}"}</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Payload (JSON)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">{"{"}</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">&quot;sub&quot;: &quot;1234567890&quot;,</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">&quot;name&quot;: &quot;John Doe&quot;,</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">&quot;iat&quot;: 1783052855,</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">&quot;exp&quot;: 1783056455</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">{"}"}</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Build JWT (Header + Payload)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">📊 JWT Algorithm Comparison</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Algorithm Type Key Length Security Performance Use Cases</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">HS256 HMAC-SHA256 256 bits (32 bytes) Good Fastest Most common, good for web apps</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">HS384 HMAC-SHA384 384 bits (48 bytes) Better Medium Higher security requirements</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">HS512 HMAC-SHA512 512 bits (64 bytes) Best Slower Maximum security, critical systems</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">RS256 RSA-SHA256 2048+ bits High Slow Public key verification</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">ES256 ECDSA-SHA256 256 bits High Fast Modern alternative to RSA</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">💡 Current selection: HS256 offers hmac with sha-256 (most common) with 256 bits of security. Perfect for most web applications.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">🧩 JWT Claims Builder</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Build standard JWT claims with validation and examples.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Standard Claims</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Issuer (iss)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">your-app.com</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Subject (sub)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">user-123</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Audience (aud)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">api.example.com</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Expiry (hours)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">24</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Scopes (space-separated)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">read:profile write:posts admin</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Custom Claims</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Claim name</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Value</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Add</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generated Claims Preview</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">{"{"}</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">&quot;iss&quot;: &quot;your-app.com&quot;,</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">&quot;sub&quot;: &quot;user-123&quot;,</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">&quot;aud&quot;: &quot;api.example.com&quot;,</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">&quot;iat&quot;: 1783052855,</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">&quot;exp&quot;: 1783139255,</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">&quot;scope&quot;: &quot;read:profile write:posts&quot;,</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">&quot;role&quot;: &quot;user&quot;,</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">&quot;email&quot;: &quot;user@example.com&quot;</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">{"}"}</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Copy Claims JSON</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Usage Examples</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">.env</p>
<CodeBlock code={`JWT_SECRET=1psQ0QgfH/wckr+rE37DbQvLHFiF9ZpuvgYLe3wZgRM=
Node.js (jsonwebtoken)`} filename="" />
<CodeBlock code={`const jwt = require('jsonwebtoken');

const token = jwt.sign(
{ userId: '123', role: 'admin' },
process.env.JWT_SECRET,
{ algorithm: 'HS256', expiresIn: '24h' }
);
JWT Secret Security Best Practices
Secret Length Requirements
Secret length matters

For HMAC-based JWT algorithms, the secret should be at least as long as the hash output:

HS256 requires at least 256 bits (32 bytes)
HS384 requires at least 384 bits (48 bytes)
HS512 requires at least 512 bits (64 bytes)
Using a shorter secret weakens the security of your tokens and makes them vulnerable to brute force attacks.

Secure Secret Storage
Environment Variables: Store secrets in environment variables, never in source code
Secret Management: Use dedicated services like AWS Secrets Manager, Azure Key Vault, or HashiCorp Vault
File Permissions: If storing in files, use strict permissions (600 or 640)
Version Control: Never commit secrets to Git repositories
Container Security: Use Docker secrets or Kubernetes secrets in containerized environments
Secret Rotation Strategy
✓ Do
Rotate secrets regularly (every 90 days minimum)
Support multiple active secrets during rotation
Use automated rotation tools when possible
Log secret usage for audit trails
Test rotation procedures regularly
✗ Don't
Wait for security incidents to rotate
Use the same secret across environments
Forget to update all services simultaneously
Leave old secrets active indefinitely
Skip testing after rotation
Choosing the Right Algorithm
Algorithm Security Level Performance Recommendation
HS256 Good Fast Default choice for most applications
HS384 Better Medium Use for higher security requirements
HS512 Best Slower Maximum security, slight performance cost
Production Deployment Checklist

Generate unique secrets for each environment (dev, staging, prod)

Implement proper secret storage (environment variables or secret manager)

Set up monitoring for failed JWT validation attempts

Configure appropriate token expiration times

Test secret rotation procedure

Audit code for hardcoded secrets
Complete Implementation Examples
Express.js Middleware with Security`} filename="" />
<CodeBlock code={`const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');

// Rate limiting for token endpoints
const authLimiter = rateLimit({
windowMs: 15 _ 60 _ 1000, // 15 minutes
max: 5,
message: 'Too many authentication attempts'
});

class JWTService {
constructor() {
this.secret = process.env.JWT_SECRET;
this.algorithm = 'HS256';

    if (!this.secret) {
      throw new Error('JWT_SECRET environment variable is required');
    }

}

generateToken(payload) {
return jwt.sign({
...payload,
iat: Math.floor(Date.now() / 1000),
jti: require('crypto').randomBytes(16).toString('hex')
}, this.secret, {
algorithm: this.algorithm,
expiresIn: '24h',
issuer: 'your-app',
audience: 'your-users'
});
}

verifyToken(token) {
try {
return jwt.verify(token, this.secret, {
algorithms: [this.algorithm],
issuer: 'your-app',
audience: 'your-users'
});
} catch (error) {
throw new Error('Invalid token: ' + error.message);
}
}
}

// Authentication middleware
const authenticateToken = (req, res, next) => {
const authHeader = req.headers['authorization'];
const token = authHeader && authHeader.split(' ')[1];

if (!token) {
return res.status(401).json({ error: 'Access token required' });
}

try {
const jwtService = new JWTService();
req.user = jwtService.verifyToken(token);
next();
} catch (error) {
return res.status(403).json({ error: 'Invalid token' });
}
};

module.exports = { authenticateToken, authLimiter };`} filename="" />
<CodeBlock code={`import jwt
import os
from datetime import datetime, timedelta, timezone
from functools import wraps
from flask import request, jsonify

class JWTAuth:
def **init**(self):
self.secret = os.getenv('JWT_SECRET')
self.algorithm = 'HS256'

        if not self.secret:
            raise ValueError('JWT_SECRET environment variable required')

    def generate_token(self, user_data):
        payload = {
            'user_id': user_data['id'],
            'email': user_data['email'],
            'role': user_data.get('role', 'user'),
            'exp': datetime.now(timezone.utc) + timedelta(hours=24),
            'iat': datetime.now(timezone.utc),
            'iss': 'your-app',
            'aud': 'your-users'
        }
        return jwt.encode(payload, self.secret, algorithm=self.algorithm)

    def verify_token(self, token):
        try:
            return jwt.decode(
                token, self.secret,
                algorithms=[self.algorithm],
                options={"verify_aud": True, "verify_iss": True}
            )
        except jwt.ExpiredSignatureError:
            raise ValueError('Token has expired')
        except jwt.InvalidTokenError:
            raise ValueError('Invalid token')

# Decorator for protected routes

def token_required(f):
@wraps(f)
def decorated(\\*args, \\*\\*kwargs):
auth_header = request.headers.get('Authorization')

        if not auth_header:
            return jsonify({'error': 'Token missing'}), 401

        try:
            token = auth_header.split(' ')[1]
            jwt_auth = JWTAuth()
            payload = jwt_auth.verify_token(token)
            request.current_user = payload
        except (IndexError, ValueError) as e:
            return jsonify({'error': str(e)}), 401

        return f(*args, **kwargs)
    return decorated

JWT Security Audit Checklist
🔐 Secret & Configuration

Secret meets minimum length (\$32+ bytes for \$HS256)

Algorithm explicitly specified in verification

Issuer (iss) and audience (aud) claims validated

Appropriate expiration times set (15min-1hr)

Secret stored securely (env vars, not code)
🛡️ Implementation Security

HTTPS enforced in production

Rate limiting on auth endpoints

Proper error handling (no info leakage)

Token blacklist/revocation mechanism

Minimal payload data (no sensitive info)
🔍 Quick Security Test
Test your JWT implementation:

• Try using 'none' algorithm → should be rejected
• Send expired token → should return 401
• Modify token signature → should be invalid
• Test with wrong audience/issuer → should be rejected
Bulk Generation
Generate

10
secrets
Generate
Implementation Examples
Node.js with Express.js`} filename="" />
<CodeBlock code={`const jwt = require('jsonwebtoken');

// Generate token (login)
function generateToken(user) {
const payload = {
userId: user.id,
email: user.email,
role: user.role
};

return jwt.sign(payload, process.env.JWT_SECRET, {
algorithm: 'HS256',
expiresIn: '24h',
issuer: 'your-app-name',
audience: 'your-app-users'
});
}

// Verify token (middleware)
function verifyToken(req, res, next) {
const token = req.headers.authorization?.split(' ')[1];

if (!token) {
return res.status(401).json({ error: 'Access token required' });
}

try {
const decoded = jwt.verify(token, process.env.JWT_SECRET, {
algorithms: ['HS256']
});
req.user = decoded;
next();
} catch (error) {
return res.status(401).json({ error: 'Invalid token' });
}
}`} filename="" />
<CodeBlock code={`import jwt
import os
from datetime import datetime, timedelta
from functools import wraps
from flask import request, jsonify

JWT_SECRET = os.getenv('JWT_SECRET')
JWT_ALGORITHM = 'HS256'

def generate_token(user_data):
payload = {
'user_id': user_data['id'],
'email': user_data['email'],
'exp': datetime.utcnow() + timedelta(hours=24),
'iat': datetime.utcnow(),
'iss': 'your-app-name'
}

    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)

def verify_token(f):
@wraps(f)
def decorated(\\*args, \\*\\*kwargs):
token = request.headers.get('Authorization')

        if not token:
            return jsonify({'error': 'Token missing'}), 401

        try:
            token = token.split(' ')[1]  # Remove 'Bearer '
            decoded = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
            request.user = decoded
        except jwt.ExpiredSignatureError:
            return jsonify({'error': 'Token expired'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'error': 'Invalid token'}), 401

        return f(*args, **kwargs)
    return decorated`} filename="" />
<CodeBlock code={`import io.jsonwebtoken.\\*;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class JwtUtil {

    @Value("\${jwt.secret}")
    private String jwtSecret;

    private final int jwtExpirationMs = 86400000; // 24 hours

    public String generateToken(String username, String role) {
        return Jwts.builder()
                .setSubject(username)
                .claim("role", role)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationMs))
                .signWith(Keys.hmacShaKeyFor(jwtSecret.getBytes()), SignatureAlgorithm.HS256)
                .compact();
    }

    public Claims extractClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(Keys.hmacShaKeyFor(jwtSecret.getBytes()))
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public boolean isTokenExpired(String token) {
        return extractClaims(token).getExpiration().before(new Date());
    }

    public boolean validateToken(String token) {
        try {
            extractClaims(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }

}
🔐 Implementation Security Tips
Always validate the algorithm to prevent algorithm confusion attacks
Set appropriate expiration times - shorter is more secure but less convenient
Include audience and issuer claims for additional validation
Use HTTPS only in production to prevent token interception
Implement proper error handling without exposing sensitive information
Consider implementing token blacklisting for logout functionality
Generate in Terminal
For production systems, generate secrets locally:

OpenSSL (256-bit, base64)

openssl rand -base64 32

OpenSSL (256-bit, hex)

openssl rand -hex 32

Python secrets module

python3 -c "import secrets; print(secrets.token_urlsafe(32))"

Node.js crypto

node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"`} filename="" />
        </div>
      );
    case 20:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">UUID Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate RFC 4122 compliant UUIDs (Universally Unique Identifiers). Version 4 UUIDs are randomly generated and have 122 bits of entropy.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Format</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Standard (lowercase with dashes)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Version:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">v4</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Entropy:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">122 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generated Values</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">0d396dee-58de-4c94-a723-d7e30bb054f9</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">ab27474e-2760-48ae-ade1-e8d91c2f917d</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">2aa26276-3173-4dbc-94a5-727cec3fcfa2</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">471a3d5b-d1e9-484e-81d9-1bda8ea93ead</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">36a17204-2fe0-4a68-b197-2f31be15c682</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">d58e9297-616c-4d15-88c4-9290724b1f46</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Usage Examples</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">SQL (Primary Key)</p>
<CodeBlock code={`CREATE TABLE users (
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
email VARCHAR(255) NOT NULL
);

INSERT INTO users (id, email) VALUES
('0d396dee-58de-4c94-a723-d7e30bb054f9', 'user@example.com');`} filename="" />
<CodeBlock code={`// Native (Node.js 14.17+ / modern browsers)
const uuid = crypto.randomUUID();

// With uuid package
import { v4 as uuidv4 } from 'uuid';
const id = uuidv4();
UUID v4 structure

xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx

The 4 indicates version 4 (random)
The y is one of 8, 9, a, or b (variant 1)
All other characters are random hex digits
Total: 32 hex characters = 128 bits (122 random + 6 version/variant)
Bulk Generation
Generate

10
UUIDs
Generate
Generate in Terminal
macOS / Linux

uuidgen

Linux (kernel)

cat /proc/sys/kernel/random/uuid

Python

python3 -c "import uuid; print(uuid.uuid4())"

Node.js

node -e "console.log(require('crypto').randomUUID())"`} filename="" />
        </div>
      );
    case 21:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">Random String Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate cryptographically secure random strings with customizable length and character sets. Perfect for tokens, identifiers, temporary passwords, and testing.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Length</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">32 characters</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Character Set</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Alphanumeric (a-z, A-Z, 0-9)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Entropy:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">190 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">(62 unique characters, 32 length)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">ElXLLA69m7ZUMuDnNub8J2JrXgMDotFL</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">WR436NsdV6pjdBLYtR5wdtYM93HhDRe0</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">bYiTRUdm5nFPtUhclUmYZn97i43zRAyG</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">OQAOBaQEETC1zWMWfq1U70kpbeq81TKl</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">E6mzp5eGOaRyqZFCmQKAuRQnlVuxjfPd</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Common Use Cases</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Session IDs</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">32+ character alphanumeric strings for secure session identification.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Database IDs</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">URL-safe random strings as alternatives to auto-increment IDs.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Temporary Tokens</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">One-time verification codes, password reset tokens, email confirmations.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Test Data</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Random strings for testing, mock data generation, and development.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Cryptographically Secure</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">These strings are generated using the Web Crypto API&apos;s crypto.getRandomValues(), which provides cryptographically secure random values suitable for security-sensitive applications.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Bulk Generation</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">10</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">strings</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate in Terminal</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate random strings locally using these commands:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">OpenSSL alphanumeric</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">openssl rand -base64 32 | tr -dc &apos;a-zA-Z0-9&apos; | head -c 32</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">OpenSSL hex</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">openssl rand -hex 16 | head -c 32</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Python URL-safe</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">python3 -c &quot;import secrets; print(secrets.token_urlsafe(24))&quot;</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Node.js</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">node -e &quot;console.log(require(&apos;crypto&apos;).randomBytes(16).toString(&apos;hex&apos;).slice(0, 32))&quot;</p>
        </div>
      );
    case 22:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">TOTP Secret Key Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate Base32-encoded secrets for Time-based One-Time Password (TOTP) authentication. Compatible with Google Authenticator, Authy, Microsoft Authenticator, and other 2FA apps.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Secret Size</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">160 bits (20 bytes) - Recommended</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Entropy:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">160 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Format:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Base32 (RFC 4648)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">V7AT7KM6JOGQ32QWDG3YBYGENSX3VTOW</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">O7T6K64ST3ISWHJPYLFSVAKKPBUPIY2X</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">RUQJWQXZLVQ2DKO65QD7XMW3244NDQJ6</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">BXB2GYM5ZAEZU2O7L2ZISFVVZ2FVMCQF</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">4SGZRCVYAENJMEZBSE2OPZZQ6OGAQLIE</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">OTPAuth URI (for QR Codes)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Issuer (App Name)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">MyApp</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Account</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">user@example.com</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generated URI</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">otpauth://totp/MyApp:user%40example.com?secret=V7AT7KM6JOGQ32QWDG3YBYGENSX3VTOW&amp;issuer=MyApp&amp;algorithm=SHA1&amp;digits=6&amp;period=30</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Use this URI to generate a QR code that users can scan with their authenticator app.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Implementation Examples</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Python (pyotp)</p>
<CodeBlock code={`import pyotp

# Store this secret securely for each user

secret = "V7AT7KM6JOGQ32QWDG3YBYGENSX3VTOW"

# Generate current TOTP code

totp = pyotp.TOTP(secret)
print(totp.now()) # e.g., "492039"

# Verify a code from user

is_valid = totp.verify("492039")
Node.js (otplib)`} filename="" />
<CodeBlock code={`const { authenticator } = require('otplib');

const secret = "V7AT7KM6JOGQ32QWDG3YBYGENSX3VTOW";

// Generate current code
const token = authenticator.generate(secret);

// Verify user's code
const isValid = authenticator.verify({ token: userCode, secret });
PHP (sonata-project/GoogleAuthenticator)`} filename="" />
<CodeBlock code={`use Sonata\\GoogleAuthenticator\\GoogleAuthenticator;

\$ga = new GoogleAuthenticator();
\$secret = "V7AT7KM6JOGQ32QWDG3YBYGENSX3VTOW";

// Verify user's code
\$isValid = \$ga->checkCode(\$secret, \$userCode);
How TOTP Works

TOTP generates a 6-digit code that changes every 30 seconds. Both the server and the user's authenticator app share the same secret key, allowing them to generate matching codes without network communication.

Based on HMAC-SHA1 algorithm (RFC 6238)
Uses Unix timestamp divided by 30-second intervals
Base32 encoding makes secrets easy to type manually
Security Considerations

Store secrets encrypted in your database
Show the secret/QR code only once during setup
Provide backup codes for account recovery
Use 160+ bits (20+ bytes) for production systems
Bulk Generation
Generate

10
secrets
Generate
Generate in Terminal
Python

python3 -c "import base64, secrets; print(base64.b32encode(secrets.token_bytes(20)).decode())"

OpenSSL + base32

openssl rand -hex 20 | xxd -r -p | base32

Node.js (URL-safe variant)

node -e "console.log(require('crypto').randomBytes(20).toString('base64').replace(/[+/=]/g, c => ({'+':'-','/':'\\_','=':''}[c])))"`} filename="" />
        </div>
      );
    case 23:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">Test Credit Card Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate valid test credit card numbers for development and testing purposes. These cards pass Luhn validation but are not real and cannot be used for purchases.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">For Testing Only</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">These are fake test card numbers for software development and testing. They are not connected to real accounts and cannot be used for actual purchases. Using fake card numbers for fraud is illegal.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Card Type</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Visa</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Visa</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Click to copy number</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">4369 7845 7523 8858</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Expires: 06/27</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">CVV: 572</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Visa</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Click to copy number</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">4204 8652 3076 8899</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Expires: 08/29</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">CVV: 580</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Visa</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Click to copy number</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">4643 0491 8011 9820</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Expires: 10/27</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">CVV: 862</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Visa</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Click to copy number</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">4639 2980 0641 2382</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Expires: 10/30</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">CVV: 403</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Visa</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Click to copy number</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">4102 5934 9325 2681</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Expires: 03/29</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">CVV: 042</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Official Test Card Numbers</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Payment processors provide official test cards. Use these for integration testing:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Stripe Test Cards</p>
<CodeBlock code={`Visa (success): 4242 4242 4242 4242
Visa (decline): 4000 0000 0000 0002
Mastercard: 5555 5555 5555 4444
Amex: 3782 822463 10005
3D Secure: 4000 0025 0000 3155`} filename="" />
<CodeBlock code={`Visa: 4032 0350 0109 5217
Mastercard: 5425 2334 3010 9903
Amex: 3434 343434 34343

Expiry: Any future date, CVV: Any 3-4 digits
How Card Validation Works
Credit card numbers use the Luhn algorithm (mod 10) for basic validation. The last digit is a check digit that makes the number pass the algorithm.

Starting from the right, double every second digit
If doubling results in a number > 9, subtract 9
Sum all the digits
If the sum is divisible by 10, the number is valid
Note: Luhn only catches typos - it doesn't verify if a card actually exists.

Card Number Formats
Card Type Prefix(es) Length CVV`} filename="" />
        </div>
      );
    case 24:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">Django SECRET_KEY Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate secure SECRET_KEY values for Django projects. Uses the same character set and length as Django&apos;s default key generation.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">282 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">+\_at#im!u7!x---pqiya!n=(vlc)25=7sdo1-6vif9_7(58r@=</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">282 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">ni3o\_#a75wkb4ouh!9(&amp;+5ar1&amp;8i8$4zo)6fr0cwp3+ofg%bow</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">282 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">jyf@tkc)jwp^fi\me=q+t#q)ps!#nnz98kp16vk&amp;#&amp;bqd9sb&amp;\_</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">282 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">%gg!&amp;4auuo73negwon&amp;j+d8wk6e(betphvwbsb#c)8foxn6#</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate New</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">How to Use in Django</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Basic settings.py</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">myproject/settings.py</p>
<CodeBlock code={`
# SECURITY WARNING: keep the secret key used in production secret!

SECRET_KEY = '+\\_at#im!u7!x---pqiya!n=(vlc)25=7sdo1-6vif9_7(58r@='

# Other settings...

DEBUG = False
ALLOWED_HOSTS = ['yourdomain.com']
Environment Variables (Recommended)`} filename="" />
<CodeBlock code={`DJANGO_SECRET_KEY=+\\_at#im!u7!x---pqiya!n=(vlc)25=7sdo1-6vif9_7(58r@=
DJANGO_DEBUG=False
DJANGO_ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com`} filename="" />
<CodeBlock code={`import os
from django.core.exceptions import ImproperlyConfigured

def get_env_variable(var_name):
"""Get the environment variable or return exception."""
try:
return os.environ[var_name]
except KeyError:
error_msg = f"Set the {var_name} environment variable"
raise ImproperlyConfigured(error_msg)

SECRET_KEY = get_env_variable('DJANGO_SECRET_KEY')
DEBUG = get_env_variable('DJANGO_DEBUG') == 'True'
ALLOWED_HOSTS = get_env_variable('DJANGO_ALLOWED_HOSTS').split(',')`} filename="" />
<CodeBlock code={`version: '3.8'
services:
web:
build: .
environment: - DJANGO_SECRET_KEY=+\\_at#im!u7!x---pqiya!n=(vlc)25=7sdo1-6vif9_7(58r@= - DJANGO_DEBUG=False
ports: - "8000:8000"`} filename="" />
<CodeBlock code={`python-decouple==3.8`} filename="" />
<CodeBlock code={`from decouple import config

SECRET_KEY = config('SECRET_KEY')
DEBUG = config('DEBUG', default=False, cast=bool)
Django Version Compatibility
Our SECRET_KEY format is compatible with all Django versions:

Django 4.x+ (Current LTS)
Full compatibility with new security features
Works with new CSRF and session implementations
Compatible with async views and middleware
Django 3.x (LTS)
Fully compatible with all 3.x features
Same character set as django-admin startproject
Works with all cryptographic signing
Django 2.x
Compatible with legacy 2.x installations
Supports all session and CSRF functionality
Works with older Python versions (3.6+)
Django 1.x
Works with Django 1.8+ (older LTS versions)
Compatible with legacy project structures
Note: Consider upgrading to supported versions
Migration Tip
When upgrading Django versions, you typically don't need to regenerate your SECRET_KEY. The same key will work across versions, maintaining session continuity for users.

Never commit secrets

Store your SECRET_KEY in environment variables or a secrets manager. Never commit it to version control. Consider using packages likepython-decouple or django-environ.

What SECRET_KEY is used for

Cryptographic signing (sessions, cookies, password reset tokens)
CSRF protection tokens
Unique salts for password hashing
Any use of Django's signing framework
Changing SECRET_KEY will invalidate all existing sessions and signed data.

Bulk Generation
Generate

10
secrets
Generate
Generate in Terminal
For production, generate the key on your server:

Django's built-in generator

python3 -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"

Python secrets module

python3 -c "import secrets; import string; chars = string.ascii*lowercase + string.digits + '!@#\$%^&\\*(-*=+)'; print(''.join(secrets.choice(chars) for \\_ in range(50)))"

OpenSSL

openssl rand -base64 50 | tr -dc 'a-zA-Z0-9!@#\$%^&\\*(-\\_=+)' | head -c 50`} filename="" />
        </div>
      );
    case 25:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">Laravel APP_KEY Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate secure application encryption keys for Laravel projects. These keys are used for encrypting cookies, sessions, and other sensitive data.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Format:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">base64:&lt;32 bytes&gt;</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Key Size:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">256 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Cipher:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">AES-256-CBC</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">base64:Wgn6DExRtNLHapYVNk5Q84SVFuQwvdBqsFExZBP4GdY=</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">base64:KSBXGZ4UtrSo67gEb5EqAaLBCKszqOFMxsOX6oNukbw=</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">base64:W+5qTNzPX6Mw78I++5pj4YKwYB3TMDqBn3gVe3DsDzk=</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">base64:NuGaV1Wea9WTJXHjVieOP1xjLyVPezsoc16qzzcuOz8=</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">base64:YVJcI3V+zYnt3WtXIPnyVDY0RL6kTSDbKEUGFYsh/NM=</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Add to .env File</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">.env</p>
<CodeBlock code={`APP_KEY=base64:Wgn6DExRtNLHapYVNk5Q84SVFuQwvdBqsFExZBP4GdY=
Installation

1. Copy the key
   Click on any generated key above to copy it to your clipboard.

2. Update your .env file
   Paste the key as the value of APP_KEY in your Laravel project's .env file.

3. Clear config cache (if needed)`} filename="" />
<CodeBlock code={`php artisan config:clear
Production Warning

Changing APP_KEY in production will invalidate all encrypted data, including user sessions, cookies, and any data encrypted with the old key. Only change it during initial setup or if you suspect the key has been compromised.

Why Laravel Needs APP_KEY
Encrypts session data to prevent tampering
Secures cookies containing sensitive information
Used by Laravel's encryption facade for encrypt() and decrypt()
Protects CSRF tokens and other security features
Required for signed URLs and password reset tokens
Bulk Generation
Generate

10
keys
Generate
Generate Locally
The recommended way is to use Laravel's built-in command:

Laravel Artisan (preferred)

php artisan key:generate

OpenSSL

echo "base64:\$(openssl rand -base64 32)"

PHP CLI

php -r "echo 'base64:' . base64_encode(random_bytes(32)) . PHP_EOL;"`} filename="" />
        </div>
      );
    case 26:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">Flask Secret Key Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate secure SECRET_KEY values for Flask applications. Essential for session security, CSRF protection, and cookie signing.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Format</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Hexadecimal string</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Key Size (bytes)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">24 bytes (192 bits)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Entropy:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">192 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">fa351871de9797f2cb1896be1be1b82a48205116eabc3061</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">508415bfb60b1276a677beb22222d0b8a8e2d666e2deb801</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">f976e638cda7adca86d79319cbfe4f92cdc97abedad9e02f</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">9a6c1c2f1ced545ca632e18e20661cee9c1c66f26193942c</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">79c9c90e1706fc430f94ee62fb6aab9b904bce208040285b</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Usage in Flask</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">config.py</p>
<CodeBlock code={`import os

class Config:
SECRET_KEY = os.environ.get('SECRET_KEY') or 'fa351871de9797f2cb1896be1be1b82a48205116eabc3061'`} filename="" />
<CodeBlock code={`SECRET_KEY=fa351871de9797f2cb1896be1be1b82a48205116eabc3061`} filename="" />
<CodeBlock code={`from flask import Flask
from dotenv import load_dotenv

load_dotenv()
app = Flask(**name**)
app.config.from_object('config.Config')
Security Best Practices

Never commit SECRET_KEY to version control
Use environment variables in production
Use at least 24 bytes (192 bits) for security
Changing the key invalidates all existing sessions
What SECRET_KEY Protects
Session Data
Flask sessions are cryptographically signed using SECRET_KEY to prevent tampering.

CSRF Tokens
Flask-WTF uses SECRET_KEY to generate and validate CSRF protection tokens.

Cookies
Secure cookies are signed to ensure they haven't been modified by clients.

Flask-Login
Remember-me tokens and session authentication rely on SECRET_KEY.

Bulk Generation
Generate

10
keys
Generate
Generate in Terminal
Generate Flask secret keys locally using Python:

Python secrets (recommended)

python3 -c "import secrets; print(secrets.token_hex(24))"

Python os.urandom

python3 -c "import os; print(os.urandom(24).hex())"`} filename="" />
        </div>
      );
    case 27:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">WordPress Security Keys &amp; Salts</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate secure authentication keys and salts for your WordPress wp-config.php file. These enhance the security of cookies and user sessions.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Regenerate All</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Copy All</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">wp-config.php</p>
<CodeBlock code={`define('AUTH*KEY', 'ieJFNv5:x%(<nneUM2vyFm=bq?<3gtjTHN,\\*@K^R519|GZqw# QG4sQ,P%{gWKvP');
define('SECURE_AUTH_KEY', '\\_T!Dw!xYfQVfheYoc Q)m(<PNR8.9#V-^pUs{lE>A@R9ah_yKhf<D0^fd+R]Y}O2');
define('LOGGED_IN_KEY', 'YZ m(uA{m+tQu4(J%1[*@S| )^2Xx0SP}hB8rU(Z#&s2D*CgXil<w(?EaF2@eJzO');
define('NONCE_KEY', '()*vxkxgIYZv;d18Z\`qUmiOEnLd;r\$posHG.p8_aGanQbfF,(eXahig}hl EPJ^#');
define('AUTH_SALT', '.oACql4e4CX@d7UtUG9F_J+pQ&Y93EEk=MGjnb(T&PXr6/6S(aHtwl.ck#_tjG/5');
define('SECURE_AUTH_SALT', 'bt*r2<u6l{I(fn7H/rDDbVprhOmI7HxwC mQArn_]wmQmsEk%oa}!DIM.3cCxK4 ');
define('LOGGED_IN_SALT', 'm>VqZg2W6):,(S?I,E)l{M9Nn@UGK{>:yIyncc8}h|~Z!MOFn:dkiP2\`Vy0?UcQu');
define('NONCE_SALT', 'B#%<)\$3HdnnIVY^bej.jRDn4l7P>Y#Ea4~\\*W0:.,}YjPY}%bHTuoZI?mbBb=nt9b');
What these keys do

AUTH_KEY/SALT: Encrypts admin cookies
SECURE_AUTH_KEY/SALT: Encrypts SSL admin cookies
LOGGED_IN_KEY/SALT: Encrypts non-SSL logged-in cookies
NONCE_KEY/SALT: Protects nonces against CSRF attacks
When to regenerate

Regenerate these keys if you suspect your site has been compromised. This will invalidate all existing logged-in sessions, forcing all users (including yourself) to log in again.

Official WordPress Salt Generator
WordPress also provides an official API for generating salts:

Fetch from WordPress.org API

curl https://api.wordpress.org/secret-key/1.1/salt/

Installation
Copy the generated keys and paste them into your wp-config.php file, replacing any existing salt definitions:`} filename="" />
<CodeBlock code={`
<?php
/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * https://api.wordpress.org/secret-key/1.1/salt/
 */
define('AUTH_KEY', 'ieJFNv5:x%(<nneUM2vyFm=bq?<3gtjTHN,*@K^R519|GZqw# QG4sQ,P%{gWKvP');
define('SECURE_AUTH_KEY', '_T!Dw!xYfQVfheYoc Q)m(<PNR8.9#V-^pUs{lE>A@R9ah_yKhf<D0^fd+R]Y}O2');
define('LOGGED_IN_KEY', 'YZ m(uA{m+tQu4(J%1[_@S| )^2Xx0SP}hB8rU(Z#&s2D*CgXil<w(?EaF2@eJzO');
define('NONCE_KEY', '()*vxkxgIYZv;d18Z\`qUmiOEnLd;r\$posHG.p8_aGanQbfF,(eXahig}hl EPJ^#');
define('AUTH_SALT', '.oACql4e4CX@d7UtUG9F_J+pQ&Y93EEk=MGjnb(T&PXr6/6S(aHtwl.ck#_tjG/5');
define('SECURE_AUTH_SALT', 'bt*r2<u6l{I(fn7H/rDDbVprhOmI7HxwC mQArn_]wmQmsEk%oa}!DIM.3cCxK4 ');
define('LOGGED_IN_SALT', 'm>VqZg2W6):,(S?I,E)l{M9Nn@UGK{>:yIyncc8}h|~Z!MOFn:dkiP2\`Vy0?UcQu');
define('NONCE_SALT', 'B#%<)\$3HdnnIVY^bej.jRDn4l7P>Y#Ea4~*W0:.,}YjPY}%bHTuoZI?mbBb=nt9b');

/* That's all, stop editing! */`} filename="" />
        </div>
      );
    case 28:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">Encryption Key Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate cryptographically secure keys for AES encryption. Includes initialization vectors (IVs) for CBC and GCM modes.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Key Size</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">256-bit (32 bytes)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Format</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Hexadecimal</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Include IV</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Security:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">256 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">(32 bytes) — AES-256 (strongest, recommended)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">AES-256 Key</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">256 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">9e04053a55a05ce79b70e6e8c1e866b992eaf93fe35c761b0c16b954435f7824</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Initialization Vector (IV)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">128 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">128-bit (16 bytes)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">c53c26db0707f96dc8ce0a78060d4584</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">AES-256 Key</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">256 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">d0ae66997351dffc4c1758de15d9f25c7f20e81e150b0e80dc1311e0b2555731</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Initialization Vector (IV)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">128 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">128-bit (16 bytes)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">faa906e11c27e9c3c262e60f61363242</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">AES-256 Key</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">256 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">ac61bcd9120cad9b849de3b9a1ba712d047870687e979fb90d54ba7beddeb562</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Initialization Vector (IV)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">128 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">128-bit (16 bytes)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">3155cc55b13369ff5ca2fc1121febcb9</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">AES-256 Key</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">256 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">0842ef12f442ec1aae1ab52f77d9b72fc7b1a43d1b9c8595f48580ab1d3d679a</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Initialization Vector (IV)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">128 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">128-bit (16 bytes)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">96709dacad140bc3034e8601e2d3f328</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Usage Example</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Node.js (crypto)</p>
<CodeBlock code={`const crypto = require('crypto');

const key = Buffer.from('9e04053a55a05ce79b70e6e8c1e866b992eaf93fe35c761b0c16b954435f7824', 'hex');
const iv = Buffer.from('c53c26db0707f96dc8ce0a78060d4584', 'hex');

// Encrypt
const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
let encrypted = cipher.update('Hello, World!', 'utf8', 'hex');
encrypted += cipher.final('hex');
const authTag = cipher.getAuthTag();

// Decrypt
const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
decipher.setAuthTag(authTag);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
Understanding AES Encryption
AES Key Sizes Explained
AES-128
Key: 128 bits (16 bytes)
Rounds: 10
Security: ~2^126 operations to break
Use case: Fast, sufficient for most applications
AES-192
Key: 192 bits (24 bytes)
Rounds: 12
Security: ~2^190 operations to break
Use case: Intermediate security/performance
AES-256
Key: 256 bits (32 bytes)
Rounds: 14
Security: ~2^254 operations to break
Use case: Maximum security, government/financial
256-bit hex keys provide maximum security with 2^256 possible combinations. Even with quantum computers, AES-256 remains secure when properly implemented.

AES Encryption Modes
GCM (Galois/Counter Mode)
✓ Authenticated encryption (integrity + confidentiality)
✓ Parallel processing possible
✓ No padding required
✓ Industry standard for modern applications
IV size: 96 bits (12 bytes) recommended

CBC (Cipher Block Chaining)
✓ Widely supported and understood
⚠ Requires separate MAC for authentication
⚠ Sequential processing only
⚠ Padding oracle vulnerabilities possible
IV size: 128 bits (16 bytes) required

Format Comparison: Hex vs Base64
Format	Character Set	Size Efficiency	Best For
Hexadecimal	0-9, A-F (16 chars)	2:1 expansion	URLs, databases, human-readable
Base64	A-Z, a-z, 0-9, +, / (64 chars)	4:3 expansion	JSON, XML, compact transmission
Cryptographic Strength Analysis
Time to break AES with current technology:

AES-128: ~2.9 × 10^32 years (longer than universe age)
AES-256: ~3.3 × 10^56 years (incomprehensibly long)
Quantum resistance: AES-256 provides ~128-bit post-quantum security
Real-world Applications
File Encryption
• Disk encryption (BitLocker, FileVault)
• Encrypted backups
• Document protection
• Archive encryption
Network Security
• TLS/SSL connections
• VPN tunnels
• Database encryption
• Message encryption
For demonstration only

For production encryption, generate keys on your local machine or server using the terminal commands below. Never transmit encryption keys over the network.

IV and key management best practices

Key storage: Use hardware security modules (HSMs) or key management services
Key rotation: Rotate encryption keys regularly (every 90 days minimum)
IV uniqueness: Never reuse an IV with the same key - this breaks semantic security
IV generation: Use cryptographically secure random number generators
Key derivation: Use PBKDF2, scrypt, or Argon2 when deriving keys from passwords
Bulk Generation
Generate

10
keys
Generate
Generate in Terminal
For production systems, always generate encryption keys locally:

AES-256 key (hex)

openssl rand -hex 32

AES-256 key (base64)

openssl rand -base64 32

Initialization vector (IV)

openssl rand -hex 16

Python secrets module

python3 -c "import secrets; print(secrets.token_hex(32))"

Linux /dev/urandom

head -c 32 /dev/urandom | xxd -p -c 64

Related Tools
AES Key Generator
128/192/256 bit keys
RSA Key Generator
Asymmetric key pairs
HMAC Generator
Message authentication
Hash Generator
SHA256, SHA512, MD5
Encryption Keys
Hex keys for encryption
Security Tips
*
Use AES-256 for symmetric encryption
*
Never store encryption keys in code
*
Rotate keys periodically
*
Use environment variables for secrets
Learn More
Encryption Explained: AES vs RSA`} filename="" />
        </div>
      );
    case 29:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">AES Encryption Keys</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate keys for AES (Advanced Encryption Standard) symmetric encryption. Includes initialization vectors for CBC and GCM modes.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Key Size</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">AES-256 (32 bytes)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">AES-256 Key</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">256 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">hex</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">15c2ccf5ecabb6e90811d2cf496e781caf6cca9c2c343caa042d1863ea990c3a</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">IV (Initialization Vector)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">128 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">hex, 16 bytes</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">0620eff0529ba35f97523b5414e5c26f</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">AES-256 Key</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">256 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">hex</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">f619798abc6dc67393ba7da91fd5926a4bc2cefc93b6926ed3c82abfde7c48ab</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">IV (Initialization Vector)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">128 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">hex, 16 bytes</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">2c6237b5cf40ab3b33d6c6772274fd09</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">AES-256 Key</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">256 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">hex</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">4e704cf290e005bd6ce6832b9dc13a383bfe9c6686524bdd0aa81a964f10d27e</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">IV (Initialization Vector)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">128 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">hex, 16 bytes</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">7b6bc0c1ce961965c7dbfb5cb86e45d0</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">AES-256 Key</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">256 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">hex</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">1ff1f35b9d3ccfddcf7c079c2389a21643f10b3ea3c0ad7b5a9328746198d05f</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">IV (Initialization Vector)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">128 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">hex, 16 bytes</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">aea568a4a34f3aca9009cfed4192f89d</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Usage Example</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Python (cryptography)</p>
<CodeBlock code={`from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
import os

key = bytes.fromhex('15c2ccf5ecabb6e90811d2cf496e781caf6cca9c2c343caa042d1863ea990c3a')
iv = bytes.fromhex('0620eff0529ba35f97523b5414e5c26f')

# Encrypt
cipher = Cipher(algorithms.AES(key), modes.GCM(iv))
encryptor = cipher.encryptor()
ciphertext = encryptor.update(b"Secret message") + encryptor.finalize()
tag = encryptor.tag

# Decrypt
cipher = Cipher(algorithms.AES(key), modes.GCM(iv, tag))
decryptor = cipher.decryptor()
plaintext = decryptor.update(ciphertext) + decryptor.finalize()
For demonstration only

For production encryption, generate keys locally using the terminal commands below. Never transmit encryption keys over the network.

Bulk Generation
Generate

10
keys
Generate
Generate in Terminal
AES-256 key

openssl rand -hex 32

IV (16 bytes)

openssl rand -hex 16

Python

python3 -c "import secrets; print(secrets.token_hex(32))"`} filename="" />
        </div>
      );
    case 30:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">RSA Key Pair Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate RSA public and private key pairs for asymmetric encryption, digital signatures, and secure key exchange.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Key Size</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">2048 bits (standard)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate Key Pair</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Algorithm:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">RSA-OAEP with SHA-256</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Key Size:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">2048 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Click &quot;Generate Key Pair&quot; to create a new RSA key pair.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Security Notice</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">While these keys are generated securely in your browser, for production use you should generate keys locally using OpenSSL or your operating system&apos;s tools. Never share your private key or transmit it over the network.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Common Use Cases</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Encryption</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Encrypt sensitive data with the public key. Only the private key holder can decrypt it.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Digital Signatures</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Sign documents or code with your private key. Anyone can verify with your public key.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">JWT Signing (RS256)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Sign JWTs with RSA for scenarios where multiple parties need to verify tokens.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Key Exchange</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Securely exchange symmetric keys by encrypting them with the recipient&apos;s public key.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Key Size Recommendations</p>
<div className="overflow-x-auto my-4 border border-(--border) rounded-xl bg-(--card-bg)"><table className="w-full text-[11px] text-left border-collapse"><thead><tr className="border-b border-(--border) bg-(--code-bg) text-(--muted) font-semibold"><th className="px-4 py-2 font-semibold">Key Size</th><th className="px-4 py-2 font-semibold">Security Level</th><th className="px-4 py-2 font-semibold">Recommended For</th></tr></thead><tbody><tr className="border-b border-(--border) hover:bg-(--code-bg)/50"><td className="px-4 py-2 text-(--foreground)">2048 bits</td><td className="px-4 py-2 text-(--foreground)">~112 bits</td><td className="px-4 py-2 text-(--foreground)">General use, adequate until ~2030</td></tr><tr className=" hover:bg-(--code-bg)/50"><td className="px-4 py-2 text-(--foreground)">4096 bits</td><td className="px-4 py-2 text-(--foreground)">~140 bits</td><td className="px-4 py-2 text-(--foreground)">High security, long-term protection</td></tr></tbody></table></div>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate Locally (Recommended)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">For production use, generate RSA keys locally:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate private key (OpenSSL)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">openssl genrsa -out private.pem 2048</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Extract public key</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">openssl rsa -in private.pem -pubout -out public.pem</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate with passphrase (more secure)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">openssl genrsa -aes256 -out private.pem 4096</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate SSH key pair</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa</p>
        </div>
      );
    case 31:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">HMAC Secret Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate secure secrets for HMAC (Hash-based Message Authentication Code). Used to verify data integrity and authenticity.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Hash Algorithm</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">HMAC-SHA256</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Format</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Base64</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Key size:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">256 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">(32 bytes)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">256 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">qpZgzG6l3yp5phfEYBTUxZLwQm5piOAX9TB22ES+2ZQ=</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">256 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">3PIWlbJaFQcEC74LaSangz097+BJZ6w9f1Z22tICqC4=</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">256 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">lqIBktXEsg4J7jSD04TkdUrc/W+YJFXMXu0VpwDxlbs=</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">256 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">gtZ7AA3yh19CHGj1oU8NgyVW42RSNni9awi2J8Ohq8g=</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Usage Examples</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Node.js</p>
<CodeBlock code={`const crypto = require('crypto');

const secret = 'qpZgzG6l3yp5phfEYBTUxZLwQm5piOAX9TB22ES+2ZQ=';
const message = 'Data to authenticate';

const hmac = crypto.createHmac('sha256', Buffer.from(secret, 'base64'));
hmac.update(message);
const signature = hmac.digest('hex');

console.log(signature);`} filename="" />
<CodeBlock code={`import hmac
import hashlib
import base64

secret = base64.b64decode('qpZgzG6l3yp5phfEYBTUxZLwQm5piOAX9TB22ES+2ZQ=')
message = b'Data to authenticate'

signature = hmac.new(secret, message, hashlib.sha256).hexdigest()
print(signature)
When to use HMAC

Verifying API request signatures (e.g., webhooks)
Creating secure session tokens
Authenticating messages between services
Implementing signed URLs
Bulk Generation
Generate

10
secrets
Generate
Generate in Terminal
OpenSSL (base64)

openssl rand -base64 32

OpenSSL (hex)

openssl rand -hex 32

Python

python3 -c "import secrets; print(secrets.token_urlsafe(32))"`} filename="" />
        </div>
      );
    case 32:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">Hash Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate cryptographic hashes using MD5, SHA-1, SHA-256, and SHA-512 algorithms. Useful for checksums, data integrity, and understanding password hashing.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Enter Text to Hash</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Type or paste text here...</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">MD5</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Enter text above to generate hash</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">128-bit (32 hex chars) - Not recommended for security</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">SHA-1</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Enter text above to generate hash</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">160-bit (40 hex chars) - Deprecated for security</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">SHA-256</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Enter text above to generate hash</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">256-bit (64 hex chars) - Recommended</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">SHA-512</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Enter text above to generate hash</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">512-bit (128 hex chars) - High security</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Password Hashing with bcrypt</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">For password storage, use bcrypt, Argon2, or scrypt - NOT MD5/SHA. These algorithms are intentionally slow and include salting.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Node.js</p>
<CodeBlock code={`const bcrypt = require('bcrypt');

// Hash a password
const hash = await bcrypt.hash('password', 10);
// \$2b\$10\$N9qo8uLOickgx2ZMRZoMye...

// Verify a password
const isValid = await bcrypt.compare('password', hash);
Important: Hash vs Encryption

Hashing is one-way - you cannot recover the original text from a hash
MD5 and SHA-1 are broken - don't use for security purposes
Never store plain SHA hashes of passwords - use bcrypt/Argon2 instead
Hashes are deterministic - same input always produces same output
Common Use Cases
File Checksums
Verify file integrity after downloads. SHA-256 is the standard for software verification.

Data Deduplication
Identify duplicate content by comparing hashes instead of full content.

Digital Signatures
Sign a hash of a document instead of the entire document for efficiency.

Caching Keys
Generate unique cache keys from request parameters or content.`} filename="" />
<CodeBlock code={`# MD5
echo -n "text" | md5sum
# or on macOS:
echo -n "text" | md5

# SHA-256
echo -n "text" | sha256sum

# SHA-512
echo -n "text" | sha512sum

# File hash`} filename="" />
<CodeBlock code={`import hashlib

text = "text"
print(hashlib.sha256(text.encode()).hexdigest())`} filename="" />
        </div>
      );
    case 33:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">Salt Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate cryptographically random salt values for password hashing and other cryptographic operations. Salts ensure identical inputs produce different outputs.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Length (bytes)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">16 bytes (128 bits)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Format</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Hexadecimal</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Entropy:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">128 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">128 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">211e48352bd949d7a02b5003d5d603a9</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">128 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">33490fb77e0875b76e6f56f07959db5d</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">128 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">1cb80b1f7cb5a1dc2b0956452a6e90e8</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">128 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">e925dd4cbe560ae3849c0e7a3491cbd5</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">128 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">da6eadd4a2b0e6677b044ad714b97ee5</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">128 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">01bda3919b1b6ce9f036104bb5f08bd9</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Usage Examples</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Python (bcrypt)</p>
<CodeBlock code={`import bcrypt

password = b"user_password"

# bcrypt generates its own salt internally
hashed = bcrypt.hashpw(password, bcrypt.gensalt(rounds=12))

# Verify
if bcrypt.checkpw(password, hashed):
    print("Password matches!")
Node.js (argon2)`} filename="" />
<CodeBlock code={`const argon2 = require('argon2');

// argon2 generates salt internally
const hash = await argon2.hash('user_password');

// Verify
if (await argon2.verify(hash, 'user_password')) {
    console.log('Password matches!');
}`} filename="" />
<CodeBlock code={`const crypto = require('crypto');

const salt = '211e48352bd949d7a02b5003d5d603a9';
const password = 'user_password';

// PBKDF2 with custom salt
const hash = crypto.pbkdf2Sync(
  password, 
  Buffer.from(salt, 'hex'),
  100000,  // iterations
  64,      // key length
  'sha512'
).toString('hex');
Why use salts?

Prevents rainbow table attacks
Ensures identical passwords hash to different values
Makes precomputation attacks infeasible
Salts should be unique per password, not secret
Use proper password hashing

For password storage, use algorithms like bcrypt, argon2, or scrypt which handle salt generation internally. Only use manual salting for other cryptographic operations.

Bulk Generation
Generate

10
salts
Generate
Generate in Terminal
16-byte salt (hex)

openssl rand -hex 16

Python

python3 -c "import secrets; print(secrets.token_hex(16))"

Linux /dev/urandom

head -c 16 /dev/urandom | xxd -p -c 64`} filename="" />
        </div>
      );
    case 34:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">SSH Key Generation</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Demo Only</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">SSH keys should always be generated locally on your machine. This page provides guidance and terminal commands for secure key generation.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">📖 Complete SSH Setup Guide →</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Never generate SSH keys online</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">SSH private keys must be generated on your local machine and never transmitted over the internet. A compromised private key gives attackers full access to any system where you&apos;ve added the public key.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Use the terminal commands below to generate keys securely on your own system.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Ed25519 (Recommended)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Ed25519 is a modern, secure algorithm. It&apos;s faster and has smaller keys than RSA while providing equivalent security.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate Ed25519 key pair</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">ssh-keygen -t ed25519 -C &quot;your_email@example.com&quot;</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">With custom filename</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">ssh-keygen -t ed25519 -C &quot;your_email@example.com&quot; -f ~/.ssh/id_ed25519_github</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Without passphrase (not recommended)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">ssh-keygen -t ed25519 -C &quot;your_email@example.com&quot; -N &quot;&quot;</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">RSA (Legacy Compatibility)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Use RSA if you need compatibility with older systems. Always use at least 4096 bits.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate RSA 4096-bit key pair</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">ssh-keygen -t rsa -b 4096 -C &quot;your_email@example.com&quot;</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">With stronger key derivation</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">ssh-keygen -t rsa -b 4096 -o -a 100 -C &quot;your_email@example.com&quot;</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">View &amp; Copy Public Key</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">View Ed25519 public key</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">cat ~/.ssh/id_ed25519.pub</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">View RSA public key</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">cat ~/.ssh/id_rsa.pub</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Copy to clipboard (macOS)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">pbcopy &lt; ~/.ssh/id_ed25519.pub</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Copy to clipboard (Linux)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">xclip -sel clip &lt; ~/.ssh/id_ed25519.pub</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Example Output</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Your public key will look similar to this (this is an example, not a real key):</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">~/.ssh/id_ed25519.pub (example)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOMqqnkVzrm0SdG6UOoqKLsabgH5C9okWi0dh2l9GKJl user@example.com</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Add to SSH Agent</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Start SSH agent</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">eval $(ssh-agent -s)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Add key to agent</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">ssh-add ~/.ssh/id_ed25519</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Add to macOS Keychain</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">ssh-add --apple-use-keychain ~/.ssh/id_ed25519</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">SSH key best practices</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Always use a strong passphrase to protect your private key</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Use Ed25519 for new keys unless legacy compatibility is required</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Keep your private key permissions at 600 (chmod 600 ~/.ssh/id_ed25519)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Use different keys for different services when possible</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Rotate keys periodically and remove unused public keys from servers</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Never share your private key or store it in version control</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">SSH Config Example</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">~/.ssh/config</p>
<CodeBlock code={`# GitHub
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_github
  AddKeysToAgent yes

# Work server
Host work
  HostName server.company.com
  User deploy
  IdentityFile ~/.ssh/id_ed25519_work`} filename="" />
        </div>
      );
    case 35:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">PGP Key Pair Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate secure PGP (Pretty Good Privacy) key pairs for email encryption, digital signatures, and secure communication. Compatible with GPG and OpenPGP standards.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">User Identity</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Full Name </p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">John Doe</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Email Address </p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">john@example.com</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Comment (Optional)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Work key</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Key Configuration</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Algorithm</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">RSA</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Key Size</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">2048 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Expiration</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Never expires</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate PGP Key Pair</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">How to Use Your PGP Keys</p>
<ul className="list-disc pl-5 space-y-1.5 text-xs text-(--muted) mb-4">
  <li>Import Keys into GPG</li>
</ul>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Save your keys to files and import them into your GPG keyring:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">gpg --import public-key.asc</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">gpg --import private-key.asc</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">gpg --list-secret-keys --keyid-format LONG</p>
<ul className="list-disc pl-5 space-y-1.5 text-xs text-(--muted) mb-4">
  <li>Encrypt a Message</li>
</ul>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Encrypt a message for someone using their public key:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">echo &apos;Secret message&apos; | gpg --encrypt --armor --recipient recipient@example.com</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">gpg --encrypt --armor --recipient recipient@example.com message.txt</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">The encrypted output can be safely sent via email or any insecure channel.</p>
<ul className="list-disc pl-5 space-y-1.5 text-xs text-(--muted) mb-4">
  <li>Decrypt a Message</li>
</ul>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Decrypt messages sent to you:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">gpg --decrypt encrypted-message.asc</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">echo &apos;-----BEGIN PGP MESSAGE-----...&apos; | gpg --decrypt</p>
<ul className="list-disc pl-5 space-y-1.5 text-xs text-(--muted) mb-4">
  <li>Sign a Message</li>
</ul>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Create a digital signature to verify message authenticity:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">gpg --clearsign message.txt</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">echo &apos;Important message&apos; | gpg --clearsign</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">gpg --detach-sign --armor document.pdf</p>
<ul className="list-disc pl-5 space-y-1.5 text-xs text-(--muted) mb-4">
  <li>Verify Signatures</li>
</ul>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Verify the authenticity of signed messages:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">gpg --verify signed-message.asc</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">gpg --verify document.pdf.asc document.pdf</p>
<ul className="list-disc pl-5 space-y-1.5 text-xs text-(--muted) mb-4">
  <li>Export and Share Keys</li>
</ul>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Share your public key with others:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">gpg --export --armor your-email@example.com &gt; public-key.asc</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">gpg --send-keys --keyserver keyserver.ubuntu.com YOUR_KEY_ID</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">gpg --search-keys someone@example.com</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Email Client Integration Examples</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Thunderbird Setup</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Install Thunderbird and set up your email account</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Go to Tools → Account Settings → End-to-End Encryption</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Click &quot;Add Key&quot; → &quot;Import a personal key from file&quot;</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Select your private key file and enter passphrase</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Enable &quot;Digital signing&quot; and &quot;Require encryption&quot; as needed</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Mailvelope (Web)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Install Mailvelope browser extension</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Open Mailvelope Options → Key Management</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Click &quot;Import Keys&quot; and paste your private key</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Add your email accounts to Mailvelope</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Compose encrypted emails directly in your webmail</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Apple Mail (macOS)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Import your key into GPG Suite for macOS</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Open Apple Mail preferences</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Go to Accounts → Select account → Advanced</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Enable &quot;Encrypt outgoing mail&quot; and &quot;Sign outgoing mail&quot;</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Mail will automatically use your PGP key</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Outlook with Gpg4win</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Install Gpg4win (includes Kleopatra key manager)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Import your key using Kleopatra</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Install GpgOL plugin for Outlook integration</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Restart Outlook and look for encryption options</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Use encrypt/sign buttons when composing emails</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Real-World Use Cases &amp; Examples</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">🏢 Business Communication</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Secure client communications and confidential documents:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">gpg --encrypt --armor --recipient client@company.com contract-v2.pdf</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">gpg --clearsign --local-user pr@yourcompany.com press-release.txt</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">💻 Software Development</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Sign git commits and release packages:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">git config --global user.signingkey YOUR_KEY_ID</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">git config --global commit.gpgsign true</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">gpg --detach-sign --armor myapp-v1.2.3.tar.gz</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">🏥 Healthcare &amp; Legal</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">HIPAA-compliant communication and legal document verification:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">gpg --cipher-algo AES256 --encrypt --recipient doctor@hospital.com patient-file.pdf</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">gpg --clearsign --local-user lawyer@firm.com legal-brief.txt</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">🔒 Personal Privacy</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Secure personal communications and file backup:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">tar czf - important-docs/ | gpg --symmetric --cipher-algo AES256 &gt; backup.tar.gz.gpg</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">echo &quot;Family news...&quot; | gpg --encrypt --armor --recipient family@example.com</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">About PGP Encryption</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Pretty Good Privacy (PGP) is a data encryption and decryption program that provides cryptographic privacy and authentication for data communication. PGP uses a combination of symmetric-key cryptography and public-key cryptography.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Key Features</p>
<ul className="list-disc pl-5 space-y-1.5 text-xs text-(--muted) mb-4">
  <li>End-to-end encryption for emails</li>
  <li>Digital signatures for authenticity</li>
  <li>Key distribution and management</li>
  <li>Cross-platform compatibility</li>
  <li>Open source implementations (GPG)</li>
</ul>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Use Cases</p>
<ul className="list-disc pl-5 space-y-1.5 text-xs text-(--muted) mb-4">
  <li>Secure email communication</li>
  <li>File encryption and signing</li>
  <li>Software distribution verification</li>
  <li>Secure messaging applications</li>
  <li>Document authentication</li>
</ul>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Algorithm Comparison</p>
<div className="overflow-x-auto my-4 border border-(--border) rounded-xl bg-(--card-bg)"><table className="w-full text-[11px] text-left border-collapse"><thead><tr className="border-b border-(--border) bg-(--code-bg) text-(--muted) font-semibold"><th className="px-4 py-2 font-semibold">Algorithm</th><th className="px-4 py-2 font-semibold">Key Size</th><th className="px-4 py-2 font-semibold">Performance</th><th className="px-4 py-2 font-semibold">Security Level</th><th className="px-4 py-2 font-semibold">Recommended For</th></tr></thead><tbody><tr className="border-b border-(--border) hover:bg-(--code-bg)/50"><td className="px-4 py-2 text-(--foreground)">RSA 2048</td><td className="px-4 py-2 text-(--foreground)">2048 bits</td><td className="px-4 py-2 text-(--foreground)">Fast</td><td className="px-4 py-2 text-(--foreground)">Good</td><td className="px-4 py-2 text-(--foreground)">General use, compatibility</td></tr><tr className="border-b border-(--border) hover:bg-(--code-bg)/50"><td className="px-4 py-2 text-(--foreground)">RSA 4096</td><td className="px-4 py-2 text-(--foreground)">4096 bits</td><td className="px-4 py-2 text-(--foreground)">Slower</td><td className="px-4 py-2 text-(--foreground)">Excellent</td><td className="px-4 py-2 text-(--foreground)">Long-term security</td></tr><tr className="border-b border-(--border) hover:bg-(--code-bg)/50"><td className="px-4 py-2 text-(--foreground)">ECC P-256</td><td className="px-4 py-2 text-(--foreground)">256 bits</td><td className="px-4 py-2 text-(--foreground)">Very Fast</td><td className="px-4 py-2 text-(--foreground)">Good</td><td className="px-4 py-2 text-(--foreground)">Mobile, IoT devices</td></tr><tr className=" hover:bg-(--code-bg)/50"><td className="px-4 py-2 text-(--foreground)">ECC P-384</td><td className="px-4 py-2 text-(--foreground)">384 bits</td><td className="px-4 py-2 text-(--foreground)">Fast</td><td className="px-4 py-2 text-(--foreground)">Excellent</td><td className="px-4 py-2 text-(--foreground)">High security applications</td></tr></tbody></table></div>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Frequently Asked Questions</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">What is the difference between RSA and ECC keys?</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">RSA keys are widely supported and use larger key sizes (2048-4096 bits). ECC keys are newer, more efficient, and provide equivalent security with smaller key sizes (256-384 bits). Choose RSA for maximum compatibility, ECC for better performance.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">How do I use the generated PGP key?</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Import your keys into GPG using gpg --import. For email, configure your email client (Thunderbird, Apple Mail) or use browser extensions like Mailvelope for webmail. Always keep your private key secure and never share it.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Should my PGP key expire?</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Yes, setting an expiration date is recommended for security. You can always extend the expiration later if needed. If you lose access to your key, expiration prevents it from being used indefinitely. Choose 1-2 years for personal use, shorter for high-security contexts.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Is it safe to generate keys in a browser?</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Our generator runs entirely in your browser using secure Web Crypto APIs, and keys never leave your device. However, for highest security, use offline tools like GPG on an air-gapped computer, especially for keys protecting sensitive data.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">What should I do with the revocation certificate?</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Store your revocation certificate in a safe place separate from your private key. If your private key is ever compromised or lost, you can use the revocation certificate to notify others that the key should no longer be trusted.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Can I use PGP for file encryption, not just email?</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Absolutely! PGP can encrypt any type of file or data. Use gpg --encryptto encrypt files, documents, backups, or any sensitive data. Many backup tools and applications also support PGP encryption natively.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Security Notice</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Your private key is generated entirely in your browser and never sent over the network. However, for maximum security when generating keys for real use, use offline tools like GPG on an air-gapped computer. Store your private key and revocation certificate securely - losing them means losing access to encrypted data.</p>
        </div>
      );
    case 36:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">WireGuard Key Generation</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Demo Only</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">WireGuard VPN keys should be generated locally using the wg command. This page provides guidance for secure key generation and configuration.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Never generate VPN keys online</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">WireGuard private keys control access to your VPN network. Always generate them locally on the machine where they will be used. A compromised private key allows attackers to intercept all your VPN traffic.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Install WireGuard</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">macOS (Homebrew)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">brew install wireguard-tools</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Debian/Ubuntu</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">sudo apt install wireguard</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Fedora</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">sudo dnf install wireguard-tools</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate Key Pair</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate private and public key files</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">wg genkey | tee privatekey | wg pubkey &gt; publickey</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate private key only (outputs to stdout)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">wg genkey</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Derive public key from private key</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">echo &apos;PRIVATE_KEY&apos; | wg pubkey</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Preshared Key (Optional)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">For additional security, you can add a preshared key between peers:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate preshared key</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">wg genpsk</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Save to file</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">wg genpsk &gt; preshared.key</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Example Configuration</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">/etc/wireguard/wg0.conf (Server)</p>
<CodeBlock code={`[Interface]
# Server's private key
PrivateKey = SERVER_PRIVATE_KEY_HERE
Address = 10.0.0.1/24
ListenPort = 51820
PostUp = iptables -A FORWARD -i wg0 -j ACCEPT
PostDown = iptables -D FORWARD -i wg0 -j ACCEPT

[Peer]
# Client's public key
PublicKey = CLIENT_PUBLIC_KEY_HERE
AllowedIPs = 10.0.0.2/32
/etc/wireguard/wg0.conf (Client)`} filename="" />
<CodeBlock code={`[Interface]
# Client's private key
PrivateKey = CLIENT_PRIVATE_KEY_HERE
Address = 10.0.0.2/24
DNS = 1.1.1.1

[Peer]
# Server's public key
PublicKey = SERVER_PUBLIC_KEY_HERE
Endpoint = vpn.example.com:51820
AllowedIPs = 0.0.0.0/0
PersistentKeepalive = 25
Management Commands
Start WireGuard interface

sudo wg-quick up wg0

Stop WireGuard interface

sudo wg-quick down wg0

Show WireGuard status

sudo wg show

Enable on boot (systemd)

sudo systemctl enable wg-quick@wg0

WireGuard best practices

Generate unique key pairs for each device
Never share private keys between devices
Set restrictive permissions on config files (chmod 600)`} filename="" />
        </div>
      );
    case 37:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">VAPID Key Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate VAPID (Voluntary Application Server Identification) key pairs for Web Push notifications. Required for sending push notifications through browsers.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Algorithm:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">ECDSA P-256</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Format:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">URL-safe Base64</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate VAPID Keys</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Click &quot;Generate VAPID Keys&quot; to create a new key pair.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Important</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate keys once and reuse them for your application</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">If you change keys, all existing subscriptions become invalid</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Store the private key securely as an environment variable</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">The public key is safe to expose in client-side code</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">What is VAPID?</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">VAPID (Voluntary Application Server Identification) is a specification that allows your application server to identify itself to push services (like Firebase Cloud Messaging, Mozilla Push Service, etc.) when sending push notifications.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Why VAPID?</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">No need to register with each push service</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Works with all major browsers</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Provides sender identification</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Enables rate limiting and abuse prevention</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Browser Support</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Chrome / Edge (Chromium)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Firefox</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Safari (macOS/iOS 16+)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Opera</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate Locally</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate VAPID keys using popular libraries:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Node.js web-push (recommended)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">npx web-push generate-vapid-keys</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Python py-vapid</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">pip install py-vapid &amp;&amp; vapid --gen</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">OpenSSL (generates PEM format)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">openssl ecparam -name prime256v1 -genkey -noout -out vapid_private.pem</p>
        </div>
      );
    case 38:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">Secret Key Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate cryptographically secure secrets for session management, API authentication, and other security-sensitive applications.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Length (bytes)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">32 bytes (256 bits)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Format</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Base64</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Entropy:</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">256 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">256 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">ha+t9RcI8ZP1QNjw4QfAsnHxcwjun/a2QQMaQA2RuHA=</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">256 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">9uWpPYSQCxZmEmt+N/xY9nf0Vh4zdfgAB9dREmw5KYY=</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">256 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Oxj8rO+OejTiDZ4I3eoVZAwmtULtetJRUL34MgWkXtg=</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">256 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">cdmjd65KtAcdwR0Nx04nRBiYo48T01Lw7TB+s2t3Tls=</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">256 bits</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">7DA9JLmydX4WuOpu6LIfWdpqFodop3JEBS8n+hkbH5E=</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Common Uses</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">.env</p>
<CodeBlock code={`# Session secret
SESSION_SECRET=ha+t9RcI8ZP1QNjw4QfAsnHxcwjun/a2QQMaQA2RuHA=

# Cookie signing secret
COOKIE_SECRET=9uWpPYSQCxZmEmt+N/xY9nf0Vh4zdfgAB9dREmw5KYY=

# CSRF token secret
CSRF_SECRET=Oxj8rO+OejTiDZ4I3eoVZAwmtULtetJRUL34MgWkXtg=`} filename="" />
<CodeBlock code={`const session = require('express-session');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: true,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));
Choosing secret length

128 bits (16 bytes): Minimum for most applications
256 bits (32 bytes): Recommended for session secrets
512 bits (64 bytes): Maximum security for sensitive operations
Bulk Generation
Generate

10
secrets
Generate
Generate in Terminal
Base64

openssl rand -base64 32

Hexadecimal

openssl rand -hex 32

URL-safe (Python)

python3 -c "import secrets; print(secrets.token_urlsafe(32))"

Node.js

node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"`} filename="" />
        </div>
      );
    case 39:
      return (
        <div className="mt-12 pt-8 border-t border-(--border) space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-xs text-(--muted) leading-relaxed mb-3">Username Generator</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate unique, random usernames for gaming, social media, email accounts, and online services. Multiple styles to match your needs.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Style</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Gaming (SwiftWolf, DarkPhoenix)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Include numbers</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">OmegaScout123</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">ThunderDragon155</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">FastDragon503</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">QuantumVolt791</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">ZeroApex775</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">HiddenSage687</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">FastEcho351</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">HiddenEagle939</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">FrozenCipher706</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">CalmViper729</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Username Styles Explained</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Gaming</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Bold, memorable names perfect for games and streaming.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">ShadowNinja, CosmicDragon42, NeonPhantom</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Professional</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Clean, work-appropriate usernames for business accounts.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">dev_phoenix, tech_sage, data_ops</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Memorable</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Easy to remember and type, with word-based patterns.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">swift-hawk-77, cosmic-blade-33</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Anonymous</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Random strings for privacy-focused accounts.</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">anon_8k3m7x9p, user_q2w4e6r8</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Username Tips</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Check availability on your target platform before committing</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Avoid using personal information (real name, birthdate)</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Keep it easy to spell if others need to find you</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Consider using different usernames for different purposes</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Add numbers if your preferred username is taken</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Bulk Generation</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">10</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">usernames</p>
<p className="text-xs text-(--muted) leading-relaxed mb-3">Generate</p>
        </div>
      );
    default:
      return null;
  }
}
