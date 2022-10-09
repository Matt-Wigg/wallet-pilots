import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { InjectedConnector } from "@web3-react/injected-connector";

// Wallet Connect
const walletConnect = new WalletConnectConnector({
  rpcUrl: `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_KEY}`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

// Coinbase
const coinbaseWallet = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_KEY}`,
  appName: "Wallet Pilot",
  supportedChainIds: [1, 3, 4, 5, 42],
});

// MetaMask, Etc.
const injected = new InjectedConnector({ supportedChainIds: [1, 4, 5, 42] });

const connectors = {
  walletConnect,
  coinbaseWallet,
  injected,
};

export default connectors;
