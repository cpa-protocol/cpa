import { zodResolver } from "@hookform/resolvers/zod";
import {formatEther} from "viem";
import useGetAllCampaigns from "@/hooks/useGetAllCampaigns";
import { useAccount } from "wagmi";
import { useRouter } from 'next/router';
import CollabDetail from './CollabDetailPopup';
import React, { useState } from 'react';
import Upload from '../Upload';
import Link from 'next/link';
import * as z from "zod";
import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "../ui/button";



function CollabList({ blocks }) {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedCollab, setSelectedCollab] = useState(null);
  const {data : campaigns, isLoading, isSuccess} = useGetAllCampaigns();
  console.log(`campaigns are ${campaigns}`);

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
            {
              (block.Status == "Active") ? (
                <div>
                  <Button>Accept</Button>
                </div>
              ) : (
                <div>
                  <Button onClick={() => handleViewDetails(block)}>View Details</Button>
                </div>
              )
            }
          </div>
        ))}
      </div>
      {showDetails && <CollabDetail collab={selectedCollab} onClose={() => setShowDetails(false)} />}
    </div>
  );
}

function CollabDashboard() {
  const {data : campaigns, isLoading, isSuccess} = useGetAllCampaigns();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            {isSuccess && <CollabList blocks={campaigns} />}
        </div>
    )
}

export default CollabDashboard;
