import PropTypes from "prop-types";
import { useState } from "react";

import Nav from "./nav/Nav";
import Footer from "./footer/Footer";
import Modal from "./modal/Modal";
import Player from "./player/Player";
import WallerConnected from "../WalletConnected";

import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    setShowModal(!showModal);
    e.preventDefault();
  };

  return (
    <div>
      {showModal && <Modal showModal={setShowModal} />}
      <div
        className={showModal ? styles.modalBlur : styles.layout}
        onClick={(e) => showModal && handleClick(e)}
      >
        <main className={styles.main}>
          {children}
          <WallerConnected />
        </main>
        <Nav showModal={setShowModal} />
        <Player />
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};

export default Layout;
