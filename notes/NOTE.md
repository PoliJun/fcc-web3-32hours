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

-   virtual
    > The `virtual` keyword is used in Solidity to indicate that a function can be overridden in derived contracts. When a function is marked as `virtual`, it can be overridden by functions in derived contracts.
-   override
    > The `override` keyword is used in Solidity to indicate that a function is overriding a function from a base contract. When a function is marked as `override`, it must match the function signature of the base function it is overriding.

## Lesson 4: Remix Fund Me

### Transactions - Fields

Transactions are cryptographically signed instructions from accounts. An account will initiate a transaction to update the state of the Ethereum network. The simplest transaction is transferring ETH from one account to another.

-   **Nonce**: tx count of the account
-   **Gas Price**: price per unit of gas
-   **Gas Limit**: max amount of gas that this tx can consume
-   **To**: recipient of the tx
-   **Value**: amount of wei to send
-   **Data**: input data for the tx
-   **V, R, S**: signature of the tx

### 1e18 & `require`

1 Ether = 1e18 Wei

`require(msg.value > 1e18, "ETH not enough");`

if the value is less than 1 Ether, the transaction will **_revert_**.

### Chainlink & Oracles

Chainlink is a decentralized oracle network that enables smart contracts to securely interact with real-world data. Oracles are trusted sources of information that provide data to smart contracts on the blockchain. Chainlink oracles connect smart contracts to external data sources, APIs, and payment systems, enabling smart contracts to access off-chain data and execute real-world transactions.

**Why don't we use an http api?**

-   Centralized: against the spirit of blockchain
-   Single point of failure: If the API goes down, the smart contract can't get the data.
-   Trust: We have to trust the API to provide accurate and timely data.

Besides, if different nodes use different APIs or fetch apis at different time, they will get different data.

#### Chainlink Data Feeds

Chainlink Data Feeds are decentralized oracle networks that provide secure and reliable data to smart contracts on the blockchain. Chainlink Data Feeds are composed of multiple independent nodes that fetch data from various sources, aggregate it, and deliver it to smart contracts. Data Feeds are designed to provide accurate, tamper-proof, and real-time data to smart contracts, enabling them to interact with external data sources and make informed decisions.

**Reference Contract** Explanation: The reference contract is a smart contract that acts as a bridge between the Chainlink oracle network and the smart contract that needs external data. The reference contract receives data from the Chainlink oracle network and forwards it to the smart contract, ensuring that the data is accurate and secure.

**Reputation System** Explanation: Chainlink uses a reputation system to ensure the reliability and accuracy of its oracle nodes. Nodes that consistently provide accurate data are rewarded with a higher reputation score, while nodes that provide inaccurate data are penalized. The reputation system helps maintain the integrity of the Chainlink oracle network and ensures that smart contracts receive reliable data.

**Which node to provide data is determined by the reputation system.**

> In the Chainlink network, the selection of oracle nodes that provide data to a smart contract is typically determined by the contract creator. When creating a request for data, the contract creator can specify which nodes they want to fulfill the request. They might choose nodes based on their reputation, the fees they charge, or other factors.
>
> Once the nodes have been selected and the request has been made, each node independently fetches the requested data and reports it back to the smart contract. The contract then aggregates the responses from all the nodes to form a final result. This could be a simple average of all the responses, or a more complex aggregation method could be used.
>
> This system ensures that the data provided to the smart contract is reliable and tamper-proof. Even if one node provides incorrect data, the impact on the final result will be minimal as long as the majority of nodes are honest. This is a key aspect of Chainlink's decentralized oracle network.

#### Convert ETH to USD

Decimals in Solidity: Solidity does not support floating-point numbers. To represent decimal numbers, you can use integers and scale them by a fixed factor. For example, to represent dollars and cents, you can store the amount in cents and divide by 100 when displaying it.

Chainlink VRF: Chainlink Verifiable Random Function (VRF) is a secure and verifiable source of randomness for smart contracts on the blockchain. Chainlink VRF generates random numbers that are tamper-proof and verifiable, enabling smart contracts to access random data for various applications, such as gaming, gambling, and decentralized finance.

Chainlink Keepers: Chainlink Keepers are decentralized service providers that automate smart contract functions based on predefined conditions. Chainlink Keepers monitor smart contracts for specific events or triggers and execute predefined actions in response. Keepers help automate smart contract operations, such as updating data feeds, rebalancing portfolios, and executing transactions.

