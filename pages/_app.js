// TODO: Cap components 
import Layout from "../components/layout/layout";
import { AccountWrapper } from "../context/account";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";

import "../styles/globals.css";

const getLibrary = (provider) => new Web3Provider(provider);

const App = ({ Component, pageProps }) => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <AccountWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AccountWrapper>
  </Web3ReactProvider>
);

export default App;
