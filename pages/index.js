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
      <Head>
        <title>Welcome to Pilots</title>
        <meta name="description" content="Wallet Pilots" />
        <link rel="icon" href="/metamask-icon.svg" />
      </Head>
      <div>
        <h1>Welcome to Wallet Pilot</h1>
        <p>
          Wallet Pilot is a community-driven approach to asset and utility
          management.
        </p>
        <p>
          Owning one of our 10,000 unique <a>Pilot NTFs</a>, living on the
          ethereum blockchain, grants you access to <a>The Hanger</a>: A
          community-governed portfolio management tool. Pilots also unlock
          addiontal community channels, future mints, digital utilities, and
          much more!
        </p>
        <p>
          Learn more about who we are, what we are doing, and how to get
          involved in our <a>About Us</a> section.
        </p>
      </div>
      <div>
        {account && (
          <div className={style.ethereumContainer}>
            <p>
              Current address:{" "}
              <span className={style.ethereumDetail}>{account}</span>
            </p>
          </div>
        )}
        {chainId && (
          <div className={style.ethereumContainer}>
            <p>
              Current chain id:{" "}
              <span className={style.ethereumDetail}>{chainId}</span>
            </p>
            <div className={style.ethereumContainer}>
              <p>Thats all... for now... 👀 ✈️</p>
            </div>
          </div>
        )}
      </div>
      <AudioPlayer />
    </div>
  );
};

export default Home;
