# Pragya Rajput: portfolio (v4)

My portfolio site, built with Next.js 16 and React 19 from the v4 desktop design.

## What's on the page

- **Hero:** a prompt that types itself over halftone typing hands.
- **Snapshot:** terminal, code card and portrait.
- **Projects:** a browser window with a dock.
  - PostDrip AI plays a guided tour made from real screenshots of the live app (`public/postdrip/`, captured 11 Nov 2026): Calendar, Create post with the AI caption step, Posts, Accounts and Analytics.
  - BTC/USDT Live Chart plays an animated chart that drops its connection, reconnects, fills the missed candles and goes live again. The data is simulated in the browser. The real app is at https://btc-live-chart-seven.vercel.app.
- **Under the hood:** a clickable diagram of what happens when you schedule a post in PostDrip, checked against the PostDrip source.
- **Also:** how I think, toolkit, experience, what I'm exploring, and contact.

All animations respect `prefers-reduced-motion`. Scrolling assembles cards, chips and rows from scattered positions (`ScrollAssemble.tsx`), and the portrait assembles from tiles (`AssembleImage.tsx`). On mouse and trackpad devices a custom cursor follows the pointer (`CursorFollower.tsx`). The layout restacks at 900px and 640px (`v4.css`), and the flow diagram scrolls sideways on small screens.

## Code

| Path | What it is |
|---|---|
| `src/components/V4View.tsx` | The page markup, converted from the design mockup (exact colours, spacing and type) |
| `src/components/HomePage.tsx` | State: typing prompt, project dock and flow diagram |
| `src/components/BtcScreen.tsx` | The animated BTC chart screen (SVG) |
| `src/components/DevChrome.tsx` | Editor-style status bar and the command palette (Ctrl/⌘+K or /) |
| `src/components/PostDripScreen.tsx` | The PostDrip tour: real screenshots, a cursor and the typed AI caption |
| `src/data/content.ts` | All facts and copy. Every claim comes from my resume or my repos |
| `src/app/v4.css` | Shared classes and keyframes from the design |

## Run it

```bash
npm install
npm run dev
```

```bash
npm run lint
npx tsc --noEmit
npm run build
```
