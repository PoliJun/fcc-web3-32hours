## Lesson 7: Hardhat Fund Me

### Initial Setup

`hardhat`, `hardhat-toolbox`.

1. `npm init -y`
2. `npm install --save-dev hardhat`
3. `npx hardhat init`

#### `hardhat-toolbox` is a collection of useful tasks for Hardhat.

When you use this plugin, you'll be able to:

-   Interact with your contracts using ethers.js and the hardhat-ethers plugin.
-   Test your contracts with Mocha, Chai and our own Hardhat Chai Matchers plugin.
-   Deploy your contracts with Hardhat Ignition.
-   Interact with Hardhat Network with our Hardhat Network Helpers.
-   Verify the source code of your contracts with the hardhat-verify plugin.
-   Get metrics on the gas used by your contracts with the hardhat-gas-reporter plugin.
-   Measure your tests coverage with solidity-coverage.
-   And, if you are using TypeScript, get type bindings for your contracts with Typechain.

#### Network Helpers

When the Toolbox is installed using npm 7 or later, its peer dependencies are automatically installed. However, these dependencies won't be listed in the package.json. As a result, directly importing the Network Helpers can be problematic for certain tools or IDEs. To address this issue, the Toolbox re-exports the Hardhat Network Helpers. You can use them like this:

`import helpers from "@nomicfoundation/hardhat-toolbox/network-helpers";`

### Solhint Linting

Configuration file: `.solhint.json`

**Default**

```json
{
    "extends": "solhint:default"
}
```

**Note**

The solhint:default configuration contains only two rules: `max-line-length` & `no-console`

**Sample**

```json
{
    "extends": "solhint:recommended",
    "plugins": [],
    "rules": {
        "avoid-suicide": "error",
        "avoid-sha3": "warn"
    }
}
```

#### All [rules](./solhint-rules.md)

Run: `solhint 'contracts/**/*.sol'`.

"solhint-plugin-prettier" Integrate Solhint with the "prettier-plugin-solidity" formatter.

```json
{
    "plugins": ["prettier"],
    "rules": {
        "prettier/prettier": "error"
    }
}
```

This rule will emit an error for each difference between your code and how prettier-solidity would format it. You can also set it to warning instead of error if you prefer that.

### Hardhat deploy

deploy parameter options:

```js
export interface DeployOptions = {
  from: string; // address (or private key) that will perform the transaction. you can use `getNamedAccounts` to retrieve the address you want by name.
  contract?: // this is an optional field. If not specified it defaults to the contract with the same name as the first parameter
    | string // this field can be either a string for the name of the contract
    | { // or abi and bytecode
        abi: ABI;
        bytecode: string;
        deployedBytecode?: string;
      };
  args?: any[]; // the list of argument for the constructor (or the upgrade function in case of proxy)
  skipIfAlreadyDeployed?: boolean; // if set it to true, will not attempt to deploy even if the contract deployed under the same name is different
  log?: boolean; // if true, it will log the result of the deployment (tx hash, address and gas used)
  linkedData?: any; // This allow to associate any JSON data to the deployment. Useful for merkle tree data for example
  libraries?: { [libraryName: string]: Address }; // This let you associate libraries to the deployed contract
  proxy?: boolean | string | ProxyOptions; // This options allow to consider your contract as a proxy (see below for more details)

  // here some common tx options :
  gasLimit?: string | number | BigNumber;
  gasPrice?: string | BigNumber;
  value?: string | BigNumber;
  nonce?: string | number | BigNumber;

  estimatedGasLimit?: string | number | BigNumber; // to speed up the estimation, it is possible to provide an upper gasLimit
  estimateGasExtra?: string | number | BigNumber; // this option allow you to add a gas buffer on top of the estimation

  autoMine?: boolean; // this force a evm_mine to be executed. this is useful to speed deployment on test network that allow to specify a block delay (ganache for example). This option basically skip the delay by force mining.
  deterministicDeployment? boolean | string; // if true, it will deploy the contract at a deterministic address based on bytecode and constructor arguments. The address will be the same across all network. It use create2 opcode for that, if it is a string, the string will be used as the salt.
  waitConfirmations?: number; // number of the confirmations to wait after the transactions is included in the chain
};
```

### aave

