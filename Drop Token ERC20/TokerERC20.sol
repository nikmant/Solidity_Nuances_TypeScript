// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ColaERC20 is ERC20 {
    constructor() ERC20("ColaERC20", "CE2") {
        _mint(msg.sender, 1000000000 * 10 ** decimals());
    }
}