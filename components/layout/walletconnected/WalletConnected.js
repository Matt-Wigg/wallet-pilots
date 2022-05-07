import { useWeb3React } from "@web3-react/core";
import styles from "./WalletConnected.module.css";

const WalletConnected = () => {
  const { account, chainId } = useWeb3React();
  return (
    <main className={styles.main}>
      {!account && (
        <div>
          <p>Connect for more info:</p>
        </div>
      )}
      {account && (
        <div className={styles.ethereumContainer}>
          <p>
            Current address:{" "}
            <span className={styles.ethereumDetail}>{account}</span>
          </p>
        </div>
      )}
      {chainId && (
        <div className={styles.ethereumContainer}>
          <p>
            Current chain id:{" "}
            <span className={styles.ethereumDetail}>{chainId}</span>
          </p>
        </div>
      )}
      {chainId && account && (
        <div className={styles.ethereumDetail}>
          <p>That&apos;s all, for now... 👀 ✈️</p>
        </div>
      )}
    </main>
  );
};

export default WalletConnected;
