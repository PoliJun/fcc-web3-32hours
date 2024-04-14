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
