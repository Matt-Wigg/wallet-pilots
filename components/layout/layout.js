import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Layout.module.css";

// layout components
import Nav from "./nav/Nav";
import Modal from "./modal/Modal";
import Player from "./player/Player";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  const [modal, setmodal] = useState(false);

  const handleClick = (e) => {
    setmodal(!modal);
    e.preventDefault();
  };

  return (
    <div>
      {modal && <Modal modal={setmodal} />}
      <div
        className={modal ? styles.modalBlur : styles.layout}
        onClick={(e) => modal && handleClick(e)}
      >
        <main className={styles.main}>
          {children}
        </main>
        <Nav modal={setmodal} />
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