Chainlink to make get requests: Chainlink nodes can make HTTP GET requests to external APIs to fetch data for smart contracts. This allows smart contracts to access real-world data, such as price feeds, weather information, and sports scores, from external sources. Chainlink's decentralized oracle network ensures that the data is accurate, secure, and tamper-proof.

Import tokens in metamask: To import tokens into MetaMask, you need to add the token contract address, token symbol, and number of decimals. This allows MetaMask to recognize and display the token in your wallet. You can import tokens by clicking "Add Token" in MetaMask and entering the required information.

Volume Data: Volume data refers to the amount of trading activity that occurs in a market over a specific period. It represents the total number of shares or contracts traded during a given time frame, such as a day, week, or month. Volume data is used by traders and analysts to assess market liquidity, price trends, and investor sentiment.

### Review sending ETH and working with Chainlink

#### `payable`

Intro: The `payable` keyword in Solidity is used to indicate that a function can receive Ether (ETH) as part of a transaction. When a function is marked as `payable`, it can accept ETH payments from external accounts or contracts. This allows users to send ETH to the function when calling it, enabling various use cases, such as transferring funds, purchasing tokens, or interacting with smart contracts that require ETH payments.

### Interfaces and Price Feeds

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

#### Chainlink Price Feeds

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

### Review Interfaces, Github imports and math in solidity

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

### Library

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

### SafeMath, Overflow Checking, and the "unchecked" Keyword

**SafeMath:** SafeMath is a library in Solidity that provides arithmetic functions with overflow checking. It helps prevent integer overflow and underflow errors by checking the result of arithmetic operations against the maximum and minimum values of the data type.

**Overflow Checking:** Overflow checking is the process of verifying that an arithmetic operation does not exceed the maximum or minimum value of the data type. In Solidity, integer overflow occurs when the result of an addition or multiplication operation exceeds the maximum value that can be represented by the data type. Underflow occurs when the result is less than the minimum value.

**"unchecked" Keyword:** The "unchecked" keyword in Solidity is used to disable overflow and underflow checking for arithmetic operations. When the "unchecked" keyword is used, the compiler does not generate code to check for overflow or underflow, allowing the operation to proceed without validation. This can be useful in cases where the developer is confident that overflow or underflow will not occur.

Why to use `unchecked`: The "unchecked" keyword can be used in situations where the developer is certain that overflow or underflow will not occur, or when the cost of checking for overflow is too high. However, using "unchecked" can introduce security vulnerabilities if the arithmetic operation does result in overflow or underflow.

### Solidity Basics: Resetting an Array

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

### Transfer ETH

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

### `constructor`

**Constructor:** The `constructor` keyword in Solidity is used to define the constructor function of a contract. The constructor is a special function that is executed _only once_ when the contract is deployed to the blockchain. It is used to initialize the contract's state variables and perform any setup operations that are required before the contract can be used.

### Modifiers

**Modifiers:** Modifiers in Solidity are used to add custom checks or conditions to functions. They allow you to define reusable logic that can be applied to multiple functions in a contract. Modifiers are typically used to enforce access control, validate inputs, or perform pre- and post-processing tasks.

Syntax:

```solidity
modifier onlyOwner() {
    require(msg.sender == owner, "Only owner can call this function");
    _; // Continue executing the function
}
```

### Advanced Solidity Concepts

**Gas efficiency**: Gas efficiency refers to the optimization of smart contracts to reduce the amount of gas required to execute transactions on the Ethereum network. Gas is the fee you pay to execute transactions and smart contracts on the blockchain, and optimizing gas usage can help reduce costs and improve the performance of your contracts.

> Tricks to reduce gas:
> `constant` and `immutable`: constant and immutable are keywords in Solidity that are used to declare variables with specific properties:
> constant variables are read-only and cannot be modified after initialization, while immutable variables are read-only but can be initialized with complex expressions at deployment time.

### Advanced Solidity Custom Errors

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

### Advanced Solidity: Receive and Fallback

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

Concepts we didn't cover yet (will cover in later sections)

1.  Enum
2.  Events
3.  Try / Catch
4.  Function Selector
5.  abi.encode / decode
6.  Hash with keccak256
7.  Yul / Assembly

## Lesson 5: Ethers.js Simple Storage

### Asynchronous Programming in JavaScript

In JavaScript, asynchronous programming is a way to handle tasks that take a long time to complete. This is done by running the task in the background and then executing a callback function when the task is done. This allows the program to continue running other tasks while waiting for the long-running task to complete.

