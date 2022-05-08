import { useWeb3React } from "@web3-react/core";
import connectors from "../../../utilities/connectors";
import style from "./Modal.module.css";

export default function Modal({ modal }) {
  const { activate } = useWeb3React();

  const connectWallet = (e, connectionType) => {
    activate(connectionType);
    modal(false);
    e.preventDefault();
  };

  const closeModal = (e) => {
    modal(false);
    e.preventDefault();
  };

  return (
    <div className={style.backgroundBlur}>
      <div className={style.modal}>
        <h2>Select Your Wallet</h2>
        <div className={style.walletButtonContainer}>
          <div className={style.button}>
            <button
              className={style.metaMask}
              type="submit"
              onClick={(e) => connectWallet(e, connectors.injected)}
            >
              MetaMask
            </button>
          </div>
          <div className={style.button}>
            <button
              className={style.coinBase}
              type="submit"
              onClick={(e) => connectWallet(e, connectors.coinbaseWallet)}
            >
              Coinbase
            </button>
          </div>
          <div className={style.button}>
            <button
              className={style.walletConnect}
              type="submit"
              onClick={(e) => connectWallet(e, connectors.walletConnect)}
            >
              Wallet Connect
            </button>
          </div>
          <div className={style.close}>
            <button
              className={style.closeModal}
              type="submit"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
