/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "Challenge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Challenge__factory>;
    getContractFactory(
      name: "Hacker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Hacker__factory>;
    getContractFactory(
      name: "IChallenge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IChallenge__factory>;
    getContractFactory(
      name: "DropBatch",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DropBatch__factory>;
    getContractFactory(
      name: "Lock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lock__factory>;
    getContractFactory(
      name: "DropBatch_WithActiveTransf",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DropBatch_WithActiveTransf__factory>;
    getContractFactory(
      name: "DropBatch",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DropBatch__factory>;
    getContractFactory(
      name: "DropOneInHand",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DropOneInHand__factory>;
    getContractFactory(
      name: "TokenERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenERC20__factory>;
    getContractFactory(
      name: "TokenERC20Sender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenERC20Sender__factory>;
    getContractFactory(
      name: "ColaERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ColaERC20__factory>;
    getContractFactory(
      name: "TokenERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenERC20__factory>;

    getContractAt(
      name: "Ownable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "Challenge",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Challenge>;
    getContractAt(
      name: "Hacker",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Hacker>;
    getContractAt(
      name: "IChallenge",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IChallenge>;
    getContractAt(
      name: "DropBatch",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.DropBatch>;
    getContractAt(
      name: "Lock",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Lock>;
    getContractAt(
      name: "DropBatch_WithActiveTransf",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.DropBatch_WithActiveTransf>;
    getContractAt(
      name: "DropBatch",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.DropBatch>;
    getContractAt(
      name: "DropOneInHand",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.DropOneInHand>;
    getContractAt(
      name: "TokenERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenERC20>;
    getContractAt(
      name: "TokenERC20Sender",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenERC20Sender>;
    getContractAt(
      name: "ColaERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ColaERC20>;
    getContractAt(
      name: "TokenERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenERC20>;

    deployContract(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable>;
    deployContract(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "Challenge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Challenge>;
    deployContract(
      name: "Hacker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Hacker>;
    deployContract(
      name: "IChallenge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IChallenge>;
    deployContract(
      name: "DropBatch",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DropBatch>;
    deployContract(
      name: "Lock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lock>;
    deployContract(
      name: "DropBatch_WithActiveTransf",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DropBatch_WithActiveTransf>;
    deployContract(
      name: "DropBatch",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DropBatch>;
    deployContract(
      name: "DropOneInHand",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DropOneInHand>;
    deployContract(
      name: "TokenERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenERC20>;
    deployContract(
      name: "TokenERC20Sender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenERC20Sender>;
    deployContract(
      name: "ColaERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ColaERC20>;
    deployContract(
      name: "TokenERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenERC20>;

    deployContract(
      name: "Ownable",
      args: any[],
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable>;
    deployContract(
      name: "ERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "IERC20Metadata",
      args: any[],
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(
      name: "IERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "Challenge",
      args: any[],
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Challenge>;
    deployContract(
      name: "Hacker",
      args: any[],
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Hacker>;
    deployContract(
      name: "IChallenge",
      args: any[],
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IChallenge>;
    deployContract(
      name: "DropBatch",
      args: any[],
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DropBatch>;
    deployContract(
      name: "Lock",
      args: any[],
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lock>;
    deployContract(
      name: "DropBatch_WithActiveTransf",
      args: any[],
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DropBatch_WithActiveTransf>;
    deployContract(
      name: "DropBatch",
      args: any[],
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DropBatch>;
    deployContract(
      name: "DropOneInHand",
      args: any[],
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DropOneInHand>;
    deployContract(
      name: "TokenERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenERC20>;
    deployContract(
      name: "TokenERC20Sender",
      args: any[],
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenERC20Sender>;
    deployContract(
      name: "ColaERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ColaERC20>;
    deployContract(
      name: "TokenERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenERC20>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.Contract>;
  }
}
