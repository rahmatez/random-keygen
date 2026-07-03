import React from "react";
import Link from "next/link";

export const metadata = {
  title: "API Key Security Best Practices - RandomKeygen Guides",
  description: "Secure storage, lifecycle management, and prefix conventions for web service API tokens.",
};

export default function ApiKeyGuide() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Link href="/guides" className="text-xs text-(--accent) hover:underline inline-flex items-center gap-1 font-semibold">
        ← Back to Guides
      </Link>
      
      <h1 className="text-3xl font-bold text-(--foreground) mb-2">API Key Security Best Practices</h1>
      <p className="text-xs text-(--muted)">Last Updated: July 2026</p>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-(--foreground)">1. Prefix Conventions</h2>
        <p className="text-sm text-(--muted) leading-relaxed">
          Modern developer services should prefix their secret API keys (e.g., Stripe&apos;s `sk_live_` or GitHub&apos;s `ghp_`). Prefixes allow automated secret scanners (like GitHub Secret Scanning) to easily detect exposed keys in repositories and prevent credentials leakage.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-(--foreground)">2. Secure Key Storage</h2>
        <p className="text-sm text-(--muted) leading-relaxed">
          Never commit API keys directly to git source repositories. Use environment files (`.env.local`) and inject them during deployment. In production, use specialized vaults like HashiCorp Vault, AWS Secrets Manager, or Doppler.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-(--foreground)">3. Access Controls (Principle of Least Privilege)</h2>
        <p className="text-sm text-(--muted) leading-relaxed">
          Always restrict API tokens by IP address whitelists, HTTP referrer restrictions, or service capability scopes. If a key is leaked, access scope restrictions drastically minimize potential damage.
        </p>
      </section>
    </div>
  );
}
