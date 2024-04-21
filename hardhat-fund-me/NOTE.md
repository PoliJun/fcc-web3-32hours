## Lesson 7: Hardhat Fund Me

### Initial Setup

`hardhat`, `hardhat-toolbox`.

1. `npm init -y`
2. `npm install --save-dev hardhat`
3. `npx hardhat init`

#### `hardhat-toolbox` is a collection of useful tasks for Hardhat.

When you use this plugin, you'll be able to:

- Interact with your contracts using ethers.js and the hardhat-ethers plugin.
- Test your contracts with Mocha, Chai and our own Hardhat Chai Matchers plugin.
- Deploy your contracts with Hardhat Ignition.
- Interact with Hardhat Network with our Hardhat Network Helpers.
- Verify the source code of your contracts with the hardhat-verify plugin.
- Get metrics on the gas used by your contracts with the hardhat-gas-reporter plugin.
- Measure your tests coverage with solidity-coverage.
- And, if you are using TypeScript, get type bindings for your contracts with Typechain.

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
