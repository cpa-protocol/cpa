import { useContractRead } from "wagmi";
import cpaABI from "@/abi/CPA";
import { CpaAddress } from "@/constants/Address"

const useGetCampaignOwner = (tokenId)=> {
    const { data, isLoading, isSuccess } = useContractRead({
        address: CpaAddress,
        abi: cpaABI,
        functionName: 'campaignsOwner',
        args: [tokenId]
    });
    return { data, isLoading, isSuccess}
}

export default useGetCampaignOwner;
