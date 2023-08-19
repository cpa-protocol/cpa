import { useContractRead } from "wagmi";
import cpaABI from "@/abi/CPA";
import { CpaAddress } from "@/constants/Address"

type Campaign ={
    id: string;
    name: string;
    audience: number;
    reward: number;
    cpa: number;
    graphQL: string;
}

type UseGetAllCampaignsReturnType = {
    data: Campaign[] | null;
    isLoading: boolean;
    isSuccess: boolean;
};

const useGetAllCampaigns = ()=> {
    const { data, isLoading, isSuccess } = useContractRead({
        address: CpaAddress,
        abi: cpaABI,
        functionName: 'getAllCampaigns',
    });
    return { data, isLoading, isSuccess}
}

export default useGetAllCampaigns;
