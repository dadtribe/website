import Head from "next/head";
import Link from "next/link";
import m from "../styles/Manual.module.css";
import { Discussion } from "../components/Discussion";

export default function Tips() {
  return (
    <>
      <Head>
        <title>Tips — The Dad Tribe</title>
        <meta
          name="description"
          content="The open forum — hard-won tips on being a good dad and a good partner, from the dads living it."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={m.wrap}>
        <div className={m.tag} style={{ marginTop: 32 }}>
          <Link href="/">The Dad Tribe · Field Manual</Link>
          <span>§02 · The Open Forum</span>
        </div>

        <section className={m.creed} style={{ paddingTop: 40 }}>
          <p className={m.lead}>
            The open forum — <em>tips from the dads living it.</em>
          </p>
          <p className={m.note}>
            No gurus, no gatekeeping. Add what you learned the hard way; take
            what helps.
          </p>
        </section>

        <section className={m.sec}>
          <div className={m.sechead}>
            <span className={m.no}>§02a</span>
            <h2>Being a good dad</h2>
            <span className={m.fill} />
          </div>
          <Discussion
            pageId="3"
            pageTitle="DAD_TIPS"
            pageUrl="https://dadtribe.org/dad_tips"
            prompt="What are your best dad tips? Add yours below."
          />
        </section>

        <section className={m.sec} style={{ borderBottom: "none" }}>
          <div className={m.sechead}>
            <span className={m.no}>§02b</span>
            <h2>Being a good partner</h2>
            <span className={m.fill} />
          </div>
          <Discussion
            pageId="4"
            pageTitle="PARTNER_TIPS"
            pageUrl="https://dadtribe.org/partner_tips"
            prompt="What are your best tips for being a good partner? Add yours below."
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
