import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import MyCampaignDashboard from "@/components/CampaignDashboard/CampaignBlock";
import SelectRole from "@/components/SelectRole/SelectRole";
import { useIsMounted } from "@/hooks/useIsMounted";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import Head from "next/head";
import styles from "@/styles/Home.module.css";

const Protocol: NextPage = () => {
  const { address, connector, isConnected } = useAccount();
  const isMounted = useIsMounted();
  const [ownedBlocksCount, setOwnedBlocksCount] = useState<number>(0);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <main className={styles.main}>
        {!isConnected ? (
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
            <div className="flex flex-col justify-left w-full">
              <div className="text-3xl m-4">My Campaigns</div>
              <MyCampaignDashboard />
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Protocol;
