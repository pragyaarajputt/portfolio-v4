"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts the leading number of a stat ("250+", "80%", "19/19") up from 0 when it scrolls into view.
 * Renders the final value on the server and for reduced motion, so the real number is always there.
 */
export function CountUp({ value }: { value: string }) {
  const m = value.match(/^(\d+)(.*)$/);
  const target = m ? Number(m[1]) : null;
  const rest = m ? m[2] : "";
  const [shown, setShown] = useState<number | null>(null);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || target === null) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1100;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - t, 3);
          setShown(Math.round(eased * target));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target]);

  return (
    <span ref={ref} aria-label={value}>
      <span aria-hidden="true">
        {target === null ? value : `${shown ?? target}${rest}`}
      </span>
    </span>
  );
}
