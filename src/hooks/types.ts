import type { Abi, Address, ContractFunctionArgs, ContractFunctionName } from 'viem';
import { UseWriteContractParameters } from 'wagmi';

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
