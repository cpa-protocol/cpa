// @ts-nocheck
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import Header from "../components/Header";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
  Theme,
  Chain,
} from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  polygonZkEvmTestnet,
  optimism,
  optimismGoerli,
  base,
  baseGoerli,
  zora,
  zoraTestnet,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const scrollSepolia: Chain = {
  id: 534351,
  name: "Scroll Testnet",
  network: "Scroll Sepolia",
  iconUrl:
    "https://l2beat.com/icons/scroll.png",
  iconBackground: "#000",
  nativeCurrency: {
    decimals: 18,
    name: "Scroll Testnet",
    symbol: "ETH",
  },
  rpcUrls: {
    public: { http: ["https://scroll-sepolia.blockpi.network/v1/rpc/public"] },
    default: { http: ["https://scroll-sepolia.blockpi.network/v1/rpc/public"] },
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://sepolia.scrollscan.com/",
    },
  },
  testnet: true,
};

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    // optimism,
    scrollSepolia,
    polygonZkEvmTestnet,
    optimismGoerli,
    // base,
    baseGoerli,
    // zora,
    zoraTestnet,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [optimismGoerli]
      : []),
  ],
  [publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: "RainbowKit App",
  projectId: "bb9af0541b9d51215d34e4f55b433453",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const myCustomTheme: Theme = lightTheme({
  colors: {
    accentColor: "#FFCB15",
    accentColorForeground: "black",
    connectButtonBackground: "#FFCB15",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} theme={myCustomTheme}>
        <Header />
        <main className="flex flex-col items-center">
          <Component {...pageProps} />
        </main>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
