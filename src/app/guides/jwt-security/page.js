import React from "react";
import Link from "next/link";

export const metadata = {
  title: "JWT Security Guide - RandomKeygen Guides",
  description: "A guide on signing algorithms, secret keys, expiration times, and secure JWT handling.",
};

export default function JwtGuide() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Link href="/guides" className="text-xs text-(--accent) hover:underline inline-flex items-center gap-1 font-semibold">
        ← Back to Guides
      </Link>
      
      <h1 className="text-3xl font-bold text-(--foreground) mb-2">JWT Security &amp; Verification</h1>
      <p className="text-xs text-(--muted)">Last Updated: July 2026</p>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-(--foreground)">1. Strong Signature Verification</h2>
        <p className="text-sm text-(--muted) leading-relaxed">
          JSON Web Tokens (JWT) are signed to guarantee authenticity. Never accept the `none` algorithm in the token header, as this permits attackers to forge administrative claims. Ensure your server explicitly requires strong signature algorithms (like `HS256`, `RS256`, or `EdDSA`).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-(--foreground)">2. Secret Key Entropy</h2>
        <p className="text-sm text-(--muted) leading-relaxed">
          HMAC signing secrets (HS256) must be highly secure. A weak secret allows attackers to run offline brute-force key retrieval attacks. A standard HS256 secret key must be at least <strong>256 bits</strong> (32 bytes) of random characters. Check our <Link href="/jwt-secret" className="text-(--accent) hover:underline">JWT Secret Generator</Link> to generate keys.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-(--foreground)">3. Set Token Expiration</h2>
        <p className="text-sm text-(--muted) leading-relaxed">
          Always specify short-lived expiration (`exp`) claims in token payloads (e.g., 15 minutes) to reduce the window of vulnerability if a token is intercepted. For long-lived sessions, implement standard OAuth 2.0 refresh token rotations.
        </p>
      </section>
    </div>
  );
}
