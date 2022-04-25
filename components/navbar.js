import { useState } from "react";
import { useWeb3React } from "@web3-react/core";
// import { connectors } from "../utilities/connectors";

import style from "../styles/Navbar.module.css";

export default function Navbar({ showModal }) {
  const { activate, deactivate, active } = useWeb3React();
  const [disabled, setDisabled] = useState(false);

  const handleConnect = (e) => {
    showModal(true);
  };

  const handleDisconnect = (e) => {
    setDisabled(false);
    showModal(false);
    setTimeout(deactivate, 500);
    e.preventDefault();
  };

  return (
    <nav className={style.navbar}>
      {!active && (
        <button onClick={(e) => handleConnect(e)}>CONNECT</button>
      )}
      {active && (
        <button className={style.disconnect} disabled={disabled} onClick={handleDisconnect}>
          DISCONNECT
        </button>
      )}
      <ul>
        <button className={style.activeButton}>✈️ Home ✈️</button>
        <button className={style.inactiveButton}>Pilot Training (soon)</button>
        <button className={style.inactiveButton}>The Hanger (soon)</button>
      </ul>
    </nav>
  );
}
