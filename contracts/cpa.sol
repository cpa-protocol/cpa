// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.20;

import "hardhat/console.sol";

/**
 * @title Owner
 * @dev Set & change owner
 */
contract CPA {

    address private owner;
    address private updater;

    uint256 public totalCampaignAmount;

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
        address influencerAddress;
        uint256 tokenId; 
        int256 click;
        int256 reward;
    }
    mapping(address => mapping(uint256 => Campaign)) public campaigns;
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

    // modifier to check if caller is owner
    modifier isOwner() {
        // If the first argument of 'require' evaluates to 'false', execution terminates and all
        // changes to the state and to Ether balances are reverted.
        // This used to consume all gas in old EVM versions, but not anymore.
        // It is often a good idea to use 'require' to check if functions are called correctly.
        // As a second argument, you can also provide an explanation about what went wrong.
        require(msg.sender == owner, "Caller is not owner");
        _;
    }

    modifier isUpdater() {
        // If the first argument of 'require' evaluates to 'false', execution terminates and all
        // changes to the state and to Ether balances are reverted.
        // This used to consume all gas in old EVM versions, but not anymore.
        // It is often a good idea to use 'require' to check if functions are called correctly.
        // As a second argument, you can also provide an explanation about what went wrong.
        require(msg.sender == updater, "Caller is not Updater");
        _;
    }

    /**
     * @dev Set contract deployer as owner
     */
    constructor(address _updater) {
        console.log("Owner contract deployed by:", msg.sender);
        owner = msg.sender; // 'msg.sender' is sender of current call, contract deployer for a constructor
        updater = _updater;
        emit OwnerSet(address(0), owner);
    }

    /**
     * @dev Change owner
     * @param newOwner address of new owner
     */
    function changeOwner(address newOwner) public isOwner {
        emit OwnerSet(owner, newOwner);
        owner = newOwner;
    }

    function changeUpdater(address _updater) public isOwner {
        updater = _updater;
    }

    function createCampaign(string memory _name, address _promoteAddress,int256 _reward, int256 _cpa, string memory _query) payable public returns (bool){
        require(msg.value >= uint(_reward), "Insufficient eth for reward!");
        Campaign memory newCampaign;
        newCampaign.name = _name;
        newCampaign.promoteAddress = _promoteAddress;
        newCampaign.id = totalCampaignAmount;
        newCampaign.reward = _reward;
        newCampaign.cpa = _cpa;
        newCampaign.audience = _reward / _cpa;
        newCampaign.query = _query;
        campaigns[msg.sender][totalCampaignAmount] = newCampaign;
        campaignsOwner[totalCampaignAmount] = msg.sender;
        emit CreateCampaign(_name, _promoteAddress, totalCampaignAmount, msg.sender, _reward, _cpa, _query);

        totalCampaignAmount++;
        return true;
    }

    function createInfluencer(uint256 campaignId) public returns (bool){
        Influencer memory newInfluencer;
        newInfluencer.influencerAddress = msg.sender;
        newInfluencer.click = 0;
        newInfluencer.reward = 0;
        influencers[campaignId][msg.sender] = newInfluencer;

        emit CreateInfluencer(campaignId, msg.sender);
        return true;
    }

    function updateInfluencerTokenId(uint256 campaignId, address influencer,uint256 tokenId) public{
        Influencer storage influencerData =  influencers[campaignId][influencer];
        influencerData.tokenId = tokenId;
        
        emit UpdateInfluencerTokenId(campaignId, influencer, tokenId);
    }

    function updateInfluencer(uint256 campaignId, address influencerOwner, int256 click) public isUpdater returns (bool){
        Influencer storage influencer = influencers[campaignId][influencerOwner];
        require(click > influencer.click, "Wrong click data!");
        influencer.click = click;

        emit UpdateInfluencer(campaignId, influencerOwner, click);
        return true;
    }

    function withdrawReward(uint256 campaignId) public returns (bool){
        Influencer storage influencer = influencers[campaignId][msg.sender];
        address  campaignOwner = campaignsOwner[campaignId];
        Campaign storage campaign = campaigns[campaignOwner][campaignId];
        int256 totalReward = campaign.cpa * influencer.click;
        int256 withdrawableReward = totalReward - influencer.reward;
        require(campaign.reward >= withdrawableReward, "Campaign reward not enough!");
        campaign.reward -= withdrawableReward;
        influencer.reward = totalReward;
        payable(msg.sender).transfer(uint(withdrawableReward));
        return true;
    }



    /**
     * @dev Return owner address 
     * @return address of owner
     */
    function getOwner() external view returns (address) {
        return owner;
    }

    function getUpdater() external view returns (address) {
        return updater;
    }

    function getBalance() view public returns(uint) {
        return address(this).balance;
    }

    function getAllCampaigns() view public returns(Campaign[] memory) {
        Campaign[] memory campaignsArray = new Campaign[](totalCampaignAmount);
        for (uint i = 0; i < totalCampaignAmount; i++) {
            address campaignOwner = campaignsOwner[i];
            campaignsArray[i] = campaigns[campaignOwner][i];
        }
        return campaignsArray;
    }
} 
