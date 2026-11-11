/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

/**
 * A guided tour of the real PostDrip app, made from screenshots of the live site
 * (ai-social-platform-nine.vercel.app, captured 11 Nov 2026). The cursor moves to
 * real buttons and links in each screenshot; the caption is typed over the real
 * composer to show the AI drafting step.
 */

// Screenshot geometry, in image pixels. Every screenshot is 1262 wide; the viewport is 585 tall.
const IMG_W = 1262;
const VIEW_H = 585;

type ScreenId = "calendar" | "composer" | "posts" | "accounts" | "analytics";

const SCREENS: Record<ScreenId, { src: string; url: string; height: number; alt: string }> = {
  calendar: { src: "/postdrip/calendar.webp", url: "ai-social-platform-nine.vercel.app/calendar", height: 585, alt: "PostDrip calendar for November 2026 with a scheduled test post" },
  composer: { src: "/postdrip/composer.webp", url: "ai-social-platform-nine.vercel.app/posts/new", height: 734, alt: "PostDrip Create post page with media upload, caption, AI tools and Instagram and Facebook targets" },
  posts: { src: "/postdrip/posts.webp", url: "ai-social-platform-nine.vercel.app/posts", height: 585, alt: "PostDrip posts list with a scheduled post" },
  accounts: { src: "/postdrip/accounts.webp", url: "ai-social-platform-nine.vercel.app/accounts", height: 585, alt: "PostDrip connected accounts: an Instagram Business account and a Facebook Page" },
  analytics: { src: "/postdrip/analytics.webp", url: "ai-social-platform-nine.vercel.app/analytics", height: 585, alt: "PostDrip analytics with follower, reach, views and engagement cards" },
};
const ORDER: ScreenId[] = ["calendar", "composer", "posts", "accounts", "analytics"];

const CAPTION = "Spring menu drops Friday at 9am ☕ Be first in line and set a reminder! #newmenu #cafe";

type Step = {
  screen: ScreenId;
  ms: number; // how long this step lasts
  cursor: [number, number]; // image px (x, y in the page, before scrolling)
  scroll?: number; // page scroll in px
  click?: boolean;
  typing?: boolean;
  label: string; // what's happening, for the caption under the window
};

const STEPS: Step[] = [
  { screen: "calendar", ms: 1600, cursor: [640, 330], label: "The calendar shows every scheduled post" },
  { screen: "calendar", ms: 1400, cursor: [792, 276], label: "A post scheduled for Friday, 2:00 PM" },
  { screen: "calendar", ms: 1000, cursor: [1138, 116], click: true, label: "Create a new post" },
  { screen: "composer", ms: 1500, cursor: [900, 205], label: "Pick the accounts to publish to" },
  { screen: "composer", ms: 1100, cursor: [207, 592], scroll: 149, label: "Scroll to the AI tools" },
  { screen: "composer", ms: 700, cursor: [207, 592], scroll: 149, click: true, label: "Write with AI (Gemini, in the workspace brand voice)" },
  { screen: "composer", ms: 3200, cursor: [520, 470], scroll: 149, typing: true, label: "The AI drafts a caption to review and edit" },
  { screen: "composer", ms: 1100, cursor: [961, 413], scroll: 149, click: true, label: "Schedule it instead of publishing now" },
  { screen: "composer", ms: 900, cursor: [665, 28], click: true, label: "Back to the posts list" },
  { screen: "posts", ms: 1700, cursor: [955, 259], label: "Queued for the publishing worker" },
  { screen: "posts", ms: 900, cursor: [886, 28], click: true, label: "Connected accounts" },
  { screen: "accounts", ms: 1900, cursor: [895, 279], label: "An Instagram Business account and a Facebook Page, connected through OAuth" },
  { screen: "accounts", ms: 900, cursor: [803, 28], click: true, label: "Analytics" },
  { screen: "analytics", ms: 1900, cursor: [409, 170], label: "Reach, views and engagement per account, with CSV export" },
  { screen: "analytics", ms: 900, cursor: [728, 28], click: true, label: "And back to the calendar" },
];

const MQ = "(prefers-reduced-motion: reduce)";
const subscribeMotion = (cb: () => void) => {
  const m = window.matchMedia(MQ);
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
};

