# 1. FCC 32 hours web3 course

## 1.1. Covered topics

-   DeFi
-   NFTs
-   DAOs
-   Upgrades
-   ERC20s
    ... More!

## 1.2. Best practices

**[repo](https://github.com/smartcontractkit/full-blockchain-solidity-course-js)**

## 1.3. Lesson 1 Blockchain Basics

### 1.3.1. Bitcoin vs. Ethereum

-   Bitcoin just store value
-   Ethereum is a platform not just to store value but also decentralized agreements.

### 1.3.2. Oracles

chainlink, band protocol, etc.

-   They are the bridge between the blockchain and the real world.
-   They are the ones that provide the data to the blockchain.
-   Off-chain data to on-chain data.

Chianlink is a decentralized oracle network that enables smart contracts to securely interact with real-world data.

### 1.3.3. Hybrid Smart Contracts

On-chain + Off-chain Agreements

Combine On-chain logic and Off-chain data.

### 1.3.4. There are many blockchain platforms

Such as Polkadot, Solana, etc.

Most of them are EVM compatible.

### 1.3.5. Dapp

Dapp = Decentralized application

Decentralized Protocol = Smart Contract

### 1.3.6. Web3

Web1, Web2, and Web3 represent different generations of the internet.

-   **Web1.0**: This is the first generation of the internet, also known as the "read-only" web. It was primarily static, meaning users could only view the content and not interact with it or contribute their own. Websites were mainly informational.

-   **Web2.0**: This is the current version of the internet, also known as the "read-write" web. It is interactive and social, allowing users to create and share content. Examples include social media platforms, blogs, wikis, and video sharing platforms. However, a significant drawback is that personal data is often controlled by large corporations.
    **(Run agreements on companies servers)**

-   **Web3.0**: This is the future generation of the internet, also known as the "read-write-execute" web. It aims to create a decentralized internet where users have control over their own data. It leverages blockchain technology and decentralized networks to achieve this. Web3.0 enables direct peer-to-peer interactions, with smart contracts automating agreements and transactions. Decentralized applications (DApps) are a key part of Web3.0.

### 1.3.7. What is the value of Smart Contracts?

-   Trust minimized agreements

    > In summary, "trust minimized" refers to systems, such as blockchain, that reduce reliance on trust in centralized entities by providing decentralized, transparent, and secure frameworks for transactions and interactions.

-   Promises unbreakable

### 1.3.8. The purpose of Smart Contracts

In real world:
Agreements/Contracts = Promises

Smart Contracts:
Immutable = Unbreakable
Decentralized = Trust minimized
Transparent = Verifiable

Deployed on the blockchain.

Paper Guarantees(Brand based) -> Cryptographic Guarantees(Math based)

### 1.3.9. ERC20

-   ERC20 is a standard interface for fungible tokens on the Ethereum blockchain.

### 1.3.10. DeFi

-   DeFi stands for Decentralized Finance.

### 1.3.11. Other benefits of blockchain

Counterparty Risk Removal

### 1.3.12. DAOs

-   DAO stands for Decentralized Autonomous Organization.

### 1.3.13. NFTs

-   NFT stands for Non-Fungible Token.

### 1.3.14. Your First Transaction

Wallet:

-   Metamask
-   WalletConnect

#### 1.3.14.1. Metamask

**For every account, there are two keys:**

-   public unique address
-   private key: Never share it with anyone

#### 1.3.14.2. Etherscan

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

### 1.3.15. Test Networks

Faucets are used to get testnet tokens.

### 1.3.16. Gas

#### 1.3.16.1. Introduction to Gas

Gas is the fee you pay to execute a transaction on the Ethereum network. It is a unit that measures the amount of computational effort required to execute operations on the Ethereum network. Gas fees are paid in Ether (ETH) and are used to incentivize miners to include transactions in blocks.

Gas Limit: The maximum amount of gas you are willing to pay for a transaction.

Gas and Transaction Fees: The total cost of a transaction is calculated by multiplying the gas price by the gas used.

### 1.3.17. Blockchain Demo

[Demo toll](https://andersbrownworth.com/blockchain/)

For a single block, every time mined, the hash starts with `0`s.

For a block chain, the hash of the previous block is included in the current block.
Every single block is connected to the previous block.
Every time you change a block, all the blocks after that block will be changed.

For Distributed blockchain, the longest chain is the valid chain.
Every peer has a copy of the blockchain.

If one peer tries to change the blockchain, the other peers will reject it.

Tokens: transactions on the blockchain.(Tx). Data

### 1.3.18. Signing Transactions

**Question: How do we know that the transaction is from the owner to the receiver?**

> Answer: Singing the transaction with the private key. Verifying the transaction with the public key.

### 1.3.19. Gas II: Block Rewards & EIP 1559

Gas limit can be edited by the user, for example, in Wallet.

Wei is the smallest unit of Ether.
Wei -> Gwei -> Ether: 1 Ether = 10^18 Wei

Get burnt: The gas fee is burnt. It is not given to the miner. It is removed from the system. It is a deflationary mechanism. It reduces the supply of Ether. It is a part of EIP 1559. It is a part of the Ethereum Improvement Proposal.

**EIP 1559:** EIP-1559 is a proposal to change the way gas fees are calculated on the Ethereum network. It aims to make gas fees more predictable and efficient by introducing a base fee that adjusts based on network demand. EIP-1559 also includes a mechanism to burn a portion of the gas fees, which is intended to reduce the supply of Ether and potentially increase its value.

Base, Max Priority Fee, and Max Fee: Base fee is the minimum fee you have to pay. Max Priority Fee is the maximum fee you are willing to pay. Max Fee is the maximum fee you are willing to pay.

### 1.3.20. Chain Selection and Sybil Resistance

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

### 1.3.21. Proof of Stake

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

### 1.3.22. Nakamoto Consensus

Nakamoto Consensus is the consensus mechanism used in Bitcoin and other blockchain networks that rely on Proof of Work (PoW) to achieve agreement on the state of the network and validate transactions. Named after Bitcoin's pseudonymous creator, Satoshi Nakamoto, Nakamoto Consensus is a fundamental concept in blockchain technology. Here's how Nakamoto Consensus works:

### 1.3.23. Layer 1 and Layer 2

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

## 1.4. Lesson 2: Welcome to Remix! Simple Storage

### 1.4.1. Solidity

#### 1.4.1.1. Syntax

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

#### 1.4.1.2. Basic Solidity Types

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

#### 1.4.1.3. Variables

Declare:

```solidity
uint256 favoriteNumber = 5;
```

or

```solidity
uint256 public favoriteNumber; // default value is 0, default visibility is private
```

#### 1.4.1.4. Functions

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

#### 1.4.1.5. Visibility

-   **public**: anyone can call this function
-   **private**: only this contract can call this function
-   **internal**: only this contract and contracts deriving from it can call this function
-   **external**: only other contracts can call this function

#### 1.4.1.6. Key Words

-   **view**: read-only function, does not modify state, does not cost gas
-   **pure**: function does not read or modify state, does not cost gas

Explain State: State is the data stored in the contract.

### 1.4.2. Remix

deployed contract has an address.

Information in console.

Call function in the deployed contract.
Input parameters.

Click variables to see the value.
Public variables creates a getter function.
Private variables do not create a getter function.

### 1.4.3. A quick gas example

```solidity
function store(uint256 _favoriteNumber) public {
    favoriteNumber = _favoriteNumber;
}
```

Explain gas: The fee you pay to execute a transaction on the Ethereum network. The more complex the transaction, the more gas you need to pay.

### 1.4.4. Basic Solidity Arrays & Structs

#### 1.4.4.1. Arrays

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

#### 1.4.4.2. Structs

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

#### 1.4.4.3. Mappings

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

### 1.4.5. `memory` and `storage`

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

### 1.4.6. Basic solidity errors and warnings

#### 1.4.6.1. Errors

-   **require**: check a condition, if false, it will throw an error and revert the transaction
-   **assert**: check a condition, if false, it will throw an error and revert the transaction
-   **revert**: revert the transaction

### 1.4.7. EVM Overview

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

### 1.4.8. Deploying your first smart contract

Environment: Injected Web3

-   **Injected Web3**: This environment uses the Web3 provider injected by your browser (e.g., MetaMask) to interact with the Ethereum network. It allows you to deploy and interact with smart contracts using your Ethereum account.(MetaMask)

Call a Transaction:

MetaMask will popup to ask for permission to sign the transaction.(Confirm the transaction)

### 1.4.9. The EVM & A Recap of Lesson 2

-   **EVM**: Ethereum Virtual Machine
-   Compiled down to EVM
-   EVM Compatible: Binance Smart Chain, Polygon, etc.

## 1.5. Lesson 3: Remix Storage Factory

### 1.5.1. Importing Contracts

```solidity
import "./SimpleStorage.sol";
```

Composability: The ability to combine different components or systems to create new and more complex systems.

### 1.5.2. Notice version compatible

Notice: The version of the imported contract should be compatible with the current contract.

**Compatible versions of solidity:** `^0.8.0` means `>=0.8.0 <0.9.0`. It is not compatible with `0.9.0`.

```solidity
pragma solidity ^0.8.0;
```

Creating a new instance of a contract:

```solidity
SimpleStorage simpleStorage = new SimpleStorage();
```

### 1.5.3. Interacting with other contracts

```solidity


function sfStore(uint256 _simpleStorageIndex, uint256 _simpleStorageNumber) public {
        // Address
        // ABI
        // SimpleStorage(address(simpleStorageArray[_simpleStorageIndex])).store(_simpleStorageNumber);
        simpleStorageArray[_simpleStorageIndex].store(_simpleStorageNumber);
}
```

### 1.5.4. ABI

ABI stands for Application Binary Interface. It is a standard way to interact with smart contracts in Ethereum. The ABI defines the functions and data structures of a smart contract, allowing external applications to interact with it. The ABI is used to encode and decode data when calling functions on a smart contract.

---

See Compile Details in Remix.

### 1.5.5. Inheritance & Overrides

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

-   virtual
    > The `virtual` keyword is used in Solidity to indicate that a function can be overridden in derived contracts. When a function is marked as `virtual`, it can be overridden by functions in derived contracts.
-   override
    > The `override` keyword is used in Solidity to indicate that a function is overriding a function from a base contract. When a function is marked as `override`, it must match the function signature of the base function it is overriding.

## 1.6. Lesson 4: Remix Fund Me

### 1.6.1. Transactions - Fields

Transactions are cryptographically signed instructions from accounts. An account will initiate a transaction to update the state of the Ethereum network. The simplest transaction is transferring ETH from one account to another.

-   **Nonce**: tx count of the account
-   **Gas Price**: price per unit of gas
-   **Gas Limit**: max amount of gas that this tx can consume
-   **To**: recipient of the tx
-   **Value**: amount of wei to send
-   **Data**: input data for the tx
-   **V, R, S**: signature of the tx

### 1.6.2. 1e18 & `require`

1 Ether = 1e18 Wei

`require(msg.value > 1e18, "ETH not enough");`

if the value is less than 1 Ether, the transaction will **_revert_**.

### 1.6.3. Chainlink & Oracles

Chainlink is a decentralized oracle network that enables smart contracts to securely interact with real-world data. Oracles are trusted sources of information that provide data to smart contracts on the blockchain. Chainlink oracles connect smart contracts to external data sources, APIs, and payment systems, enabling smart contracts to access off-chain data and execute real-world transactions.

**Why don't we use an http api?**

-   Centralized: against the spirit of blockchain
-   Single point of failure: If the API goes down, the smart contract can't get the data.
-   Trust: We have to trust the API to provide accurate and timely data.

Besides, if different nodes use different APIs or fetch apis at different time, they will get different data.

#### 1.6.3.1. Chainlink Data Feeds

Chainlink Data Feeds are decentralized oracle networks that provide secure and reliable data to smart contracts on the blockchain. Chainlink Data Feeds are composed of multiple independent nodes that fetch data from various sources, aggregate it, and deliver it to smart contracts. Data Feeds are designed to provide accurate, tamper-proof, and real-time data to smart contracts, enabling them to interact with external data sources and make informed decisions.

**Reference Contract** Explanation: The reference contract is a smart contract that acts as a bridge between the Chainlink oracle network and the smart contract that needs external data. The reference contract receives data from the Chainlink oracle network and forwards it to the smart contract, ensuring that the data is accurate and secure.

**Reputation System** Explanation: Chainlink uses a reputation system to ensure the reliability and accuracy of its oracle nodes. Nodes that consistently provide accurate data are rewarded with a higher reputation score, while nodes that provide inaccurate data are penalized. The reputation system helps maintain the integrity of the Chainlink oracle network and ensures that smart contracts receive reliable data.

**Which node to provide data is determined by the reputation system.**

> In the Chainlink network, the selection of oracle nodes that provide data to a smart contract is typically determined by the contract creator. When creating a request for data, the contract creator can specify which nodes they want to fulfill the request. They might choose nodes based on their reputation, the fees they charge, or other factors.
>
> Once the nodes have been selected and the request has been made, each node independently fetches the requested data and reports it back to the smart contract. The contract then aggregates the responses from all the nodes to form a final result. This could be a simple average of all the responses, or a more complex aggregation method could be used.
>
> This system ensures that the data provided to the smart contract is reliable and tamper-proof. Even if one node provides incorrect data, the impact on the final result will be minimal as long as the majority of nodes are honest. This is a key aspect of Chainlink's decentralized oracle network.

#### 1.6.3.2. Convert ETH to USD

Decimals in Solidity: Solidity does not support floating-point numbers. To represent decimal numbers, you can use integers and scale them by a fixed factor. For example, to represent dollars and cents, you can store the amount in cents and divide by 100 when displaying it.

Chainlink VRF: Chainlink Verifiable Random Function (VRF) is a secure and verifiable source of randomness for smart contracts on the blockchain. Chainlink VRF generates random numbers that are tamper-proof and verifiable, enabling smart contracts to access random data for various applications, such as gaming, gambling, and decentralized finance.

Chainlink Keepers: Chainlink Keepers are decentralized service providers that automate smart contract functions based on predefined conditions. Chainlink Keepers monitor smart contracts for specific events or triggers and execute predefined actions in response. Keepers help automate smart contract operations, such as updating data feeds, rebalancing portfolios, and executing transactions.

Chainlink to make get requests: Chainlink nodes can make HTTP GET requests to external APIs to fetch data for smart contracts. This allows smart contracts to access real-world data, such as price feeds, weather information, and sports scores, from external sources. Chainlink's decentralized oracle network ensures that the data is accurate, secure, and tamper-proof.

Import tokens in metamask: To import tokens into MetaMask, you need to add the token contract address, token symbol, and number of decimals. This allows MetaMask to recognize and display the token in your wallet. You can import tokens by clicking "Add Token" in MetaMask and entering the required information.

Volume Data: Volume data refers to the amount of trading activity that occurs in a market over a specific period. It represents the total number of shares or contracts traded during a given time frame, such as a day, week, or month. Volume data is used by traders and analysts to assess market liquidity, price trends, and investor sentiment.

### 1.6.4. Review sending ETH and working with Chainlink

#### 1.6.4.1. `payable`

Intro: The `payable` keyword in Solidity is used to indicate that a function can receive Ether (ETH) as part of a transaction. When a function is marked as `payable`, it can accept ETH payments from external accounts or contracts. This allows users to send ETH to the function when calling it, enabling various use cases, such as transferring funds, purchasing tokens, or interacting with smart contracts that require ETH payments.

### 1.6.5. Interfaces and Price Feeds

**Interfaces:** Interfaces in Solidity are used to define the structure of a contract without implementing its functions. An interface specifies the function signatures and return types that a contract must implement, allowing other contracts to interact with it without knowing its internal details. Interfaces are commonly used to define the external functions of other contracts or external services, such as oracles or price feeds.

Get ABI through interfaces: To interact with a smart contract in Solidity, you need to know its Application Binary Interface (ABI), which defines the functions and data structures of the contract. You can obtain the ABI of a contract by compiling it in Remix or using a tool like Etherscan. Once you have the ABI, you can use it to interact with the contract's functions and data.

```solidity
function getPrice() internal view returns (uint256) {
        // Sepolia ETH / USD Address
        // https://docs.chain.link/data-feeds/price-feeds/addresses#Sepolia%20Testnet
        AggregatorV3Interface priceFeed = AggregatorV3Interface(
            0x694AA1769357215DE4FAC081bf1f309aDC325306
        );
        (, int256 answer, , , ) = priceFeed.latestRoundData();
        // ETH/USD rate in 18 digit
        return uint256(answer * 10000000000);
        // or (Both will do the same thing)
        // return uint256(answer * 1e10); // 1* 10 ** 10 == 10000000000
    }
```

#### 1.6.5.1. Chainlink Price Feeds

`(, int256 answer, , , ) = priceFeed.latestRoundData();`
The answer get ETH/USD rate in 8 digits.
Then convert it to 18 digits.

**Digits / Decimal**:

In the context of the provided Solidity code, "digits" refers to the number of decimal places in a number. This is particularly important in blockchain and cryptocurrency applications due to the use of fixed-point arithmetic.

In Ethereum and many other blockchains, there's no native support for floating-point numbers (numbers with decimal points), so fixed-point arithmetic is used instead. This involves dealing with integers only and keeping track of the "decimal point" separately.

For example, if you have a token with 18 decimal places (like Ether), 1 token is represented as `1 * 10^18` (or `1e18`), and 0.01 tokens is represented as `1 * 10^16` (or `1e16`). This allows you to work with fractional amounts while only using integer arithmetic.

In the provided code, the function `getPrice` is multiplying the result of `priceFeed.latestRoundData()` by `10000000000` (or `1e10`). This is because the price feed returns the price with 8 decimal places, but Ether has 18 decimal places. So, to convert the price to the same scale as Ether, it needs to be multiplied by `10^(18-8) = 10^10`, which is `10000000000`.

This is a common pattern in Solidity and other blockchain programming languages due to the lack of native support for floating-point numbers.

User:

> So, if there is a token with 6 decimal, then I need to do answer / 100

Copilot:

> Yes, that's correct. If you're dealing with a token that has 6 decimal places and you want to convert the price from a feed that provides it with 8 decimal places, you would divide the price by `10^(8-6) = 10^2 = 100`.
>
> Here's how you can modify the `getPrice` function to do this:
>
> ```solidity
> function getPrice() internal view returns (uint256) {
>    AggregatorV3Interface priceFeed = AggregatorV3Interface(
>        0x694AA1769357215DE4FAC081bf1f309aDC325306
>    );
>    (, int256 answer, , , ) = priceFeed.latestRoundData();
>    // Convert the price to the scale of a token with 6 decimal places
>    return uint256(answer) / 100;
> }
> ```
>
> This will return the price with 6 decimal places, which is the same scale as your token.

### 1.6.6. Review Interfaces, Github imports and math in solidity

[Block and Transaction Properties](https://docs.soliditylang.org/en/v0.8.25/units-and-global-variables.html#block-and-transaction-properties)

Block and Transaction Properties

    blockhash(uint blockNumber) returns (bytes32): hash of the given block when blocknumber is one of the 256 most recent blocks; otherwise returns zero

    blobhash(uint index) returns (bytes32): versioned hash of the index-th blob associated with the current transaction. A versioned hash consists of a single byte representing the version (currently 0x01), followed by the last 31 bytes of the SHA256 hash of the KZG commitment (EIP-4844).

    block.basefee (uint): current block’s base fee (EIP-3198 and EIP-1559)

    block.blobbasefee (uint): current block’s blob base fee (EIP-7516 and EIP-4844)

    block.chainid (uint): current chain id

    block.coinbase (address payable): current block miner’s address

    block.difficulty (uint): current block difficulty (EVM < Paris). For other EVM versions it behaves as a deprecated alias for block.prevrandao (EIP-4399 )

    block.gaslimit (uint): current block gaslimit

    block.number (uint): current block number

    block.prevrandao (uint): random number provided by the beacon chain (EVM >= Paris)

    block.timestamp (uint): current block timestamp as seconds since unix epoch

    gasleft() returns (uint256): remaining gas

    msg.data (bytes calldata): complete calldata

    msg.sender (address): sender of the message (current call)

    msg.sig (bytes4): first four bytes of the calldata (i.e. function identifier)

    msg.value (uint): number of wei sent with the message

    tx.gasprice (uint): gas price of the transaction

    tx.origin (address): sender of the transaction (full call chain)

### 1.6.7. Library

**Library:** A library in Solidity is a collection of reusable functions and data structures that can be shared across multiple contracts. Libraries are similar to contracts but have some key differences:

-   **No state:** Libraries cannot have state variables, and their functions are stateless. This means that libraries cannot store data between function calls or transactions.
-   **Deployment:** Libraries are deployed once and shared across multiple contracts. When a contract uses a library, it references the library's address on the blockchain.
-   **Cost:** Using libraries can reduce gas costs and deployment size by sharing code and avoiding duplication.

Define a library:

```solidity
library SafeMath {
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");
        return c;
    }
}
```

Use a library:

```solidity
using SafeMath for uint256;

uint256 result = a.add(b); // a is the first parameter, b is the second parameter
```

### 1.6.8. SafeMath, Overflow Checking, and the "unchecked" Keyword

**SafeMath:** SafeMath is a library in Solidity that provides arithmetic functions with overflow checking. It helps prevent integer overflow and underflow errors by checking the result of arithmetic operations against the maximum and minimum values of the data type.

**Overflow Checking:** Overflow checking is the process of verifying that an arithmetic operation does not exceed the maximum or minimum value of the data type. In Solidity, integer overflow occurs when the result of an addition or multiplication operation exceeds the maximum value that can be represented by the data type. Underflow occurs when the result is less than the minimum value.

**"unchecked" Keyword:** The "unchecked" keyword in Solidity is used to disable overflow and underflow checking for arithmetic operations. When the "unchecked" keyword is used, the compiler does not generate code to check for overflow or underflow, allowing the operation to proceed without validation. This can be useful in cases where the developer is confident that overflow or underflow will not occur.

Why to use `unchecked`: The "unchecked" keyword can be used in situations where the developer is certain that overflow or underflow will not occur, or when the cost of checking for overflow is too high. However, using "unchecked" can introduce security vulnerabilities if the arithmetic operation does result in overflow or underflow.

### 1.6.9. Solidity Basics: Resetting an Array

**Resetting an Array:** In Solidity, you can reset an array by setting its length to zero. This clears the array and removes all elements, effectively resetting it to an empty state. Here's an example of how to reset an array in Solidity:

_from gemini_
**Comparison of the Solidity Code Snippets for Resetting an Array:**

**Snippet 1:**

```solidity
uint256[] public numbers;

function resetArray() public {
    numbers.length = 0;
}
```

-   **Effect:** Resets the array by setting its length to 0.
-   **Pros:**
    -   Simpler and more concise syntax.
    -   Efficient for small arrays.
-   **Cons:**
    -   Can be costly for large arrays, as it requires copying the entire array to a new location.
    -   Leaves the storage space previously occupied by the array unused, which can lead to fragmentation and wasted gas on future storage operations.

**Snippet 2:**

```solidity
uint256[] public numbers;

function resetArray() public {
    delete numbers;
}
```

-   **Effect:** Resets the array by deleting its storage.
-   **Pros:**
    -   More efficient for large arrays, as it doesn't require copying the array.
    -   Frees up the storage space previously occupied by the array, reducing fragmentation and saving gas on future storage operations.
-   **Cons:**
    -   Can be more expensive than `numbers.length = 0` for small arrays.
    -   Resets the array to its initial state, meaning it will have a length of 0 and its elements will be uninitialized.

**Snippet 3:**

```solidity
uint256[] public numbers;

function resetArray() public {
    numbers = new uint256[](0);
}
```

-   **Effect:** Resets the array by creating a new array with a length of 0 and assigning it to the `numbers` variable.
-   **Pros:**
    -   Similar efficiency to `delete numbers` for large arrays.
    -   Frees up the storage space previously occupied by the array, reducing fragmentation and saving gas on future storage operations.
    -   Initializes the array to a known state with a length of 0.
-   **Cons:**
    -   Can be more expensive than `numbers.length = 0` for small arrays.
    -   Requires more gas than `delete numbers` because it involves creating a new array.

**Summary:**

-   For small arrays, `numbers.length = 0` is generally the most efficient and cost-effective option.
-   For large arrays, `delete numbers` or `numbers = new uint256[](0)` are better choices, as they free up storage space and can save gas on future storage operations.
-   `numbers = new uint256[](0)` offers a balance of efficiency and initialization, but it comes with a slightly higher gas cost than `delete numbers`.
-   The choice of which method to use depends on the specific requirements of your contract and the size of the array you're working with.

### 1.6.10. Transfer ETH

Three ways to transfer ETH:

1. **Transfer:** `address.transfer(amount)`
2. **Send:** `address.send(amount)`
3. **Call:** `bool success = address.call{value: amount}("")`

**Transfer:** The `transfer` function is a built-in function in Solidity that allows you to transfer Ether (ETH) from one address to another. It is commonly used to send ETH to a specific address or contract. The `transfer` function is a secure way to transfer ETH, as it automatically reverts the transaction if the transfer fails.

**Send:** The `send` function is another built-in function in Solidity that allows you to send Ether (ETH) to a specific address. It is similar to the `transfer` function but returns a boolean value indicating whether the transfer was successful. The `send` function is less commonly used than `transfer` due to its lower security guarantees.

**Call:** The `call` function in Solidity is a low-level function that allows you to send Ether (ETH) and data to a specific address. It is more flexible than `transfer` and `send` but requires more care to ensure security. The `call` function returns a boolean value indicating whether the call was successful and allows you to specify the amount of ETH to send and any data to include in the call.

**Compare:**

-   **Transfer:** Automatically reverts the transaction if the transfer fails. Limited to 2300 gas, which may not be enough for complex operations.
-   **Send:** Returns a boolean value indicating whether the transfer was successful. limited to 2300 gas, which may not be enough for complex operations.
-   **Call:** More flexible but requires more care to ensure security. Allows you to specify the amount of ETH to send and any data to include in the call.

### 1.6.11. `constructor`

**Constructor:** The `constructor` keyword in Solidity is used to define the constructor function of a contract. The constructor is a special function that is executed _only once_ when the contract is deployed to the blockchain. It is used to initialize the contract's state variables and perform any setup operations that are required before the contract can be used.

### 1.6.12. Modifiers

**Modifiers:** Modifiers in Solidity are used to add custom checks or conditions to functions. They allow you to define reusable logic that can be applied to multiple functions in a contract. Modifiers are typically used to enforce access control, validate inputs, or perform pre- and post-processing tasks.

Syntax:

```solidity
modifier onlyOwner() {
    require(msg.sender == owner, "Only owner can call this function");
    _; // Continue executing the function
}
```

### 1.6.13. Advanced Solidity Concepts

**Gas efficiency**: Gas efficiency refers to the optimization of smart contracts to reduce the amount of gas required to execute transactions on the Ethereum network. Gas is the fee you pay to execute transactions and smart contracts on the blockchain, and optimizing gas usage can help reduce costs and improve the performance of your contracts.

> Tricks to reduce gas:
> `constant` and `immutable`: constant and immutable are keywords in Solidity that are used to declare variables with specific properties:
> constant variables are read-only and cannot be modified after initialization, while immutable variables are read-only but can be initialized with complex expressions at deployment time.

### 1.6.14. Advanced Solidity Custom Errors

`error NotOwner()` on the top of the contract. Then use it in the modifier.

```solidity
error NotOwner();

modifier onlyOwner() {
    if (msg.sender == owner) {
        _;
    } else {
        revert NotOwner();
    }
}
```

`NotOwner` is a custom error that can be used to revert the transaction with a specific error message when the modifier is applied.

`revert` is used to revert the transaction and throw an error message. `revert` is commonly used in Solidity to handle exceptional conditions and revert the state changes made by a transaction.

This is more gas efficient than using `require`. Because `require` will consume all the gas, but `revert` will return the remaining gas. We don't save the error message in the storage.

### 1.6.15. Advanced Solidity: Receive and Fallback

What if someone sends ETH to the contract without calling a function? Or what if the function call fails?
[Special Functions](https://docs.soliditylang.org/en/v0.8.25/contracts.html#special-functions)

**Receive and Fallback Functions:** The `receive` and `fallback` functions in Solidity are special functions that are used to handle incoming Ether (ETH) transactions to a contract. The `receive` function is called when a contract receives ETH without any data, while the `fallback` function is called when a contract receives ETH with data or when a function call fails.

```
    // Explainer from: https://solidity-by-example.org/fallback/
    // Ether is sent to contract
    //      is msg.data empty?
    //          /   \
    //         yes  no
    //         /     \
    //    receive()?  fallback()
    //     /   \
    //   yes   no
    //  /        \
    //receive()  fallback()
```

### Recap

