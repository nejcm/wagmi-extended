import '@testing-library/jest-dom';
// import { erc20Abi } from 'viem';
import { useWriteContract } from '../useWriteContract';

// mostly just for testing types

describe('useWriteContract', () => {
  test('Allows specifying writeProps', () => {
    expect(useWriteContract).toBeDefined();

    /* const c1 = useWriteContract({
      writeProps: {
        address: '0x0000000000000000000000000000000000000000',
        abi: erc20Abi,
        functionName: 'approve',
      },
      mutation: {
        onSuccess: (response) => {
          console.log(response); // correctly infers the type of the response
        },
      },
    });
    c1.writeContract({
      args: ['0x0000000000000000000000000000000000000001', BigInt(1000)],
    });

    const c2 = useWriteContract({
      writeProps: {
        address: '0x0000000000000000000000000000000000000000',
        abi: erc20Abi,
        functionName: 'approve',
        args: ['0x0000000000000000000000000000000000000002', BigInt(1000)],
      },
    });
    c2.writeContract();

    const c3 = useWriteContract({
      writeProps: {
        address: '0x0000000000000000000000000000000000000000',
        abi: erc20Abi,
        functionName: 'transferFrom',
        args: [
          '0x0000000000000000000000000000000000000003',
          '0x0000000000000000000000000000000000000004',
          BigInt(1000),
        ],
      },
      mutation: {
        onSuccess: (response, vars) => {
          console.log(response, vars); // correctly infers the type of the response
        },
      },
    });
    c3.writeContract(); */
  });
});
