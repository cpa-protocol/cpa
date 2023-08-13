import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useState } from 'react';
import Link from 'next/link';
import VerifyWorldId from '../../components/MintCollabNFT/VerifyWorldId';
import type { NextPage } from 'next';
import {
  useAccount,
} from "wagmi";
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

import { IDKitWidget } from '@worldcoin/idkit';
import type { ISuccessResult } from "@worldcoin/idkit";

const action = 'mint-collab-nft';
const app_id= 'app_staging_7d739ad0b13ae36395a73a4c9e8fa198';

const MintPage: NextPage = () => {
  const { address, connector, isConnected } = useAccount();

  return (
      <>
          <div className='flex flex-col justify-center'>
              <div className='mb-4'>
                  First verify you are a human
              </div>
              <VerifyWorldId />
              <MyComponent />
          </div>
      </>
  );
};


function MyComponent() {
  const [addresses, setAddresses] = useState([
      '0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad',
      '0x47625465f936920Efa00e33391125fCcfA106d84',
      '0xca84541D8B8Bf50fd8b042aCFd28B1e390703E20'
    // Add more addresses if needed
  ]);
    const [configHash, setConfigHash] = useState('bafybeibsnbhomblnce3umj6rnn32dtvcpmcptklcn74pf4r5phdxm6e7te');
  const [result, setResult] = useState(null);

  const checkAddresses = async () => {
    try {
      const response = await fetch('/api/checkEligible', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ addresses, configHash}),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error calling API:', error);
    }
  };

  return (
    <div>
      <button onClick={checkAddresses}>Check Addresses</button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}

export default MintPage;