The Aave Protocol is decentralised non-custodial liquidity protocol where users can participate as suppliers, borrowers or liquidators. Suppliers provide liquidity to a market and can earn interest on the crypto assets provided, while borrowers are able to borrow in an overcollateralized fashion. Borrowers can also engage in one-block borrow transactions (”flash loans”), which do not require overcollateralization.

#### Deploy On Multiple Chains

If chainId is X use address Y.

If chainId is Z use address W.

```js
const chainId = network.config.chainId;

let ethUsdPriceFeedAddress;
if (chainId == 31337) {
    const ethUsdAggregator = await deployments.get("MockV3Aggregator");
    ethUsdPriceFeedAddress = ethUsdAggregator.address;
} else {
    ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];
}
```

`helper-hardhat-config`.

```js
const networkConfig = {
    31337: {
        name: "localhost",
    },
    // Price Feed Address, values can be obtained at https://docs.chain.link/data-feeds/price-feeds/addresses
    11155111: {
        name: "sepolia",
        ethUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
    },
};

const developmentChains = ["hardhat", "localhost"];

module.exports = {
    networkConfig,
    developmentChains,
};
```

### Mock Contracts

`import "@chainlink/contracts/src/v0.8/tests/MockV3Aggregator.sol";`

```solidity
constructor(uint8 _decimals, int256 _initialAnswer) {
    decimals = _decimals;
    updateAnswer(_initialAnswer);
}
```

Mock Contract: `./contracts/test/MockV3Aggregator.sol`

Deploy script:

```js
const { network } = require("hardhat");

const DECIMALS = "8";
const INITIAL_PRICE = "200000000000"; // 2000
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = network.config.chainId;
    // If we are on a local development network, we need to deploy mocks!
    if (chainId == 31337) {
        log("Local network detected! Deploying mocks...");
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_PRICE],
        });
        log("Mocks Deployed!");
        log("------------------------------------------------");
        log(
            "You are deploying to a local network, you'll need a local network running to interact",
        );
        log(
            "Please run `npx hardhat console` to interact with the deployed smart contracts!",
        );
        log("------------------------------------------------");
    }
};
module.exports.tags = ["all", "mocks"];
```

#### module.exports.tags

`npx hardhat deploy --tags mocks`

`hardhat-deploy` will know just run deploy script tagged with `mocks`.

#### hre.network.name and hre.deploymentChains

Intro:

-   `hre.network.name` is a property of the Hardhat Runtime Environment (HRE) that returns the name of the network you are connected to.

```js
if (deploymentChains.includes(hre.network.name)) {
    // Deploy mocks
}
```

#### Exclude test network doing verify

```js
if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
) {
    await verify(fundMe.address, [ethUsdPriceFeedAddress]);
}
```

### hardhat config: networks

These are networks that connect to an external node. Nodes can be running in your computer, like Ganache, or remotely, like Infura or Alchemy.

This kind of network is configured with objects with the following fields:

-   url: The url of the node. This argument is required for custom networks.

-   chainId: An optional number, used to validate the network Hardhat connects to. If not present, this validation is omitted.

-   from: The address to use as default sender. If not present the first account of the node is used.

-   gas: Its value should be "auto" or a number. If a number is used, it will be the gas limit used by default in every transaction. If "auto" is used, the gas limit will be automatically estimated. Default value: "auto".

-   gasPrice: Its value should be "auto" or a number. This parameter behaves like gas. Default value: "auto".

-   gasMultiplier: A number used to multiply the results of gas estimation to give it some slack due to the uncertainty of the estimation process. Default value: 1.

-   accounts: This field controls which accounts Hardhat uses. It can use the node's accounts (by setting it to "remote"), a list of local accounts (by setting it to an array of hex-encoded private keys), or use an HD Wallet. Default value: "remote".

-   httpHeaders: You can use this field to set extra HTTP Headers to be used when making JSON-RPC requests. It accepts a JavaScript object which maps header names to their values. Default value: undefined.

-   timeout: Timeout in ms for requests sent to the JSON-RPC server. If the request takes longer than this, it will be cancelled. Default value: 40000 for the localhost network, 20000 for the rest.

### Solidity Style Guide

Contract elements should be laid out in the following order:

