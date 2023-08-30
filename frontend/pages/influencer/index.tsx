import { ConnectButton } from "@rainbow-me/rainbowkit";
import CollabDashboard from "../../components/CollabDashboard/CollabList";
import { useIsMounted } from "@/hooks/useIsMounted";
import SelectRole from "../../components/SelectRole/SelectRole";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const Protocol: NextPage = () => {
  const { address, connector, isConnected } = useAccount();
  const isMounted = useIsMounted();
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <main className={styles.main} suppressHydrationWarning>
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
            <div className="flex flex-col justify-left">
              <div className="w-56 h-7 text-black text-2xl font-bold">
                Explore Campaigns
              </div>
              <CollabDashboard />
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Protocol;
