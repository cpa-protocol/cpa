import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAccount } from "wagmi";
import useWithdrawReward from "@/hooks/useWithdrawReward";

import styles from "./CollabDetailPopup.module.css";

type Collab = {
  id: number;
  Title: string;
  Description: string;
  reward: number;
  RewardPerAction: number;
  cpa: number;
  graphQL: string;
  address: string;
  audience: number;
  status: string;
  createdAt: string;
  updatedAt: string;
};

function CollabDetail({
  collab,
  onClose,
}: {
  collab: Collab;
  onClose: () => void;
}) {
  console.log(collab.id.toString());
  console.log(collab.reward / collab.cpa);
  const { asPath } = useRouter();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const { address, connector, isConnected } = useAccount();
  const { write, isLoading } = useWithdrawReward(collab.id);
  const mintLink = `${origin}/followers/${address}@${collab.id.toString()}`;
  return (
    <div className="fixed inset-x-12 inset-y-20 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col bg-white p-8 w-full h-full overflow-auto">
        <button
          onClick={onClose}
          className="float-right text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <div className="w-4/5 h-1/4 border rounded-3xl m-16">
          <div className="mt-4 ml-4 mb-4">
            <h3 className="font-bold text-xl">{collab.Title}</h3>
            <div className="flex flex-row mb-4">
              <div className="w-14 h-7 rounded-3xl text-base font-bold flex justify-center items-center">
                Quota:
              </div>
              <div className="w-14 h-7 border rounded-3xl text-amber-400 text-base font-bold flex justify-center items-center">
                {(collab.reward / collab.cpa).toString()}
              </div>
            </div>

            <div className="flex flex-row">
              <div className="h-7 rounded-3xl text-base font-bold flex justify-center items-center mr-2">
                Reward per action:
              </div>
              <div className="h-7 border rounded-3xl text-amber-400 text-base font-bold flex justify-center items-center">
                {collab.RewardPerAction} ETH
              </div>
            </div>
            <CopyableURL url={mintLink} />
            {/* Add more details as needed */}
            <button
              className={styles.btn}
              onClick={() => {
                if (write) {
                  write();
                }
              }}
            >
              {isLoading || !write ? "Loading" : "Withdraw"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

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
      <span>{url}</span>
      <button
        onClick={handleCopyClick}
        className="text-blue-500 hover:text-blue-700"
      >
        {isCopied ? "Copied!" : "Copy"}
        {/* You can replace the above text with an icon if you prefer */}
      </button>
    </div>
  );
}

export default CollabDetail;
