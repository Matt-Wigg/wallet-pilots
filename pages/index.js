import React from "react";
import Head from "next/head";
import { useWeb3React } from "@web3-react/core";

import Typing from "../components/typing";

import style from "../styles/Home.module.css";

const Home = () => {
  const { account, chainId } = useWeb3React();
  return (
    <div className={style.main}>
      <Head>
        <title>Wallet Pilot</title>
        <meta name="description" content="Wallet Pilot" />
        <link rel="icon" href="/metamask-icon.svg" />
      </Head>
      <Typing />
      <div>
        <h1>
          Welcome to <span className={style.ethereumDetail}>Wallet Pilot</span>
        </h1>
      </div>
      {!account && !chainId ? (
        <div className={style.walletInfo}>
          <h2>Getting started</h2>
          <p>
            To utilize Wallet Pilot&apos;s functional and analytical
            capabilities, you require an Ethereum wallet.
          </p>
          <p>
            If you already own an Etherium wallet, use it to connect to Wallet
            Pilot via the connect wallet button.
          </p>
          <div className={style.walletInfo}>
            <p>
              Please visit{" "}
              <a className={style.ethereumDetail} href="https://ethereum.org/">
                www.ethereum.org
              </a>{" "}
              to learn more about Ethereum, wallets, smart contracts,
              cryptocurrency, and other cool things.{" "}
            </p>
          </div>
        </div>
      ) : (
        <div className={style.walletInfo}>
          {account && (
            <div>
              <h2>Your Address:</h2>
              <p className={style.ethereumDetail}>{account}</p>
            </div>
          )}
          {chainId && (
            <div className={style.ethereumContainer}>
              <h2>Current chainId:</h2>
              <p className={style.ethereumDetail}>{chainId}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
