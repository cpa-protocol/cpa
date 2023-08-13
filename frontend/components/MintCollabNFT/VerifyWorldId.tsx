import { ConnectButton } from '@rainbow-me/rainbowkit';
import LogoIcon from '@/components/icons/LogoIcon'
import { useMemo, useState, Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import type { NextPage } from 'next';
import { useAccount } from "wagmi";
import Head from 'next/head';
import { IDKitWidget } from '@worldcoin/idkit';
import type { ISuccessResult } from "@worldcoin/idkit";
import styles from './VerifyWorldId.module.css'

const action = 'mint-collab-nft';
const app_id= 'app_staging_7d739ad0b13ae36395a73a4c9e8fa198';

type VerifyWorldIdIdProps = {
  verified: boolean;
  setVerified:  Dispatch<SetStateAction<boolean>>
}

function VerifyWorldId({verified, setVerified}:VerifyWorldIdIdProps) {
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
                setVerified(true);
              })
              .catch((error) => {
                console.error('An error occurred:', error);
              });
      };
  return (
<div>
      <div className="flex flex-col items-center border rounded-3xl bg-black text-white">
        <IDKitWidget
            app_id="app_staging_7d739ad0b13ae36395a73a4c9e8fa198" // obtained from the Developer Portal
            action="mint-collab-nft" // this is your action name from the Developer Portal
            onSuccess={onSuccess} // callback when the modal is closed
        >
      {({ open }) => 
            <button
              onClick={open}
              className={`${styles.verifyWorldId} flex items-center gap-x-4 transition-all bg-white border border-gray-200 text-gray-900 h-12 px-6 rounded-xl cursor-pointer`}
            >
              <LogoIcon />
              <span className="text-base leading-normal font-semibold">
                Continue with Worldcoin
              </span>
            </button>
            }
        </IDKitWidget>
      </div>
      {verified && (
          <div className="flex flex-col items-center">
                <div className="text-black text-4xl font-bold my-16">
                    You are verified!
                </div>
            </div>
      )
      }

    </div>
  );
};

export default VerifyWorldId;
