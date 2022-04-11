import Navbar from './navbar';
import Footer from './footer';
import Sidebar from './sidebar';

import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <main className={styles.layout}>
      <Navbar />
      <Sidebar />
      <main className={styles.main}>
        {children}
        <Footer />
        </main>
    </main>
  )
}
