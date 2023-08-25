import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import nftABI from "@/abi/NFT";
import { NftAddress } from "@/constants/Address";

const useSetUpNFT = (
  campaignId: number,
  campaignName: string,
  campaignURI: string,
) => {
  const { config } = usePrepareContractWrite({
    address: NftAddress,
    abi: nftABI,
    functionName: "setUpNFT",
    args: [campaignId, campaignName, campaignURI],
  });

  const { write, data } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return { write, isLoading, isSuccess, data };
};

export default useSetUpNFT;
