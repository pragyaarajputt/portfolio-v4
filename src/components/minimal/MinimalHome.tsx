"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { cardCopy, links, projects, type Project } from "@/data/content";
import { About } from "./About";

// The pipeline under the work tells a tiny shipping story as you scroll (decorative, not data).
const STOPS = [
  { label: "commit", note: "git commit -m “idea”" },
  { label: "build", note: "compiled ✓" },
  { label: "test", note: "all green ✓" },
  { label: "deploy", note: "shipping…" },
  { label: "live", note: "it’s live ✦" },
];

const STACK = ["React", "Next.js", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Prisma", "Python", "FastAPI", "Gemini", "Claude", "Vitest", "Docker"];

/** Card header art: the real app (video poster or screenshot) where one exists, otherwise a quiet illustration. */
function CardArt({ p }: { p: Project }) {
  const ref = useRef<HTMLVideoElement>(null);
  if (p.video) {
    return (
      <div
        className="m-card-art"
        onMouseEnter={() => ref.current?.play().catch(() => {})}
        onMouseLeave={() => {
          const v = ref.current;
          if (v) {
            v.pause();
            v.currentTime = 0;
          }
        }}
      >
        <video ref={ref} src={p.video.src} poster={p.video.poster} muted loop playsInline preload="none" aria-label={p.video.label} />
      </div>
    );
  }
  if (p.image) {
    return (
      <div className="m-card-art">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.image.src} alt={p.image.alt} loading="lazy" />
      </div>
    );
  }
  if (p.id === "postdrip") {
    return (
      <div className="m-card-art">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/postdrip/calendar.webp" alt="PostDrip AI's content calendar" loading="lazy" />
      </div>
    );
  }
  if (p.id === "btc") {
    // A few candles drawn by hand: decorative, not market data.
    const candles = [
      [40, 62, 30, 70, 1],
      [60, 52, 44, 66, 0],
      [80, 48, 36, 58, 1],
      [100, 40, 30, 50, 1],
      [120, 46, 38, 60, 0],
      [140, 34, 22, 44, 1],
      [160, 28, 18, 38, 1],
      [180, 34, 26, 46, 0],
      [200, 22, 12, 30, 1],
    ];
    return (
      <div className="m-card-art m-art-dark" aria-hidden="true">
        <svg viewBox="0 0 240 90" preserveAspectRatio="xMidYMid meet">
          {candles.map(([x, top, high, low, up]) => (
            <g key={x} stroke={up ? "#4ADE80" : "#F87171"} fill={up ? "#4ADE80" : "#F87171"}>
              <line x1={x} x2={x} y1={high} y2={low} strokeWidth="1.5" />
              <rect x={x - 5} y={top} width="10" height="14" rx="1.5" />
            </g>
          ))}
          <polyline points="30,64 70,56 110,50 150,40 210,28" fill="none" stroke="#FACC15" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      </div>
    );
  }
  return (
    <div className="m-card-art m-art-plain" aria-hidden="true">
      <span>{p.mark}</span>
    </div>
  );
}

function Card({ p }: { p: Project }) {
  const c = cardCopy[p.id];
  // A gentle tilt toward the pointer (mouse only; CSS ignores it for reduced motion).
  const tilt = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    e.currentTarget.style.setProperty("--ry", `${(x * 7).toFixed(2)}deg`);
    e.currentTarget.style.setProperty("--rx", `${(-y * 7).toFixed(2)}deg`);
  };
  const reset = (e: React.PointerEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty("--ry", "0deg");
    e.currentTarget.style.setProperty("--rx", "0deg");
  };
  return (
    <article className="m-card" aria-labelledby={`card-${p.id}`} onPointerMove={tilt} onPointerLeave={reset}>
      <CardArt p={p} />
      <div className="m-card-body">
        <h3 id={`card-${p.id}`}>{p.name}</h3>
        <p>{c?.short ?? p.blurb}</p>
        <div className="m-card-foot">
          <span className="m-status">
            <span className={c?.live ? "m-dot" : "m-dot m-dot-off"} aria-hidden="true" />
            {c?.status}
          </span>
          <span className="m-card-links">
            {p.code && (
              <a href={p.code} target="_blank" rel="noopener noreferrer" className="m-pill m-pill-line">
                Code ↗
              </a>
            )}
            {p.live && (
              <a href={p.live} target="_blank" rel="noopener noreferrer" className="m-pill">
                Live ↗
              </a>
            )}
          </span>
        </div>
      </div>
    </article>
  );
}

