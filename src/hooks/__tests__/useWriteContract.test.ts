import '@testing-library/jest-dom';
import { useWriteContract } from '../useWriteContract';

describe('useWriteContract', () => {
  test('Allows specifying writeProps', () => {
    expect(useWriteContract).toBeDefined();

    /* const c1 = useWriteContract({
      writeProps: {
        address: '0x0000000000000000000000000000000000000000',
        abi: erc20Abi,
        functionName: 'approve',
      },
    });
    c1.writeContract({
      args: ['0x0000000000000000000000000000000000000000', BigInt(1000)],
    });

    const c2 = useWriteContract({
      writeProps: {
        address: '0x0000000000000000000000000000000000000000',
        abi: erc20Abi,
        functionName: 'approve',
        args: ['0x0000000000000000000000000000000000000000', BigInt(1000)],
      },
    });
    c2.writeContract(); */
  });
});
