/ SPDX-License-Identifier: GPL-3.0

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

}
