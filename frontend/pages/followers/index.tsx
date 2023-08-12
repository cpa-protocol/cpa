import { ConnectButton } from '@rainbow-me/rainbowkit';
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
          </div>
      </>
  );
};

export default MintPage;
