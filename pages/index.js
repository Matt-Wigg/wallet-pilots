import Head from "next/head";
import Link from "next/link";
import { useWeb3React } from "@web3-react/core";

import style from "../styles/Home.module.css";
import WalletDetail from "../components/WalletDetail";

const Home = () => {
  const { account, chainId } = useWeb3React();
  return (
    <div className={style.main}>
      <Head>
        <title>Welcome To Wallet Pilot</title>
        <meta name="description" content="Wallet Pilots" />
        <link rel="icon" href="/pilot.svg" />
      </Head>
      <div>
        <h1>Welcome To Wallet Pilot</h1>
        <p>
          Wallet Pilot is a community-driven approach to asset and utility
          management.
        </p>
        <p>
          Owning one of our 10,000 unique{" "}
          <Link href="/pilots">
            <a>Pilot NTFs(...soon)</a>
          </Link>
          , living on the ethereum blockchain, grants you access to{" "}
          <Link href="/hanger">
            <a>The Hanger(...soon)</a>
          </Link>
          : A community-governed portfolio management tool. Pilots also unlock
          addiontal community channels, future mints, digital utilities, and
          much more!
        </p>
        <p>
          Learn more about who we are, what we are doing, and how to get
          involved on{" "}
          <Link href="/map">
            <a>The Map(...soon)</a>
          </Link>
          .
        </p>
      </div>
      {account && chainId ? <WalletDetail /> : null}
    </div>
  );
};

export default Home;
