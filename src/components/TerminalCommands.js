import React from "react";
import CodeBlock from "@/components/CodeBlock";

export default function TerminalCommands({ commands }) {
  // commands = [{ label: "OpenSSL", code: "openssl rand..." }, ...]
  return (
    <div className="bg-(--card-bg) border border-(--border) rounded-xl p-6 shadow-sm space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-wider text-(--muted)">Generate in Terminal</h3>
      <div className="space-y-3">
        {commands.map((cmd, idx) => (
          <div key={idx} className="space-y-1">
            {cmd.label && (
              <p className="text-xs font-semibold text-(--foreground)">{cmd.label}</p>
            )}
            <CodeBlock code={cmd.code} />
          </div>
        ))}
      </div>
    </div>
  );
}
