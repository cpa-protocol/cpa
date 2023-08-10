import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import Header from '../components/Header';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  optimism,
  optimismGoerli,
  base,
  baseGoerli,
  zora,
  zoraTestnet
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
      // optimism,
      optimismGoerli,
      // base,
      baseGoerli,
      // zora,
      zoraTestnet,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [optimismGoerli] : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  projectId: 'bb9af0541b9d51215d34e4f55b433453',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: false,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Header />
        <main className="flex flex-col items-center">
            <Component {...pageProps} />
        </main>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
