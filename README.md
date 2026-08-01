# The Dad Tribe

**A field manual for fatherhood — collectively maintained, tested in the field, written by the dads living it.**

Live at [dadtribe.org](https://dadtribe.org). Being a dad will break you; this is here so you hit fewer of the hard days by surprise, and rebound faster when you do.

This is an open collective. If you've learned something the hard way — the gear that actually held up, the tactic that saved a 5pm meltdown, the thing to pack so you don't forget it at the door — add it. That's the whole point.

---

## Ways to contribute

You don't need to be a developer for the first two. Open an issue or email it in and we'll get it on the page.

- ✉️ **Email it in:** [zach@davidfam.fun](mailto:zach@davidfam.fun)
- 🐛 **Open an issue / PR:** [github.com/dadtribe/website](https://github.com/dadtribe/website)

### Add a gear review

Real, first-hand verdicts only — no affiliate noise. What held up, what to skip.
Edit the `§01 Gear` section in [`components/Home.tsx`](components/Home.tsx): copy an existing `<article className={s.spec}>` card and fill in the item, the honest review, and a `Buy it` / `Skip it` verdict with a rating (1–5 bars).

### Add a packing list item

Lists live as plain data in [`pages/packing.tsx`](pages/packing.tsx) — the `ACTIVITIES` array. Each item is:

```ts
{ id: "sunhat", label: "Sun hat + baby sunscreen", ages: ["newborn", "baby", "toddler"], note: "optional tip" }
```

Tag it with the ages it applies to (`newborn` = 0–3mo, `baby` = 4–12mo, `toddler` = 1–3yr) and it shows up under the right filter automatically. Want a whole new activity? Add another entry to `ACTIVITIES`.

### Add a tip

The forum lives at [`pages/tips.tsx`](pages/tips.tsx) (still filling in — first entries welcome).

---

## Running it locally

Requires Node 18+.

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000). Pages hot-reload as you edit.

```bash
yarn build   # production build (run this before opening a PR)
yarn start   # serve the production build
```

## How it's built

- **[Next.js](https://nextjs.org/) 13** (pages router) + TypeScript
- Plain semantic JSX styled with **CSS Modules** — no UI framework
- Fonts via Google Fonts in [`pages/_document.tsx`](pages/_document.tsx): Jost (display), Source Serif 4 (body), IBM Plex Mono (labels)
- Design tokens (palette, fonts) in [`styles/globals.css`](styles/globals.css); shared styles in [`styles/Manual.module.css`](styles/Manual.module.css)
- External links + contact centralized in [`lib/config.ts`](lib/config.ts)

```
components/Home.tsx    → homepage manual (gear, tips, packing teasers, contribute)
pages/packing.tsx      → reusable packing checklists (by activity + age)
pages/tips.tsx         → tips forum
lib/config.ts          → repo URL + contact email
styles/                → globals + CSS modules
```

## License

Open source. Use it, fork it, send improvements back. If you add something that helped you, it'll probably help the next dad too.