<ol>
<li>Pragma statements</li>
<li>Import statements</li>
<li>Events</li>
<li>Errors</li>
<li>Interfaces</li>
<li>Libraries</li>
<li>Contracts</li>
</ol>

Inside each contract, library or interface, use the following order:

<ol>
<li>Type declarations</li>
<li>State variables</li>
<li>Events</li>
<li>Errors</li>
<li>Modifiers</li>
<li>Functions</li>
</ol>

Functions should be grouped according to their visibility and ordered:

<ol>
<li>constructor</li>
<li>receive function (if exists)</li>
<li>fallback function (if exists)</li>
<li>external</li>
<li>public</li>
<li>internal</li>
<li>private</li>
</ol>
#### NatSpec

NatSpec is a documentation system that is used to describe the functionality of contracts and functions. It is a standard for writing documentation for Solidity code. NatSpec comments are written in a special format that is similar to JSDoc comments in JavaScript.

### Testing with Hardhat

-   by local hardhat network
-   by forked hardhat network

There are problems when using hardhat-deploy plugin with hardhat network fork. There will be functions not available in the forked network.

**version 6.12.0**

```console
Error: no matching fragment (operation="fragment", info={ "args": [ null ], "key": "getBalance" }, code=UNSUPPORTED_OPERATION, version=6.12.0)
```

#### namedAccounts

```json
namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        },
    },
```

```js
deployer = (await getNamedAccounts()).deployer;
```

**Groups tests by function**

### Debugging with Hardhat Network

Solidity `console.log`

When running your contracts and tests on Hardhat Network you can print logging messages and contract variables calling console.log() from your Solidity code. To use it you have to import hardhat/console.sol in your contract code.

This is what it looks like:

```solidity
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Token {
    //...
}
```

Then you can just add some console.log calls to the transfer() function as if you were using it in JavaScript:

```solidity
function transfer(address to, uint256 amount) external {
    require(balances[msg.sender] >= amount, "Not enough tokens");

    console.log("Transferring from %s to %s %s tokens", msg.sender, to, amount);

    balances[msg.sender] -= amount;
    balances[to] += amount;

    emit Transfer(msg.sender, to, amount);
}
```

The logging output will show when you run your tests:

`$ npx hardhat test`

```console
  Token contract
    Deployment
      ✓ Should set the right owner
      ✓ Should assign the total supply of tokens to the owner
    Transactions
Transferring from 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 to 0x70997970c51812dc3a010c7d01b50e0d17dc79c8 50 tokens
Transferring from 0x70997970c51812dc3a010c7d01b50e0d17dc79c8 to 0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc 50 tokens
      ✓ Should transfer tokens between accounts (373ms)
      ✓ Should fail if sender doesn’t have enough tokens
Transferring from 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 to 0x70997970c51812dc3a010c7d01b50e0d17dc79c8 50 tokens
Transferring from 0x70997970c51812dc3a010c7d01b50e0d17dc79c8 to 0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc 50 tokens
      ✓ Should update balances after transfers (187ms)


  5 passing (2s)
```

### Storage

Storage: The Ethereum blockchain stores data in two places: storage and memory. Storage is persistent and expensive, while memory is temporary and cheap.

Each slot in storage is 32 bytes long. This means that each variable in storage occupies a slot, and that the slot is padded to 32 bytes. This is why you can't pack two uint16 variables in the same slot.

When a variable changes, the entire slot is updated. This is why it's important to minimize the number of variables stored in storage.

Constant and immutable variables are stored in the contract code, not in storage. This means that they don't occupy a storage slot.

