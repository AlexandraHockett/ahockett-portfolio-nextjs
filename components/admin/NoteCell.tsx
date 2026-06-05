"use client";

import { useState } from "react";

export function NoteCell({ ipHash, initialNote }: { ipHash: string; initialNote: string }) {
  const [note, setNote] = useState(initialNote);
  const [saved, setSaved] = useState(false);

  const save = async () => {
    if (note === initialNote && !saved) return;
    await fetch("/api/admin/notes", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ip_hash: ipHash, note }),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  return (
    <div className="flex items-center gap-1.5 min-w-[120px]">
      <input
        value={note}
        onChange={(e) => { setNote(e.target.value); setSaved(false); }}
        onBlur={save}
        onKeyDown={(e) => e.key === "Enter" && (e.currentTarget.blur())}
        placeholder="Add note…"
        className="bg-transparent text-xs text-white/70 placeholder-white/20 outline-none border-b border-transparent hover:border-white/20 focus:border-purple-400/60 transition-colors w-full"
        style={{ borderBottomColor: note ? "rgba(203,172,249,0.3)" : undefined }}
      />
      {saved && <span className="text-[10px] text-green-400 shrink-0">saved</span>}
    </div>
  );
}
