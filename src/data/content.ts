// Every fact here is checked against Pragya's resume, her repos (ai-social-platform,
// planetpulse-meeting, btc-live-chart) and the first portfolio's profile.ts.
// No metric or claim without a source. Items still marked [confirm] need Pragya's answer.

export const links = {
  github: "https://github.com/pragyaarajputt",
  linkedin: "https://www.linkedin.com/in/pragya-rajput31",
  email: "pragyarajhello@gmail.com",
  resume: "/Pragya_Rajput_Resume.pdf",
  postdrip: "https://ai-social-platform-nine.vercel.app",
  postdripCode: "https://github.com/pragyaarajputt/ai-social-platform",
  btc: "https://btc-live-chart-seven.vercel.app",
};

/** Prompts typed in the hero terminal. */
export const prompts = [
  "build a scheduling API with JWT auth",
  "draft a launch post for PostDrip",
  "why is my queue job firing twice?",
  "reconnect a dropped websocket and fill the gap",
];

export const draftText =
  "Big news: our spring menu drops Friday at 9am. Set a reminder and be first in line.";

export const screens = ["Calendar", "Composer", "Queue", "Accounts"];

export type Project = {
  id: string;
  mark: string;
  bg: string;
  name: string;
  role: string;
  stack: string;
  year: string;
  url: string;
  blurb: string;
  live?: string;
  code?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    id: "postdrip",
    mark: "PD",
    bg: "#E0B9E2",
    name: "PostDrip AI",
    role: "Solo full-stack developer",
    stack: "Next.js 16 · Express 5 · Prisma · PostgreSQL · Claude / Gemini",
    year: "2026",
    url: "ai-social-platform-nine.vercel.app/calendar",
    blurb:
      "An AI social media scheduler: write a post with AI help, put it on a calendar, and let a background worker publish it on time to Instagram, Facebook Pages, LinkedIn, X and Bluesky. 240 backend tests in CI.",
    live: links.postdrip,
    code: links.postdripCode,
  },
  {
    id: "btc",
    mark: "₿",
    bg: "#ECFF18",
    name: "BTC/USDT Live Chart",
    role: "Solo developer",
    stack: "Next.js · TypeScript · WebSockets · Lightweight Charts",
    year: "2026",
    url: "btc-live-chart-seven.vercel.app",
    blurb:
      "A live 1-minute BTC/USDT candlestick chart with session VWAP on Binance's public stream. It stays correct when the connection drops: reconnects with backoff and jitter, treats 15 seconds of silence as a dead socket, and refills missed candles over REST before going Live again.",
    live: links.btc,
  },
  {
    id: "planetpulse",
    mark: "PP",
    bg: "#F2D64B",
    name: "PlanetPulse Minutes",
    role: "Built end to end · CETIZION Verifica",
    stack: "Python · FastAPI · Next.js 16 · OpenRouter · Docker",
    year: "2026",
    url: "internal tool",
    blurb:
      "Minutes of meeting, written and emailed automatically when a call ends. A bot transcribes Hindi and English calls with real speaker names, an LLM writes schema-validated minutes, and HMAC-verified webhooks keep it reliable. About $0.30 per two-hour meeting.",
    note: "Company project. The code is private.",
  },
  {
    id: "payslip",
    mark: "HR",
    bg: "#FFFFFF",
    name: "Payslip automation",
    role: "Full-stack · CETIZION Verifica",
    stack: "MongoDB · Express · React · Node.js",
    year: "2025",
    url: "internal tool",
    blurb:
      "Payslips generated straight from the payroll database instead of by hand, with role-based access for HR and staff. It cut manual HR effort by 80% and taught me how a business actually runs on software.",
    note: "Company project. The code is private.",
  },
];

export type FlowId = "client" | "api" | "auth" | "db" | "queue" | "ai" | "social";

export const flowNodes: Record<FlowId, { label: string; tech: string; title: string; does: string; why: string }> = {
  client: {
    label: "Client",
    tech: "Next.js 16 · React 19 · React Hook Form + Zod",
    title: "The app people touch",
    does: "Calendar, composer and account screens. Forms are validated in the browser before anything is sent.",
    why: "Validating with the same Zod schemas as the API means the screen and the server agree on what a valid post is.",
  },
  api: {
    label: "API",
    tech: "Node.js · Express 5 · REST",
    title: "One front door",
    does: "Validates every request with Zod, checks identity and workspace role, then hands work to the right service.",
    why: "Keeping auth and validation in one layer means no screen can skip them.",
  },
  auth: {
    label: "Auth",
    tech: "JWT · OAuth 2.0 (PKCE) · roles",
    title: "Who, and what they can do",
    does: "Short-lived access tokens with rotating refresh tokens; social accounts connect through OAuth with PKCE; Owner, Admin, Editor and Viewer roles are checked on every request.",
    why: "A refresh token used twice is treated as stolen. Platform tokens are encrypted at rest, and refreshes are guarded by Postgres advisory locks so two jobs never race.",
  },
  db: {
    label: "Database",
    tech: "PostgreSQL · Prisma 7",
    title: "The source of truth",
    does: "Users, workspaces, connected accounts, posts, their schedule and every publish attempt.",
    why: "Posts, accounts and workspaces are tightly related, so a relational schema with committed migrations fits.",
  },
  queue: {
    label: "Job queue",
    tech: "Postgres rows · FOR UPDATE SKIP LOCKED",
    title: "Publishing on time",
    does: "Each scheduled post is a row a worker claims when it's due, even when nobody is online.",
    why: "No extra Redis to run. SKIP LOCKED lets several workers share the queue without taking the same job.",
  },
  ai: {
    label: "AI service",
    tech: "Claude · Gemini · structured output",
    title: "Drafting help",
    does: "Generates captions in five tones, hashtags and rewrites from a prompt and the workspace brand voice. Output is reviewed before scheduling.",
    why: "Responses come back as schema-validated JSON, so the app never has to parse free text.",
  },
  social: {
    label: "Social platforms",
    tech: "Instagram · Facebook · LinkedIn · X · Bluesky",
    title: "Where posts land",
    does: "The worker publishes through each platform's API, one adapter per platform behind a shared interface.",
    why: "Failures retry after 30s, 2m, 8m and 30m; the fifth failure is final and shown to the user.",
  },
};