[Solidity Storage Layout and Slots: A Comprehensive Guide](https://medium.com/@ozorawachie/solidity-storage-layout-and-slots-a-comprehensive-guide-2cee71817ed8)

### Gas Optimization using storage knowledge

Build-info:

opcode intro: Calculated by evm.

Github Copilot:

In Ethereum, opcodes are the low-level instructions that the Ethereum Virtual Machine (EVM) understands and executes. They are part of the bytecode of a smart contract, which is the compiled version of your Solidity code.

Here's a brief introduction to opcodes:

-   **What are opcodes?** Opcodes (short for operation codes) are the fundamental instructions that the EVM executes. Each opcode performs a specific operation, such as adding two numbers, calling a function, or storing data.

-   **How are opcodes used?** When you write a smart contract in Solidity and compile it, the compiler translates your high-level Solidity code into low-level EVM bytecode. This bytecode is a sequence of opcodes.

-   **Why are opcodes important?** Understanding opcodes can help you optimize your smart contracts for gas usage. Each opcode consumes a certain amount of gas when it's executed. By understanding how your Solidity code translates into opcodes, you can make changes to your code to reduce the amount of gas it consumes.

For more detailed information about opcodes and the EVM, you can refer to the [Ethereum Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf).

Moonshot:

An opcode, short for operation code, is a single instruction in a low-level programming language, often used in the context of assembly languages and machine code. In the context of Ethereum and smart contract development, opcodes represent the basic operations that can be performed by the Ethereum Virtual Machine (EVM).

Opcodes are the building blocks of smart contract functionality on the Ethereum blockchain. They define how smart contracts execute, interact with each other, and manage data on the blockchain. Some common opcodes include:

1. **STOP**: Halts execution of the smart contract.
2. **ADD**, **SUB**, **MUL**, **DIV**: Basic arithmetic operations for addition, subtraction, multiplication, and division.
3. **SLOAD**, **SSTORE**: Load and store data in the smart contract's storage.
4. **CALL**, **DELEGATECALL**, **STATICCALL**: Interact with other contracts or the same contract in different ways (message call, delegate call, or static call).
5. **BALANCE**: Get the current balance of the given account.
6. **SHA3** (now KECCAK256): Compute the Keccak-256 hash of a given piece of data.
7. **CODECOPY**: Copy code from an address into the contract's memory.

Opcodes are used in Solidity, a high-level programming language for Ethereum smart contracts, which is then compiled down to bytecode that consists of these opcodes. The EVM executes these opcodes to perform the necessary operations as defined by the smart contract.

To provide more context, here's an example of how opcodes are generated from Solidity code:

```solidity
pragma solidity ^0.8.0;

contract SimpleContract {
    uint256 public data;

    function setData(uint256 _data) public {
        data = _data;
    }
}
```

When this contract is compiled, the Solidity compiler generates bytecode consisting of a series of opcodes. For the `setData` function, the opcodes might look something like this:

```
PUSH1 0x40      // Set stack argument to 0x40 (size of the next following bytes)
...
DUP1           // Duplicate the top value on the stack
...
SSTORE         // Store the top value in the storage (this sets the value of 'data')

STOP
```

Each opcode represents a step in the operation of setting a value in the smart contract's storage. When the function is called, the EVM executes these opcodes in sequence, resulting in the desired outcome.

See a table of opcodes and their gas costs [here](https://github.com/crytic/evm-opcodes).

#### For Loop

Using a memory variable to store the length of the array can save gas.
Read once from storage, not every time in the loop.

```solidity
function cheaperWithdraw() public onlyOwner {
    address[] memory funders = s_funders; // read once from storage, not every time in the loop.
    // mappings can't be in memory, sorry!
    for (uint256 funderIndex = 0; funderIndex < funders.length; funderIndex++) {
        address funder = funders[funderIndex];
        s_addressToAmountFunded[funder] = 0;
    }
    s_funders = new address[](0);
    // payable(msg.sender).transfer(address(this).balance);
    (bool success, ) = i_owner.call{ value: address(this).balance }("");
    require(success);
}
```

Compare Max, then average gas cost in gas report.

### Variable Naming Conventions

add prefix:

-   `s_`: storage
-   `i_`: immutable
-   `MINIMUM_USD`: constant

### Solidity Chainlink Style Guide

Not adding prefix of storage or immutable.
Set variables to private, then add a view getter function to access them.

As for gas costs, view functions are free to call, but they can't modify state. This is why we set the variables to private and add a view function to access them.

### Storage Review

-   Use memory variables to store values that are used multiple times in a function.
-   Use view functions to access state variables.
-   Use private variables to store state variables.
-   Use immutable variables for values that are constant across all instances of a contract.
-   Use constant variables for values that are constant within a contract instance.
-   Use local variables to store temporary values within a function.

### Staging Test

-   Deploy to testnet
-   This is the last step before deploying to mainnet

### Write scripts on a local node

`npx hardhat run scripts/deploy.js --network localhost`
