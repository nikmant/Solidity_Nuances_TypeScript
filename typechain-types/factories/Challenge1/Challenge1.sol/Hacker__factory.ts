/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  Hacker,
  HackerInterface,
} from "../../../Challenge1/Challenge1.sol/Hacker";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_challenge",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "Hack",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "Owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "challenge",
    outputs: [
      {
        internalType: "contract IChallenge",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516104693803806104698339818101604052810190610032919061011c565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610149565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100e9826100be565b9050919050565b6100f9816100de565b811461010457600080fd5b50565b600081519050610116816100f0565b92915050565b600060208284031215610132576101316100b9565b5b600061014084828501610107565b91505092915050565b610311806101586000396000f3fe608060405234801561001057600080fd5b50600436106100455760003560e01c8063983e1318146100c6578063b4a99a4e146100d0578063d2ef7398146100ee57610046565b5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634c228cc76040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156100b057600080fd5b505af11580156100c4573d6000803e3d6000fd5b005b6100ce61010c565b005b6100d86101bb565b6040516100e59190610246565b60405180910390f35b6100f66101df565b60405161010391906102c0565b60405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663548853a060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b81526004016101879190610246565b600060405180830381600087803b1580156101a157600080fd5b505af11580156101b5573d6000803e3d6000fd5b50505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061023082610205565b9050919050565b61024081610225565b82525050565b600060208201905061025b6000830184610237565b92915050565b6000819050919050565b600061028661028161027c84610205565b610261565b610205565b9050919050565b60006102988261026b565b9050919050565b60006102aa8261028d565b9050919050565b6102ba8161029f565b82525050565b60006020820190506102d560008301846102b1565b9291505056fea2646970667358221220e2df2b830cbb2050b99b944855530ed0954bc033d7ff1d1a7144b2ff5c40f2be64736f6c63430008120033";

type HackerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HackerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Hacker__factory extends ContractFactory {
  constructor(...args: HackerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _challenge: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_challenge, overrides || {});
  }
  override deploy(
    _challenge: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_challenge, overrides || {}) as Promise<
      Hacker & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Hacker__factory {
    return super.connect(runner) as Hacker__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HackerInterface {
    return new Interface(_abi) as HackerInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Hacker {
    return new Contract(address, _abi, runner) as unknown as Hacker;
  }
}
