// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC721Tradable.sol";
import "hardhat/console.sol";

contract NFTGame is ERC721Tradable {
    uint256 public constant TOKEN_ID = 1;

    constructor(address _proxyRegistryAddress) ERC721Tradable("Creature", "OSC", _proxyRegistryAddress) {
        _mint(msg.sender, TOKEN_ID);
    }

    function baseTokenURI() public pure override returns (string memory) {
        return "https://creatures-api.opensea.io/api/creature/";
    }

    function contractURI() public pure returns (string memory) {
        return "https://creatures-api.opensea.io/contract/opensea-creatures";
    }

    function makeABuyOrder() public virtual {
        console.log("Hello");
    }
}
