import { ethers } from "hardhat";
import { Signer, Contract, ContractFactory } from "ethers";
import { UniswapV3Deployer } from "./UniswapV3Deployer"
// cola 2
const main = async () => {
    const [deployer] = await ethers.getSigners();
    const main_adreses = await UniswapV3Deployer.deploy(deployer);
    console.log("myWallet.address=",deployer.address);    
    console.log("factory.address=",main_adreses.factory.address);    
    console.log("weth9.address=",main_adreses.weth9.address);    
    console.log("router.address=",main_adreses.router.address);    
    console.log("nftDescriptorLibrary.address=",main_adreses.nftDescriptorLibrary.address); 
    console.log("positionDescriptor.address=",main_adreses.positionDescriptor.address); 
    console.log("positionManager.address=",main_adreses.positionManager.address); 
    console.log("autoServices.address=",main_adreses.autoServices.address); 
    console.log("panel.address=",main_adreses.panel.address); 
  }

  if (require.main === module) {
    main()
        .then(() => process.exit(0))
        .catch((error) => {
            console.error(error);
            process.exit(1);
        });
  }