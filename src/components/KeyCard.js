"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import KeyRow from "./KeyRow";
import { FiRefreshCw } from "react-icons/fi";

export default function KeyCard({
  title,
  href,
  badge,
  generatorFn,
  count = 4,
  refreshTrigger,
  cols = 1,
}) {
  const [keys, setKeys] = useState([]);

  const regenerate = useCallback(() => {
    const newKeys = [];
    for (let i = 0; i < count; i++) {
      try {
        newKeys.push(generatorFn());
      } catch (err) {
        newKeys.push("Generation failed");
      }
    }
    setKeys(newKeys);
  }, [count, generatorFn]);

  // Generate on mount and when global refresh changes
  useEffect(() => {
    const timer = setTimeout(() => {
      regenerate();
    }, 0);
    return () => clearTimeout(timer);
  }, [refreshTrigger, regenerate]);

  return (
    <div className="key-card">
      <div className="flex items-center justify-between mb-4">
        <Link
          href={href}
          className="flex items-center gap-1.5 font-medium hover:text-(--accent) transition-colors group">
          <span className="text-base font-semibold">{title}</span>
          <svg
            className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-(--accent)"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>

        <div className="flex items-center gap-2">
          {badge && <span className="badge">{badge}</span>}
          <button
            onClick={regenerate}
            className="btn-ghost p-1 text-(--muted) hover:text-(--accent) cursor-pointer"
            title="Regenerate this set">
            <FiRefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className={cols === 2 ? "grid grid-cols-2 gap-2" : "flex flex-col gap-2"}>
        {keys.map((keyVal, idx) => (
          <KeyRow key={idx} value={keyVal} />
        ))}
      </div>
    </div>
  );
}
