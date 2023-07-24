// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract InstallMyInstaller is Ownable
{
    event Deployed(address to);

    function deploy(uint256 _salt) 
    external 
    onlyOwner 
    {
        InstallMyContact contr2 = new InstallMyContact{salt: bytes32(_salt)}();
        emit Deployed(address(contr2));
        contr2.transferOwnership(owner());
    }
}

contract InstallMyContact is Ownable
{
    function deploy(bytes memory bytecode) 
    onlyOwner 
    external 
    {       
       address addr;
        assembly{
            mstore(0x0, bytecode)
            addr := create(0, 0xa0, calldatasize())
        }
        require(addr != address(0));

        emit Deployed(addr);

        Ownable c1 = Ownable(addr);
        c1.transferOwnership(owner());
    }

    function destroy() external onlyOwner {
        selfdestruct(payable(msg.sender));
    }
    
    event Deployed(address to);    
}


contract Soul is Ownable
{
    uint constant myNumb = 33333;
    address router;

    constructor(address _router)
    {
        router = _router;
    }

    // sample funct
    function GetNumber3() external pure returns(uint)
    {
        return myNumb;
    }
    
    function destroy() external onlyOwner 
    {
        selfdestruct(payable(msg.sender));
    }
}