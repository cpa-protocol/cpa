import { zodResolver } from "@hookform/resolvers/zod";
import {formatEther} from "viem";
import useGetAllCampaigns from "@/hooks/useGetAllCampaigns";
import useInfluencersNftContract from "@/hooks/useInfluencersNftContract";
import { useAccount } from "wagmi";
import { useRouter } from 'next/router';
import CollabDetail from './CollabDetailPopup';
import React, { useState } from 'react';
import Upload from '../Upload';
import Link from 'next/link';
import * as z from "zod";
import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import useSetUpNFT from '@/hooks/useSetUpNFT';

const IssueCollabNFT = (props) => {
    const {campaign, address, handleViewDetails}  = props
    console.log(campaign);
    const { write, isLoading, isSuccess } = useSetUpNFT(Number(campaign.id.toString()), campaign.name, 'testurl');
    const { data,  isLoading:influencerIsLoading, } = useInfluencersNftContract(address, campaign.id);
    //@ts-ignore
    const contractExist = data ? data[2] =="0x0000000000000000000000000000000000000000" : false

    const onSubmit = () => {
        if (write) {
            write();
        }
    }
  return (
    <>
      {
        isLoading ? 'Loading' : contractExist ? 
          <div>
            <Button onClick={onSubmit}>Issue Collab NFT</Button>
          </div>
          :
          <div>
            <Button onClick={() => handleViewDetails(campaign)}>View Details</Button>
          </div>
      }
    </>
    
  );
};


function CollabList({ blocks }) {
  const { address, connector, isConnected } = useAccount();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedCollab, setSelectedCollab] = useState(null);
  const {data : campaigns, isLoading, isSuccess} = useGetAllCampaigns();
  console.log(`campaigns are ${campaigns}`);

  // console.log(useInfluencersNftContract(address, 1).data[2]);
  const handleViewDetails = (collab) => {
    setSelectedCollab(collab);
    console.log(collab);
    setShowDetails(true);
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {blocks.map((block, index) => (
          <div key={index} className="border p-4 rounded-3xl">
            <h3 className="font-bold">{block.name}</h3>
            <p className="text-sm text-gray-600"> Quota: {`${block.audience}`}</p>
            <p className="text-sm text-gray-600 mb-10"> Reward per action : {formatEther(`${block.cpa}`)} ETH</p>
           <IssueCollabNFT campaign={block} address={address}  handleViewDetails={handleViewDetails}/>
          </div>
        ))}
      </div>
      {showDetails && <CollabDetail collab={selectedCollab} onClose={() => setShowDetails(false)} />}
    </div>
  );
}



function CollabDashboard() {
  const {data : campaigns, isLoading, isSuccess} = useGetAllCampaigns();
    console.log(campaigns);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            {isSuccess && <CollabList blocks={campaigns} />}
        </div>
    )
}

export default CollabDashboard;
