import * as React from "react";

const r = React as Record<string, unknown>;

if (typeof r["useEffectEvent"] === "undefined") {
  r["useEffectEvent"] = r["experimental_useEffectEvent"] ??
    r["unstable_useEffectEvent"] ??
    (<T extends (...args: unknown[]) => unknown>(fn: T) => fn);
}
