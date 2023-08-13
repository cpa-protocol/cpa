import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi";
import cpaABI from "@/abi/NFT";
import { CpaAddress } from "@/constants/Address"

const useCreateInfluencer = ( campaignId: number)=> {
    const { config } = usePrepareContractWrite({
        address: CpaAddress,
        abi: cpaABI,
        functionName: 'createInfluencer',
        args: [campaignId]
    });

    const { write, data } = useContractWrite(config);
    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })

    return { write, isLoading, isSuccess, data}
}

export default useCreateInfluencer;
