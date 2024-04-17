# FCC 32 hours web3 course

## Covered topics

-   DeFi
-   NFTs
-   DAOs
-   Upgrades
-   ERC20s
    ... More!

## Best practices

**[repo](https://github.com/smartcontractkit/full-blockchain-solidity-course-js)**

## Lesson 1 Blockchain Basics

### Bitcoin vs. Ethereum

-   Bitcoin just store value
-   Ethereum is a platform not just to store value but also decentralized agreements.

### Oracles

chainlink, band protocol, etc.

-   They are the bridge between the blockchain and the real world.
-   They are the ones that provide the data to the blockchain.
-   Off-chain data to on-chain data.

Chianlink is a decentralized oracle network that enables smart contracts to securely interact with real-world data.

### Hybrid Smart Contracts

On-chain + Off-chain Agreements

Combine On-chain logic and Off-chain data.

### There are many blockchain platforms

Such as Polkadot, Solana, etc.

Most of them are EVM compatible.

### Dapp

Dapp = Decentralized application

Decentralized Protocol = Smart Contract

### Web3

Web1, Web2, and Web3 represent different generations of the internet.

-   **Web1.0**: This is the first generation of the internet, also known as the "read-only" web. It was primarily static, meaning users could only view the content and not interact with it or contribute their own. Websites were mainly informational.

-   **Web2.0**: This is the current version of the internet, also known as the "read-write" web. It is interactive and social, allowing users to create and share content. Examples include social media platforms, blogs, wikis, and video sharing platforms. However, a significant drawback is that personal data is often controlled by large corporations.
    **(Run agreements on companies servers)**

-   **Web3.0**: This is the future generation of the internet, also known as the "read-write-execute" web. It aims to create a decentralized internet where users have control over their own data. It leverages blockchain technology and decentralized networks to achieve this. Web3.0 enables direct peer-to-peer interactions, with smart contracts automating agreements and transactions. Decentralized applications (DApps) are a key part of Web3.0.

### What is the value of Smart Contracts?

-   Trust minimized agreements

    > In summary, "trust minimized" refers to systems, such as blockchain, that reduce reliance on trust in centralized entities by providing decentralized, transparent, and secure frameworks for transactions and interactions.

-   Promises unbreakable

### The purpose of Smart Contracts

In real world:
Agreements/Contracts = Promises

Smart Contracts:
Immutable = Unbreakable
Decentralized = Trust minimized
Transparent = Verifiable

Deployed on the blockchain.

Paper Guarantees(Brand based) -> Cryptographic Guarantees(Math based)

### ERC20

-   ERC20 is a standard interface for fungible tokens on the Ethereum blockchain.

### DeFi

-   DeFi stands for Decentralized Finance.

### Other benefits of blockchain

Counterparty Risk Removal

### DAOs

-   DAO stands for Decentralized Autonomous Organization.

### NFTs

-   NFT stands for Non-Fungible Token.

### Your First Transaction

Wallet:

-   Metamask
-   WalletConnect

#### Metamask

**For every account, there are two keys:**

-   public unique address
-   private key: Never share it with anyone

#### Etherscan

Introduction to Etherscan: Etherscan is a Block Explorer and Analytics Platform for Ethereum, a decentralized smart contracts platform. Etherscan allows you to explore and search the Ethereum blockchain for transactions, addresses, tokens, prices, and other activities taking place on Ethereum (ETH).

Networks Etherscan supports:

-   Ethereum Mainnet
-   Ethereum Testnet
-   Binance Smart Chain
-   Polygon
-   xDai
-   Fantom
-   Avalanche
-   Celo
-   Moonbeam
-   Harmony
-   Arbitrum
    ... and many more!

### Test Networks

Faucets are used to get testnet tokens.

### Gas

#### Introduction to Gas

Gas is the fee you pay to execute a transaction on the Ethereum network. It is a unit that measures the amount of computational effort required to execute operations on the Ethereum network. Gas fees are paid in Ether (ETH) and are used to incentivize miners to include transactions in blocks.

Gas Limit: The maximum amount of gas you are willing to pay for a transaction.

Gas and Transaction Fees: The total cost of a transaction is calculated by multiplying the gas price by the gas used.

### Blockchain Demo

[Demo toll](https://andersbrownworth.com/blockchain/)

For a single block, every time mined, the hash starts with `0`s.

For a block chain, the hash of the previous block is included in the current block.
Every single block is connected to the previous block.
Every time you change a block, all the blocks after that block will be changed.

For Distributed blockchain, the longest chain is the valid chain.
Every peer has a copy of the blockchain.

If one peer tries to change the blockchain, the other peers will reject it.

Tokens: transactions on the blockchain.(Tx). Data

### Signing Transactions

**Question: How do we know that the transaction is from the owner to the receiver?**

> Answer: Singing the transaction with the private key. Verifying the transaction with the public key.

### Gas II: Block Rewards & EIP 1559

Gas limit can be edited by the user, for example, in Wallet.

Wei is the smallest unit of Ether.
Wei -> Gwei -> Ether: 1 Ether = 10^18 Wei

Get burnt: The gas fee is burnt. It is not given to the miner. It is removed from the system. It is a deflationary mechanism. It reduces the supply of Ether. It is a part of EIP 1559. It is a part of the Ethereum Improvement Proposal.

**EIP 1559:** EIP-1559 is a proposal to change the way gas fees are calculated on the Ethereum network. It aims to make gas fees more predictable and efficient by introducing a base fee that adjusts based on network demand. EIP-1559 also includes a mechanism to burn a portion of the gas fees, which is intended to reduce the supply of Ether and potentially increase its value.

Base, Max Priority Fee, and Max Fee: Base fee is the minimum fee you have to pay. Max Priority Fee is the maximum fee you are willing to pay. Max Fee is the maximum fee you are willing to pay.

### Chain Selection and Sybil Resistance

**Sybil Attack:** A Sybil attack is a type of attack in which a malicious actor creates multiple fake identities to gain control of a network or system. The goal of a Sybil attack is to subvert the reputation or trust system of the network by creating a large number of fake identities that appear to be independent.

**Chain Selection:** The longest chain is the valid chain. The chain with the most work is the valid chain. The chain with the most blocks is the valid chain.

Proof of work(PoW):
Proof of Work (PoW) is a consensus mechanism used in blockchain networks to validate and confirm transactions, as well as to secure the network against attacks. Here's how Proof of Work works:

1. **Basic Principle:**

    - In a PoW system, network participants (often referred to as miners in blockchain networks like Bitcoin) compete to solve complex mathematical puzzles or cryptographic hash functions.
    - The goal of solving these puzzles is to find a hash value that meets certain criteria, such as being below a specific target threshold. This process requires significant computational work and consumes energy.

2. **Mining Process:**

    - Miners gather pending transactions from the network and package them into blocks.
    - To create a new block, miners must find a nonce (a random number) that, when combined with the block's data, produces a hash value that meets the network's difficulty target.
    - Miners iterate through different nonce values until they find a valid hash (one that satisfies the target criteria). This process is often described as "proof of work" because miners demonstrate their computational effort by finding a valid hash.

3. **Difficulty Adjustment:**

    - The network adjusts the difficulty of the puzzle regularly to ensure that blocks are mined at a consistent rate, typically every few thousand blocks in Bitcoin (approximately every two weeks).
    - If blocks are being mined too quickly, the difficulty increases, making the puzzles harder to solve. Conversely, if blocks are mined too slowly, the difficulty decreases to maintain a steady block generation rate.

4. **Verification and Consensus:**

    - Once a miner finds a valid hash and creates a new block, they broadcast it to the network.
    - Other nodes (miners and full nodes) in the network verify the validity of the block by checking the proof of work (the valid hash) and ensuring that the transactions within the block are valid.
    - Consensus is achieved when a majority of nodes agree that the new block is valid. This process confirms transactions and adds them to the blockchain, creating an immutable and chronological record of transactions.

5. **Security and Attack Resistance:**

    - PoW systems are designed to be resistant to attacks such as double-spending and Sybil attacks.
    - Double-spending attacks are thwarted because modifying a transaction in a block would require re-mining that block and all subsequent blocks, which becomes exponentially more difficult as the blockchain grows.
    - Sybil attacks, where an attacker creates multiple fake identities, are deterred because each identity requires substantial computational resources to participate in mining.

6. **Energy Consumption and Alternatives:**
    - PoW mechanisms have faced criticism due to their energy-intensive nature, as miners compete to solve puzzles using powerful hardware.
    - Some blockchain networks are exploring alternative consensus mechanisms like Proof of Stake (PoS), which relies on participants staking cryptocurrency as collateral rather than solving puzzles. PoS aims to achieve consensus in a more energy-efficient manner.

Overall, Proof of Work is a fundamental concept in blockchain technology, providing a mechanism for decentralized consensus, transaction validation, and network security.

### Proof of Stake

Proof of Stake (PoS) is a consensus mechanism used in blockchain networks to achieve agreement on the state of the network and validate transactions. PoS differs from Proof of Work (PoW) in that it relies on participants staking their cryptocurrency holdings as collateral to secure the network and create new blocks. Here's how Proof of Stake works:

1.  **Basic Principle:**

    -   In a PoS system, network participants (often referred to as validators) are chosen to create new blocks and validate transactions based on the amount of cryptocurrency they hold and are willing to "stake" as collateral.
    -   Validators are selected to create new blocks and validate transactions based on various factors, such as the amount of cryptocurrency they have staked, their reputation, or a random selection process.

2.  **Staking Process:**

-   To participate in PoS, users must lock up a certain amount of cryptocurrency as collateral (the stake) to become a validator.
-   Validators are responsible for proposing and validating new blocks, verifying transactions, and securing the network.
-   Validators are rewarded with transaction fees and newly minted cryptocurrency for their in block creation and validation.

3.  **Block Creation and Validation:**

-   Validators take turns proposing new blocks and validating transactions based on their stake and other factors.
-   The probability of being chosen to create a new block is proportional to the amount of cryptocurrency staked by the validator.
-   Validators are incentivized to act honestly and follow the network's rules, as they risk losing their staked cryptocurrency if they attempt to validate fraudulent transactions or create invalid blocks.

4.  **Security and Attack Resistance:**

-   PoS systems are designed to be secure against attacks such as double-spending and Sybil attacks.
-   Validators are economically incentivized to act honestly and follow the network's rules, as they have a financial stake in the network's security and integrity.
-   PoS mechanisms often include penalties for malicious behavior, such as slashing a portion of a validator's stake if they attempt to validate fraudulent transactions.

5.  **Energy Efficiency and Environmental Impact:**

-   PoS mechanisms are generally considered more energy-efficient than PoW systems, as they do not require the computational work and energy consumption associated with solving complex puzzles.
-   PoS networks aim to achieve consensus and secure the network in a more environmentally friendly manner by relying on participants' cryptocurrency holdings rather than computational power.

6.  **Variants and Hybrid Models:** - There are different variants of PoS, such as Delegated Proof of Stake (DPoS) and Liquid Proof of Stake (LPoS), which introduce additional features and mechanisms for block creation and validation. - Some blockchain networks use hybrid consensus models that combine PoW and PoS elements to achieve a balance of security, decentralization, and energy efficiency.

Overall, Proof of Stake is a key concept in blockchain technology, providing an alternative consensus mechanism to Proof of Work that aims to achieve agreement on the state of the network, validate transactions, and secure the blockchain in a more energy-efficient manner.

### Nakamoto Consensus

Nakamoto Consensus is the consensus mechanism used in Bitcoin and other blockchain networks that rely on Proof of Work (PoW) to achieve agreement on the state of the network and validate transactions. Named after Bitcoin's pseudonymous creator, Satoshi Nakamoto, Nakamoto Consensus is a fundamental concept in blockchain technology. Here's how Nakamoto Consensus works:

### Layer 1 and Layer 2

Layer 1 and Layer 2 are terms used in blockchain technology to describe different architectural layers and scaling solutions. Here's an overview of Layer 1 and Layer 2 in blockchain:

1. **Layer 1:**

-   Layer 1 refers to the base protocol layer of a blockchain network, where the core consensus mechanism, transaction processing, and smart contract execution take place.
-   Examples of Layer 1 blockchains include Bitcoin, Ethereum, and other public blockchain networks that operate at the base layer.
-   Layer 1 blockchains are designed to be secure, decentralized, and immutable, providing the foundation for building decentralized applications (dApps) and executing smart contracts.

2. **Layer 2:**

-   Layer 2 refers to scaling solutions and protocols built on top of Layer 1 blockchains to improve transaction throughput, reduce latency, and lower costs.
-   Layer 2 solutions include technologies like state channels, sidechains, rollups, and other off-chain scaling solutions that enable faster and more efficient transaction processing.
-   By moving some transactions off-chain and settling them on Layer 1 only when necessary, Layer 2 solutions can increase the scalability and performance of blockchain networks.

3. **Key Differences:**

-   Layer 1 focuses on the core blockchain protocol layer, including consensus, transaction processing, and smart contract execution.
-   Layer 2 focuses on scaling solutions and protocols built on top of Layer 1 to improve transaction throughput and efficiency.
-   Layer 1 blockchains provide the foundation for Layer 2 solutions to enhance scalability and performance.

## Lesson 2: Welcome to Remix! Simple Storage

### Solidity

#### Syntax

**version pragma**

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; // upper bound
```

```solidity
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0; // lower bound
```

**contract**

```solidity
contract SimpleStorage {
    uint256 favoriteNumber = 5;
}
```

#### Basic Solidity Types

-   **uint**: unsigned integer, positive integer
-   **int**: signed integer, positive or negative integer
-   **bool**: boolean
-   **address**: Ethereum address
-   **string**: UTF-8 string
-   **bytes**: raw bytes
-   **fixed**: fixed-point number
-   **ufixed**: unsigned fixed-point number

Bytes Explanation:

-   **bytes1**: 1 byte
-   **bytes2**: 2 bytes
-   **bytes3**: 3 bytes

Example:

```solidity
bytes32 myBytes; // Max size is 32 bytes
```

#### Variables

Declare:

```solidity
uint256 favoriteNumber = 5;
```

or

```solidity
uint256 public favoriteNumber; // default value is 0, default visibility is private
```

#### Functions

```solidity
function store(uint256 _favoriteNumber) public {
    favoriteNumber = _favoriteNumber;
}
```

Explain:

-   **function**: keyword
-   **store**: function name
-   **uint256**: parameter type
-   **\_favoriteNumber**: parameter name
-   **public**: visibility

#### Visibility

-   **public**: anyone can call this function
-   **private**: only this contract can call this function
-   **internal**: only this contract and contracts deriving from it can call this function
-   **external**: only other contracts can call this function

#### Key Words

-   **view**: read-only function, does not modify state, does not cost gas
-   **pure**: function does not read or modify state, does not cost gas

Explain State: State is the data stored in the contract.

### Remix

deployed contract has an address.

Information in console.

Call function in the deployed contract.
Input parameters.

Click variables to see the value.
Public variables creates a getter function.
Private variables do not create a getter function.

### A quick gas example

```solidity
function store(uint256 _favoriteNumber) public {
    favoriteNumber = _favoriteNumber;
}
```

Explain gas: The fee you pay to execute a transaction on the Ethereum network. The more complex the transaction, the more gas you need to pay.

### Basic Solidity Arrays & Structs

#### Arrays

```solidity
uint256[] numbers;
```

**Declaration and initialization:**

```solidity
uint256[] numbers = [1, 2, 3];
```

or

```solidity
uint256[] public numbers;
```

or fixed size array:

```solidity
uint256[3] numbers;
```

**Push:**

```solidity
numbers.push(4);
```

#### Structs

Declaration:

```solidity
Person[] public people;

struct Person {
    uint256 favoriteNumber;
    string name;
}
```

Use:

```solidity
Person public person = Person({favoriteNumber: 2, name: "Andres"});
```

Just showing index in Remix call function. `0: 2; 1: Andres`

Input index to get the value in an array.

#### Mappings

```solidity
mapping(string => uint256) public nameToFavoriteNumber;
```

Add Person function:

```solidity
function addPerson(string memory _name, uint256 _favoriteNumber) public {
    people.push(Person(_favoriteNumber, _name));
    nameToFavoriteNumber[_name] = _favoriteNumber;
}
```

### `memory` and `storage`

-   **calldata**: temporary place to store data, can't be modified
-   **memory**: temporary place to store data, can be modified
-   **storage**: permanent place to store data, can be modified

Memory is used to store temporary data that is needed during the execution of a function. Calldata is used to store function arguments that are passed in from an external caller. Storage is used to store data permanently on the blockchain.

**calldata**: a special data location that contains function arguments, only available for external function call parameters. It is read-only, can't be modified, and is cheaper to use than `memory`.

When defining variables in Solidity, you must specify a data location. If you receive a "TypeError: Data location must be 'storage', 'memory' or 'calldata' for variable, but none was given" error message, it means that you have not specified a data location for your variable

Example:

```solidity
uint256[] memory numbers = new uint256[](10);
```

If a parameter is modified by memory, it will not be modified in storage. Example:

```solidity
function addPerson(string memory _name, uint256 _favoriteNumber) public {
    Person memory newPerson = Person({favoriteNumber:_favoriteNumber, name:_name});
    people.push(newPerson);
}
```

Shorthand:

```solidity
struct Person {
    uint256 favoriteNumber;
    string name;
}

function addPerson(string memory _name, uint256 _favoriteNumber) public {
    Person memory newPerson = Person(_favoriteNumber, _name); // Shorthand
    people.push(newPerson);
}
```

### Basic solidity errors and warnings

#### Errors

-   **require**: check a condition, if false, it will throw an error and revert the transaction
-   **assert**: check a condition, if false, it will throw an error and revert the transaction
-   **revert**: revert the transaction

### EVM Overview

EVM stands for Ethereum Virtual Machine. It is the runtime environment for smart contracts in Ethereum. The EVM is responsible for executing smart contracts and processing transactions on the Ethereum network. Here's an overview of the EVM:

-   Access and store information in six places:

            1. Stack
            2. Memory
            3. Storage
            4. Calldata
            5. Code
            6. Logs

            But we cannot say that a variable is stack, code or logs.

    > For code:
    >
    > ```solidity
    > function addPerson(string memory _name, uint256 _favoriteNumber) public {
    > Person memory newPerson = Person(_favoriteNumber, _name); // Shorthand
    > people.push(newPerson);
    > }
    > ```
    >
    > The `uint256 _favoriteNumber` cannot be modified by memory. Because it is not a memory variable. It is a stack variable.
    >
    > Data location can only be specified for array, struct, or mapping types. As for `string`, it is a dynamic array.

### Deploying your first smart contract

Environment: Injected Web3

-   **Injected Web3**: This environment uses the Web3 provider injected by your browser (e.g., MetaMask) to interact with the Ethereum network. It allows you to deploy and interact with smart contracts using your Ethereum account.(MetaMask)

Call a Transaction:

MetaMask will popup to ask for permission to sign the transaction.(Confirm the transaction)

### The EVM & A Recap of Lesson 2

-   **EVM**: Ethereum Virtual Machine
-   Compiled down to EVM
-   EVM Compatible: Binance Smart Chain, Polygon, etc.

## Lesson 3: Remix Storage Factory

### Importing Contracts

```solidity
import "./SimpleStorage.sol";
```

Composability: The ability to combine different components or systems to create new and more complex systems.

### Notice version compatible

Notice: The version of the imported contract should be compatible with the current contract.

**Compatible versions of solidity:** `^0.8.0` means `>=0.8.0 <0.9.0`. It is not compatible with `0.9.0`.

```solidity
pragma solidity ^0.8.0;
```

Creating a new instance of a contract:

```solidity
SimpleStorage simpleStorage = new SimpleStorage();
```

### Interacting with other contracts

```solidity


function sfStore(uint256 _simpleStorageIndex, uint256 _simpleStorageNumber) public {
        // Address
        // ABI
        // SimpleStorage(address(simpleStorageArray[_simpleStorageIndex])).store(_simpleStorageNumber);
        simpleStorageArray[_simpleStorageIndex].store(_simpleStorageNumber);
}
```

### ABI

ABI stands for Application Binary Interface. It is a standard way to interact with smart contracts in Ethereum. The ABI defines the functions and data structures of a smart contract, allowing external applications to interact with it. The ABI is used to encode and decode data when calling functions on a smart contract.

---

See Compile Details in Remix.

### Inheritance & Overrides

**Inheritance:** Inheritance is a feature of Solidity that allows you to create new contracts by deriving from existing contracts. The derived contract inherits the state variables and functions of the base contract, enabling code reuse and modularity.

**Overrides:** The `override` keyword is used in Solidity to indicate that a function is overriding a function from a base contract. When a function is marked as `override`, it must match the function signature of the base function it is overriding.

```solidity
// in SimpleStorage.sol, virtual
function store(uint256 _favoriteNumber) public virtual {
        favoriteNumber = _favoriteNumber;
    }
```

```solidity
import "./SimpleStorage.sol";

// Inheritance, is
contract ExtraStorage is SimpleStorage {
    // Override, override
    function store(uint256 _favoriteNumber) public override {
        favoriteNumber = _favoriteNumber + 5;
    }
}
```

Two key words:

- virtual
    > The `virtual` keyword is used in Solidity to indicate that a function can be overridden in derived contracts. When a function is marked as `virtual`, it can be overridden by functions in derived contracts.
- override
    > The `override` keyword is used in Solidity to indicate that a function is overriding a function from a base contract. When a function is marked as `override`, it must match the function signature of the base function it is overriding.

## Lesson 4: Remix Fund Me

