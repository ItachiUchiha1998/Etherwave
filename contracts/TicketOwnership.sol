pragma solidity ^0.4.19;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721BasicToken.sol";

/**
 * @title TicketOwnership
 * @dev based on a basic implementation of ERC721 (Non-Fungible Token Standard)
 */
contract TicketOwnership is ERC721BasicToken {    
    /*** Constants ***/
    // For metadata future considerations
    string public constant NAME = "Etherwave";
    string public constant SYMBOL = "EWAVE";
    string public tokenMetadataBaseURI = "https://api.etherwave.com/";

    // Mapping from owner to owned token
    mapping (address => uint256[]) internal ownedTokens;
}