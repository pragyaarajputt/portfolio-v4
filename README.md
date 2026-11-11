# Pragya Rajput: portfolio (v4)

My portfolio site, built with Next.js 16 and React 19 from the v4 desktop design.

## What's on the page

- **Hero:** a prompt that types itself over halftone typing hands.
- **Snapshot:** terminal, code card and portrait.
- **Projects:** a browser window with a dock.
  - PostDrip AI plays an animated tour of its Calendar, Composer, Queue and Accounts screens.
  - BTC/USDT Live Chart plays an animated chart that drops its connection, reconnects, fills the missed candles and goes live again. The data is simulated in the browser. The real app is at https://btc-live-chart-seven.vercel.app.
- **Under the hood:** a clickable diagram of what happens when you schedule a post in PostDrip, checked against the PostDrip source.
- **Also:** how I think, toolkit, experience, what I'm exploring, and contact.

All animations respect `prefers-reduced-motion`.

## Code

| Path | What it is |
|---|---|
| `src/components/V4View.tsx` | The page markup, converted from the design mockup (exact colours, spacing and type) |
| `src/components/HomePage.tsx` | State and timers: typing prompt, product tour, project dock and flow diagram |
| `src/components/BtcScreen.tsx` | The animated BTC chart screen (SVG) |
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
