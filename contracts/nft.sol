// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.17;

import {CPA }from "./cpa.sol";
import { IZoraCreator1155Factory } from "https://github.com/ourzora/zora-1155-contracts/blob/main/src/interfaces/IZoraCreator1155Factory.sol";
import { ICreatorRoyaltiesControl } from "https://github.com/ourzora/zora-1155-contracts/blob/main/src/interfaces/ICreatorRoyaltiesControl.sol";
import { IZoraCreator1155 } from "https://github.com/ourzora/zora-1155-contracts/blob/main/src/interfaces/IZoraCreator1155.sol";
import {IMinter1155} from "https://github.com/ourzora/zora-1155-contracts/blob/main/src/interfaces/IMinter1155.sol";
import "hardhat/console.sol";


contract NFT {
    address zoraFatory = 0xb0C56317E9cEBc6E0f7A59458a83D0A9ccC3e955;
    address private owner;
    address private cpa;

    struct InfluencerNFT {
        uint256 campaignId; 
        uint256 tokenId;
        address zora;
    }

    mapping(address => mapping(uint256 => InfluencerNFT)) public influencersNftContract;

    event OwnerSet(address indexed oldOwner, address indexed newOwner);
    event CreateZoraContract(address nftContract);
    event CreateToken(uint256 indexed campaignId,address indexed owner, uint256 tokenId);

    constructor(address _cpa) {
        console.log("Owner contract deployed by:", msg.sender);
        owner = msg.sender; // 'msg.sender' is sender of current call, contract deployer for a constructor
        cpa = _cpa;
        emit OwnerSet(address(0), owner);
    }

    function setUpNFT(uint256 campaignId,string memory campaignName, string memory contractURI) public {
    
        bytes[] memory initSetup = new bytes[](1);
        initSetup[0] = abi.encodeWithSelector(
            IZoraCreator1155.setupNewToken.selector,
            "ipfs://test",
            1000
        );
        IZoraCreator1155Factory factory = IZoraCreator1155Factory(zoraFatory);
        address deployedAddress = factory.createContract(
            contractURI,
            campaignName,
            ICreatorRoyaltiesControl.RoyaltyConfiguration({
                royaltyBPS: 0,
                royaltyRecipient: msg.sender,
                royaltyMintSchedule: 0
            }),
            payable(address(this)),
            initSetup
        );

        emit CreateZoraContract(deployedAddress);

        IZoraCreator1155 target = IZoraCreator1155(deployedAddress);
        uint256 tokenId = target.setupNewToken("ipfs://test", 1000);

        InfluencerNFT memory newInfluencerNft;
        newInfluencerNft.campaignId = campaignId;
        newInfluencerNft.tokenId = tokenId;
        newInfluencerNft.zora = deployedAddress;

        influencersNftContract[msg.sender][campaignId] = newInfluencerNft;
        CPA(cpa).updateInfluencerTokenId(campaignId, msg.sender, tokenId);

        emit CreateToken(campaignId, msg.sender,tokenId);
    }

    function mint(address influencer, uint256 campaignId) public returns (bool) {
        InfluencerNFT memory influencerNft = influencersNftContract[influencer][campaignId];
        IZoraCreator1155 target = IZoraCreator1155(influencerNft.zora);
        
        target.adminMint(msg.sender, influencerNft.tokenId, 1, "");
        
        return true;
    }

}
