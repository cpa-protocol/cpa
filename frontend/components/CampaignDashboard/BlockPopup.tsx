import React from "react";
import CampaignForm from "@/components/CampaignDashboard/CampaignForm";

type AddBlockPopupProps = {
  onClose: () => void; // This means onClose is a function that doesn't return anything.
};

function AddBlockPopup({ onClose }: AddBlockPopupProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">Create Campaign</h2>
        <CampaignForm onClose={onClose} />
      </div>
    </div>
  );
}

export default AddBlockPopup;
