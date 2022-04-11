import '../styles/globals.css'
import Layout from '../components/layout';
import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";

const getLibrary = (provider) => new Web3Provider(provider);

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Web3ReactProvider>
  )
}

export default MyApp