const WIDE_MQ = "(min-width: 900px) and (prefers-reduced-motion: no-preference)";
const subscribeWide = (cb: () => void) => {
  const m = window.matchMedia(WIDE_MQ);
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
};

export function MinimalHome() {
  const railRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(0);
  // Scrolling down moves the work sideways on wide screens. Phones and reduced motion get a normal swipeable row.
  const animated = useSyncExternalStore(subscribeWide, () => window.matchMedia(WIDE_MQ).matches, () => false);
  const progress = animated ? scrolled : 1;

  useEffect(() => {
    const rail = railRef.current;
    const track = trackRef.current;
    if (!rail || !track) return;
    if (!animated) {
      rail.style.height = "";
      track.style.transform = "";
      return;
    }
    let frame = 0;
    const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
    const update = () => {
      const total = rail.offsetHeight - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -rail.getBoundingClientRect().top / total)) : 0;
      track.style.transform = `translate3d(${-p * distance()}px,0,0)`;
      setScrolled(p);
    };
    const layout = () => {
      rail.style.height = `${distance() + window.innerHeight}px`;
      update();
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(layout);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", layout);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", layout);
    };
  }, [animated]);

  const reached = Math.floor(progress * (STOPS.length - 1) + 0.0001);

  return (
    <div className="m-root">
      <header className="m-nav">
        <a href="#top" className="m-name">
          Pragya Rajput
        </a>
        <nav aria-label="Main">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href={links.resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </nav>
        <a href="#contact" className="m-nav-cta">
          Say hello
        </a>
      </header>

      <main id="top">
        <section ref={railRef} id="work" className={animated ? "m-rail is-animated" : "m-rail"} aria-label="Introduction and selected work">
          <div className="m-sticky">
            <div ref={trackRef} className="m-track">
              <div className="m-hero">
                <h1>
                  I build the product,{" "}
                  <span className="m-scribble">
                    <em>not just the page.</em>
                    <svg viewBox="0 0 300 24" preserveAspectRatio="none" aria-hidden="true">
                      <path d="M4 16 C 60 6, 120 22, 180 12 S 270 8, 296 14" />
                    </svg>
                  </span>
                </h1>
                <div className="m-hero-side">
                  <span className="m-available">
                    <span className="m-pulse" aria-hidden="true" />
                    Open to full-time roles
                  </span>
                  <p>
                    Full-stack developer · Jr. Software Developer at CETIZION Verifica, New Delhi
                  </p>
                  <span className="m-hint">{animated ? "Scroll to deploy ↓" : "Selected work below ↓"}</span>
                </div>
              </div>
              <h2 className="m-work-title">
                Selected <em>work</em>
              </h2>
              <div className="m-cards">
                {projects.map((p) => (
                  <Card key={p.id} p={p} />
                ))}
              </div>
            </div>

            <div className="m-pipeline" aria-hidden="true">
              <div className="m-line">
                <div className="m-line-fill" style={{ width: `${progress * 100}%` }} />
                <div className="m-packet" style={{ left: `${progress * 100}%` }} />
              </div>
              <ol>
                {STOPS.map((s, i) => (
                  <li key={s.label} className={i <= reached ? "is-on" : ""}>
                    <span className="m-stop" />
                    {s.label}
                    <span className="m-note">{s.note}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <div className="m-ribbon" aria-label="Stack">
          <div className="m-ribbon-track">
            {[0, 1].map((copy) => (
              <span key={copy} aria-hidden={copy === 1 ? true : undefined}>
                {STACK.map((t) => (
                  <span key={t} className="m-ribbon-item">
                    {t}
                    <span className="m-ribbon-star" aria-hidden="true">
                      ✦
                    </span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <About />
      </main>

      <div className="m-bigname" aria-hidden="true">
        Pragya <em>Rajput</em>
      </div>
      <footer className="m-footer">
        <span>Pragya Rajput</span>
        <nav aria-label="Elsewhere">
          <a href="#contact">Email</a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </nav>
        <span>© 2026</span>
      </footer>
    </div>
  );
}
