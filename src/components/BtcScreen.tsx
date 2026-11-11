"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";

const MQ = "(prefers-reduced-motion: reduce)";
const subscribeMotion = (cb: () => void) => {
  const m = window.matchMedia(MQ);
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
};

/**
 * An animated mockup of the BTC/USDT live chart project (simulated data, no network).
 * It loops through the app's story: live candles and VWAP, a dropped connection,
 * reconnecting, back-filling the missed candles, and going Live again.
 */

type Candle = { o: number; h: number; l: number; c: number; v: number };
type Phase = "live" | "dropped" | "reconnecting" | "filling";

const W = 640;
const H = 300;
const PAD = { l: 8, r: 62, t: 14, b: 22 };
const SHOW = 44;

function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

function nextCandle(prev: number, r: () => number): Candle {
  const o = prev;
  const drift = (r() - 0.48) * 60;
  const c = Math.max(1000, o + drift);
  const h = Math.max(o, c) + r() * 22;
  const l = Math.min(o, c) - r() * 22;
  return { o, h, l, c, v: 4 + r() * 18 };
}

function seedCandles(n: number): Candle[] {
  const r = rng(7);
  const out: Candle[] = [];
  let p = 74000;
  for (let i = 0; i < n; i++) {
    const k = nextCandle(p, r);
    out.push(k);
    p = k.c;
  }
  return out;
}

function vwapSeries(cs: Candle[]) {
  let pv = 0;
  let vol = 0;
  return cs.map((k) => {
    pv += ((k.h + k.l + k.c) / 3) * k.v;
    vol += k.v;
    return pv / vol;
  });
}

