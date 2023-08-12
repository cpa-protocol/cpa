import { zodResolver } from "@hookform/resolvers/zod";
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

  const handleViewDetails = (collab) => {
    setSelectedCollab(collab);
    console.log(selectedCollab);
    setShowDetails(true);
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {blocks.map((block, index) => (
          <div key={index} className="border p-4 rounded-3xl">
            <h3 className="font-bold">{block.Title}</h3>
            <p className="text-sm text-gray-600"> Quota: {block.RemainQuota}</p>
            <p className="text-sm text-gray-600 mb-10"> Reward per action : {block.RewardPerAction} ETH</p>
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

export default CollabList;


