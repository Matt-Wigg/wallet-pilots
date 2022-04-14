import React from "react";
import Head from "next/head";
import { useWeb3React } from "@web3-react/core";

import Typing from "../components/typing";

import styles from "../styles/Home.module.css";

const Home = () => {
  const { account, chainId } = useWeb3React();
  return (
    <div className={styles.main}>
      <Head>
        <title>Wallet Pilot</title>
        <meta name="description" content="Wallet Pilot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typing />
      <div className={styles.walletInfo}>
        {account && <p>{`Your  Address: ${account}`}</p>}
        {chainId && <p>{`Current chainId: ${chainId}`}</p>}
      </div>
    </div>
  );
};

export default Home;