export function PostDripScreen({ onUrl }: { onUrl?: (url: string) => void }) {
  const reduced = useSyncExternalStore(subscribeMotion, () => window.matchMedia(MQ).matches, () => false);
  const [userPaused, setUserPaused] = useState(false);
  const paused = userPaused || reduced;
  const [i, setI] = useState(0);
  const [typed, setTyped] = useState(0);
  const [clicking, setClicking] = useState(false);
  const step = STEPS[i];
  const shown = step.screen;
  const onUrlRef = useRef(onUrl);

  useEffect(() => {
    onUrlRef.current = onUrl;
  }, [onUrl]);

  useEffect(() => {
    onUrlRef.current?.(SCREENS[shown].url);
  }, [shown]);

  // Advance through the steps. A click step shows the press, then moves on.
  useEffect(() => {
    if (paused) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    if (step.click) {
      timers.push(setTimeout(() => setClicking(true), step.ms - 380));
      timers.push(setTimeout(() => setClicking(false), step.ms - 120));
    }
    timers.push(
      setTimeout(() => {
        setI((x) => {
          const next = (x + 1) % STEPS.length;
          if (next === 0) setTyped(0);
          return next;
        });
      }, step.ms),
    );
    return () => timers.forEach(clearTimeout);
  }, [i, paused, step.click, step.ms]);

  // Type the AI caption.
  useEffect(() => {
    if (paused || !step.typing) return;
    const t = setInterval(() => setTyped((n) => Math.min(CAPTION.length, n + 2)), 55);
    return () => clearInterval(t);
  }, [paused, step.typing]);

  const scroll = step.scroll ?? 0;
  const cx = (step.cursor[0] / IMG_W) * 100;
  const cy = ((step.cursor[1] - scroll) / VIEW_H) * 100;
  const caption = reduced ? CAPTION : shown === "composer" ? CAPTION.slice(0, typed) : "";
  const showCaption = shown === "composer" && caption.length > 0;

  return (
    <div style={{ background: "#0A0A0A" }}>
      <div
        style={{ position: "relative", width: "100%", aspectRatio: `${IMG_W} / ${VIEW_H}`, overflow: "hidden", containerType: "inline-size" }}
      >
        {ORDER.map((id) => {
          const s = SCREENS[id];
          const on = id === shown;
          return (
            <img
              key={id}
              src={s.src}
              alt={on ? s.alt : ""}
              aria-hidden={on ? undefined : true}
              width={IMG_W}
              height={s.height}
              loading={id === "calendar" ? "eager" : "lazy"}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "auto",
                opacity: on ? 1 : 0,
                transform: `translateY(${on ? -(scroll / s.height) * 100 : 0}%)`,
                transition: "opacity 420ms ease, transform 900ms cubic-bezier(.22,1,.36,1)",
              }}
            />
          );
        })}

        {showCaption && (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: `${(150 / IMG_W) * 100}%`,
              top: `${((396 - scroll) / VIEW_H) * 100}%`,
              width: `${(640 / IMG_W) * 100}%`,
              padding: `${(4 / IMG_W) * 100}cqw`,
              background: "#0A0A0A",
              color: "#F5F5F5",
              fontSize: `${(14.5 / IMG_W) * 100}cqw`,
              lineHeight: 1.45,
              fontFamily: "var(--font-archivo), system-ui, sans-serif",
              transition: "top 900ms cubic-bezier(.22,1,.36,1)",
            }}
          >
            {caption}
            <span className="v4-caret">▍</span>
          </div>
        )}

        {!reduced && (
          <img
            src="/assets/06504d54914a2a6251820a4828b20295.jpg"
            alt=""
            aria-hidden="true"
            className="pd-cursor"
            style={{
              position: "absolute",
              left: `${cx}%`,
              top: `${cy}%`,
              width: "clamp(22px, 3.2cqw, 40px)",
              height: "auto",
              mixBlendMode: "screen",
              filter: "invert(1)",
              pointerEvents: "none",
              transform: clicking ? "scale(0.82)" : "none",
              transition: "left 650ms cubic-bezier(.22,1,.36,1), top 650ms cubic-bezier(.22,1,.36,1), transform 120ms",
              zIndex: 2,
            }}
          />
        )}
        {clicking && (
          <span
            aria-hidden="true"
            className="pd-ripple"
            style={{ position: "absolute", left: `${cx}%`, top: `${cy}%`, zIndex: 1 }}
          />
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "8px 14px",
          padding: "12px 16px",
          background: "#FFFFFF",
          borderTop: "1px solid #ECECEC",
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 12,
          color: "#5C5C5C",
        }}
      >
        <span aria-live="polite" style={{ color: "#141414", fontFamily: "var(--font-archivo), system-ui, sans-serif", fontSize: 14, fontWeight: 500 }}>
          {reduced ? "Real screenshots of the live PostDrip app" : step.label}
        </span>
        <span style={{ marginLeft: "auto" }}>Real screenshots of the live app · animated</span>
        <button
          type="button"
          onClick={() => setUserPaused((p) => !p)}
          disabled={reduced}
          style={{ minHeight: 32, padding: "0 12px", borderRadius: 999, border: "1px solid #CFCFCF", background: "#FFFFFF", color: "#141414", fontFamily: "inherit", fontSize: 12, cursor: "pointer" }}
        >
          {paused ? "Play tour" : "Pause tour"}
        </button>
      </div>
    </div>
  );
}
