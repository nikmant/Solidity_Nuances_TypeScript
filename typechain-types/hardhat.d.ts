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
      name: "Lock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lock__factory>;
    getContractFactory(
      name: "ColaERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ColaERC20__factory>;

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
      name: "Lock",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Lock>;
    getContractAt(
      name: "ColaERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ColaERC20>;

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
      name: "Lock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lock>;
    deployContract(
      name: "ColaERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ColaERC20>;

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
      name: "Lock",
      args: any[],
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lock>;
    deployContract(
      name: "ColaERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ColaERC20>;

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