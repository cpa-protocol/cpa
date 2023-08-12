// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.17;

import "hardhat/console.sol";

/**
 * @title Owner
 * @dev Set & change owner
 */
contract CPA {
    address private owner;
    address private updater;

    uint256 public totalCampaignAmount;

    address zoraFatory = 0xb0C56317E9cEBc6E0f7A59458a83D0A9ccC3e955;
    address testZoraNftContract = 0x1391c815403e6240866BE5C07D4db6C2a4028D61;
    
    uint32 royaltyMintSchedule = 10;
    uint32 royaltyBPS = 100;
    

    struct Campaign{
        uint256 id;
        string name;
        address account;
        address promoteAddress;
        address nft;
        int256 reward; 
        int256 cpa; 
        int256 audience;
        string query;
    }
    struct Influencer{
        uint256 tokenId; 
        int256 click;
        int256 reward;
    }
    mapping(address => Campaign) public campaigns;
    mapping(uint256 => address) public campaignsOwner;
    mapping(uint256 => mapping(address => Influencer)) public influencers;

    // event for EVM logging
    event OwnerSet(address indexed oldOwner, address indexed newOwner);

    event CreateCampaign(string name, address promoteAddress, uint256 indexed id, address indexed owner, int256 reward, int256 cpa, string query);
    event CreateNFT(uint256 indexed campaignId, address indexed nft, address indexed owner);
    event CreateInfluencer(uint256 indexed campaignId, address indexed owner);
    event UpdateInfluencer(uint256 campaignId, address influencer, int256 click);
    event CreateZoraContract(address nftContract);
    event CreateToken(uint256 tokenId);
    event UpdateInfluencerTokenId(uint256 campaignId, address influencer, uint256 tokenId);

}
