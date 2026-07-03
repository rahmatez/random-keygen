"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [theme, setTheme] = useState("system");
  const [mounted, setMounted] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const pathname = usePathname();

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const applyTheme = (themeMode) => {
    const root = document.documentElement;
    if (
      themeMode === "dark" ||
      (themeMode === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }
  };

  // Load theme preference on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      const savedTheme = localStorage.getItem("theme") || "system";
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    let nextTheme = "light";
    if (theme === "light") nextTheme = "dark";
    else if (theme === "dark") nextTheme = "system";

    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
  };

  // Close tools menu on page change
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsToolsOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Handle clicks outside the dropdown menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsToolsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const megaMenuData = [
    {
      category: "PASSWORDS",
      items: [
        { name: "Password Generator", href: "/password" },
        { name: "Passphrase Generator", href: "/passphrase" },
        { name: "Pronounceable", href: "/pronounceable-password" },
        { name: "Memorable", href: "/memorable-password" },
        { name: "Master Password", href: "/master-password" },
        { name: "Bulk Generator", href: "/bulk-password-generator" },
      ],
    },
    {
      category: "PASSWORD OPTIONS",
      items: [
        { name: "8 Character", href: "/password/8-character" },
        { name: "16 Character", href: "/password/16-character" },
        {
          name: "No Symbols",
          href: "/password-generator/no-special-characters",
        },
        { name: "Letters Only", href: "/password-generator/letters-only" },
        { name: "PIN Codes", href: "/pin-generator" },
        { name: "Strength Checker", href: "/password-strength" },
      ],
    },
    {
      category: "RECOVERY & BACKUP",
      items: [
        { name: "Backup Codes", href: "/backup-codes" },
        { name: "Recovery Key", href: "/recovery-key" },
        { name: "Temporary", href: "/temporary-password" },
        { name: "Gaming", href: "/gaming-password" },
        { name: "WiFi Password", href: "/wifi-password" },
      ],
    },
    {
      category: "DEVELOPER",
      items: [
        { name: "API Keys", href: "/api-key" },
        { name: "JWT Secret", href: "/jwt-secret" },
        { name: "UUID Generator", href: "/uuid" },
        { name: "Random String", href: "/random-string" },
        { name: "TOTP/2FA", href: "/totp-secret" },
        { name: "Test Cards", href: "/credit-card-generator" },
      ],
    },
    {
      category: "FRAMEWORKS",
      items: [
        { name: "Django", href: "/django-secret-key" },
        { name: "Laravel", href: "/laravel-key" },
        { name: "Flask", href: "/flask-secret-key" },
        { name: "WordPress", href: "/wordpress-salts" },
      ],
    },
    {
      category: "ENCRYPTION",
      items: [
        { name: "Encryption Keys", href: "/encryption-key" },
        { name: "AES Keys", href: "/aes-key" },
        { name: "RSA Keys", href: "/rsa-key" },
        { name: "HMAC Keys", href: "/hmac-key" },
        { name: "Hash Generator", href: "/hash-generator" },
        { name: "Salt Generator", href: "/salt" },
      ],
    },
    {
      category: "ADVANCED KEYS",
      items: [
        { name: "SSH Keys", href: "/ssh-key" },
        { name: "PGP/GPG Keys", href: "/pgp-key" },
        { name: "WireGuard", href: "/wireguard-key" },
        { name: "VAPID Keys", href: "/vapid-key" },
        { name: "Secret Key", href: "/secret-key" },
        { name: "Usernames", href: "/username-generator" },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-(--border) bg-(--background)/80 backdrop-blur-xl">
      <div className="page-container relative">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity font-semibold">
              <svg
                className="w-5 h-5 text-(--accent)"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
              <span className="text-lg tracking-tight">
                Random<span className="text-(--accent)">Keygen</span>
              </span>
            </Link>

            {/* Navigation links */}
            <nav className="hidden md:flex items-center gap-1">
              <div>
                <button
                  ref={buttonRef}
                  onClick={() => setIsToolsOpen(!isToolsOpen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md hover:bg-(--code-bg) transition-colors cursor-pointer focus:outline-none focus-visible:outline-none">
                  Tools
                  <svg
                    className={`w-4 h-4 transition-transform ${isToolsOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              <Link
                href="/guides"
                className="px-3 py-1.5 text-sm font-medium rounded-md hover:bg-(--code-bg) transition-colors">
                Guides
              </Link>
            </nav>
          </div>

          {/* Right utilities (Theme, GitHub) */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/randomkeygen/randomkeygen"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost p-2"
              title="View on GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                />
              </svg>
            </a>

            <button
              onClick={toggleTheme}
              className="btn-ghost p-2 cursor-pointer"
              title={`Theme: ${theme}`}>
              {mounted &&
                (theme === "dark" ? (
                  // Moon Icon
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                ) : theme === "light" ? (
                  // Sun Icon
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ) : (
                  // Computer/System Icon
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                ))}
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        {isToolsOpen && (
          <div
            ref={menuRef}
            className="absolute left-6 right-6 top-full mt-1 rounded-2xl shadow-xl bg-(--card-bg) border border-(--border) overflow-hidden z-50 transition-all duration-200">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 p-6">
              {megaMenuData.map((col, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-[10px] font-semibold text-(--muted) uppercase tracking-wider">
                    {col.category}
                  </h4>
                  <ul className="space-y-0.5">
                    {col.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <Link
                          href={item.href}
                          className="block py-1 text-sm text-(--muted) hover:text-(--accent) transition-colors">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Mega Menu Footer */}
            <div className="bg-(--code-bg) border-t border-(--border) px-6 py-4 flex items-center justify-between text-xs">
              <Link
                href="/guides"
                className="text-(--accent) hover:text-(--accent-hover) font-semibold flex items-center gap-1 group">
                Security Guides &amp; Tutorials
                <svg
                  className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <span className="text-(--muted) font-medium">
                39 tools available
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
