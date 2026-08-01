import Head from "next/head";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import m from "../styles/Manual.module.css";
import s from "../styles/Packing.module.css";
import { REPO_URL, CONTACT_EMAIL } from "../lib/config";

type AgeId = "newborn" | "baby" | "toddler";
type ActivityId = "day" | "overnight" | "flight" | "beach" | "hospital";

type Item = { id: string; label: string; ages: AgeId[]; note?: string };
type Activity = { id: ActivityId; name: string; items: Item[] };

const ALL: AgeId[] = ["newborn", "baby", "toddler"];

const AGES: { id: AgeId; label: string }[] = [
  { id: "newborn", label: "Newborn · 0–3 mo" },
  { id: "baby", label: "Baby · 4–12 mo" },
  { id: "toddler", label: "Toddler · 1–3 yr" },
];

const ACTIVITIES: Activity[] = [
  {
    id: "day",
    name: "Day Trip",
    items: [
      { id: "diapers", label: "Diapers (1 per hour, plus 2 spare)", ages: ["newborn", "baby", "toddler"] },
      { id: "wipes", label: "Wipes — travel pack", ages: ALL },
      { id: "changepad", label: "Portable changing pad", ages: ["newborn", "baby"] },
      { id: "bags", label: "Dog-poop bags for dirty diapers", ages: ALL },
      { id: "outfit", label: "One full change of clothes", ages: ALL },
      { id: "burp", label: "Burp cloth / bib", ages: ["newborn", "baby"] },
      { id: "bottle", label: "Bottle + formula / expressed milk", ages: ["newborn", "baby"] },
      { id: "snacks", label: "Snacks + spill-proof cup", ages: ["baby", "toddler"] },
      { id: "sanitizer", label: "Hand sanitizer", ages: ALL },
      { id: "carrier", label: "Carrier or lightweight stroller", ages: ["newborn", "baby"] },
      { id: "toy", label: "One quiet toy / comfort object", ages: ["baby", "toddler"] },
      { id: "sunhat", label: "Sun hat + baby sunscreen", ages: ALL },
    ],
  },
  {
    id: "overnight",
    name: "Overnight Stay",
    items: [
      { id: "diapers", label: "Diapers — count nights × 6, round up", ages: ALL },
      { id: "wipes", label: "Wipes — full pack", ages: ALL },
      { id: "sleepsack", label: "Sleep sack / swaddle", ages: ["newborn", "baby"] },
      { id: "pjs", label: "Pajamas (2 sets)", ages: ALL },
      { id: "outfits", label: "Outfits — 2 per day", ages: ALL },
      { id: "noise", label: "White-noise machine", ages: ALL, note: "The MVP. Do not forget this one." },
      { id: "monitor", label: "Baby monitor", ages: ["newborn", "baby", "toddler"] },
      { id: "travelcrib", label: "Travel crib / pack-n-play", ages: ["newborn", "baby", "toddler"] },
      { id: "lovey", label: "Comfort object / lovey", ages: ["baby", "toddler"] },
      { id: "bath", label: "Travel toiletries + baby wash", ages: ALL },
      { id: "meds", label: "Infant meds + thermometer", ages: ALL },
      { id: "books", label: "2 bedtime books", ages: ["baby", "toddler"] },
    ],
  },
  {
    id: "flight",
    name: "Air Travel",
    items: [
      { id: "docs", label: "IDs / passports / birth certificate", ages: ALL, note: "Lap infants often need proof of age." },
      { id: "carseat", label: "Car seat (gate-check tag)", ages: ALL },
      { id: "diapers", label: "Diapers — double what you think", ages: ["newborn", "baby", "toddler"] },
      { id: "changes", label: "2 changes of clothes (+ 1 for you)", ages: ALL },
      { id: "feed", label: "Bottle / snacks for takeoff & landing", ages: ALL, note: "Sucking helps their ears." },
      { id: "pacifier", label: "Pacifiers (bring spares)", ages: ["newborn", "baby"] },
      { id: "wipes", label: "Wipes + sanitizing wipes", ages: ALL },
      { id: "bags", label: "Zip bags for messes", ages: ALL },
      { id: "carrier", label: "Carrier — keeps hands free in security", ages: ["newborn", "baby"] },
      { id: "toys", label: "New small toys / sticker book", ages: ["baby", "toddler"], note: "Novelty buys you time." },
      { id: "tablet", label: "Tablet + headphones, pre-loaded", ages: ["toddler"] },
      { id: "blanket", label: "Blanket / muslin", ages: ["newborn", "baby"] },
    ],
  },
  {
    id: "beach",
    name: "Beach / Pool",
    items: [
      { id: "swimdiaper", label: "Swim diapers", ages: ["newborn", "baby", "toddler"] },
      { id: "sunscreen", label: "Baby sunscreen (SPF 50+)", ages: ["baby", "toddler"], note: "Under 6 mo: shade, not sunscreen." },
      { id: "shade", label: "Pop-up shade tent / umbrella", ages: ALL },
      { id: "sunhat", label: "Wide-brim sun hat", ages: ALL },
      { id: "rashguard", label: "UV rash guard + swimsuit", ages: ALL },
      { id: "towels", label: "Towels (2) + changing towel", ages: ALL },
      { id: "water", label: "Water — for drinking and rinsing", ages: ALL },
      { id: "snacks", label: "Snacks in a sealed cooler", ages: ["baby", "toddler"] },
      { id: "toys", label: "Bucket + spade / pool floaty", ages: ["baby", "toddler"] },
      { id: "changeouterfit", label: "Dry change of clothes", ages: ALL },
      { id: "firstaid", label: "Mini first-aid + aloe", ages: ALL },
    ],
  },
  {
    id: "hospital",
    name: "Hospital Bag",
    items: [
      { id: "plan", label: "Birth plan + insurance + IDs", ages: ["newborn"] },
      { id: "gobag", label: "Phone charger (long cable)", ages: ["newborn"] },
      { id: "cominghome", label: "Coming-home outfit + swaddle", ages: ["newborn"] },
      { id: "carseatinstall", label: "Car seat — installed in advance", ages: ["newborn"], note: "They won't discharge you without it." },
      { id: "newborndiapers", label: "Newborn diapers + wipes", ages: ["newborn"] },
      { id: "mombag", label: "Bag for mom: comfy clothes, toiletries", ages: ["newborn"] },
      { id: "snacksdad", label: "Snacks + water for the long hours", ages: ["newborn"] },
      { id: "pillow", label: "Your own pillow (from home)", ages: ["newborn"] },
      { id: "camera", label: "Camera / phone with space cleared", ages: ["newborn"] },
      { id: "cash", label: "Cash for parking + vending", ages: ["newborn"] },
      { id: "list", label: "Who-to-call list", ages: ["newborn"] },
    ],
  },
];

