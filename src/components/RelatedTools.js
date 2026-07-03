import Link from "next/link";
import React from "react";

export default function RelatedTools({ tools }) {
  // tools = [{ name: "Password Generator", href: "/password", desc: "..." }, ...]
  return (
    <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-wider text-(--muted)">Related Tools</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {tools.map((tool, idx) => (
          <Link
            key={idx}
            href={tool.href}
            className="group flex flex-col p-3 border border-(--border) rounded-xl hover:border-(--accent) transition-all bg-(--background) hover:bg-[rgba(16,185,129,0.04)]"
          >
            <span className="text-sm font-semibold text-(--foreground) group-hover:text-(--accent) transition-colors">
              {tool.name}
            </span>
            {tool.desc && (
              <span className="text-[11px] text-(--muted) mt-0.5">{tool.desc}</span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
