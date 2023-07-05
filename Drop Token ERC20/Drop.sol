// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DropOneInHand is Ownable {
    IERC20 public token;
    mapping(address => bool) public wasAlreadyDrop;
    uint public amountDrop;

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

    function getDrop() external {
        require(!wasAlreadyDrop[msg.sender], "You already get drop.");
        wasAlreadyDrop[msg.sender] = true;
        token.transfer(msg.sender, amountDrop);
        emit GetAirDrop(msg.sender, amountDrop);
    }

    function balanceWithdraw() external onlyOwner {
        uint value = getBalance();
        require(value>0, "No tokens left!");
        token.transfer(owner(), value);
        emit GetAirDrop(owner(), value);
    }


    // =================================
    // Additional Functions
    // =================================    
    
    function changeAmountDrop(uint _newValue) external onlyOwner {
        amountDrop = _newValue;
    }

    function changeToken(address _newToken) public onlyOwner {
        token = IERC20(_newToken);
    }

    function clearInfoAboutDrop(address _addr) public onlyOwner {
        wasAlreadyDrop[_addr] = false;
    }

    
    // =================================
    // Internal Functions
    // =================================

    function getBalance() public view returns(uint) {
        return token.balanceOf(address(this));
    }

    function renounceOwnership() public pure override {
        revert("Not success!");
    }

    event GetAirDrop(address dropper, uint amount);

}