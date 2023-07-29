import { Signer, Contract, ContractFactory } from "ethers";
import { linkLibraries } from "../util/linkLibraries";
import WETH9 from "../util/WETH9.json";

type ContractJson = { abi: any; bytecode: string };
const artifacts: { [name: string]: ContractJson } = {
  UniswapV3Factory: require("@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json"),
  SwapRouter: require("@uniswap/v3-periphery/artifacts/contracts/SwapRouter.sol/SwapRouter.json"),
  NFTDescriptor: require("@uniswap/v3-periphery/artifacts/contracts/libraries/NFTDescriptor.sol/NFTDescriptor.json"),
  NonfungibleTokenPositionDescriptor: require("@uniswap/v3-periphery/artifacts/contracts/NonfungibleTokenPositionDescriptor.sol/NonfungibleTokenPositionDescriptor.json"),
  NonfungiblePositionManager: require("../../../v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json"),
  Panel:    require("../../../v3-periphery/artifacts/contracts/Panel.sol/Panel.json"),
  AutoServices: require("../../../v3-periphery/artifacts/contracts/AutoServices.sol/AutoServices.json"),
  WETH9,
};

// TODO: Should replace these with the proper typechain output.
// type INonfungiblePositionManager = Contract;
// type IUniswapV3Factory = Contract;

export class UniswapV3Deployer {
  static async deploy(actor: Signer): Promise<{ [name: string]: Contract }> {
    console.log("new UniswapV3Deployer: before"); 
    const deployer = new UniswapV3Deployer(actor);
    console.log("new UniswapV3Deployer: after"); 

    console.log("await deployer.deployWETH9: before"); 
    const weth9 = await deployer.deployWETH9();
    console.log("await deployer.deployWETH9: after"); 

    console.log("await deployer.deployFactory: before"); 
    const factory = await deployer.deployFactory();
    console.log("await deployer.deployFactory: after"); 

    console.log("await deployer.deployRouter: before"); 
    const router = await deployer.deployRouter(factory.address, weth9.address);
    console.log("await deployer.deployRouter: after"); 

    console.log("await deployer.deployNFTDescriptorLibrary: before"); 
    const nftDescriptorLibrary = await deployer.deployNFTDescriptorLibrary();
    console.log("await deployer.deployNFTDescriptorLibrary: after"); 

    console.log("await deployer.deployPositionDescriptor: before"); 
    const positionDescriptor = await deployer.deployPositionDescriptor(
      nftDescriptorLibrary.address,
      weth9.address
    );
    console.log("await deployer.deployPositionDescriptor: after"); 
    
    console.log("await deployer.deployNonfungiblePositionManager: before"); 
    const positionManager = await deployer.deployNonfungiblePositionManager(
      factory.address,
      weth9.address,
      positionDescriptor.address
    );
    console.log("await deployer.deployNonfungiblePositionManager: after"); 

    console.log("await deployer.deployAutoServices: before"); 
    const autoServices = await deployer.deployAutoServices(
      positionManager.address, 
      router.address
    );
    console.log("await deployer.deployAutoServices: after"); 
    
    console.log("await deployer.deployPanel: before"); 
    const panel = await deployer.deployPanel(
      positionManager.address,
      autoServices.address
    );
    console.log("await deployer.deployPanel: after"); 
  
    console.log("return: before"); 
    return {
      weth9,
      factory,
      router,
      nftDescriptorLibrary,
      positionDescriptor,
      positionManager,
      autoServices,
      panel,
    };
  }

  deployer: Signer;

  constructor(deployer: Signer) {
    this.deployer = deployer;
  }

  async deployFactory() {
    return await this.deployContract<Contract>(
      artifacts.UniswapV3Factory.abi,
      artifacts.UniswapV3Factory.bytecode,
      [],
      this.deployer
    );
  }

  async deployWETH9() {
    return await this.deployContract<Contract>(
      artifacts.WETH9.abi,
      artifacts.WETH9.bytecode,
      [],
      this.deployer
    );
  }

  async deployRouter(factoryAddress: string, weth9Address: string) {
    return await this.deployContract<Contract>(
      artifacts.SwapRouter.abi,
      artifacts.SwapRouter.bytecode,
      [factoryAddress, weth9Address],
      this.deployer
    );
  }

  async deployNFTDescriptorLibrary() {
    return await this.deployContract<Contract>(
      artifacts.NFTDescriptor.abi,
      artifacts.NFTDescriptor.bytecode,
      [],
      this.deployer
    );
  }

  async deployPositionDescriptor(
    nftDescriptorLibraryAddress: string,
    weth9Address: string
  ) {
    const linkedBytecode = linkLibraries(
      {
        bytecode: artifacts.NonfungibleTokenPositionDescriptor.bytecode,
        linkReferences: {
          "NFTDescriptor.sol": {
            NFTDescriptor: [
              {
                length: 20,
                start: 1261,
              },
            ],
          },
        },
      },
      {
        NFTDescriptor: nftDescriptorLibraryAddress,
      }
    );

    return (await this.deployContract(
      artifacts.NonfungibleTokenPositionDescriptor.abi,
      linkedBytecode,
      [weth9Address],
      this.deployer
    )) as Contract;
  }

  async deployNonfungiblePositionManager(
    factoryAddress: string,
    weth9Address: string,
    positionDescriptorAddress: string
  ) {
    return await this.deployContract<Contract>(
      artifacts.NonfungiblePositionManager.abi,
      artifacts.NonfungiblePositionManager.bytecode,
      [factoryAddress, weth9Address, positionDescriptorAddress],
      this.deployer
    );
  }

  async deployAutoServices(
    nonfungiblePositionManagerAddress: string,
    swapRouterAddress: string,
  ) {
    return await this.deployContract<Contract>(
      artifacts.AutoServices.abi,
      artifacts.AutoServices.bytecode,
      [nonfungiblePositionManagerAddress, swapRouterAddress],
      this.deployer
    );
  }

  async deployPanel(    
    nonfungiblePositionManagerAddress: string,
    autoServicesAddress: string,
  ) {
    return await this.deployContract<Contract>(
      artifacts.Panel.abi,
      artifacts.Panel.bytecode,
      [nonfungiblePositionManagerAddress, autoServicesAddress],
      this.deployer
    );
  }

  private async deployContract<T>(
    abi: any,
    bytecode: string,
    deployParams: Array<any>,
    actor: Signer
  ) {
    const factory = new ContractFactory(abi, bytecode, actor);
    return await factory.deploy(...deployParams);
  }
}
