// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./TokenERC20Sender.sol";

contract TokenERC20Sender is Ownable {
    IERC20 public token;

    // =================================
    // Constructor
    // =================================

    constructor(address _token, uint _amountDrop) {
        require(_token != address(0), "Address token is zero!");
        token = IERC20(_token);
        amountDrop = _amountDrop;
    }
    
    // =================================
    // Main Functions
    // =================================

    function clearInfoAboutDrop(address _addr) public onlyOwner {
        wasAlreadyDrop[_addr] = false;
    }

    function chengeToken(address _newToken) public onlyOwner {
        require(_newToken != address(0), "Address token is zero!");
        token = IERC20(_newToken);
    }

    function sendEqual(address[] memory _addresses, uint _amount) external onlyOwner {
        for (uint i = 0; i < _addresses.length; i++) {
            token.transfer(_addresses[i], amountDrop);
            emit GetAirDrop(_addresses[i], amountDrop);
        }
    }

    function sendDifferent(address[] memory _addresses, uint[] memory _amounts) external onlyOwner {
        require(_addresses.length == _amounts.length, "Arrays must be the same length!");
        for (uint i = 0; i < _addresses.length; i++) {
            token.transfer(_addresses[i], _amounts[i]);
            emit GetAirDrop(_addresses[i], _amounts[i]);
        }
    }

    event GetAirDrop(address dropper, uint amount);

}