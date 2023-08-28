// @ts-nocheck
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { formatEther } from "viem";
import useWithdrawReward from "@/hooks/useWithdrawReward";
import useGetAllCampaigns from "@/hooks/useGetAllCampaigns";
import useInfluencersNftContract from "@/hooks/useInfluencersNftContract";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import CollabDetail from "./CollabDetailPopup";
import React, { useState } from "react";
import Upload from "../Upload";
import Link from "next/link";
import * as z from "zod";
import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import useSetUpNFT from "@/hooks/useSetUpNFT";
type campaign = {
  id: number;
  name: string;
  audience: number;
  reward: number;
  cpa: number;
  graphQL: string;
};

type CollabListProps = {
  blocks: campaign[];
};

type IssueCollabNFTProps = {
  campaign: campaign;
  address: `0x${string}`;
  handleViewDetails: (collab: any) => void;
};

const IssueCollabNFT = ({ campaign, address }: IssueCollabNFTProps) => {

  const [tokenUrl, setTokenUrl] = useState("");

  const { write: setUpNFT, isLoading: setupNFTIsLoading } = useSetUpNFT(
    Number(campaign.id.toString()),
    campaign.name,
    tokenUrl,
  );
  const { data, isLoading: influencerIsLoading } = useInfluencersNftContract(
    address,
    campaign.id,
  );
  //@ts-ignore
  const contractExist = data 
    ? data[2] == "0x0000000000000000000000000000000000000000"
    : false;

  const { write: withdrawReward, isLoading } = useWithdrawReward(campaign.id);

  const handleUploadSuccess = (url: string) => {
    console.log(url);
    setTokenUrl(url);
  };

  const onSubmit = () => {
    if (setUpNFT) {
      setUpNFT();
    }
  };
  const mintLink = `${origin}/followers/${address}@${campaign.id.toString()}`;

  return (
    <Dialog>
      <DialogTrigger>
          {setupNFTIsLoading ? "Loading" : contractExist ? (
              <Button>
                  Issue Collab NFT
              </Button>
          ): (
              <Button>
              View Details
              </Button>
          )}
      </DialogTrigger>
      {!contractExist && (
        <DialogContent>
          <DialogHeader>
            <h3 className="font-bold text-xl">{campaign.name}</h3>
          </DialogHeader>
          <div className="mt-4 ml-4 mb-4">
            <div className="flex flex-row mb-4">
              <div className="w-14 h-7 rounded-3xl text-base font-bold flex justify-center items-center">
                Quota:
              </div>
              <div className="w-14 h-7 border rounded-3xl text-amber-400 text-base font-bold flex justify-center items-center">
                {(campaign.reward / campaign.cpa).toString()}
              </div>
            </div>
            <div className="flex flex-row">
              <div className="h-7 rounded-3xl text-base font-bold flex justify-center items-center mr-2">
                Reward per action:
              </div>
              <div className="h-7 border rounded-3xl text-amber-400 text-base font-bold flex justify-center items-center">
                {formatEther(`${campaign.cpa}`)} ETH
              </div>
            </div>
            <CopyableURL url={mintLink} />
            {/* Add more details as needed */}
            <Button onClick={ () => {
                if (withdrawReward) {
                    withdrawReward();
                    }
                }
            }
            >
              {isLoading || !withdrawReward ? "Loading" : "Claim Reward"}
            </Button>
          </div>
        </DialogContent>
      )}

      {contractExist && (
        <DialogContent>
          <DialogHeader>
            <h3 className="font-bold text-xl">{campaign.name}</h3>
          </DialogHeader>
          <div className="mt-4 ml-4 mb-4">
              <div className="flex flex-row mb-4">
                  Please upload a picture for your NFT
              </div>
              <Upload title={"Upload your Collab NFT Image"} onUploadSuccess={handleUploadSuccess} />
              {(tokenUrl!="") && (
              <Button
                  onClick={ () => {
                    if (setUpNFT) {
                        conosle.log("setting up nft");
                        setUpNFT();
                        }
                    }
                  }
            > Issue </Button>
            )}
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
};

function CopyableURL({ url }: { url: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="break-all whitespace-normal my-2">{url}</span> {/* <-- Added the break-words class here */}
      <button
        onClick={handleCopyClick}
        className="text-blue-500 hover:text-blue-700"
      >
        {isCopied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}


function CollabList({ blocks }: CollabListProps) {
  const { address, connector, isConnected } = useAccount();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedCollab, setSelectedCollab] = useState<campaign | undefined>(
    undefined,
  );
  const { data: campaigns, isLoading, isSuccess } = useGetAllCampaigns();
  console.log(`campaigns are ${campaigns}`);

  // console.log(useInfluencersNftContract(address, 1).data[2]);
  const handleViewDetails = (collab: campaign) => {
    setSelectedCollab(collab);
    console.log(collab);
    setShowDetails(true);
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {blocks.map((block, index) => (
          <div key={index} className="w-96 h-80 rounded-3xl border border-zinc-100">
            <h3 className="font-bold">{block.name}</h3>
            <p className="text-sm text-gray-600">
              {" "}
              Remaining Quota: {`${block.audience}`}
            </p>
            <p className="text-sm text-gray-600 mb-10">
              {" "}
              Reward per action : {formatEther(`${block.cpa}`)} ETH
            </p>
            <IssueCollabNFT
              campaign={block}
              address={address}
            />
          </div>
        ))}
      </div>
      {showDetails && (
        <CollabDetail
          collab={selectedCollab}
          onClose={() => setShowDetails(false)}
        />
      )}
    </div>
  );
}

function CollabDashboard() {
  const { data: campaigns, isLoading, isSuccess } = useGetAllCampaigns();
  console.log(campaigns);
  return (
    <div className="flex flex-col items-center justify-center py-2">
      {isSuccess && <CollabList blocks={campaigns} />}
    </div>
  );
}

export default CollabDashboard;
