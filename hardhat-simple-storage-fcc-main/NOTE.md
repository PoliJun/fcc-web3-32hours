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
      chainId: 1337
    }
  }
};
```

## --network flag

`npx hardhat run scripts/deploy.js --network localhost`

