import { useState } from "react";
import propTypes from "prop-types";
import { useWeb3React } from "@web3-react/core";

import style from "../styles/Sidebar.module.css";

const Sidebar = ({ showModal }) => {
  const [disabled, setDisabled] = useState(false);
  const { deactivate, active } = useWeb3React();

  const handleConnect = (e) => {
    showModal(true);
    e.preventDefault();
  };

  const handleDisconnect = (e) => {
    setDisabled(false);
    showModal();
    deactivate();
    e.preventDefault();
  };

  return (
    <nav className={style.navbar}>
      <ul>
        {!active && (
          <button onClick={(e) => handleConnect(e)} className={style.connect}>
            CONNECT WALLET
          </button>
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
        <button disabled className={style.inactiveButton}>
          Pilots <br />
          (...soon)
        </button>
        <button disabled className={style.inactiveButton}>
          The Hanger <br />
          (...soon)
        </button>
        <button disabled className={style.inactiveButton}>
          Recruitment <br />
          (...soon)
        </button>
      </ul>
    </nav>
  );
}

Sidebar.propTypes = {
  showModal: propTypes.func,
};

export default Sidebar;
