import Layout from "../components/layout/layout";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import "../styles/globals.css";

const getLibrary = (provider) => new Web3Provider(provider);

const App = ({ Component, pageProps }) => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Web3ReactProvider>
);

export default App;
