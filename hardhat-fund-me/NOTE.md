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
