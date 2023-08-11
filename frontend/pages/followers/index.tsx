import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import type { NextPage } from 'next';
import {
  useAccount,
} from "wagmi";
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

import { IDKitWidget } from '@worldcoin/idkit';
import type { ISuccessResult } from "@worldcoin/idkit";

const action = 'mint-collab-nft';

const MintPage: NextPage = () => {
  const { address, connector, isConnected } = useAccount();

    const onSuccess= (data: ISuccessResult) => {
        console.log(data);
        const reqBody = {
          merkle_root: data.merkle_root,
          nullifier_hash: data.nullifier_hash,
          proof: data.proof,
          credential_type: data.credential_type,
          action: action,
          signal: "",
          userAddress: address,
        };
        fetch('/api/verify', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(reqBody),
            })
              .then((res) => res.json())
              .then((verifyResponse) => {
                // Handle the response from the /api/verify endpoint
                console.log(verifyResponse);
              })
              .catch((error) => {
                console.error('An error occurred:', error);
              });
      };
  return (
      <>
        <IDKitWidget
            app_id="app_staging_7d739ad0b13ae36395a73a4c9e8fa198" // obtained from the Developer Portal
            action="mint-collab-nft" // this is your action name from the Developer Portal
            onSuccess={onSuccess} // callback when the modal is closed
            credential_types={['orb', 'phone']} // optional, defaults to ['orb']
            enableTelemetry // optional, defaults to false
        >
            {({ open }) => <button onClick={open}>Verify with World ID</button>}
        </IDKitWidget>
    </>
  );
};

export default MintPage;
