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
        <h1>See you all soon 💎✈🔮</h1>
        <p>
          &rdquo;If we all worked on the assumption that what is accepted as
          true is really true, <br />
          there would be little hope of advance.&rdquo; - <i>Orville Wright</i>
        </p>
        {account && (
          <div>
            <div className={style.container}>
              <div className={style.stack} style={{ "--stacks": 2 }}>
                <span style={{ "--index": 0 }}>Wallet Info:</span>
                <span style={{ "--index": 1 }}>Wallet Info:</span>
                <span style={{ "--index": 2 }}>Wallet Info:</span>
              </div>
            </div>
            <div className={style.ethereumContainer}>
              <p>
                Current address:{" "}
                <span className={style.ethereumDetail}>{account}</span>
              </p>
            </div>
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
