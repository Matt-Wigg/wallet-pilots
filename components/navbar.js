import { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { connectors } from "../utilities/connectors";

import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const { activate, deactivate, active } = useWeb3React();
  const [disabled, setDisabled] = useState(false);

  const handleConnect = (e) => {
    setDisabled(true);
    setTimeout(activate, 500, connectors.injected);
    e.preventDefault();
    setDisabled(false);
  };

  const handleDisconnect = (e) => {
    setDisabled(false);
    setTimeout(deactivate, 500);
    e.preventDefault();
  };

  return (
    <nav className={styles.navbar}>
      {!active && (
        <button
          className={styles.pureMaterialButton}
          disabled={disabled}
          onClick={(e) => handleConnect(e)}
        >
          CONNECT WALLET
        </button>
      )}
      {active && (
        <button
          className={styles.pureMaterialButton}
          disabled={disabled}
          onClick={handleDisconnect}
        >
          DISCONNECT WALLET
        </button>
      )}
      <ul>
        <li>Connect your wallet for a little more info</li>
        <li>Under development</li>
      </ul>
    </nav>
  );
}
