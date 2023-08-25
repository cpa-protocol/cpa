import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import nftABI from "@/abi/NFT";
import { NftAddress } from "@/constants/Address";

const useMint = (influencer: `0x${string}`, campaignId: number) => {
  const { config } = usePrepareContractWrite({
    address: NftAddress,
    abi: nftABI,
    functionName: "mint",
    args: [influencer, campaignId],
  });

  const { write, data } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return { write, isLoading, isSuccess, data };
};

export default useMint;
