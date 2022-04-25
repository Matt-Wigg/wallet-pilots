import React from "react";
import Head from "next/head";
import { useWeb3React } from "@web3-react/core";

import Typing from "../components/typing";
import AudioPlayer from "../components/audioPlayer/AudioPlayer";

import style from "../styles/Home.module.css";

const Home = () => {
  const { account, chainId } = useWeb3React();
  return (
    <div className={style.main}>
      <AudioPlayer />
      <Head>
        <title>Wallet Pilot</title>
        <meta name="description" content="Wallet Pilot" />
        <link rel="icon" href="/metamask-icon.svg" />
      </Head>
      <Typing />
      <div></div>
      <div>
        <h1>We&apos;ll see you all soon.</h1>
        <p>
          Wallet Pilot is a celebration towards the ideas of the future, and the
          people who want to be a part of them.
        </p>
      </div>
      {account && (
        <div>
          <div className={style.ethereumContainer} />
          <div className={style.ethereumContainer} />
          <h2>More coming soon:</h2>
          <p>
            Current address:{" "}
            <span className={style.ethereumDetail}>{account}</span>
          </p>
        </div>
      )}
      {chainId && (
        <div>
          <p>
            Current chain id:{" "}
            <span className={style.ethereumDetail}>{chainId}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
