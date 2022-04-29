import Sidebar from "./sidebar";
import Footer from "./footer";
import Modal from "./modal";

import { useState } from "react";

import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.layout}>
      {showModal && <Modal showModal={setShowModal} />}
      <main className={styles.main}>{children}</main>
      <Sidebar showModal={setShowModal} />
      <Footer />
    </div>
  );
}
