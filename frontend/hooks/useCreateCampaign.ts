import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi";
import { parseEther } from 'viem';
import cpaABI from "@/abi/CPA";
import { CpaAddress } from "@/constants/Address"

const useCreateCampaign = ( 
    campaignName: string,
    promoteAddress:`0x${string}`,
    reward: number,
    cpa: number,
    query: string,
)=> {
    const { config } = usePrepareContractWrite({
        address: CpaAddress,
        abi: cpaABI,
        functionName: 'createCampaign',
        args: [campaignName, promoteAddress, reward*Math.pow(10,18), cpa*Math.pow(10,18), query],
        value: parseEther(`${reward}`),
    });

    const { write, data } = useContractWrite(config);
    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })

    return { write, isLoading, isSuccess, data}
}

export default useCreateCampaign;
