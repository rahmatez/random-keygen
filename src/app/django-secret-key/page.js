"use client";

import React, { useState, useEffect, useCallback } from "react";
import { generateDjangoSecret } from "@/utils/crypto";
import KeyRow from "@/components/KeyRow";
import BulkGenerator from "@/components/BulkGenerator";
import TerminalCommands from "@/components/TerminalCommands";
import CodeBlock from "@/components/CodeBlock";

export default function DjangoSecretKeyPage() {
  const [keys, setKeys] = useState([]);

  const generate = useCallback(() => {
    const items = [];
    for (let i = 0; i < 4; i++) items.push(generateDjangoSecret());
    setKeys(items);
  }, []);

  useEffect(() => {
    const t = setTimeout(generate, 0);
    return () => clearTimeout(t);
  }, [generate]);

  const exampleKey = keys[0] || "your-generated-secret-key-here";

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-(--foreground) mb-2">Django SECRET_KEY Generator</h1>
        <p className="text-sm text-(--muted)">
          Generate secure SECRET_KEY values for Django projects. Uses the same character set and length as Django&apos;s default key generation (50 chars, 282 bits of entropy).
        </p>
      </div>

      {/* Generate button */}
      <div className="flex justify-end">
        <button onClick={generate} className="btn-primary py-2 px-5 text-sm">Generate New Keys</button>
      </div>

      {/* Keys */}
      <div className="space-y-2">
        {keys.map((k, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-xs font-mono text-(--muted) bg-(--code-bg) border border-(--border) px-2 py-0.5 rounded-md whitespace-nowrap">282 bits</span>
            <KeyRow value={k} />
          </div>
        ))}
      </div>

      {/* How to use */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-(--foreground)">How to Use in Django</h3>
        <CodeBlock filename="myproject/settings.py (Basic)" code={`# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '${exampleKey}'

# Other settings...
DEBUG = False
ALLOWED_HOSTS = ['yourdomain.com']`} />
        <CodeBlock filename=".env (Recommended)" code={`DJANGO_SECRET_KEY=${exampleKey}
DJANGO_DEBUG=False
DJANGO_ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com`} />
        <CodeBlock filename="myproject/settings.py (with env vars)" code={`import os
from django.core.exceptions import ImproperlyConfigured

def get_env_variable(var_name):
    try:
        return os.environ[var_name]
    except KeyError:
        raise ImproperlyConfigured(f"Set the {var_name} environment variable")

SECRET_KEY = get_env_variable('DJANGO_SECRET_KEY')
DEBUG = get_env_variable('DJANGO_DEBUG') == 'True'
ALLOWED_HOSTS = get_env_variable('DJANGO_ALLOWED_HOSTS').split(',')`} />
        <CodeBlock filename="docker-compose.yml" code={`version: '3.8'
services:
  web:
    build: .
    environment:
      - DJANGO_SECRET_KEY=${exampleKey}
      - DJANGO_DEBUG=False
    ports:
      - "8000:8000"`} />
        <CodeBlock filename="myproject/settings.py (python-decouple)" code={`from decouple import config

SECRET_KEY = config('SECRET_KEY')
DEBUG = config('DEBUG', default=False, cast=bool)`} />
      </div>

      {/* What SECRET_KEY is used for */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-3">
        <h3 className="text-sm font-semibold text-(--foreground)">What SECRET_KEY is Used For</h3>
        <ul className="space-y-2">
          {["Cryptographic signing (sessions, cookies, password reset tokens)", "CSRF protection tokens", "Unique salts for password hashing", "Any use of Django's signing framework"].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-(--muted)">
              <span className="text-(--accent) shrink-0 mt-0.5">•</span> {item}
            </li>
          ))}
        </ul>
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 mt-2">
          <p className="text-sm text-amber-400">Changing SECRET_KEY will invalidate all existing sessions and signed data.</p>
        </div>
      </div>

      {/* Django version compatibility */}
      <div className="bg-(--card-bg) border border-(--border) rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-(--border)">
          <h3 className="text-sm font-semibold text-(--foreground)">Django Version Compatibility</h3>
        </div>
        <div className="divide-y divide-(--border)">
          {[
            { ver: "Django 4.x+ (Current LTS)", notes: ["Full compatibility with new security features", "Works with new CSRF and session implementations", "Compatible with async views and middleware"] },
            { ver: "Django 3.x (LTS)", notes: ["Fully compatible with all 3.x features", "Same character set as django-admin startproject"] },
            { ver: "Django 2.x", notes: ["Compatible with legacy 2.x installations", "Works with older Python versions (3.6+)"] },
          ].map((row, i) => (
            <div key={i} className="p-4">
              <p className="text-sm font-semibold text-(--foreground) mb-1">{row.ver}</p>
              <ul className="space-y-0.5">
                {row.notes.map((n, j) => <li key={j} className="text-xs text-(--muted) flex items-center gap-1.5"><span className="text-(--accent) shrink-0">→</span> {n}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <BulkGenerator generateFn={generateDjangoSecret} label="secrets" />

      <TerminalCommands commands={[
        { label: "Django's built-in generator", code: "python3 -c \"from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())\"" },
        { label: "Python secrets module", code: "python3 -c \"import secrets, string; chars = string.ascii_lowercase + string.digits + '!@#$%^&*(-_=+)'; print(''.join(secrets.choice(chars) for _ in range(50)))\"" },
        { label: "OpenSSL", code: "openssl rand -base64 50 | tr -dc 'a-zA-Z0-9!@#$%^&*(-_=+)' | head -c 50" },
      ]} />
    </div>
  );
}
