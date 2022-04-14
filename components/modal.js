import style from "../styles/Modal.module.css";
import { useWeb3React } from "@web3-react/core";
import Image from "next/image";

import { connectors } from "../utilities/connectors";

export default function Modal({ showModal }) {
  const { activate } = useWeb3React();

  const connectWallet = (e, connectionType) => {
    console.log(process.env.NEXT_PUBLIC_INFURA_KEY);
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
      <div className={style.container}>
        <button
          type="submit"
          onClick={(e) => connectWallet(e, connectors.injected)}
        >
          Meta Mask
        </button>
        <button
          type="submit"
          onClick={(e) => connectWallet(e, connectors.coinbaseWallet)}
        >
          Coinbase
        </button>
        <button
          type="submit"
          onClick={(e) => connectWallet(e, connectors.walletConnect)}
        >
          Wallet Connect
        </button>
        <button className={style.closeModal} type="submit" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}
