import Head from "next/head";
import { useWeb3React } from "@web3-react/core";

import style from "../styles/Home.module.css";
import WalletDetail from "../components/WalletDetail";
import AudioPlayer from "../components/audioPlayer/AudioPlayer";

const Home = () => {
  const { account, chainId } = useWeb3React();
  return (
    <div className={style.main}>
      <Head>
        <title>Welcome to Wallet Pilots</title>
        <meta name="description" content="Wallet Pilots" />
        <link rel="icon" href="/pilot.svg" />
      </Head>
      <div>
        <h1>Welcome to Wallet Pilot</h1>
        <p>
          Wallet Pilot is a community-driven approach to asset and utility
          management.
        </p>
        <p>
          Owning one of our 10,000 unique <a>Pilot NTFs(...soon)</a>, living on
          the ethereum blockchain, grants you access to{" "}
          <a>The Hanger(...soon)</a>: A community-governed portfolio management
          tool. Pilots also unlock addiontal community channels, future mints,
          digital utilities, and much more!
        </p>
        <p>
          Learn more about who we are, what we are doing, and how to get
          involved in <a>Recruitment(...soon)</a>.
        </p>
      </div>
      {account && chainId ? (<WalletDetail />) : null}
      <AudioPlayer />
    </div>
  );
};

export default Home;
