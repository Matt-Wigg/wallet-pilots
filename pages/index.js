import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Welcome To Wallet Pilot</title>
        <meta name="description" content="Wallet Pilot" key="title" />
        <link rel="icon" href="/pilot.svg" />
      </Head>
      <div className={styles.container}>
        <h1>
          Welcome to <a className={styles.title}>Wallet Pilot</a>
        </h1>
        <p>
          Wallet Pilot is a community-driven approach to asset and utility
          management.
        </p>
        <p>
          Owning one of our 10,000 unique{" "}
          <Link href="/pilots">
            <a>Pilot NTFs(...soon)</a>
          </Link>
          , living on the ethereum blockchain, grants you access to{" "}
          <Link href="/hanger">
            <a>The Hanger(...soon)</a>
          </Link>
          : A community-governed portfolio management tool. Pilots also unlock
          addiontal community channels, future mints, digital utilities, and
          much more!
        </p>
        <p>
          Learn more about who we are, what we are doing, and how to get
          involved on{" "}
          <Link href="/map">
            <a>The Map(...soon)</a>
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Home;
