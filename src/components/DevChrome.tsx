"use client";

import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { links } from "@/data/content";

/**
 * Developer-flavoured page chrome:
 * - an editor-style status bar (branch, current "file", line / %, language, IST clock, ⌘K)
 * - a command palette (Ctrl/⌘+K or "/") to jump around and open links
 */

const SECTIONS = [
  { id: "top", file: "hero.tsx", label: "Home" },
  { id: "work", file: "projects.tsx", label: "Projects" },
  { id: "think", file: "how-i-think.md", label: "How I think" },
  { id: "toolkit", file: "toolkit.json", label: "Toolkit" },
  { id: "hood", file: "under-the-hood.ts", label: "Under the hood" },
  { id: "experience", file: "experience.md", label: "Experience" },
  { id: "contact", file: "contact.ts", label: "Contact" },
];

type Cmd = { id: string; group: string; title: string; hint: string; run: () => void };

function goTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
}

function openUrl(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

const noop = () => () => {};

export function DevChrome() {
  const isMac = useSyncExternalStore(noop, () => /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), () => false);
  const keyLabel = isMac ? "⌘K" : "Ctrl K";
  const [file, setFile] = useState(SECTIONS[0].file);
  const [line, setLine] = useState(1);
  const [pct, setPct] = useState(0);
  const [time, setTime] = useState("");
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const [copied, setCopied] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  // Scroll position -> current "file", line and percent.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      setPct(Math.round((y / max) * 100));
      setLine(Math.floor(y / 24) + 1);
      let current = SECTIONS[0].file;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = s.file;
      }
      setFile(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Live clock in New Delhi.
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Kolkata" });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const t = setInterval(tick, 15000);
    return () => clearInterval(t);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    lastFocus.current?.focus?.();
  }, []);

  const show = useCallback(() => {
    lastFocus.current = document.activeElement as HTMLElement | null;
    setQ("");
    setSel(0);
    setOpen(true);
  }, []);

  const commands: Cmd[] = useMemo(
    () => [
      ...SECTIONS.map((s) => ({ id: "go-" + s.id, group: "Go to", title: s.label, hint: s.file, run: () => goTo(s.id) })),
      { id: "resume", group: "Open", title: "Résumé (PDF)", hint: "resume.pdf", run: () => openUrl(links.resume) },
      { id: "github", group: "Open", title: "GitHub", hint: "github.com/pragyaarajputt", run: () => openUrl(links.github) },
      { id: "linkedin", group: "Open", title: "LinkedIn", hint: "in/pragya-rajput31", run: () => openUrl(links.linkedin) },
      { id: "postdrip", group: "Open", title: "PostDrip AI, live app", hint: "vercel.app", run: () => openUrl(links.postdrip) },
      { id: "btc", group: "Open", title: "BTC/USDT live chart", hint: "vercel.app", run: () => openUrl(links.btc) },
      {
        id: "email",
        group: "Run",
        title: "Copy email address",
        hint: links.email,
        run: () => {
          navigator.clipboard?.writeText(links.email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
          });
        },
      },
    ],
    [],
  );

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return commands;
    return commands.filter((c) => (c.title + " " + c.hint + " " + c.group).toLowerCase().includes(s));
  }, [q, commands]);

  // Keyboard: Ctrl/⌘+K or "/" opens; Esc closes.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = (e.target as HTMLElement)?.closest?.("input, textarea, [contenteditable='true']");
      if ((e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing && !open)) {
        e.preventDefault();
        if (open) close();
        else show();
      } else if (e.key === "Escape" && open) {
        e.preventDefault();
        close();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, show]);

  useEffect(() => {
    if (open) input.current?.focus();
  }, [open]);

  const runAt = (i: number) => {
    const c = filtered[i];
    if (!c) return;
    setOpen(false);
    c.run();
  };

  let lastGroup = "";

  return (
    <>
      <div className="dev-status" aria-label="Editor status bar">
        <span className="dev-branch" title="git branch">⎇ main</span>
        <span className="dev-dim">pragya@portfolio:~/src/</span>
        <span>{file}</span>
        <span className="dev-ok" title="Build status">✓ build passing</span>
        <span className="dev-spacer" />
        <span>Ln {line}, {pct}%</span>
        <span className="dev-hide-md">UTF-8</span>
        <span className="dev-hide-md">TypeScript React</span>
        <span title="Time in New Delhi">IST {time}</span>
        <button type="button" className="dev-k" onClick={show} aria-label={`Open command palette (${isMac ? "Command" : "Control"} K)`}>
          {keyLabel}
        </button>
      </div>

      {copied && (
        <div className="dev-toast" role="status">
          ✓ copied {links.email}
        </div>
      )}

      {open && (
        <div className="dev-overlay" onMouseDown={(e) => e.target === e.currentTarget && close()}>
          <div className="dev-palette" role="dialog" aria-modal="true" aria-label="Command palette">
            <div className="dev-input-row">
              <span className="dev-prompt" aria-hidden="true">
                &gt;
              </span>
              <input
                ref={input}
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setSel(0);
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setSel((s) => Math.min(filtered.length - 1, s + 1));
                  } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setSel((s) => Math.max(0, s - 1));
                  } else if (e.key === "Enter") {
                    e.preventDefault();
                    runAt(sel);
                  } else if (e.key === "Tab") {
                    e.preventDefault();
                  }
                }}
                placeholder="Type a command or section…"
                aria-label="Search commands"
                aria-controls="dev-cmd-list"
                aria-activedescendant={filtered[sel] ? "cmd-" + filtered[sel].id : undefined}
                spellCheck={false}
                autoComplete="off"
              />
              <kbd>esc</kbd>
            </div>
            <ul id="dev-cmd-list" role="listbox" aria-label="Commands">
              {filtered.length === 0 && <li className="dev-empty">No matching command.</li>}
              {filtered.map((c, i) => {
                const head = c.group !== lastGroup ? c.group : "";
                lastGroup = c.group;
                return (
                  <li key={c.id} role="presentation">
                    {head && <div className="dev-group">{head}</div>}
                    <div
                      id={"cmd-" + c.id}
                      role="option"
                      aria-selected={i === sel}
                      className={"dev-item" + (i === sel ? " is-sel" : "")}
                      onMouseEnter={() => setSel(i)}
                      onClick={() => runAt(i)}
                    >
                      <span>{c.title}</span>
                      <span className="dev-hint">{c.hint}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="dev-foot">
              <span>↑↓ to move</span>
              <span>↵ to run</span>
              <span>/ or {keyLabel} to open</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
