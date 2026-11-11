"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { V4View } from "./V4View";
import { BtcScreen } from "./BtcScreen";
import { PostDripScreen } from "./PostDripScreen";
import { AssembleImage } from "./AssembleImage";
import { CursorFollower } from "./CursorFollower";
import { ScrollAssemble } from "./ScrollAssemble";
import { flowNodes, prompts, projects, links, type FlowId } from "@/data/content";

type Typing = { pi: number; len: number; mode: "type" | "hold" | "del"; hold: number };

function step(s: Typing): Typing {
  const text = prompts[s.pi];
  if (s.mode === "type") return s.len < text.length ? { ...s, len: s.len + 1 } : { ...s, mode: "hold", hold: 0 };
  if (s.mode === "hold") return s.hold > 24 ? { ...s, mode: "del" } : { ...s, hold: s.hold + 1 };
  if (s.len > 0) return { ...s, len: Math.max(0, s.len - 2) };
  return { ...s, mode: "type", pi: (s.pi + 1) % prompts.length };
}

const MQ = "(prefers-reduced-motion: reduce)";
const subscribeMotion = (cb: () => void) => {
  const m = window.matchMedia(MQ);
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
};

export function HomePage() {
  const reduced = useSyncExternalStore(subscribeMotion, () => window.matchMedia(MQ).matches, () => false);
  const [typing, setTyping] = useState<Typing>({ pi: 0, len: 0, mode: "type", hold: 0 });
  const [p, setP] = useState(0);
  const [fnode, setFnode] = useState<FlowId>("api");
  const [pdUrl, setPdUrl] = useState("ai-social-platform-nine.vercel.app/calendar");

  useEffect(() => {
    if (reduced) return;
    const tick = setInterval(() => setTyping(step), 70);
    return () => clearInterval(tick);
  }, [reduced]);

  const shownTyping = reduced ? { ...typing, len: prompts[0].length, mode: "hold" as const, pi: 0 } : typing;
  const cur = projects[p] ?? projects[0];

  const fsel: Record<string, string> = {};
  const fpress: Record<string, string> = {};
  const fpick: Record<string, () => void> = {};
  (Object.keys(flowNodes) as FlowId[]).forEach((k) => {
    fsel[k] = k === fnode ? "is-sel" : "";
    fpress[k] = k === fnode ? "true" : "false";
    fpick[k] = () => setFnode(k);
  });

  const v = {
    heroCls: "v4-art" + (shownTyping.mode === "hold" ? "" : " v4-typing"),
    promptText: prompts[shownTyping.pi].slice(0, shownTyping.len),
    fsel,
    fpress,
    fpick,
    fnode: flowNodes[fnode],
    dock: projects.map((d, i) => {
      const on = i === p;
      return {
        ...d,
        sel: on ? "true" : "false",
        pick: () => setP(i),
        style: `width: 60px; height: 60px; border-radius: 16px; border: 1.5px solid #141414; background: ${d.bg}; color: #141414; font-family: inherit; font-weight: 700; font-size: ${d.mark.length > 2 ? 15 : 17}px; cursor: pointer; box-shadow: 0 6px 14px rgba(10,40,70,0.2);`,
        dot: `width: 5px; height: 5px; border-radius: 99px; background: ${on ? "#141414" : "transparent"};`,
      };
    }),
    proj: {
      ...cur,
      url: cur.id === "postdrip" ? pdUrl : cur.url,
      isFlagship: cur.id === "postdrip",
      isBtc: cur.id === "btc",
      isOther: cur.id !== "postdrip" && cur.id !== "btc",
    },
    BtcScreen,
    PostDripScreen,
    AssembleImage,
    setPdUrl,
    links,
  };

  return (
    <>
      <V4View v={v} />
      <ScrollAssemble />
      <CursorFollower />
    </>
  );
}
