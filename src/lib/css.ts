import type { CSSProperties } from "react";

/** Turns a CSS declaration string ("a: b; c: d") into a React style object. */
export function css(s: string): CSSProperties {
  const out: Record<string, string> = {};
  let depth = 0;
  let cur = "";
  const decls: string[] = [];
  for (const ch of s) {
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (ch === ";" && depth === 0) {
      decls.push(cur);
      cur = "";
    } else cur += ch;
  }
  decls.push(cur);
  for (const d of decls) {
    const i = d.indexOf(":");
    if (i < 0) continue;
    const prop = d.slice(0, i).trim();
    const key = prop.startsWith("--") ? prop : prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    out[key] = d.slice(i + 1).trim();
  }
  return out as CSSProperties;
}
