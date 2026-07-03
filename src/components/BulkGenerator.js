"use client";

import React, { useState, useCallback } from "react";
import KeyRow from "@/components/KeyRow";

export default function BulkGenerator({ generateFn, label = "passwords", defaultCount = 10 }) {
  const [count, setCount] = useState(defaultCount);
  const [items, setItems] = useState([]);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = useCallback(() => {
    const results = [];
    for (let i = 0; i < count; i++) {
      results.push(generateFn());
    }
    setItems(results);
    setGenerated(true);
  }, [count, generateFn]);

  const handleCopyAll = async () => {
    const text = items.join("\n");
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDownloadCSV = () => {
    const header = "index,value\n";
    const rows = items.map((val, i) => `${i + 1},"${val}"`).join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${label}-bulk.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadTXT = () => {
    const text = items.join("\n");
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${label}-bulk.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const countOptions = [10, 25, 50, 100, 250, 500];

  return (
    <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-5">
      <h3 className="text-sm font-bold uppercase tracking-wider text-(--muted)">Bulk Generation</h3>
      
      <div className="flex flex-wrap gap-3 items-center">
        <div className="flex flex-wrap gap-2">
          {countOptions.map((n) => (
            <button
              key={n}
              onClick={() => setCount(n)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                count === n
                  ? "border-(--accent) bg-[rgba(16,185,129,0.08)] text-(--accent)"
                  : "border-(--border) bg-(--background) text-(--muted) hover:border-(--accent) hover:text-(--accent)"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
        <button
          onClick={handleGenerate}
          className="btn-primary py-2 px-5 text-sm"
        >
          Generate {count} {label}
        </button>
      </div>

      {generated && items.length > 0 && (
        <>
          <div className="flex flex-wrap gap-2">
            <button onClick={handleCopyAll} className="btn-ghost py-1.5 px-4 text-xs font-semibold cursor-pointer">
              Copy All
            </button>
            <button onClick={handleDownloadCSV} className="btn-ghost py-1.5 px-4 text-xs font-semibold cursor-pointer">
              Download CSV
            </button>
            <button onClick={handleDownloadTXT} className="btn-ghost py-1.5 px-4 text-xs font-semibold cursor-pointer">
              Download TXT
            </button>
          </div>

          <div className="space-y-1.5 max-h-96 overflow-y-auto pr-1">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-xs text-(--muted) w-8 text-right shrink-0">{idx + 1}.</span>
                <KeyRow value={item} />
              </div>
            ))}
          </div>
          <p className="text-[11px] text-(--muted) text-center">Click any item to copy it individually</p>
        </>
      )}
    </div>
  );
}
