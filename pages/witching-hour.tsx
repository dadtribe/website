import Head from "next/head";
import Link from "next/link";
import m from "../styles/Manual.module.css";
import { Discussion } from "../components/Discussion";

export default function WitchingHour() {
  return (
    <>
      <Head>
        <title>The Witching Hour — The Dad Tribe</title>
        <meta
          name="description"
          content="A field note on the witching hour — the evening stretch that undoes everyone, and what one family's looked like."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={m.wrap}>
        <div className={m.tag} style={{ marginTop: 32 }}>
          <Link href="/">The Dad Tribe · Field Manual</Link>
          <span>§02 · Field Note</span>
        </div>

        <section className={m.creed} style={{ paddingTop: 40 }}>
          <p className={m.lead}>
            The witching hour — <em>the evening that undoes everyone.</em>
          </p>
        </section>

        <section className={m.sec}>
          <div className={m.post}>
            <p>
              The witching hour happened around the 3 month mark for us. Some
              babies are said to calm down, but when she reached this age, our
              baby did the opposite. She was so chill that we often got jealous
              remarks around how chill our baby was. Right around 90 days on
              this planet, she started going apeshit in the evenings,
              particularly from 6&ndash;8pm. Just knew it was coming no matter
              how peaceful the time leading up to it. Scream crying, tears
              streaming, painful stuff to watch as a parent. Many valiant
              efforts were made, and to be quite honest I&rsquo;m not sure what
              it was, and by 5 months she got over this. But this particular
              two-hour stretch was always the worst.
            </p>
          </div>
        </section>

        <section className={m.sec} style={{ borderBottom: "none" }}>
          <div className={m.sechead}>
            <span className={m.no}>§</span>
            <h2>Your experience</h2>
            <span className={m.fill} />
          </div>
          <Discussion
            pageId="2"
            pageTitle="WITCHING_HOUR"
            pageUrl="https://dadtribe.org/witching_hour"
            prompt="What has been your experience? Share any perspective you have on this one."
          />
        </section>

        <Link
          href="/"
          className={m.mono}
          style={{ display: "inline-block", marginTop: 24, color: "var(--graphite)" }}
        >
          ← Back to the manual
        </Link>

        <footer className={m.footer} style={{ marginTop: 46 }}>
          <span>The Dad Tribe © 2026</span>
          <span>Open source · dadtribe.org</span>
        </footer>
      </div>
    </>
  );
}
