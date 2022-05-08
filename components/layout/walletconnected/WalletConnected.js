import { useWeb3React } from "@web3-react/core";
import styles from "./WalletConnected.module.css";

const WalletConnected = ({ modal }) => {
  const { account, chainId } = useWeb3React();

  const handleClick = () => {
    modal(true);
  };

  return (
    <main className={styles.main}>
      {!account && (
        <span>
          <a onClick={(e) => handleClick(e)}>Connect a wallet</a> for more info!
        </span>
      )}
      {account && (
        <div className={styles.ethereumAddress}>
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
        <div className={styles.comingSoon}>
          <div>That&apos;s all, for now... 👀 ✈️</div>
        </div>
      )}
    </main>
  );
};

export default WalletConnected;
