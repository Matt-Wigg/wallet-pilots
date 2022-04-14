import Navbar from "./navbar";
import Footer from "./footer";

import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <main className={styles.layout}>
      <main className={styles.main}>{children}</main>
      <Navbar />
      <Footer />
    </main>
  );
}
