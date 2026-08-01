import Head from "next/head";
import { Home } from "../components/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>The Dad Tribe — Field Manual for Fatherhood</title>
        <meta
          name="description"
          content="A collectively maintained, field-tested handbook for fatherhood — gear reviews, tips, and reusable packing lists."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
