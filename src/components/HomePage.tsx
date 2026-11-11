"use client";

import { useEffect, useRef, useState } from "react";
import { V4View } from "./V4View";
import { BtcScreen } from "./BtcScreen";
import { flowNodes, prompts, draftText, screens, projects, links, type FlowId } from "@/data/content";

type State = {
  p: number; // selected project
  pi: number; // prompt index
  len: number; // typed length
  mode: "type" | "hold" | "del";
  hold: number;
  screen: number; // PostDrip tour screen
  aim: number; // where the tour cursor points
  draft: number; // typed length of the AI draft
  paused: boolean;
  fnode: FlowId;
};

const initial: State = { p: 0, pi: 0, len: 0, mode: "type", hold: 0, screen: 0, aim: 0, draft: 0, paused: false, fnode: "api" };

function step(s: State): State {
  const text = prompts[s.pi];
  const n = { ...s };
  if (s.mode === "type") {
    if (s.len < text.length) n.len = s.len + 1;
    else {
      n.mode = "hold";
      n.hold = 0;
    }
  } else if (s.mode === "hold") {
    n.hold = s.hold + 1;
    if (n.hold > 24) n.mode = "del";
  } else if (s.len > 0) n.len = Math.max(0, s.len - 2);
  else {
    n.mode = "type";
    n.pi = (s.pi + 1) % prompts.length;
  }
  if (s.screen === 1 && s.draft < draftText.length) n.draft = s.draft + 2;
  return n;
}

export function HomePage() {
  const [s, setS] = useState<State>(initial);
  const reduced = useRef(false);
  const swap = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) {
      setS((x) => ({ ...x, len: prompts[0].length, mode: "hold", draft: draftText.length, paused: true }));
      return;
    }
    const tick = setInterval(() => setS(step), 70);
    const proto = setInterval(() => {
      setS((x) => {
        if (x.paused || x.p !== 0) return x;
        const next = (x.screen + 1) % screens.length;
        if (swap.current) clearTimeout(swap.current);
        swap.current = setTimeout(() => setS((y) => ({ ...y, screen: next, draft: next === 1 ? 0 : y.draft })), 750);
        return { ...x, aim: next };
      });
    }, 3600);
    return () => {
      clearInterval(tick);
      clearInterval(proto);
      if (swap.current) clearTimeout(swap.current);
    };
  }, []);

  const go = (i: number) => {
    if (swap.current) clearTimeout(swap.current);
    setS((x) => ({ ...x, aim: i, screen: i, draft: i === 1 ? (reduced.current ? draftText.length : 0) : x.draft }));
  };

  const drafting = s.screen === 1 && s.draft < draftText.length;
  const cur = projects[s.p] ?? projects[0];

  const fsel: Record<string, string> = {};
  const fpress: Record<string, string> = {};
  const fpick: Record<string, () => void> = {};
  (Object.keys(flowNodes) as FlowId[]).forEach((k) => {
    fsel[k] = k === s.fnode ? "is-sel" : "";
    fpress[k] = k === s.fnode ? "true" : "false";
    fpick[k] = () => setS((x) => ({ ...x, fnode: k }));
  });

  const v = {
    heroCls: "v4-art" + (s.mode === "hold" ? "" : " v4-typing"),
    promptText: prompts[s.pi].slice(0, s.len),
    nav: screens.map((label, i) => ({
      label,
      sel: i === s.screen ? "true" : "false",
      go: () => go(i),
      style:
        "height: 40px; display: flex; align-items: center; padding: 0 12px; border: 0; border-radius: 10px; font-family: inherit; font-size: 14px; text-align: left; cursor: pointer; " +
        (i === s.screen ? "background: #E0B9E2; color: #141414; font-weight: 600;" : "background: transparent; color: #444444;"),
    })),
    cursorStyle: `position: absolute; left: 117px; top: ${90 + s.aim * 44}px; width: 40px; height: 40px; pointer-events: none; mix-blend-mode: multiply; z-index: 2;`,
    screenTitle: screens[s.screen],
    scCal: s.screen === 0,
    scComp: s.screen === 1,
    scQueue: s.screen === 2,
    scAcc: s.screen === 3,
    draftShown: draftText.slice(0, s.draft),
    genStyle:
      "min-height: 36px; display: inline-flex; align-items: center; padding: 0 14px; border-radius: 999px; font-size: 13px; font-weight: 600; " +
      (drafting ? "background: #2C63FE; color: #FFFFFF;" : "background: #ECFF18; color: #141414;"),
    genNote: drafting ? "AI is drafting…" : "Review, edit, then schedule",
    pauseLabel: s.paused ? "Play tour" : "Pause tour",
    togglePause: () => setS((x) => ({ ...x, paused: !x.paused })),
    fsel,
    fpress,
    fpick,
    fnode: flowNodes[s.fnode],
    dock: projects.map((d, i) => {
      const on = i === s.p;
      return {
        ...d,
        sel: on ? "true" : "false",
        pick: () => setS((x) => ({ ...x, p: i })),
        style: `width: 60px; height: 60px; border-radius: 16px; border: 1.5px solid #141414; background: ${d.bg}; color: #141414; font-family: inherit; font-weight: 700; font-size: ${d.mark.length > 2 ? 15 : 17}px; cursor: pointer; box-shadow: 0 6px 14px rgba(10,40,70,0.2);`,
        dot: `width: 5px; height: 5px; border-radius: 99px; background: ${on ? "#141414" : "transparent"};`,
      };
    }),
    proj: { ...cur, isFlagship: cur.id === "postdrip", isBtc: cur.id === "btc", isOther: cur.id !== "postdrip" && cur.id !== "btc" },
    BtcScreen,
    links,
  };

  return <V4View v={v} />;
}
