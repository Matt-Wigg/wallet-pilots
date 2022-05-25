import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useWeb3React } from "@web3-react/core";

import WalletForm from "../components/wallet-form/WalletForm";

const Hanger = (props) => {
  const { account } = useWeb3React();

  return (
    <div className={styles.container}>
      <Head>
        {console.log(props)}
        <title>The Hanger: Manage Assets</title>
        <meta name="description" content="Wallet Pilot" key="title" />
        <link rel="icon" href="/pilot.svg" />
      </Head>
      <h1>The Hanger:</h1>
      <WalletForm account={account} />
    </div>
  );
};

export default Hanger;
