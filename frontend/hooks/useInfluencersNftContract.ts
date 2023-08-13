import { useContractRead } from "wagmi";
import nftABI from "@/abi/NFT";
import { NftAddress } from "@/constants/Address"

const useInfluencersNftContract = (influencer:`0x${string}`, campaignId:number )=> {
    const { data, isLoading, isSuccess } = useContractRead({
        address: NftAddress,
        abi: nftABI,
        functionName: 'influencersNftContract',
        args: [influencer, campaignId]
    });
    return { data, isLoading, isSuccess}
}

export default useInfluencersNftContract;
