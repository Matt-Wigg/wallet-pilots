import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Welcome To Wallet Pilot</title>
        <meta name='description' content='Wallet Pilot' key='title' />
        <link rel='icon' href='/pilot.svg' />
      </Head>
      <div className={styles.container}>
        <h1>Welcome to Wallet Pilot</h1>
        <p>
          Wallet Pilot is an asset-governed approach to portfolio management.
        </p>
        <p>
          Owning one of the 10,000 unique{' '}
          <Link href='/pilots'>
            <a>Pilot NTFS(...soon)</a>
          </Link>
          , living on the Ethereum blockchain, grants you access and development
          dictatorship over{' '}
          <Link href='/the-hanger'>
            <a>The Hanger(...soon)</a>
          </Link>
          : A special portfolio management tool.
        </p>{' '}
        <p>
          Pilots also unlock other things, depending on <i>when</i> and{' '}
          <i>where</i> they fly... There is no Discord or Twitter, just a{' '}
          <Link href='/map'>
            <a>Map(...soon)</a>
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Home;
