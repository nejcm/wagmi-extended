/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MutateOptions } from '@tanstack/react-query';
import { useCallback, useRef } from 'react';
import type { Abi, ContractFunctionArgs, ContractFunctionName, WriteContractErrorType } from 'viem';
import { Config, useWriteContract as useWriteContractWagmi } from 'wagmi';
import type { WriteContractData, WriteContractVariables } from 'wagmi/query';
import { UseWriteContractProps, UseWriteContractReturnType } from './types';

export const useWriteContract = <
  abi extends Abi | readonly unknown[],
  functionName extends ContractFunctionName<abi, 'nonpayable' | 'payable'>,
  args extends ContractFunctionArgs<abi, 'nonpayable' | 'payable', functionName>,
>(
  parameters: UseWriteContractProps<abi, functionName, args> = {},
): UseWriteContractReturnType<abi, functionName, args> => {
  const writePropsRef = useRef(parameters.writeProps);
  writePropsRef.current = parameters.writeProps;
  const mutation = useWriteContractWagmi(parameters);
  const { writeContract: wc, writeContractAsync: wca } = mutation;

  const writeContract = useCallback(
    async (
      args?: Partial<WriteContractVariables<abi, functionName, args, Config, number>>,
      options?: MutateOptions<
        WriteContractData,
        WriteContractErrorType,
        WriteContractVariables<abi, functionName, args, Config, number>,
        unknown
      >,
    ) => {
      const mergedArgs = {
        ...writePropsRef.current,
        ...args,
      } as any; // because of optional arguments
      return wc(mergedArgs, options as any);
    },
    [wc],
  );

  const writeContractAsync = useCallback(
    async (
      args?: Partial<WriteContractVariables<abi, functionName, args, Config, number>>,
      options?: MutateOptions<
        WriteContractData,
        WriteContractErrorType,
        WriteContractVariables<abi, functionName, args, Config, number>,
        unknown
      >,
    ) => {
      const mergedArgs = {
        ...writePropsRef.current,
        ...args,
      } as any; // because of optional arguments
      return wca(mergedArgs, options as any);
    },
    [wca],
  );

  return {
    ...mutation,
    writeContract,
    writeContractAsync,
  };
};
