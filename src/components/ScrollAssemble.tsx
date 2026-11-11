"use client";

import { useEffect } from "react";

/**
 * Scroll-scrubbed "scatter → assemble": selected pieces of the page start offset, rotated,
 * shrunk and faded, and move into place as they scroll into view (and scatter again when
 * scrolled back out below). Uses the individual `translate` / `rotate` / `scale` CSS
 * properties, so it composes with each element's own inline `transform` instead of
 * replacing it. Off with prefers-reduced-motion.
 */

const TARGETS = [
  ".v4-sticker",
  ".r-cols4 > *",
  ".r-facts > *",
  ".r-cols3 h3",
  ".r-cols3 span",
  ".r-exp",
  ".r-projrow",
  ".v4-dock",
  "section h2",
  "#contact .v4-pill",
].join(",");

// Never animate pieces inside the live product screens, the nav or the hero art.
const SKIP = "nav, .v4-art, [data-no-assemble]";

type Piece = { el: HTMLElement; dx: number; dy: number; rot: number; sc: number; cur: number };

function rand(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

export function ScrollAssemble() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const narrow = window.innerWidth < 640;
    const amp = narrow ? 0.45 : 1;
    const pieces: Piece[] = [];
    document.querySelectorAll<HTMLElement>(TARGETS).forEach((el, i) => {
      if (el.closest(SKIP)) return;
      if (pieces.some((p) => p.el.contains(el))) return; // animate the outer piece only
      const a = rand(i + 1), b = rand(i + 101), c = rand(i + 211);
      pieces.push({
        el,
        dx: (a - 0.5) * 320 * amp,
        dy: (90 + b * 160) * amp,
        rot: (c - 0.5) * 56,
        sc: 0.72 + b * 0.18,
        cur: 0,
      });
    });

    let raf = 0;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const frame = () => {
      const vh = window.innerHeight;
      let moving = false;
      for (const p of pieces) {
        const top = p.el.getBoundingClientRect().top;
        // 0 when the piece's top is at the bottom edge, 1 once it is 45% of the screen up.
        const target = Math.min(1, Math.max(0, (vh - top) / (vh * 0.45)));
        const next = p.cur + (target - p.cur) * 0.14;
        const settled = Math.abs(target - next) < 0.002;
        const v = settled ? target : next;
        if (v !== p.cur || p.cur === 0) {
          p.cur = v;
          const e = ease(v);
          const k = 1 - e;
          const s = p.el.style;
          if (e >= 0.999) {
            s.translate = s.rotate = s.scale = s.opacity = "";
          } else {
            s.translate = `${(p.dx * k).toFixed(1)}px ${(p.dy * k).toFixed(1)}px`;
            s.rotate = `${(p.rot * k).toFixed(2)}deg`;
            s.scale = (1 - (1 - p.sc) * k).toFixed(3);
            s.opacity = Math.min(1, e * 1.35).toFixed(3);
          }
        }
        if (!settled) moving = true;
      }
      raf = moving ? requestAnimationFrame(frame) : 0;
    };

    const kick = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };
    kick();
    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
      for (const p of pieces) {
        const s = p.el.style;
        s.translate = s.rotate = s.scale = s.opacity = "";
      }
    };
  }, []);

  return null;
}