Example of asynchronous programming in JavaScript:

```javascript
// Asynchronous function that takes a callback function as an argument
function fetchData(callback) {
    setTimeout(() => {
        const data = "Hello, world!";
        callback(data);
    }, 1000);
}

// Call the asynchronous function with a callback function
fetchData((data) => {
    console.log(data);
});
```

#### Asynchronous Functions

In JavaScript, asynchronous functions are functions that return a promise. A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

Example of an asynchronous function in JavaScript:

```javascript
// Asynchronous function that returns a promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Hello, world!";
            resolve(data);
        }, 1000);
    });
}

// Call the asynchronous function and handle the promise
fetchData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
```

### Compiling Solidity

`npx solcjs --bin --abi --include-path node_modules/ --base-path . -o . SimpleStorage.sol`

### Ganache fake blockchain

Ganache is a personal blockchain for Ethereum development that you can use to deploy contracts, develop your applications, and run tests. It is available as a desktop application or a command-line tool.

### Json RPC

JSON-RPC is a remote procedure call protocol encoded in JSON. It is a simple protocol that allows clients to call methods on a server using a request-response model.

### Ethers.js

Ethers.js is a JavaScript library that provides a simple and easy-to-use interface for interacting with the Ethereum blockchain. It allows you to send transactions, deploy contracts, and interact with smart contracts using a simple and intuitive API.

1. provider: rpc_url
2. wallet: private_key, provider

```javascript
let provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
let wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
```

3. abi: contract_abi
4. binary: contract_bytecode

```javascript
const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf8");
```

5. contract factory: abi, binary

```javascript
let factory = new ethers.ContractFactory(abi, binary, wallet);
```

6. deploy contract: factory, args; Adding transaction overrides

```javascript
// const contract = await contractFactory.deploy({ gasPrice: 100000000000 })
const contract = await contractFactory.deploy();
```

7. Transaction receipt

```javascript
const deploymentReceipt = await contract.deployTransaction.wait(1); // wait for 1 block
```

### nonce

A nonce is a number used to prevent replay attacks in Ethereum transactions. It is a unique number that is generated for each transaction and is used to ensure that the transaction is executed only once.

### use BigNumber

BigNumber is a library that provides arbitrary-precision arithmetic in JavaScript. It allows you to perform calculations with large numbers without losing precision.

### Back ticks

Backticks are used to create template literals in JavaScript. Template literals allow you to embed expressions inside a string by using `${}`.

### Transaction response need `wait()`

```javascript
const txResponse = await contract.set(42);
const receipt = await txResponse.wait();
```

`view` function: read only function

```javascript
const value = await contract.get();
```

### Environment variables

.env

add it to .gitignore

dotenv: `npm install dotenv`

feature: load environment variables from a .env file

```javascript
require("dotenv").config();

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
```

`process`: global object that provides information about the current Node.js process

properties of `process` object: `env`, `argv`, `cwd()`, `exit()`, `on()`

-   `env`: environment variables
-   `argv`: command-line arguments
-   `cwd()`: current working directory
-   `exit()`: exit the process
-   `on()`: event listener

### Create Wallet from encrypted JSON

```javascript
const wallet = ethers.Wallet.fromEncryptedJson(encryptedJson, password);
```

### The `.env` Pledge

