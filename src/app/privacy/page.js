import React from "react";

export const metadata = {
  title: "Privacy Policy - RandomKeygen",
  description: "Learn about the client-side local security and privacy guidelines of RandomKeygen.",
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-(--foreground) mb-2">Privacy Policy</h1>
      <p className="text-xs text-(--muted)">Effective Date: July 3, 2026</p>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-(--foreground)">1. Client-Side Processing</h2>
        <p className="text-sm text-(--muted) leading-relaxed">
          RandomKeygen is designed from the ground up with a privacy-first model. Every single password, passphrase, API token, UUID, and encryption key displayed or generated on this site is computed <strong>entirely client-side</strong> inside your browser. We leverage the cryptographically secure pseudo-random number generator (CSPRNG) provided by the browser&apos;s Web Crypto API (`window.crypto.getRandomValues()`).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-(--foreground)">2. Zero Data Transmission</h2>
        <p className="text-sm text-(--muted) leading-relaxed">
          We do not collect, store, log, or transmit any passwords or keys you generate. There are no backend database servers that log generated items. Once you close your browser tab or refresh the page, the generated values are permanently erased from memory.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-(--foreground)">3. Security Auditing</h2>
        <p className="text-sm text-(--muted) leading-relaxed">
          Because the application executes completely within your browser, you can easily inspect the source code, check the network tab, or disconnect from the internet entirely before generating keys. The application works offline, serving as proof that no background telemetry is sent.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-(--foreground)">4. Third-Party Services</h2>
        <p className="text-sm text-(--muted) leading-relaxed">
          We do not host trackers, behavioral advertising pixels, or session recording logs. We may collect basic network request logs (like IP addresses and user agents) purely for hosting and DDoS protection purposes (via our CDN providers), but these logs are never correlated with generated passwords.
        </p>
      </section>
    </div>
  );
}
