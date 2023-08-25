import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import SelectRole from "@/components/SelectRole/SelectRole";
import { useIsMounted } from "@/hooks/useIsMounted";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import Head from "next/head";
import styles from "../styles/Home.module.css";

function MyComponent() {
  const [addresses, setAddresses] = useState([
    "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
    "0x47625465f936920Efa00e33391125fCcfA106d84",
    "0xca84541D8B8Bf50fd8b042aCFd28B1e390703E20",
    // Add more addresses if needed
  ]);
  const [configHash, setConfigHash] = useState(
    "bafybeibsnbhomblnce3umj6rnn32dtvcpmcptklcn74pf4r5phdxm6e7te",
  );
  const [result, setResult] = useState(null);

  const checkAddresses = async () => {
    try {
      const response = await fetch("/api/checkEligible", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ addresses, configHash }),
      }); const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };

  return (
    <div>
      <button onClick={checkAddresses}>Check Addresses</button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}


const Home: NextPage = () => {
  const { address, connector, isConnected } = useAccount();
  const isMounted = useIsMounted();
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
                Launch campaigns with your favorite projects
              </div>
              <ConnectButton />
            </div>
          </>
        ) : (
          <>
            <SelectRole />
          </>
        )}
      </main>
    </>
  );
};

export default Home;
