import Head from "next/head";
import Link from "next/link";
import m from "../styles/Manual.module.css";
import { Discussion } from "../components/Discussion";

export default function FirstForty() {
  return (
    <>
      <Head>
        <title>The First Forty Days — The Dad Tribe</title>
        <meta
          name="description"
          content="The fourth trimester: a dad's number one job in the first forty days after birth is getting mom healthy again."
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
            The first forty days — <em>the fourth trimester.</em>
          </p>
        </section>

        <section className={m.sec}>
          <div className={m.post}>
            <p>
              The first forty days after birth are also known as the 4th
              trimester. Dad&rsquo;s number one responsibility is to get mom back
              healthy again. Nourishing food and lots of love are the keys here;
              sleeping when baby sleeps is critical for both parents. Dad, we
              know you&rsquo;re tired &mdash; but please don&rsquo;t forget what
              mom just went through.
            </p>
            <p>
              <a
                className={m.booklink}
                href="https://www.amazon.com/First-Forty-Days-Essential-Nourishing/dp/1617691836"
                target="_blank"
                rel="noreferrer"
              >
                📖 Highly recommended reading: The First Forty Days
              </a>
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
            pageId="4"
            pageTitle="FIRST_FORTY"
            pageUrl="https://dadtribe.org/first_forty"
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
