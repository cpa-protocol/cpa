import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import cpaABI from "@/abi/CPA";
import { CpaAddress } from "@/constants/Address";

const useWithdrawReward = (campaignId: number) => {
  const { config } = usePrepareContractWrite({
    address: CpaAddress,
    abi: cpaABI,
    functionName: "withdrawReward",
    args: [campaignId],
  });

  const { write, data } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return { write, isLoading, isSuccess, data };
};

export default useWithdrawReward;
