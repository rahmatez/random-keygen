import React from "react";
import Link from "next/link";
import { FiLock, FiKey, FiCreditCard } from "react-icons/fi";

export const metadata = {
  title: "Security Guides - RandomKeygen",
  description: "Read professional best practices and developer guides on password, API key, and JWT token security.",
};

const guideItems = [
  {
    title: "Password Security Best Practices",
    desc: "Learn about entropy calculation, salt configurations, and defending passwords against brute force attacks.",
    slug: "password-security-best-practices",
    icon: <FiLock size={22} className="text-(--accent)" />,
  },
  {
    title: "API Key Security Best Practices",
    desc: "Understand secure storage, key rotations, prefix formats, and access control policies for modern developer tokens.",
    slug: "api-key-best-practices",
    icon: <FiKey size={22} className="text-(--accent)" />,
  },
  {
    title: "JWT Security & Verification",
    desc: "A developer's guide to signing tokens, choosing HMAC algorithms, token expiration, and preventing header injection.",
    slug: "jwt-security",
    icon: <FiCreditCard size={22} className="text-(--accent)" />,
  }
];

export default function GuidesPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-(--foreground) mb-2">Security Guides</h1>
      <p className="text-sm text-(--muted) mb-8">
        Read our curated security guides to implement best-in-class authentication and cryptographic flows.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guideItems.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="block p-6 border border-(--border) rounded-xl hover:border-(--accent) hover:shadow-sm transition-all bg-(--card-bg)"
          >
            <div className="mb-3">{guide.icon}</div>
            <h3 className="font-semibold text-lg mb-2 text-(--foreground)">{guide.title}</h3>
            <p className="text-xs text-(--muted) leading-relaxed">{guide.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
