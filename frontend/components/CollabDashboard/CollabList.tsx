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
} from "@/components/ui/dialog";
import { formatEther } from "viem";
import useWithdrawReward from "@/hooks/useWithdrawReward";
import useGetAllCampaigns from "@/hooks/useGetAllCampaigns";
import useGetCampaignOwner from "@/hooks/useGetCampaignOwner";
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

  const { data: owner} = useGetCampaignOwner(campaign.id);
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
        {setupNFTIsLoading ? (
          "Loading"
        ) : contractExist ? (
          <Button className="ml-6 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-3xl shadow mb-6">
            Issue Collab NFT
          </Button>
        ) : (
          <Button className="ml-6 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-3xl shadow mb-6">
            View Details
          </Button>
        )}
      </DialogTrigger>
      {!contractExist && (
          <DialogContent className="w-4/5">
          <DialogHeader>
            <div className="flex ml-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-full" />
                 <a className="ml-4 mt-3 mb-6" target="_blank" href={`https://goerli-optimism.etherscan.io/address/${owner}`}>
                     {!owner && (owner.substring(0, 9).concat('...'))} 
                </a>
            </div>
            <h3 className="ml-4 font-bold text-xl">{campaign.name}</h3>
          </DialogHeader>
          <div className=" ml-4 mb-4">
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
            <Button
              onClick={() => {
                if (withdrawReward) {
                  withdrawReward();
                }
              }}
              className="ml-6 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-3xl shadow"
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
            <Upload
              title={"Upload your Collab NFT Image"}
              onUploadSuccess={handleUploadSuccess}
            />
            {tokenUrl != "" && (
              <Button
                onClick={() => {
                  if (setUpNFT) {
                    setUpNFT();
                  }
                }}
              >
                {" "}
                Issue{" "}
              </Button>
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
      <span className="break-all whitespace-normal my-2">{url}</span>{" "}
      {/* <-- Added the break-words class here */}
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

  const handleViewDetails = (collab: campaign) => {
    setSelectedCollab(collab);
    console.log(collab);
    setShowDetails(true);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center max-w-6xl mx-auto">
        {blocks.map((block, index) => (
          <BlockComponent key={index} block={block} address={address} />
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

type BlockComponentProps = {
  block: any; // You can replace 'any' with the appropriate type for 'block'
  address: string;
};

const BlockComponent: React.FC<BlockComponentProps> = ({ block, address }) => {
  const { data: owner, isLoading, isSuccess } = useGetCampaignOwner(block.id);

  return (
    <div className="w-80 rounded-3xl border-4 border-zinc-100 m-4">
     <div className="flex ml-6 mt-6">
      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-full" />
     <a className="ml-6 mt-3" target="_blank" href={`https://goerli-optimism.etherscan.io/address/${owner}`}>
         {owner.substring(0, 9).concat('...')} 
    </a>
    </div>
      <h3 className="font-bold m-6">{block.name}</h3>
      <div className="text-sm text-gray-600 ml-6">
        {" "}
        Remaining Quota: {`${block.audience}`}
      </div>
      <div className="text-sm text-gray-600 mb-6 ml-6">
        {" "}
        Reward per action : {formatEther(`${block.cpa}`)} ETH
      </div>
      <IssueCollabNFT campaign={block} address={address} />
    </div>
  );
};

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