[THE .ENV PLEDGE](https://github.com/smartcontractkit/full-blockchain-solidity-course-js/discussions/5#discussion-4072059)

### Alchemy

Alchemy is a blockchain developer platform that provides a suite of tools and services to help you build, scale, and manage your blockchain applications. It offers APIs, developer tools, and infrastructure services to help you interact with the Ethereum blockchain.

Deploy on and Info on real blockchain.

Get Rpc URL from Alchemy.

### Verify and Publish Contract on Etherscan

Etherscan is a block explorer and analytics platform for the Ethereum blockchain. It allows you to explore the Ethereum blockchain, view transactions, and interact with smart contracts.

To verify and publish a contract on Etherscan, you need the following information:

1. Contract address
2. Contract ABI
3. Contract source code
4. Compiler version

...

We can also do this programmatically.

### Alchemy Dashboard The Mempool

The mempool is a list of unconfirmed transactions that are waiting to be included in a block on the Ethereum blockchain. It is a temporary storage area for transactions that have been broadcast to the network but have not yet been confirmed by miners.

### Recap

In this lesson, we learned about asynchronous programming in JavaScript, how to compile Solidity contracts, interact with the Ethereum blockchain using Ethers.js, and deploy contracts on a local blockchain and on the Ethereum mainnet. We also learned how to use environment variables to store sensitive information and how to create wallets from encrypted JSON files.

### Optional TypeScript

To use ES modules in javascript, we need to add `"type": "module"` to `package.json`.

In TypeScript, we don't need to add `"type": "module"` to `package.json`.

`ts-node`: TypeScript execution and REPL for Node.js
install it globally: `npm install -g ts-node`

`tsconfig.json`: TypeScript configuration file

`!`: non-null assertion operator

```typescript
const provider = new ethers.JsonRpcProvider(process.env.RPC_URL!);
```

effect: tells TypeScript that the value is not null or undefined

-

## Lesson6: HardHat Simple Storage

### Hardhat Setup Troubleshooting

`hardhat.config.js`

`import {ethers} from 'hardhat';` When using Hardhat.

`import {ethers} from 'ethers';` When using ethers.js. ethers.js doesn't know the compiled files are in the `artifacts` directory.

In general, if you're using Hardhat, it's easier to use the first import because it's already set up to work with your Hardhat configuration. If you're not using Hardhat, or if you need to use a version of ethers that's different from the one included with Hardhat, you might use the second import.

### Hardhat Network

`npx hardhat node` to start a local Ethereum network.

default network is `localhost:8545`

in `hardhat.config.js`:

```js
module.exports = {
    networks: {
        hardhat: {
            chainId: 1337,
        },
    },
};
```

### --network flag

`npx hardhat run scripts/deploy.js --network localhost`

### Verify

hardhat-etherscan(deprecated) plugin or hardhat-verify:

Now, you can run `npx hardhat verify --network localhost DEPLOYED_CONTRACT_ADDRESS` to verify your contract on Etherscan. Using `hardhat-verify`

### Custom Hardhat Tasks

`npx hardhat run scripts/run.js` to run a custom task.

`npx hardhat run scripts/run.js --network localhost` to run a custom task on a specific network.

Example:

```js
// in hardhat.config.js
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

module.exports = {
    networks: {
        hardhat: {
            chainId: 1337,
        },
    },
};
```

or write a script:

```js
// tasks/accounts.js
const { task } = require("hardhat/config");

task("block-number", "Prints the current block number").setAction(
    // const blockTask = async function() => {}
    // async function blockTask() {}
    async (taskArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber();
        console.log(`Current block number: ${blockNumber}`);
    }
);

module.exports = {};

// in hardhat.config.js
require("./tasks/accounts");
```

### `hre` object

`hre` is an object that contains all the Hardhat Runtime Environment objects. It's passed to tasks and scripts as the second argument.

`hre.ethers` is the ethers.js library.

We no need to import `hre` because it's already available in the global scope.

Build Hardhat Run Time Environment: `npx hardhat run scripts/run.js`

### Hardhat localhost network

`npx hardhat node` to start a local Ethereum network.

default network is `localhost:8545`

in `hardhat.config.js`:

```js
module.exports = {
    networks: {
        hardhat: {
            chainId: 1337,
        },
    },
};
```

Config port and network id:

```js
module.exports = {
    networks: {
        hardhat: {
            chainId: 1337,
            url: "http://
            :8545",
        },
    },
}
```

Localhost network vs. default network:

`npx hardhat run scripts/deploy.js` to deploy on the default network.

`npx hardhat run scripts/deploy.js --network localhost` to deploy on the localhost network.

What is the difference between the default network and the localhost network?

The default network is the network that Hardhat uses when you run tasks or scripts without specifying a network. The localhost network is a network that you can start with `npx hardhat node`. The default network is a Hardhat network that is created automatically when you run tasks or scripts. The localhost network is a local Ethereum network that you can start with `npx hardhat node`.

### Hardhat console

`npx hardhat console --network localhost` to start a Hardhat console.

`npx hardhat console` to start a Hardhat console on the default network.

Run commands in the console:

```js
const [owner] = await ethers.getSigners();
```

### Running tests

`describe` and `it` functions are used to write tests.

`describe` is used to group tests together. `it` is used to write individual tests.

They takes a string as the first argument, which is the name of the test or group of tests, and a function as the second argument, which contains the test code.

`beforeEach` and `before` functions are used to run code before each test or before all tests in a group.

`npx hardhat test` to run tests.

#### `chai`

`chai` is an assertion library that provides a set of functions for writing tests.

assertion methods:

-   `expect` function is used to make assertions in tests.
    > `expect(1 + 1).to.equal(2)`
-   `to` method is used to chain assertions together.
    > `expect(1 + 1).to.equal(2).to.be.a('number')`
-   `equal` method is used to check if two values are equal.
-   `not` method is used to negate an assertion.
    > `expect(1 + 1).to.not.equal(3)`
-   `deep` method is used to check if two objects are deeply equal.
    > `expect({ a: 1, b: 2 }).to.deep.equal({ a: 1, b: 2 })`
-   `include` method is used to check if an array or string includes a value.
-   `throw` method is used to check if a function throws an error.
    > `expect(() => { throw new Error('error') }).to.throw('error')`
-   `be` method is used to check if a value is the same as another value.
    > `expect(1 + 1).to.be.a('number')`
-   `a` method is used to check if a value is of a certain type.
-   `have` method is used to check if an object has a property.
    > `expect({ a: 1, b: 2 }).to.have.property('a')`
-   `property` method is used to check if an object has a property with a certain value.
    ...

`chai` is included with Hardhat by default, so you don't need to install it separately.

### See How Much Gas a Transaction Uses

plugin `hardhat-gas-reporter`

`npx hardhat test --network localhost` to run tests and see how much gas each transaction uses.

```json
// in hardhat.config.js
gasReporter: {
        enabled: true,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        coinmarketcap: COINMARKETCAP_API_KEY,
    }
```

### Coinmarketcap API key

You can see how much gas a transaction uses in USD by providing a Coinmarketcap API key to the `hardhat-gas-reporter` plugin.

### TEST Coverage

Explain test coverage: `npx hardhat coverage` to run tests and see how much of your code is covered by tests.

Use:
plugin `solidity-coverage`

```js
// in hardhat.config.js
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");
```

What happens when running `npx hardhat coverage`?

The `solidity-coverage` plugin runs your tests and generates a coverage report that shows how much of your code is covered by tests. It uses the `npx hardhat test` command to run the tests and the `npx hardhat coverage` command to generate the coverage report.

### Waffle

Intro: Waffle is a testing library for Ethereum smart contracts that provides a set of tools for writing tests.

### Recap

-   Hardhat is a development environment for Ethereum smart contracts that provides a set of tools for writing, testing, and deploying smart contracts.
-   Hardhat provides a set of plugins that extend its functionality, such as the `hardhat-gas-reporter` plugin for reporting gas usage and the `solidity-coverage` plugin for generating test coverage reports.
-   Hardhat provides a set of tasks that you can run from the command line, such as `npx hardhat test` to run tests and `npx hardhat coverage` to generate test coverage reports.
-   Hardhat provides a set of objects that you can use in your tasks and scripts, such as the `ethers` object for interacting with Ethereum smart contracts and the `hre` object for accessing the Hardhat Runtime Environment.
-   Hardhat provides a set of configuration options that you can use to customize its behavior, such as the `networks` option for specifying network settings and the `gasReporter` option for configuring the gas reporter plugin.
-   Hardhat provides a set of built-in tasks and plugins that you can use to extend its functionality, such as the `hardhat-etherscan` plugin for verifying smart contracts on Etherscan and the `hardhat-waffle` plugin for testing smart contracts with Waffle.
-   Hardhat provides a set of built-in objects and functions that you can use in your tasks and scripts, such as the `ethers` object for interacting with Ethereum smart contracts and the `task` function for defining custom tasks.
-   Hardhat provides a set of built-in commands that you can run from the command line, such as `npx hardhat node` to start a local Ethereum network and `npx hardhat console` to start a Hardhat console.
-   Hardhat provides a set of built-in assertions that you can use in your tests, such as the `expect` function for making assertions and the `to` method for chaining assertions together.
-   Hardhat provides a set of built-in tools for writing, testing, and deploying smart contracts, such as the `npx hardhat test` command for running tests and the `npx hardhat coverage` command for generating test coverage reports.

### TypeScript

`npx hardhat init` to initialize a Hardhat project with TypeScript.

@typechain/hardhat plugin: Automatically generate TypeScript bindings for your smart contracts.

Now, @typechain/hardhat is not actively dev.

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
            "You are deploying to a local network, you'll need a local network running to interact"
        );
        log(
            "Please run `npx hardhat console` to interact with the deployed smart contracts!"
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
## Lesson 8: HTML JavaScript Fund Me

### How Does Website works with Web3 Wallets

MetaMask is injected into the browser and is used to interact with the Ethereum blockchain. The website is connected to the Ethereum blockchain through the MetaMask wallet

Object: window.ethereum

### Connecting HTML to MetaMask

Check if MetaMask is installed

```js
if (window.ethereum) {
    console.log("MetaMask is installed")
}
```

Connect to MetaMask

```js
await ethereum.request({ method: "eth_requestAccounts" })
```

Try Catch Block on acction to handle errors

```js
try {
    await ethereum.request({ method: "eth_requestAccounts" })
} catch (error) {
    console.log(error)
}
```

### Front-end(ES6) js vs. Node.js

In Front-end JavaScript, we can use the `window` object to interact with the browser. In Node.js, we can't use the `window` object because it's not available in the Node.js environment.

In Front-end JavaScript, we can't use `require` to import modules. We can use `import` instead.

### provider, signer, contract

```js
const provider = new ethers.providers.Web3Provider(window.ethereum)
await provider.send("eth_requestAccounts", [])
const signer = provider.getSigner()
const contract = new ethers.Contract(contractAddress, abi, signer)
```

#### ABI and Contract address hard coded in `constant.js

The data source is in hardhat project: `artifacts/contracts/ContractName.json`

### Resetting accounts in metamask

Error: nonce is too high

This is because we closed the node, and the nonce is not reset. We can reset the account in MetaMask by going to Settings -> Advanced -> Reset Account

Moonshot:

Resetting an account in MetaMask doesn't actually delete or change the underlying Ethereum address associated with the account. Instead, it simply clears the local session, removing any saved information like your account nickname and any stored private keys or seed phrases.

Here's what happens when you reset an account in MetaMask:

1. **Account Information Cleared**: MetaMask will clear the local session for the account. This includes any account nicknames and potentially any site-specific data.

2. **Keys Stay the Same**: The reset does not change the public address of your Ethereum account or the associated private key. The private key is crucial for sending transactions and managing your assets.

3. **Need to Re-Import**: After a reset, you'll need to re-import the account into MetaMask using the same method you used initially. This could be by entering the private key, the seed phrase, an HD wallet path, or an imported JSON file, depending on how you set up the account.

4. **Sensitive Data**: Never share your private key or seed phrase with anyone, even if you're resetting your MetaMask account. This information is the key to accessing your funds.

5. **Transactions on Mainnet**: Once you've re-imported the account, you can continue to use that account to send transactions on the Ethereum mainnet. The account's address remains the same, and any Ether or tokens in that account are still there.

In other words, resetting an account in MetaMask is akin to logging out and then logging back in with the same credentials on a different device. You're still using the same account; you're just starting fresh with the local data on your device.

Remember, if you've forgotten your private key or seed phrase, you cannot access your account. Always keep your private key and seed phrase secure and backed up in a safe place.

### Listening for Events and Completed Transactions

-   Listen for the Tx to be mined
-   Listen for an event to be emitted

```js
const tx = await contract.functionName() // Send the transaction, returns a promise
// Wait for the transaction to be mined
await tx.wait()
```

```js
// Listen for the Event
contract.on("EventName", (from, to, amount, event) => {
    console.log(from, to, amount, event)
})
```

### Event Emitter Methods

v5 and v6 is different

#### v5 [here](https://docs.ethers.org/v5/api/providers/provider/#Provider--event-methods)

```js
provider.once("block", (blockNumber) => {
    console.log(blockNumber)
})
```

```js
function listenForTransactionMine(transactionResponse, provider) {
    console.log(`Mining ${transactionResponse.hash}`)
    return new Promise((resolve, reject) => {
        try {
            provider.once(transactionResponse.hash, (transactionReceipt) => {
                console.log(
                    `Completed with ${transactionReceipt.confirmations} confirmations. `
                )
                resolve()
            })
        } catch (error) {
            reject(error)
        }
    })
}
```

#### v6 [here](https://docs.ethers.org/v6/api/utils/events/#about-events)

```js
eventEmitterable.once("block", (blockNumber) => {
    console.log(blockNumber)
})
```

### Input Forms

```js
const ethAmount = document.getElementById("ethAmount").value
```

### Reading From the Blockchain

```js
const balance = await ethers.provider.getBalance(address)
```

### Recap

-   Connect to MetaMask
-   Send transactions
-   Listen for events
-   Read from the blockchain
-   Use input forms
-   Use the `window` object
-   Use the `ethereum` object
-   Use the `ethers` object
-   Use the `provider` object
-   Use the `signer` object
