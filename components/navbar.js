import { useState } from "react";
import { useWeb3React } from "@web3-react/core";
// import { connectors } from "../utilities/connectors";

import style from "../styles/Navbar.module.css";

export default function Navbar({ showModal }) {
  const { activate, deactivate, active } = useWeb3React();
  const [disabled, setDisabled] = useState(false);

  const handleConnect = (e) => {
    setTimeout(() => showModal(true), 500);
    e.preventDefault();
  };

  const handleDisconnect = (e) => {
    setDisabled(false);
    setTimeout(() => {
      showModal();
      deactivate();
    }, 500);
    e.preventDefault();
  };

  return (
    <nav className={style.navbar}>
      {!active && (
        <button onClick={(e) => handleConnect(e)}>CONNECT WALLET</button>
      )}
      {active && (
        <button
          className={style.disconnect}
          disabled={disabled}
          onClick={handleDisconnect}
        >
          DISCONNECT WALLET
        </button>
      )}
      <ul>
        <button disabled className={style.inactiveButton}>The Hanger (...soon)</button>
        <button disabled className={style.inactiveButton}>Recruitment (...soon)</button>
      </ul>
    </nav>
  );
}