const fmt = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function BtcScreen() {
  const [candles, setCandles] = useState<Candle[]>(() => seedCandles(SHOW + 20));
  const [phase, setPhase] = useState<Phase>("live");
  const [reconnects, setReconnects] = useState(0);
  const [pressing, setPressing] = useState(false);
  const [userPaused, setPaused] = useState(false);
  const reduced = useSyncExternalStore(subscribeMotion, () => window.matchMedia(MQ).matches, () => false);
  const paused = userPaused || reduced;
  const r = useRef(rng(42));
  const missed = useRef(0);
  const phaseRef = useRef<Phase>("live");
  const pausedRef = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    if (reduced) return;
    const later = (fn: () => void, ms: number) => timers.current.push(setTimeout(fn, ms));

    // Ticks: the open candle moves several times a second; a new candle every 1.6 s.
    let ticks = 0;
    const tick = setInterval(() => {
      if (pausedRef.current) return;
      ticks++;
      const live = phaseRef.current === "live";
      if (!live) {
        if (ticks % 8 === 0) missed.current++; // time keeps passing while disconnected
        return;
      }
      setCandles((cs) => {
        const next = cs.slice();
        if (ticks % 8 === 0) {
          next.push(nextCandle(next[next.length - 1].c, r.current));
          if (next.length > SHOW + 40) next.shift();
        } else {
          const k = { ...next[next.length - 1] };
          k.c = Math.max(1000, k.c + (r.current() - 0.5) * 18);
          k.h = Math.max(k.h, k.c);
          k.l = Math.min(k.l, k.c);
          k.v += r.current() * 1.5;
          next[next.length - 1] = k;
        }
        return next;
      });
    }, 200);

    // The story: drop, reconnect, fill the gap, live again.
    const story = () => {
      if (pausedRef.current) return;
      setPressing(true);
      later(() => {
        setPressing(false);
        missed.current = 0;
        setPhase("dropped");
      }, 450);
      later(() => setPhase("reconnecting"), 1900);
      later(() => setPhase("filling"), 3600);
      later(() => {
        setCandles((cs) => {
          const next = cs.slice();
          const n = Math.max(2, missed.current);
          for (let i = 0; i < n; i++) next.push(nextCandle(next[next.length - 1].c, r.current));
          return next.slice(-(SHOW + 40));
        });
        setReconnects((x) => x + 1);
        setPhase("live");
      }, 4700);
    };
    let loop: ReturnType<typeof setInterval> | undefined;
    later(() => {
      story();
      loop = setInterval(story, 14000);
    }, 6000);

    const all = timers.current;
    return () => {
      clearInterval(tick);
      clearInterval(loop);
      all.forEach(clearTimeout);
    };
  }, [reduced]);

  const view = candles.slice(-SHOW);
  const vw = useMemo(() => vwapSeries(candles).slice(-SHOW), [candles]);
  const last = view[view.length - 1];
  const lastV = vw[vw.length - 1];
  const hi = Math.max(...view.map((k) => k.h), ...vw) + 10;
  const lo = Math.min(...view.map((k) => k.l), ...vw) - 10;
  const y = (p: number) => PAD.t + ((hi - p) / (hi - lo)) * (H - PAD.t - PAD.b);
  const step = (W - PAD.l - PAD.r) / SHOW;
  const x = (i: number) => PAD.l + i * step + step / 2;
  const diff = last.c - lastV;

  const status: Record<Phase, { text: string; bg: string; fg: string }> = {
    live: { text: "Live", bg: "#E6F6EA", fg: "#1F7A3A" },
    dropped: { text: "Disconnected", bg: "#FDE7E7", fg: "#B42318" },
    reconnecting: { text: "Reconnecting…", bg: "#FFF4D6", fg: "#8A5A00" },
    filling: { text: "Filling gap…", bg: "#E8EEFF", fg: "#2C63FE" },
  };
  const st = status[phase];
  const vwPath = vw.map((p, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(p).toFixed(1)}`).join(" ");
  const offline = phase !== "live";

  return (
    <div style={{ position: "relative", background: "#FFFFFF", padding: "18px 20px 14px", fontFamily: "var(--font-archivo), system-ui, sans-serif", color: "#141414" }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 18px", marginBottom: 10 }}>
        <span style={{ fontWeight: 700, fontSize: 18 }}>BTC/USDT</span>
        <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 22, fontWeight: 500, fontVariantNumeric: "tabular-nums" }}>${fmt(last.c)}</span>
        <span style={{ fontSize: 13, color: diff >= 0 ? "#1F7A3A" : "#B42318" }}>
          ${fmt(Math.abs(diff))} {diff >= 0 ? "above" : "below"} VWAP
        </span>
        <span aria-live="polite" style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px", borderRadius: 999, background: st.bg, color: st.fg, fontSize: 12, fontWeight: 600 }}>
          <span className={phase === "live" ? "btc-pulse" : undefined} style={{ width: 7, height: 7, borderRadius: 99, background: st.fg }} />
          {st.text}
        </span>
        <span style={{ fontSize: 12, color: "#5C5C5C" }}>Reconnected {reconnects} {reconnects === 1 ? "time" : "times"}</span>
        <span
          aria-hidden="true"
          style={{
            padding: "6px 12px",
            borderRadius: 999,
            border: "1.5px solid #141414",
            fontSize: 12,
            fontWeight: 600,
            background: pressing ? "#141414" : "#FFFFFF",
            color: pressing ? "#FFFFFF" : "#141414",
            transform: pressing ? "scale(0.95)" : "none",
            transition: "all 150ms",
            position: "relative",
          }}
        >
          Drop connection
          {pressing && (
            <svg width="22" height="22" viewBox="0 0 24 24" style={{ position: "absolute", right: -10, bottom: -14 }}>
              <path d="M4 2l16 10-7 1.5L9.5 21z" fill="#141414" stroke="#FFFFFF" strokeWidth="1.5" />
            </svg>
          )}
        </span>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Animated BTC/USDT one-minute candlestick chart with a VWAP line" style={{ display: "block", width: "100%", height: "auto", borderRadius: 10, background: "#FAFAF7", border: "1px solid #ECECEC" }}>
        {[0.2, 0.4, 0.6, 0.8].map((f) => (
          <line key={f} x1={PAD.l} x2={W - PAD.r} y1={PAD.t + f * (H - PAD.t - PAD.b)} y2={PAD.t + f * (H - PAD.t - PAD.b)} stroke="#EFEFEF" />
        ))}
        {view.map((k, i) => {
          const up = k.c >= k.o;
          const color = up ? "#1F9D55" : "#E5484D";
          const top = y(Math.max(k.o, k.c));
          const bh = Math.max(1.2, Math.abs(y(k.o) - y(k.c)));
          return (
            <g key={candles.length - SHOW + i}>
              <line x1={x(i)} x2={x(i)} y1={y(k.h)} y2={y(k.l)} stroke={color} strokeWidth={1.2} />
              <rect x={x(i) - step * 0.32} y={top} width={step * 0.64} height={bh} fill={up ? "#FAFAF7" : color} stroke={color} strokeWidth={1.2} />
            </g>
          );
        })}
        <path d={vwPath} fill="none" stroke="#2C63FE" strokeWidth={2} />
        <line x1={PAD.l} x2={W - PAD.r} y1={y(last.c)} y2={y(last.c)} stroke="#141414" strokeDasharray="3 4" strokeWidth={1} />
        <rect x={W - PAD.r + 4} y={y(last.c) - 10} width={PAD.r - 6} height={20} rx={4} fill="#141414" />
        <text x={W - PAD.r / 2 + 1} y={y(last.c) + 4} textAnchor="middle" fill="#FFFFFF" fontSize={10} fontFamily="var(--font-jetbrains), monospace">
          {Math.round(last.c).toLocaleString("en-US")}
        </text>
        <text x={PAD.l + 4} y={H - 7} fontSize={10} fill="#5C5C5C" fontFamily="var(--font-jetbrains), monospace">
          1m candles · VWAP resets 00:00 UTC
        </text>
        <text x={W - PAD.r - 4} y={H - 7} textAnchor="end" fontSize={10} fill="#2C63FE" fontFamily="var(--font-jetbrains), monospace">
          VWAP {fmt(lastV)}
        </text>
        {offline && (
          <g>
            <rect x={W - PAD.r - 150} y={PAD.t + 6} width={144} height={28} rx={8} fill="#141414" opacity={0.88} />
            <text x={W - PAD.r - 78} y={PAD.t + 24} textAnchor="middle" fill="#FFFFFF" fontSize={11} fontFamily="var(--font-jetbrains), monospace">
              {phase === "dropped" ? "socket closed" : phase === "reconnecting" ? "backoff + jitter…" : "REST: filling gap"}
            </text>
          </g>
        )}
      </svg>

      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, marginTop: 10, fontSize: 12, color: "#5C5C5C", fontFamily: "var(--font-jetbrains), monospace" }}>
        <span>Prototype mockup · simulated data, not a screenshot</span>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          disabled={reduced}
          style={{ marginLeft: "auto", minHeight: 32, padding: "0 12px", borderRadius: 999, border: "1px solid #CFCFCF", background: "#FFFFFF", color: "#141414", font: "inherit", fontSize: 12, cursor: "pointer" }}
        >
          {paused ? "Play animation" : "Pause animation"}
        </button>
      </div>
    </div>
  );
}
