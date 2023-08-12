import React from 'react';
import { useState } from 'react';

function CollabDetail({ collab, onClose }) {
  return (
    <div className="fixed inset-x-12 inset-y-20 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col bg-white p-8 w-full h-full overflow-auto">
        <button onClick={onClose} className="float-right text-gray-500 hover:text-gray-700">
          &times;
        </button>
        <div className="w-4/5 h-1/4 border rounded-3xl m-16">
            <div className="mt-4 ml-4 mb-4">
                <h3 className="font-bold text-xl">{collab.Title}</h3>
                <div className="flex flex-row mb-4">
                    <div className="w-14 h-7 rounded-3xl text-base font-bold flex justify-center items-center">
                        Quota:
                    </div>
                    <div className="w-14 h-7 border rounded-3xl text-amber-400 text-base font-bold flex justify-center items-center">
                      {collab.RemainQuota}
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="h-7 rounded-3xl text-base font-bold flex justify-center items-center mr-2">
                        Reward per action:
                    </div>
                    <div className="h-7 border rounded-3xl text-amber-400 text-base font-bold flex justify-center items-center">
                      {collab.RewardPerAction} ETH
                    </div>
                </div>
                <CopyableURL url={collab.Link} />
                {/* Add more details as needed */}
        </div>
        </div>
      </div>
    </div>
  );
}

function CopyableURL({ url }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <span>{url}</span>
      <button onClick={handleCopyClick} className="text-blue-500 hover:text-blue-700">
        {isCopied ? 'Copied!' : 'Copy'}
        {/* You can replace the above text with an icon if you prefer */}
      </button>
    </div>
  );
}

export default CollabDetail;