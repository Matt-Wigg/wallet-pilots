import Sidebar from "./sidebar";
import Footer from "./footer";
import Modal from "./modal";
import AudioPlayer from "./audioPlayer/AudioPlayer";

import { useState } from "react";

import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    setShowModal(!showModal);
    e.preventDefault();
  }

  return (
    <div>
      {showModal && <Modal showModal={setShowModal} />}
      <div
        className={showModal ? styles.modalBlur : styles.layout}
        onClick={(e) => showModal && handleClick(e)}
      >
        <main className={styles.main}>{children}</main>
        <Sidebar showModal={setShowModal} />
        <AudioPlayer />
        <Footer />
      </div>
    </div>
  );
}
