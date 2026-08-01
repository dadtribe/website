import Link from "next/link";
import { ReactCusdis } from "react-cusdis";
import s from "../styles/Manual.module.css";
import { REPO_URL, CONTACT_EMAIL } from "../lib/config";

export const Home = () => (
  <div className={s.wrap}>
    <header className={s.cover}>
      <div className={s.tag}>
        <span>The Dad Tribe · Field Manual</span>
        <span>Rev. 2026.7 · Open Source</span>
      </div>
      <h1 className={`${s.title} ${s.reveal}`}>
        Field&nbsp;Manual
        <br />
        <span className={s.thin}>for</span> Fatherhood
      </h1>
      <div className={s.subline}>
        <p className={`${s.reveal} ${s.d1}`}>
          A collectively maintained handbook for the hardest, best job
          you&rsquo;ll ever do. Tested in the field. Written by the dads living
          it.
        </p>
        <span className={`${s.stamp} ${s.reveal} ${s.d2}`}>
          Ships with no instructions — so we wrote our own
        </span>
      </div>
    </header>

    <section className={s.creed}>
      <p className={s.lead}>
        Being a dad will break you —{" "}
        <em>it&rsquo;s how you get back up that counts.</em>
      </p>
      <p className={s.note}>
        This manual won&rsquo;t spare you the hard days. It&rsquo;s here so you
        hit fewer of them by surprise, and rebound faster when you do.
      </p>
      <blockquote className={s.epigraph} style={{ marginTop: 34 }}>
        <p>
          &ldquo;My father gave me the greatest gift anyone could give another
          person: he believed in me.&rdquo;
        </p>
        <span className={s.cite}>
          Jim Valvano — <b>we believe in you</b>
        </span>
      </blockquote>
    </section>

    {/* §01 — Gear */}
    <section className={s.sec}>
      <div className={s.sechead}>
        <span className={s.no}>§01</span>
        <h2>Gear · Field-Tested</h2>
        <span className={s.fill} />
      </div>
      <div className={s.specgrid}>
        <article className={s.spec}>
          <div className={s.fld}>Item / Carriers</div>
          <h3>The Everyday Carrier</h3>
          <p>
            Lived in it for the first eight months. Survives spit-up, one-handed
            clips, and the 5pm pace-around.
          </p>
          <div className={s.rating}>
            <span className={s.verdict}>Buy it</span>
            <span className={s.bars} aria-label="5 of 5">
              <i />
              <i />
              <i />
              <i />
              <i />
            </span>
          </div>
        </article>
        <article className={s.spec}>
          <div className={s.fld}>Item / Sleep</div>
          <h3>White-Noise Machine</h3>
          <p>
            The unglamorous MVP. Cheap, loud enough, and the single best return
            on a good night&rsquo;s sleep.
          </p>
          <div className={s.rating}>
            <span className={s.verdict}>Buy it</span>
            <span className={s.bars} aria-label="5 of 5">
              <i />
              <i />
              <i />
              <i />
              <i />
            </span>
          </div>
        </article>
        <article className={s.spec}>
          <div className={s.fld}>Item / Strollers</div>
          <h3>The Hyped Travel System</h3>
          <p>
            Looks great in the showroom. In practice: heavy, fiddly, and it
            never fit the trunk. Skip.
          </p>
          <div className={s.rating}>
            <span className={`${s.verdict} ${s.verdictSkip}`}>Skip it</span>
            <span className={s.bars} aria-label="2 of 5">
              <i />
              <i />
              <i className={s.off} />
              <i className={s.off} />
              <i className={s.off} />
            </span>
          </div>
        </article>
        <article className={s.spec}>
          <div className={s.fld}>Item / Round 2</div>
          <h3>Now testing: baby #2</h3>
          <p>
            New reviews landing as we live them. Second kid, same manual —
            updated for what actually held up.
          </p>
          <div className={s.rating}>
            <span className={`${s.verdict} ${s.verdictField}`}>In field</span>
            <span className={s.bars} aria-label="testing">
              <i />
              <i />
              <i />
              <i className={s.off} />
              <i className={s.off} />
            </span>
          </div>
        </article>
      </div>
    </section>

    {/* §02 — Tips */}
    <section className={s.sec}>
      <div className={s.sechead}>
        <span className={s.no}>§02</span>
        <h2>Tips · The Open Forum</h2>
        <span className={s.fill} />
      </div>
      <nav className={s.idx}>
        <Link href="/tips">
          <span className={s.t}>Tips for being a good dad</span>
          <span className={s.pg}>forum ↗</span>
        </Link>
        <Link href="/tips">
          <span className={s.t}>Tips for being a good partner</span>
          <span className={s.pg}>forum ↗</span>
        </Link>
        <Link href="/witching-hour">
          <span className={s.t}>Surviving the witching hour</span>
          <span className={s.pg}>note ↗</span>
        </Link>
        <Link href="/first-forty">
          <span className={s.t}>The first forty days</span>
          <span className={s.pg}>note ↗</span>
        </Link>
      </nav>
    </section>

    {/* §03 — Packing Lists */}
    <section className={s.sec}>
      <div className={s.sechead}>
        <span className={s.no}>§03</span>
        <h2>Packing Lists · Reusable</h2>
        <span className={s.fill} />
      </div>
      <div className={s.specgrid}>
        <Link href="/packing" className={s.spec}>
          <div className={s.fld}>Checklist / By Activity</div>
          <h3>Never forget the wipes again</h3>
          <p>
            Day trip, overnight, flight, beach, hospital bag. Check items off as
            you pack — reset for the next trip.
          </p>
          <div className={s.rating}>
            <span className={s.verdict}>Open lists ↗</span>
            <span className={s.bars} aria-label="reusable">
              <i />
              <i />
              <i />
              <i />
              <i />
            </span>
          </div>
        </Link>
        <Link href="/packing" className={s.spec}>
          <div className={s.fld}>Checklist / By Age</div>
          <h3>Right kit for the stage</h3>
          <p>
            Newborn, baby, or toddler — the list adjusts to what you actually
            need to carry at each age.
          </p>
          <div className={s.rating}>
            <span className={s.verdict}>Open lists ↗</span>
            <span className={s.bars} aria-label="reusable">
              <i />
              <i />
              <i />
              <i />
              <i />
            </span>
          </div>
        </Link>
      </div>
    </section>

    {/* Helpful links */}
    <section className={s.sec}>
      <div className={s.sechead}>
        <span className={s.no}>§04</span>
        <h2>Helpful Links</h2>
        <span className={s.fill} />
      </div>
      <div className={s.links}>
        <a
          href="https://www.fatherly.com/life/small-change-that-made-a-huge-difference-in-my-well-being"
          target="_blank"
          rel="noreferrer"
        >
          Small changes make a big difference ↗
        </a>
      </div>
    </section>

    {/* Contribute */}
    <section className={s.sec}>
      <div className={s.revise}>
        <div>
          <h2>Found something that held up? Add it.</h2>
          <p>
            Every entry here was submitted by a dad who tested it for real. No
            affiliate noise — just what worked and what didn&rsquo;t. Open a pull
            request on the repo, or just email — whatever&rsquo;s easier.
          </p>
          <div className={s.ctaRow}>
            <a
              className={s.cta}
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
            >
              ＋ Submit a revision
            </a>
            <a className={s.ctaGhost} href={`mailto:${CONTACT_EMAIL}`}>
              ✉ {CONTACT_EMAIL}
            </a>
          </div>
        </div>
        <div className={s.log}>
          <div>
            <b>+ added</b> White-noise machine · sleep
          </div>
          <div>
            <b>+ added</b> Packing lists · reusable
          </div>
          <div>
            <b>~ edited</b> Witching hour · new tactic
          </div>
          <div>
            <b>− flagged</b> Travel system · overrated
          </div>
        </div>
      </div>
    </section>

    {/* Suggest a topic — Cusdis */}
    <section className={s.sec} style={{ borderBottom: "none" }}>
      <div className={s.suggest}>
        <h3>What should the next entry be about?</h3>
        <p>
          Finances, best gear, problem-solving tactics, staying young — tell us
          what you want in the manual next.
        </p>
        <ReactCusdis
          attrs={{
            host: "https://cusdis.com",
            appId: "ed5bd525-674c-4548-be96-4cf0a5bbc5bc",
            pageId: "1",
            pageTitle: "homepage",
            pageUrl: "https://dadtribe.org/",
          }}
        />
      </div>
    </section>

    <footer className={s.footer}>
      <span>The Dad Tribe © 2026</span>
      <span>
        <a href={REPO_URL} target="_blank" rel="noreferrer">
          Open source
        </a>{" "}
        · <a href={`mailto:${CONTACT_EMAIL}`}>Get in touch</a>
      </span>
    </footer>
  </div>
);
