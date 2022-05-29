import { useAccountContext } from "../../../context/account";
import styles from "./WalletConnected.module.css";

const WalletConnected = ({ modal }) => {
  const { account, chainId } = useAccountContext();

  const handleClick = () => {
    modal(true);
  };

  return (
    <main className={styles.main}>
      {!account && (
        <span>
          For more info, <a onClick={(e) => handleClick(e)}>Connect a wallet.</a>
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
          That&apos;s all, for now... 👀 ✈️
        </div>
      )}
    </main>
  );
};

export default WalletConnected;
