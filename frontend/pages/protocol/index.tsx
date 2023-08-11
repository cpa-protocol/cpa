import { ConnectButton } from '@rainbow-me/rainbowkit';
import BlocksList from '../../components/CampaignDashboard/CampaignBlock';
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
            title: "Campaign 1",
            createTime: "2023-08-01",
            totalSupply: "100",
            claimed: "99"
        }]

  return (
      <>
      <main className={styles.main}>
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
                      Campaign Dashboard
                  </div>
                  <BlocksList blocks={testBlocks} />
                  </div>
              </>
          )
      }
      </main>
    </>
  );
};

export default Protocol;
