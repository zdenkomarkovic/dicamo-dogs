// Next.js ships its own compiled React canary that omits useEffectEvent.
// Sanity v5 requires it. Patch the module.exports object directly so the
// live binding created by Sanity's ESM import resolves to our shim.
import React from "react";

const r = React as unknown as Record<string, unknown>;

if (typeof r["useEffectEvent"] !== "function") {
  r["useEffectEvent"] =
    typeof r["experimental_useEffectEvent"] === "function"
      ? r["experimental_useEffectEvent"]
      : typeof r["unstable_useEffectEvent"] === "function"
      ? r["unstable_useEffectEvent"]
      : <T extends (...args: unknown[]) => unknown>(fn: T): T => fn;
}

export {};
