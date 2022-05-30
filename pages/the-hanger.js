import Head from "next/head";
import NFTSearch from "../components/NFTSearch/NFTSearch";
import styles from "../styles/Home.module.css";

const Hanger = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Hanger: Manage Assets</title>
        <meta name="description" content="Wallet Pilot" key="title" />
        <link rel="icon" href="/pilot.svg" />
      </Head>
      <h1>The Hanger:</h1>
      <NFTSearch />
    </div>
  );
};

export default Hanger;
