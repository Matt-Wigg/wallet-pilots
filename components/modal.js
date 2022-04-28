import style from "../styles/Modal.module.css";
import { useWeb3React } from "@web3-react/core";

import { connectors } from "../utilities/connectors";

export default function Modal({ showModal }) {
  const { activate } = useWeb3React();

  const connectWallet = (e, connectionType) => {
    activate(connectionType);
    showModal(false);
    e.preventDefault();
  };

  const closeModal = (e) => {
    showModal(false);
    e.preventDefault();
  };

  return (
    <div className={style.modal}>
      <h2>Select Your Wallet</h2>
      <div className={style.container}>
        <button
          className={style.metaMask}
          type="submit"
          onClick={(e) => connectWallet(e, connectors.injected)}
        >
          Injected (MetaMask etc.)
        </button>
        <button
          className={style.coinBase}
          type="submit"
          onClick={(e) => connectWallet(e, connectors.coinbaseWallet)}
        >
          Coinbase
        </button>
        <button
          className={style.walletConnect}
          type="submit"
          onClick={(e) => connectWallet(e, connectors.walletConnect)}
        >
          Wallet Connect
        </button>
      </div>
      <div className={style.close}>
        <button className={style.closeModal} type="submit" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}
