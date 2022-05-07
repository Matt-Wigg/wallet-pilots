import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home = () => {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 4,
        marginBottom: "2rem",
        width: "50%",
      }}
    />
  );
  return (
    <div className={styles.main}>
      <Head>
        <title>Welcome To Wallet Pilots</title>
        <meta name="description" content="Wallet Pilots" key="title" />
        <link rel="icon" href="/pilot.svg" />
      </Head>
      <div className={styles.container}>
        <h1>Wallet Pilots</h1>
        <ColoredLine color="#fff" />
        <p>
          Welcome to Wallet Pilots: a community-driven approach to asset and utility
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
