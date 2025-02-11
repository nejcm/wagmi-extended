# wagmi-extended

Wagmi hooks extending base functionality

## Overview

`wagmi-extended` is a library that extends the functionality of the base `wagmi` hooks, providing additional utilities for interacting with Ethereum smart contracts in a React environment. This library is designed to simplify the process of writing to contracts by offering a more flexible API.

## Installation

To install `wagmi-extended`, you can use:

**_npm:_**

```bash
npm install @nejcm/wagmi-extended
```

**_yarn:_**

```bash
yarn add @nejcm/wagmi-extended
```

## Usage

### Example: Using `useWriteContract`

The `useWriteContract` hook allows you to interact with Ethereum smart contracts by writing data to them. Below is an example of how to use this hook:

```typescript
import { useWriteContract } from 'wagmi-extended';
import erc20Abi from './erc20Abi.json';

const MyComponent = () => {
  const { writeContract, writeContractAsync } = useWriteContract({
    writeProps: {
      address: '0x0000000000000000000000000000000000000000',
      abi: erc20Abi,
      functionName: 'approve',
    },
    mutation: {
      onSuccess: (response, variables) => { // correctly infers types
        ...
      },
    },
  });

  const handleWrite = async () => {
    try {
      await writeContract({
        args: ['0x0000000000000000000000000000000000000000', BigInt(1000)],
      });
      console.log('Transaction successful');
    } catch (error) {
      console.error('Transaction failed', error);
    }
  };

  const handleWriteOverride = async () => {
    try {
      await writeContract({
        // Allows overriding the default writeProps
        address: '0x0000000000000000000000000000000000000001',
        functionName: 'revoke',
        args: ['0x0000000000000000000000000000000000000000', BigInt(1000)],
      });
      console.log('Transaction successful');
    } catch (error) {
      console.error('Transaction failed', error);
    }
  };

  return <button onClick={handleWrite}>Approve</button>;
};
```

### API

#### `useWriteContract`

- **Parameters**: Accepts default [useContractWrite props](https://wagmi.sh/react/api/hooks/useWriteContract) and an additional optional object with the following properties:

  - `writeProps`: An optional object containing:
    - `address`: Optional contract address.
    - `abi`: Optional contract ABI.
    - `functionName`: Optional name of the function to call.
    - `args`: Optional arguments for the function.
    - `chainId`: Optional chain ID.

- **Returns**: Return type is the same as the default [useContractWrite](https://wagmi.sh/react/api/hooks/useContractWrite) hook with the following two methods overridden to allow optional arguments:
  - `writeContract`: A function to execute the contract write operation.
  - `writeContractAsync`: An async version of `writeContract`.

## Contributing

Contributions are welcome!

To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Create a pull request to the main repository.

### Running the project locally

To run the project locally, follow these steps:

1. Clone the repository.
2. Install the dependencies by running `pnpm install`.
3. Build the project `pnpm run build`.

## License

This project is licensed under the MIT License.

## TODO

- [ ] Add more useful overrides and functionality
  - [ ] Batch transaction support
  - ...
- [ ] Expand the docs and move them to GitHub pages with [Docusaurus](https://github.com/facebook/docusaurus)
