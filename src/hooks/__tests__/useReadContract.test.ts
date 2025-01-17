import '@testing-library/jest-dom';
import { useReadContract } from '../useReadContract';

describe('useReadContract', () => {
  test('true', () => {
    expect(useReadContract).toBeDefined();
  });
});