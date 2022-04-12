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
      <p>Connect your wallet for a little more info:</p>
      {account && <p>{`Your account is ${account}`}</p>}
      {chainId && <p>{`Your ChainID is ${chainId}`}</p>}
    </div>
  );
};

export default Home;
