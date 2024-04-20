# Lesson6: HardHat Simple Storage

## Hardhat Setup Troubleshooting

`hardhat.config.js`

`import {ethers} from 'hardhat';` When using Hardhat.

`import {ethers} from 'ethers';` When using ethers.js. ethers.js doesn't know the compiled files are in the `artifacts` directory.

In general, if you're using Hardhat, it's easier to use the first import because it's already set up to work with your Hardhat configuration. If you're not using Hardhat, or if you need to use a version of ethers that's different from the one included with Hardhat, you might use the second import.

## Hardhat Network

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
}
```

## --network flag

`npx hardhat run scripts/deploy.js --network localhost`

## Verify

hardhat-etherscan(deprecated) plugin or hardhat-verify:

Now, you can run `npx hardhat verify --network localhost DEPLOYED_CONTRACT_ADDRESS` to verify your contract on Etherscan. Using `hardhat-verify`

## Custom Hardhat Tasks

`npx hardhat run scripts/run.js` to run a custom task.

`npx hardhat run scripts/run.js --network localhost` to run a custom task on a specific network.

Example:

```js
// in hardhat.config.js
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners()

    for (const account of accounts) {
        console.log(account.address)
    }
})

module.exports = {
    networks: {
        hardhat: {
            chainId: 1337,
        },
    },
}
```

or write a script:

```js
// tasks/accounts.js
const { task } = require("hardhat/config")

task("block-number", "Prints the current block number").setAction(
    // const blockTask = async function() => {}
    // async function blockTask() {}
    async (taskArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Current block number: ${blockNumber}`)
    },
)

module.exports = {}

// in hardhat.config.js
require("./tasks/accounts")
```

## `hre` object

`hre` is an object that contains all the Hardhat Runtime Environment objects. It's passed to tasks and scripts as the second argument.

`hre.ethers` is the ethers.js library.

We no need to import `hre` because it's already available in the global scope.

Build Hardhat Run Time Environment: `npx hardhat run scripts/run.js`

## Hardhat localhost network

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
}
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

## Hardhat console

`npx hardhat console --network localhost` to start a Hardhat console.

`npx hardhat console` to start a Hardhat console on the default network.

Run commands in the console:

```js
const [owner] = await ethers.getSigners()
```

## Running tests

`describe` and `it` functions are used to write tests.

`describe` is used to group tests together. `it` is used to write individual tests.

They takes a string as the first argument, which is the name of the test or group of tests, and a function as the second argument, which contains the test code.

`beforeEach` and `before` functions are used to run code before each test or before all tests in a group.

`npx hardhat test` to run tests.

### `chai`

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

## See How Much Gas a Transaction Uses

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

## Coinmarketcap API key

You can see how much gas a transaction uses in USD by providing a Coinmarketcap API key to the `hardhat-gas-reporter` plugin.

## TEST Coverage

Explain test coverage: `npx hardhat coverage` to run tests and see how much of your code is covered by tests.

Use:
plugin `solidity-coverage`

```js
// in hardhat.config.js
require("@nomiclabs/hardhat-etherscan")
require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("solidity-coverage")
```

What happens when running `npx hardhat coverage`?

The `solidity-coverage` plugin runs your tests and generates a coverage report that shows how much of your code is covered by tests. It uses the `npx hardhat test` command to run the tests and the `npx hardhat coverage` command to generate the coverage report.

## Waffle

Intro: Waffle is a testing library for Ethereum smart contracts that provides a set of tools for writing tests.

## Recap

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
