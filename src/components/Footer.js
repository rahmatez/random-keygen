import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-(--border) py-12 mt-16 bg-(--card-bg)">
      <div className="page-container">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-10">
          {/* Column 1 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-(--muted) mb-3">Passwords</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/password" className="text-(--muted) hover:text-(--foreground) transition-colors">Password Generator</Link></li>
              <li><Link href="/passphrase" className="text-(--muted) hover:text-(--foreground) transition-colors">Passphrase</Link></li>
              <li><Link href="/pronounceable-password" className="text-(--muted) hover:text-(--foreground) transition-colors">Pronounceable</Link></li>
              <li><Link href="/master-password" className="text-(--muted) hover:text-(--foreground) transition-colors">Master Password</Link></li>
              <li><Link href="/bulk-password-generator" className="text-(--muted) hover:text-(--foreground) transition-colors">Bulk Generator</Link></li>
              <li><Link href="/password-strength" className="text-(--muted) hover:text-(--foreground) transition-colors">Strength Checker</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-(--muted) mb-3">Password Options</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/password/8-character" className="text-(--muted) hover:text-(--foreground) transition-colors">8 Character</Link></li>
              <li><Link href="/password/16-character" className="text-(--muted) hover:text-(--foreground) transition-colors">16 Character</Link></li>
              <li><Link href="/password-generator/no-special-characters" className="text-(--muted) hover:text-(--foreground) transition-colors">No Symbols</Link></li>
              <li><Link href="/password-generator/letters-only" className="text-(--muted) hover:text-(--foreground) transition-colors">Letters Only</Link></li>
              <li><Link href="/pin-generator" className="text-(--muted) hover:text-(--foreground) transition-colors">PIN Codes</Link></li>
              <li><Link href="/wifi-password" className="text-(--muted) hover:text-(--foreground) transition-colors">WiFi Password</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-(--muted) mb-3">Recovery</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/backup-codes" className="text-(--muted) hover:text-(--foreground) transition-colors">Backup Codes</Link></li>
              <li><Link href="/recovery-key" className="text-(--muted) hover:text-(--foreground) transition-colors">Recovery Key</Link></li>
              <li><Link href="/temporary-password" className="text-(--muted) hover:text-(--foreground) transition-colors">Temporary</Link></li>
              <li><Link href="/gaming-password" className="text-(--muted) hover:text-(--foreground) transition-colors">Gaming</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-(--muted) mb-3">Developer</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/api-key" className="text-(--muted) hover:text-(--foreground) transition-colors">API Keys</Link></li>
              <li><Link href="/jwt-secret" className="text-(--muted) hover:text-(--foreground) transition-colors">JWT Secret</Link></li>
              <li><Link href="/uuid" className="text-(--muted) hover:text-(--foreground) transition-colors">UUID</Link></li>
              <li><Link href="/random-string" className="text-(--muted) hover:text-(--foreground) transition-colors">Random String</Link></li>
              <li><Link href="/totp-secret" className="text-(--muted) hover:text-(--foreground) transition-colors">TOTP/2FA</Link></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-(--muted) mb-3">Encryption</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/encryption-key" className="text-(--muted) hover:text-(--foreground) transition-colors">Encryption Keys</Link></li>
              <li><Link href="/aes-key" className="text-(--muted) hover:text-(--foreground) transition-colors">AES Keys</Link></li>
              <li><Link href="/rsa-key" className="text-(--muted) hover:text-(--foreground) transition-colors">RSA Keys</Link></li>
              <li><Link href="/hash-generator" className="text-(--muted) hover:text-(--foreground) transition-colors">Hash Generator</Link></li>
              <li><Link href="/salt" className="text-(--muted) hover:text-(--foreground) transition-colors">Salt</Link></li>
            </ul>
          </div>

          {/* Column 6 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-(--muted) mb-3">Keys &amp; More</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ssh-key" className="text-(--muted) hover:text-(--foreground) transition-colors">SSH Keys</Link></li>
              <li><Link href="/pgp-key" className="text-(--muted) hover:text-(--foreground) transition-colors">PGP/GPG Keys</Link></li>
              <li><Link href="/django-secret-key" className="text-(--muted) hover:text-(--foreground) transition-colors">Django</Link></li>
              <li><Link href="/laravel-key" className="text-(--muted) hover:text-(--foreground) transition-colors">Laravel</Link></li>
              <li><Link href="/wordpress-salts" className="text-(--muted) hover:text-(--foreground) transition-colors">WordPress</Link></li>
            </ul>
          </div>
        </div>

        {/* Resources & Friends section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 py-8 border-t border-(--border)">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-(--muted) mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guides" className="text-(--muted) hover:text-(--foreground) transition-colors">Security Guides</Link></li>
              <li><Link href="/guides/password-security-best-practices" className="text-(--muted) hover:text-(--foreground) transition-colors">Password Best Practices</Link></li>
              <li><Link href="/guides/api-key-best-practices" className="text-(--muted) hover:text-(--foreground) transition-colors">API Key Best Practices</Link></li>
              <li><Link href="/guides/jwt-security" className="text-(--muted) hover:text-(--foreground) transition-colors">JWT Security</Link></li>
              <li><Link href="/credit-card-generator" className="text-(--muted) hover:text-(--foreground) transition-colors">Test Credit Cards</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-(--muted) mb-3">Friends</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://jsonlint.com" target="_blank" rel="noopener noreferrer" className="text-(--muted) hover:text-(--foreground) transition-colors">JSONLint</a></li>
              <li><a href="https://colors.to" target="_blank" rel="noopener noreferrer" className="text-(--muted) hover:text-(--foreground) transition-colors">Colors.to</a></li>
              <li><a href="https://design.dev" target="_blank" rel="noopener noreferrer" className="text-(--muted) hover:text-(--foreground) transition-colors">Design.dev</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-(--muted) mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-(--muted) hover:text-(--foreground) transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Lower footer note */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-(--muted) pt-8 border-t border-(--border)">
          <div className="flex items-center gap-1">
            <span>Built by</span>
            <a href="https://x.com/toddo" target="_blank" rel="noopener noreferrer" className="text-(--foreground) hover:text-(--accent) transition-colors font-medium">@toddo</a>
            <span className="mx-2">·</span>
            <span>Hosted by <a href="https://ready.dev?ref=randomkeygen.com" target="_blank" rel="noopener noreferrer" className="hover:text-(--accent) transition-colors font-medium">ready.dev</a></span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-(--accent)" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Client-side only
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-(--accent)" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              No data transmitted
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
