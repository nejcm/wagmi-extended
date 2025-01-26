import type { MutateOptions } from '@tanstack/react-query';
import type {
  Abi,
  Address,
  ContractFunctionArgs,
  ContractFunctionName,
  WriteContractErrorType,
} from 'viem';
import { Config, useWriteContract, UseWriteContractParameters } from 'wagmi';
import type { WriteContractData, WriteContractVariables } from 'wagmi/query';

export type WriteProps<
  abi extends Abi | readonly unknown[],
  functionName extends ContractFunctionName<abi, 'nonpayable' | 'payable'>,
  args extends ContractFunctionArgs<abi, 'nonpayable' | 'payable', functionName>,
> = {
  address?: Address;
  abi?: abi;
  functionName?: functionName;
  args?: args;
  chainId?: number;
};

export type UseWriteContractProps<
  abi extends Abi | readonly unknown[],
  functionName extends ContractFunctionName<abi, 'nonpayable' | 'payable'>,
  args extends ContractFunctionArgs<abi, 'nonpayable' | 'payable', functionName>,
> = UseWriteContractParameters & {
  writeProps?: WriteProps<abi, functionName, args>;
};

export type UseWriteContractReturnType<
  abi extends Abi | readonly unknown[],
  functionName extends ContractFunctionName<abi, 'nonpayable' | 'payable'>,
  args extends ContractFunctionArgs<abi, 'nonpayable' | 'payable', functionName>,
> = Omit<ReturnType<typeof useWriteContract>, 'writeContract' | 'writeContractAsync'> & {
  writeContract: (
    args?: Partial<WriteContractVariables<abi, functionName, args, Config, number>>,
    options?: MutateOptions<
      WriteContractData,
      WriteContractErrorType,
      WriteContractVariables<abi, functionName, args, Config, number>,
      unknown
    >,
  ) => Promise<void>;
  writeContractAsync: (
    args?: Partial<WriteContractVariables<abi, functionName, args, Config, number>>,
    options?: MutateOptions<
      WriteContractData,
      WriteContractErrorType,
      WriteContractVariables<abi, functionName, args, Config, number>,
      unknown
    >,
  ) => Promise<WriteContractData>;
};
