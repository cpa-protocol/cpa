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
    <div className="flex flex-wrap items-center justify-center max-w-6xl mx-auto">
      {blocks.map((block, index) => (
        <FilteredBlock block={block} key={index} />
      ))}
      <div
        className="w-80 h-60 rounded-3xl border-4 border-zinc-100 m-4 text-center"
        onClick={() => setShowPopup(true)}
      >
        <div className="mt-[6rem]">
        [Create New]
    </div>
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
      <div className="w-80 h-60 rounded-3xl border-4 border-zinc-100 m-4">
        <h3 className="font-bold m-6">{block.name}</h3>
        <p className="text-sm text-gray-600 mb-10 ml-6">{block.createTime}</p>
        <p className="ml-6">
          {`${block.audience - block.reward / block.cpa}`} /{" "}
          {`${block.audience}`} claimed{" "}
        </p>
      </div>
    );
  }
}

export default MyCampaignDashboard;
