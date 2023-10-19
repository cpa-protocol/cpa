// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.20;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/ERC1155.sol";
import "./ERC1155Token.sol";
import "hardhat/console.sol";
import { CPA }from "./cpa.sol";

contract NFT {

    address private owner;
    address private cpa;

    struct InfluencerNFT {
        uint256 campaignId; 
        uint256 tokenId;
        address nft;
    }
    mapping(address => mapping(uint256 => InfluencerNFT)) public influencersNftContract;
    mapping(uint256 => uint) public campaignNftId;
    mapping(uint256 => address) public campaignFactory;

    event OwnerSet(address indexed oldOwner, address indexed newOwner);
    event CreateNFTContract(address nftContract);
    event CreateToken(uint256 indexed campaignId,address indexed owner, uint256 tokenId);

    constructor(address _cpa) {
        owner = msg.sender; // 'msg.sender' is sender of current call, contract deployer for a constructor
        cpa = _cpa;
        emit OwnerSet(address(0), owner);
    }

    function setUpNFT(uint256 campaignId,string memory campaignName, string memory contractURI) public {
        uint tokenId = campaignNftId[campaignId];
        address deployedAddress = campaignFactory[campaignId];

        if(deployedAddress == address(0)){
            deployedAddress = address(new ERC1155Token(campaignName, contractURI, ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
            campaignFactory[campaignId] = (deployedAddress);
            emit CreateNFTContract(deployedAddress);
        }

        InfluencerNFT memory newInfluencerNft;
        newInfluencerNft.campaignId = campaignId;
        newInfluencerNft.tokenId = tokenId;
        newInfluencerNft.nft = deployedAddress;

        influencersNftContract[msg.sender][campaignId] = newInfluencerNft;
        CPA(cpa).updateInfluencerTokenId(campaignId, msg.sender, tokenId);

        emit CreateToken(campaignId, msg.sender,tokenId);
    }

    function mint(address influencer, uint256 campaignId) public returns (bool) {
        InfluencerNFT memory influencerNft = influencersNftContract[influencer][campaignId];
        ERC1155Token target = ERC1155Token(influencerNft.nft);
        console.log("Influencer NFT", influencerNft.nft);
        
        target.mint(tx.origin, influencerNft.tokenId, 1);
        
        return true;
    }
}
