"use client";

import { useState } from "react";
import { PedigreeTable } from "./PedigreeTable";
import type { PedigreeNode } from "@/lib/litters";

export function PedigreeToggle({ sire, dam }: { sire: PedigreeNode; dam: PedigreeNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="text-xs tracking-[0.3em] uppercase border border-border hover:border-gold text-text/85 hover:text-gold transition-colors duration-200 px-8 py-3"
      >
        {open ? "Hide Pedigree ↑" : "View Pedigree ↓"}
      </button>
      {open && (
        <div className="mt-6">
          <PedigreeTable sire={sire} dam={dam} />
        </div>
      )}
    </div>
  );
}
