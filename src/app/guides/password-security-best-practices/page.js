import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Password Security Best Practices - RandomKeygen Guides",
  description: "Developer best practices for computing entropy, choosing salt sizes, and implementing hashing functions.",
};

export default function PasswordGuide() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Link href="/guides" className="text-xs text-(--accent) hover:underline inline-flex items-center gap-1 font-semibold">
        ← Back to Guides
      </Link>
      
      <h1 className="text-3xl font-bold text-(--foreground) mb-2">Password Security Best Practices</h1>
      <p className="text-xs text-(--muted)">Last Updated: July 2026</p>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-(--foreground)">1. Entropy and Password Length</h2>
        <p className="text-sm text-(--muted) leading-relaxed">
          The security of a password is directly related to its entropy, which measures the unpredictability of the string. Length is the single most important factor. A 16-character alphanumeric password is orders of magnitude harder to crack than an 8-character password with complex symbols. 
        </p>
        <p className="text-sm text-(--muted) leading-relaxed">
          For standard accounts, aim for at least <strong>12 characters</strong> containing mixed case and numbers. For master keys and administrative controls, aim for <strong>20+ characters</strong>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-(--foreground)">2. Secure Password Hashing</h2>
        <p className="text-sm text-(--muted) leading-relaxed">
          Never store passwords in plain text or using outdated hashing algorithms like MD5 or SHA-1. Modern databases should hash passwords using slow, compute-intensive algorithms that are resilient to GPU acceleration:
        </p>
        <ul className="list-disc pl-5 text-sm text-(--muted) space-y-1">
          <li><strong>Argon2id</strong>: The current industry gold standard (winner of the Password Hashing Competition).</li>
          <li><strong>bcrypt</strong>: Time-tested, reliable, and widely supported in standard libraries.</li>
          <li><strong>PBKDF2</strong>: Recommended for compliance environments, but generally weaker than bcrypt or Argon2.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-(--foreground)">3. Salt Configurations</h2>
        <p className="text-sm text-(--muted) leading-relaxed">
          Always append a unique, cryptographically secure random salt to every password before hashing. This prevents rainbow table lookups and ensures that identical passwords do not yield identical hash records. Check our <Link href="/salt" className="text-(--accent) hover:underline">Salt Generator</Link> for random salts.
        </p>
      </section>
    </div>
  );
}
