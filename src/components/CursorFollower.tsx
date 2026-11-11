"use client";

import { useEffect, useRef } from "react";

/**
 * A custom cursor: a dot that tracks the pointer exactly and a ring that follows with a lag.
 * The ring grows over links and buttons and squeezes on press. Only on fine pointers
 * (mouse / trackpad) and never with prefers-reduced-motion; touch devices keep their default.
 */
export function CursorFollower() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced || !dot.current || !ring.current) return;

    const html = document.documentElement;
    html.classList.add("has-custom-cursor");
    const d = dot.current;
    const r = ring.current;
    let x = -100, y = -100, rx = -100, ry = -100;
    let hover = false, down = false, visible = false;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!visible) {
        visible = true;
        rx = x;
        ry = y;
        d.style.opacity = r.style.opacity = "1";
      }
      const t = e.target as Element | null;
      hover = !!t?.closest("a, button, [role='button'], summary, label, .v4-dock, .v4f-card");
    };
    const onLeave = () => {
      visible = false;
      d.style.opacity = r.style.opacity = "0";
    };
    const onDown = () => (down = true);
    const onUp = () => (down = false);

    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      const s = (hover ? 1.9 : 1) * (down ? 0.75 : 1);
      d.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${hover ? 0 : 1})`;
      r.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${s})`;
      r.classList.toggle("is-hover", hover);
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      html.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cc-ring" aria-hidden="true" />
      <div ref={dot} className="cc-dot" aria-hidden="true" />
    </>
  );
}
