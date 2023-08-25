// @ts-nocheck
import { zodResolver } from "@hookform/resolvers/zod";
import AddBlockPopup from "@/components/CampaignDashboard/BlockPopup";
import useGetAllCampaigns from "@/hooks/useGetAllCampaigns";
import useGetCampaignOwner from "@/hooks/useGetCampaignOwner";
import { parseEther } from "viem";
import React, { useState } from "react";
import Upload from "../Upload";
import Link from "next/link";
import * as z from "zod";
import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import useCreateCampaign from "@/hooks/useCreateCampaign";

type Campaign = {
  id: string;
  name: string;
  audience: number;
  reward: number;
  cpa: number;
  graphQL: string;
};

function MyCampaignDashboard() {
  const { address, connector, isConnected } = useAccount();
  const { data: campaigns, isLoading, isSuccess } = useGetAllCampaigns();
  if (isSuccess) {
    console.log(campaigns);
    return <BlocksList blocks={campaigns} />;
  } else {
    return (
      <div>
        <p> Loading... </p>
      </div>
    );
  }
}

function BlocksList({ blocks }: { blocks: Campaign[] }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="grid grid-cols-3 gap-4">
      {blocks.map((block, index) => (
        <FilteredBlock block={block} key={index} />
      ))}
      <div
        className="border p-4 rounded-3xl text-gray-400 cursor-pointer text-center"
        onClick={() => setShowPopup(true)}
      >
        Create New
      </div>
      {showPopup && <AddBlockPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}

function FilteredBlock({ block }: { block: Campaign }) {
  const [showPopup, setShowPopup] = useState(false);
  const { address, connector, isConnected } = useAccount();
  const { data: owner, isLoading, isSuccess } = useGetCampaignOwner(block.id);
  if (owner == address) {
    return (
      <div className="border p-4 rounded-3xl">
        <h3 className="font-bold">{block.name}</h3>
        <p className="text-sm text-gray-600 mb-10">{block.createTime}</p>
        <p className="">
          {`${block.audience - block.reward / block.cpa}`} /{" "}
          {`${block.audience}`} claimed{" "}
        </p>
      </div>
    );
  }
}

export default MyCampaignDashboard;
