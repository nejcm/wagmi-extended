import type { MutateOptions } from '@tanstack/query-core';
import { useCallback } from 'react';
import type {
  Abi,
  Address,
  ContractFunctionArgs,
  ContractFunctionName,
  WriteContractErrorType,
} from 'viem';
import {
  Config,
  UseWriteContractParameters,
  useWriteContract as useWriteContractWagmi,
} from 'wagmi';
import { WriteContractData, WriteContractVariables } from 'wagmi/query';

export type UseWriteContractProps<
  abi extends Abi | readonly unknown[],
  functionName extends ContractFunctionName<abi, 'nonpayable' | 'payable'>,
  args extends ContractFunctionArgs<
    abi,
    'nonpayable' | 'payable',
    functionName
  >,
> = UseWriteContractParameters & {
  writeProps?: {
    address?: Address;
    abi?: abi;
    functionName?: functionName;
    args?: args;
    chainId?: number;
  };
};

export const useWriteContract = <
  abi extends Abi | readonly unknown[],
  functionName extends ContractFunctionName<abi, 'nonpayable' | 'payable'>,
  args extends ContractFunctionArgs<
    abi,
    'nonpayable' | 'payable',
    functionName
  >,
>(
  parameters: UseWriteContractProps<abi, functionName, args> = {},
) => {
  const mutation = useWriteContractWagmi(parameters);

  const writeContract = useCallback(
    async (
      args?: Partial<
        WriteContractVariables<abi, functionName, args, Config, number>
      >,
      options?: MutateOptions<
        WriteContractData,
        WriteContractErrorType,
        WriteContractVariables<abi, functionName, args, Config, number>,
        unknown
      >,
    ) => {
      return mutation.writeContract(
        {
          ...parameters.writeProps,
          ...args,
        } as any, // because of optional arguments
        options as any,
      );
    },
    [],
  );
  const writeContractAsync = useCallback(
    async (
      args?: Partial<
        WriteContractVariables<abi, functionName, args, Config, number>
      >,
      options?: MutateOptions<
        WriteContractData,
        WriteContractErrorType,
        WriteContractVariables<abi, functionName, args, Config, number>,
        unknown
      >,
    ) => {
      return mutation.writeContractAsync(
        {
          ...parameters.writeProps,
          ...args,
        } as any, // because of optional arguments
        options as any,
      );
    },
    [],
  );

  return {
    ...mutation,
    writeContract,
    writeContractAsync,
  };
};
