/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

/**
 * A framed picture that assembles from scattered tiles as it scrolls into view.
 * Each tile is a slice of the same image, laid out with the same "cover / top" geometry
 * as the final <img>, so the tiles line up exactly. Once they land, the real image and
 * the frame's shadow take over (hiding any hairline seams). Scrolling back down
 * scatters it again.
 */

const COLS = 5;
const ROWS = 6;

function rand(seed: number) {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

const TILES = Array.from({ length: COLS * ROWS }, (_, i) => ({
  c: i % COLS,
  r: Math.floor(i / COLS),
  dx: (rand(i + 1) - 0.5) * 460,
  dy: (rand(i + 50) - 0.35) * 380,
  rot: (rand(i + 99) - 0.5) * 140,
  delay: rand(i + 7) * 0.35,
}));

const MQ = "(prefers-reduced-motion: reduce)";
const subscribeMotion = (cb: () => void) => {
  const m = window.matchMedia(MQ);
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
};

type Props = {
  src: string;
  alt: string;
  naturalWidth: number;
  naturalHeight: number;
  background: string;
  radius: number;
  shadow: string;
  style?: React.CSSProperties;
};

export function AssembleImage({ src, alt, naturalWidth, naturalHeight, background, radius, shadow, style }: Props) {
  const reduced = useSyncExternalStore(subscribeMotion, () => window.matchMedia(MQ).matches, () => false);
  const box = useRef<HTMLDivElement>(null);
  const tiles = useRef<(HTMLDivElement | null)[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [landed, setLanded] = useState(false);
  const done = reduced || landed;
  const measured = size.w > 0;

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setSize({ w: e.contentRect.width, h: e.contentRect.height }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = box.current;
    if (!el || reduced || !measured) return;
    const amp = window.innerWidth < 640 ? 0.5 : 1;
    let cur = 0;
    let raf = 0;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const frame = () => {
      const vh = window.innerHeight;
      const top = el.getBoundingClientRect().top;
      const target = Math.min(1, Math.max(0, (vh - top) / (vh * 0.7)));
      cur += (target - cur) * 0.12;
      if (Math.abs(target - cur) < 0.002) cur = target;
      TILES.forEach((t, i) => {
        const node = tiles.current[i];
        if (!node) return;
        // Tiles start at different moments, so they land one after another.
        const local = Math.min(1, Math.max(0, (cur - t.delay) / (1 - t.delay)));
        const k = 1 - ease(local);
        node.style.transform = `translate(${(t.dx * amp * k).toFixed(1)}px, ${(t.dy * amp * k).toFixed(1)}px) rotate(${(t.rot * k).toFixed(1)}deg) scale(${(1 - 0.4 * k).toFixed(3)})`;
        node.style.opacity = Math.min(1, local * 1.6).toFixed(3);
      });
      setLanded(cur > 0.995);
      raf = cur === target ? 0 : requestAnimationFrame(frame);
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
    };
  }, [reduced, measured]);

  // "cover", anchored to the top centre, matching the final <img>.
  const scale = size.w && size.h ? Math.max(size.w / naturalWidth, size.h / naturalHeight) : 0;
  const iw = naturalWidth * scale;
  const ih = naturalHeight * scale;
  const ox = (size.w - iw) / 2;
  const tw = size.w / COLS;
  const th = size.h / ROWS;

  return (
    <div
      ref={box}
      data-no-assemble
      style={{
        position: "relative",
        borderRadius: radius,
        background: done ? background : "transparent",
        boxShadow: done ? shadow : "none",
        transition: "box-shadow 400ms ease, background-color 200ms ease",
        ...style,
      }}
    >
      {!done &&
        scale > 0 &&
        TILES.map((t, i) => (
          <div
            key={i}
            ref={(n) => {
              tiles.current[i] = n;
            }}
            aria-hidden="true"
            style={{
              position: "absolute",
              left: t.c * tw,
              top: t.r * th,
              width: tw + 0.6,
              height: th + 0.6,
              backgroundColor: background,
              backgroundImage: `url(${src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: `${iw}px ${ih}px`,
              backgroundPosition: `${ox - t.c * tw}px ${-t.r * th}px`,
              opacity: 0,
              willChange: "transform, opacity",
            }}
          />
        ))}
      <img
        src={src}
        alt={alt}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          borderRadius: radius,
          objectFit: "cover",
          objectPosition: "center top",
          opacity: done ? 1 : 0,
          transition: "opacity 250ms ease",
        }}
      />
    </div>
  );
}
