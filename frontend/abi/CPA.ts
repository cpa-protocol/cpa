const ABI = [
          {
            inputs: [
              {
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "changeOwner",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_updater",
                type: "address",
              },
            ],
            name: "changeUpdater",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "string",
                name: "_name",
                type: "string",
              },
              {
                internalType: "address",
                name: "_promoteAddress",
                type: "address",
              },
              {
                internalType: "int256",
                name: "_reward",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "_cpa",
                type: "int256",
              },
              {
                internalType: "string",
                name: "_query",
                type: "string",
              },
            ],
            name: "createCampaign",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "campaignId",
                type: "uint256",
              },
            ],
            name: "createInfluencer",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_updater",
                type: "address",
              },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                indexed: false,
                internalType: "address",
                name: "promoteAddress",
                type: "address",
              },
              {
                indexed: true,
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: false,
                internalType: "int256",
                name: "reward",
                type: "int256",
              },
              {
                indexed: false,
                internalType: "int256",
                name: "cpa",
                type: "int256",
              },
              {
                indexed: false,
                internalType: "string",
                name: "query",
                type: "string",
              },
            ],
            name: "CreateCampaign",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "uint256",
                name: "campaignId",
                type: "uint256",
              },
              {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
              },
            ],
            name: "CreateInfluencer",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "uint256",
                name: "campaignId",
                type: "uint256",
              },
              {
                indexed: true,
                internalType: "address",
                name: "nft",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
              },
            ],
            name: "CreateNFT",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "CreateToken",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "address",
                name: "nftContract",
                type: "address",
              },
            ],
            name: "CreateZoraContract",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "oldOwner",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnerSet",
            type: "event",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "campaignId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "influencerOwner",
                type: "address",
              },
              {
                internalType: "int256",
                name: "click",
                type: "int256",
              },
            ],
            name: "updateInfluencer",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "uint256",
                name: "campaignId",
                type: "uint256",
              },
              {
                indexed: false,
                internalType: "address",
                name: "influencer",
                type: "address",
              },
              {
                indexed: false,
                internalType: "int256",
                name: "click",
                type: "int256",
              },
            ],
            name: "UpdateInfluencer",
            type: "event",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "campaignId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "influencer",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "updateInfluencerTokenId",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "uint256",
                name: "campaignId",
                type: "uint256",
              },
              {
                indexed: false,
                internalType: "address",
                name: "influencer",
                type: "address",
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "UpdateInfluencerTokenId",
            type: "event",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "campaignId",
                type: "uint256",
              },
            ],
            name: "withdrawReward",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            name: "campaigns",
            outputs: [
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                internalType: "address",
                name: "promoteAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "nft",
                type: "address",
              },
              {
                internalType: "int256",
                name: "reward",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "cpa",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "audience",
                type: "int256",
              },
              {
                internalType: "string",
                name: "query",
                type: "string",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            name: "campaignsOwner",
            outputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getAllCampaigns",
            outputs: [
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "id",
                    type: "uint256",
                  },
                  {
                    internalType: "string",
                    name: "name",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "account",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "promoteAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "nft",
                    type: "address",
                  },
                  {
                    internalType: "int256",
                    name: "reward",
                    type: "int256",
                  },
                  {
                    internalType: "int256",
                    name: "cpa",
                    type: "int256",
                  },
                  {
                    internalType: "int256",
                    name: "audience",
                    type: "int256",
                  },
                  {
                    internalType: "string",
                    name: "query",
                    type: "string",
                  },
                ],
                internalType: "struct CPA.Campaign[]",
                name: "",
                type: "tuple[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getBalance",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getOwner",
            outputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getUpdater",
            outputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            name: "influencers",
            outputs: [
              {
                internalType: "address",
                name: "influencerAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
              {
                internalType: "int256",
                name: "click",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "reward",
                type: "int256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalCampaignAmount",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
];
export default ABI;