const STORAGE_KEY = "dadtribe:packing:v1";

type Checked = Record<string, Record<string, boolean>>;

export default function Packing() {
  const [activity, setActivity] = useState<ActivityId>("day");
  const [age, setAge] = useState<AgeId>("newborn");
  const [checked, setChecked] = useState<Checked>({});
  const [hydrated, setHydrated] = useState(false);

  // Load saved progress once, on the client.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setChecked(JSON.parse(raw));
    } catch {
      /* ignore corrupt storage */
    }
    setHydrated(true);
  }, []);

  // Persist whenever progress changes (after hydration).
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {
      /* storage full or blocked — checklist still works this session */
    }
  }, [checked, hydrated]);

  const current = ACTIVITIES.find((a) => a.id === activity) as Activity;

  const items = useMemo(
    () => current.items.filter((it) => it.ages.includes(age)),
    [current, age]
  );

  const toggle = (itemId: string) =>
    setChecked((prev) => {
      const forActivity = { ...(prev[activity] || {}) };
      forActivity[itemId] = !forActivity[itemId];
      return { ...prev, [activity]: forActivity };
    });

  const resetCurrent = () =>
    setChecked((prev) => ({ ...prev, [activity]: {} }));

  const packedCount = items.filter((it) => checked[activity]?.[it.id]).length;
  const total = items.length;
  const pct = total ? Math.round((packedCount / total) * 100) : 0;
  const allDone = total > 0 && packedCount === total;

  return (
    <>
      <Head>
        <title>Packing Lists — The Dad Tribe</title>
        <meta
          name="description"
          content="Reusable packing checklists for dads — by activity and by age. Check items off, reset for the next trip."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={m.wrap}>
        <div className={m.tag} style={{ marginTop: 32 }}>
          <Link href="/">The Dad Tribe · Field Manual</Link>
          <span>§03 · Packing Lists</span>
        </div>

        <section className={s.intro}>
          <p className={s.kicker}>Reusable Checklist</p>
          <h1 className={s.h1}>Pack it once, remember it forever</h1>
          <p className={s.blurb}>
            Pick the trip and the age. Check things off as they go in the bag —
            it saves in this browser, so it&rsquo;s waiting exactly where you left
            it. Reset when you&rsquo;re home and pack again next time.
          </p>
        </section>

        <div className={s.filters}>
          <div className={s.group}>
            <span className={s.groupLabel}>Activity</span>
            {ACTIVITIES.map((a) => (
              <button
                key={a.id}
                type="button"
                className={`${s.chip} ${activity === a.id ? s.chipOn : ""}`}
                aria-pressed={activity === a.id}
                onClick={() => setActivity(a.id)}
              >
                {a.name}
              </button>
            ))}
          </div>
          <div className={s.group}>
            <span className={s.groupLabel}>Age</span>
            {AGES.map((a) => (
              <button
                key={a.id}
                type="button"
                className={`${s.chip} ${age === a.id ? s.chipOn : ""}`}
                aria-pressed={age === a.id}
                onClick={() => setAge(a.id)}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>

        <section className={s.sheet}>
          <div className={s.sheetHead}>
            <h2 className={s.sheetTitle}>{current.name}</h2>
            <div className={s.sheetMeta}>
              <span className={s.count}>
                {hydrated ? `${packedCount} / ${total} packed` : `${total} items`}
              </span>
              <button type="button" className={s.reset} onClick={resetCurrent}>
                Reset
              </button>
            </div>
          </div>

          <div className={s.bar}>
            <div className={s.barFill} style={{ width: `${hydrated ? pct : 0}%` }} />
          </div>

          {items.length === 0 ? (
            <p className={s.empty}>
              No items for this combination yet — this list is for a different
              stage. Try another age.
            </p>
          ) : (
            items.map((it) => {
              const on = !!checked[activity]?.[it.id];
              return (
                <label key={it.id} className={s.item}>
                  <input
                    type="checkbox"
                    checked={on}
                    onChange={() => toggle(it.id)}
                    style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
                  />
                  <span className={`${s.box} ${on ? s.boxOn : ""}`} aria-hidden="true">
                    <svg className={`${s.check} ${on ? s.checkOn : ""}`} viewBox="0 0 14 14">
                      <polyline points="2,7 6,11 12,3" />
                    </svg>
                  </span>
                  <span className={s.itemBody}>
                    <span className={`${s.itemLabel} ${on ? s.itemDone : ""}`}>
                      {it.label}
                    </span>
                    {it.note && <span className={s.itemNote}>↳ {it.note}</span>}
                  </span>
                </label>
              );
            })
          )}

          {allDone && <div className={s.done}>All packed. Go have a good day. ✓</div>}
        </section>

        <p className={s.hint}>
          Got a list we&rsquo;re missing? It&rsquo;s open source —{" "}
          <a href={REPO_URL} target="_blank" rel="noreferrer">
            add it in the repo
          </a>{" "}
          or{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>email it in</a>.
        </p>

        <Link href="/" className={s.back}>
          ← Back to the manual
        </Link>

        <footer className={m.footer} style={{ marginTop: 46 }}>
          <span>The Dad Tribe © 2026</span>
          <span>
            <a href={REPO_URL} target="_blank" rel="noreferrer">
              Open source
            </a>{" "}
            · <a href={`mailto:${CONTACT_EMAIL}`}>Get in touch</a>
          </span>
        </footer>
      </div>
    </>
  );
}
