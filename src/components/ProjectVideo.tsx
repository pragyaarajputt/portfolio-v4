"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const MQ = "(prefers-reduced-motion: reduce)";
const subscribe = (cb: () => void) => {
  const m = window.matchMedia(MQ);
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
};

/**
 * A recorded walkthrough of a real app, inside the project window. Plays muted on a loop when visible,
 * never autoplays for people who prefer reduced motion, and always has a pause button.
 */
export function ProjectVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const reduced = useSyncExternalStore(subscribe, () => window.matchMedia(MQ).matches, () => false);
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  // Play only while on screen, so a looping video doesn't run (and download) out of view.
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) el.play().catch(() => setPlaying(false));
        else el.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced, src]);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) el.play().catch(() => setPlaying(false));
    else el.pause();
  };

  return (
    <div style={{ position: "relative", aspectRatio: "1280 / 586", background: "#F1F4F7" }}>
      <video
        key={src}
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause the walkthrough" : "Play the walkthrough"}
        className="v4-pill"
        style={{
          position: "absolute",
          right: 10,
          bottom: 10,
          minHeight: 34,
          padding: "0 12px",
          borderRadius: 999,
          border: "1.5px solid #141414",
          background: "#FFFFFF",
          color: "#141414",
          font: "inherit",
          fontSize: 12,
          fontWeight: 600,
          cursor: "pointer",
          boxShadow: "0 6px 16px rgba(10,40,70,0.18)",
        }}
      >
        {playing ? "❚❚ Pause" : "▶ Play walkthrough"}
      </button>
    </div>
  );
}
