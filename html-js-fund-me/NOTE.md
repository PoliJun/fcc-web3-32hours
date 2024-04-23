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


