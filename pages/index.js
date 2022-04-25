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
        <title>Wallet Pilots</title>
        <meta name="description" content="Wallet Pilots" />
        <link rel="icon" href="/metamask-icon.svg" />
      </Head>
      <Typing />
      <div className={style.detail}> 
        <h1>We&apos;ll see you all soon 💎✈🔮</h1>
        <div>&rdquo;If we all worked on the assumption that what is accepted as true is really true, there would be little hope of advance.&rdquo; - Orville Wright</div>
        {account && (
        <div>
          <div className={style.ethereumContainer} />
          <div className={style.ethereumContainer} />
          <h2>We just show you this... for now 👀</h2>
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
    </div>
  );
};

export default Home;
