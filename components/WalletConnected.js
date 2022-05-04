import { useWeb3React } from "@web3-react/core";
import styles from "../styles/Home.module.css";

const WalletConnected = () => {
  const { account, chainId } = useWeb3React();
  return (
    <div>
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
          <div className={styles.ethereumContainer}>
            <p>That is all... for now... 👀 ✈️</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletConnected;
