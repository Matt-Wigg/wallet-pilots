import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useWeb3React } from "@web3-react/core";

const Home = () => {
  const { account, chainId, library } = useWeb3React();
  return (
    <div className={styles.container}>
      <Head>
        <title>Wallet Pilot</title>
        <meta name="description" content="Wallet Pilot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome To Wallet Pilot</h1>
      <h2>Connect your wallet for a little more info:</h2>
      {account && <p>{`Your account is ${account}`}</p>}
      {chainId && <p>{`Your ChainID is ${chainId}`}</p>}
    </div>
  );
};

export default Home;
