import { useContractRead } from "wagmi";
import cpaABI from "@/abi/CPA";
import { CpaAddress } from "@/constants/Address"

const useGetAllCampaigns = ()=> {
    const { data, isLoading, isSuccess } = useContractRead({
        address: CpaAddress,
        abi: cpaABI,
        functionName: 'getAllCampaigns',
    });
    return { data, isLoading, isSuccess}
}

export default useGetAllCampaigns;
