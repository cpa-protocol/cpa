import { ConnectButton } from '@rainbow-me/rainbowkit';
import CollabList from '../../components/CollabDashboard/CollabList';
import SelectRole from '../../components/SelectRole/SelectRole';
import type { NextPage } from 'next';
import {
  useAccount,
} from "wagmi";
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

const Protocol: NextPage = () => {
  const { address, connector, isConnected } = useAccount();
    const testBlocks = [
        {
            Title: "New Character Raffle",
            RemainQuota: "99",
            RewardPerAction: "0.01",
            Status: "Active"
        },
        {
            Title: "Transfer Crypto",
            RemainQuota: "100",
            RewardPerAction: "0.001",
            Status: "Accepted",
            Link: "https://www.google.com"
        }

    ]

  return (
      <>
      <main className={styles.main} suppressHydrationWarning>
      {
          !isConnected ? (
              <>
              <div className="flex flex-col items-center">
                  <div className="text-black text-4xl font-bold my-16">
                      Connect to see your campaigns
                  </div>
                  <ConnectButton />
              </div>
              </>
          ) : (
              <>
                  <div className="flex flex-col justify-left">
                  <div  className="text-3xl m-4">
                      Explore Campaigns
                  </div>
                  <CollabList blocks={testBlocks} />
                  </div>
              </>
          )
      }
      </main>
    </>
  );
};

export default Protocol;
