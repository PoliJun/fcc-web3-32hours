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

```json

```
