import style from "../styles/Modal.module.css";
import { useWeb3React } from "@web3-react/core";

import { connectors } from "../utilities/connectors";

export default function Modal({ showModal }) {
  const { activate } = useWeb3React();

  const connectWallet = (e, connectionType) => {
    setTimeout(()=> {
      activate(connectionType);
      showModal(false);
    }, 500);
    e.preventDefault();
  };

  const closeModal = (e) => {
    setTimeout(()=> showModal(false), 500);
    e.preventDefault();
  };

  return (
    <div className={style.modal}>
      <div className={style.container}>
        <h1>Select Your Wallet</h1>
        <button
          className={style.metaMask}
          type="submit"
          onClick={(e) => connectWallet(e, connectors.injected)}
        >
          MetaMask
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
