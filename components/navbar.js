import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" passHref>
        <span className={styles.linkConnect}>CONNECT WALLET</span>
      </Link>
    </nav>
  );
}
