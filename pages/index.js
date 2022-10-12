import Head from "next/head";

import Achievements from "../modules/achievements";
import Experience from "../modules/experience";
import Profile from "../modules/profile";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Better Self | Becoming a better version everyday</title>
        <meta name="description" content="Become a better version everyday" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Profile />
        <Experience />
        <Achievements />
      </main>
    </div>
  );
}
