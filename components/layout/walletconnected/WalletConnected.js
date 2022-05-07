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
        <p>
          For more info: <a onClick={(e) => handleClick(e)}>Connect Wallet</a>
        </p>
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
          That&apos;s all, for now... 👀 ✈️
        </div>
      )}
    </main>
  );
};

export default WalletConnected;
