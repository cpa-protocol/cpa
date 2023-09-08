import { useState, useEffect } from 'react';
import useGetAllCampaigns from './useGetAllCampaigns';

const useGetMyCampaigns = (address: string) => {
  const { campaigns, isLoading, isSuccess } = useGetAllCampaigns();
    console.log('campaigns', campaigns);
  const [myCampaigns, setMyCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    if (isSuccess && campaigns) {
      const ownedCampaigns = campaigns.filter(campaign => {
      const { data: owner } = useGetCampaignOwner(campaign.id);
        return owner === address;
      });

      setMyCampaigns(ownedCampaigns);
    }
  }, [campaigns, isSuccess, address]);

  return { myCampaigns, isLoading, isSuccess };
};

export default useGetMyCampaigns;
