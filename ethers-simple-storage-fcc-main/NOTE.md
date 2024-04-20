## Lesson 5: Ethers.js Simple Storage

### Asynchronous Programming in JavaScript

In JavaScript, asynchronous programming is a way to handle tasks that take a long time to complete. This is done by running the task in the background and then executing a callback function when the task is done. This allows the program to continue running other tasks while waiting for the long-running task to complete.

Example of asynchronous programming in JavaScript:

```javascript
// Asynchronous function that takes a callback function as an argument
function fetchData(callback) {
    setTimeout(() => {
        const data = "Hello, world!"
        callback(data)
    }, 1000)
}

// Call the asynchronous function with a callback function
fetchData((data) => {
    console.log(data)
})
```

#### Asynchronous Functions

In JavaScript, asynchronous functions are functions that return a promise. A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

Example of an asynchronous function in JavaScript:

```javascript
// Asynchronous function that returns a promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Hello, world!"
            resolve(data)
        }, 1000)
    })
}

// Call the asynchronous function and handle the promise
fetchData()
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.error(error)
    })
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
let provider = new ethers.JsonRpcProvider(process.env.RPC_URL)
let wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
```

3. abi: contract_abi
4. binary: contract_bytecode

```javascript
const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8")
const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf8")
```

5. contract factory: abi, binary

```javascript
let factory = new ethers.ContractFactory(abi, binary, wallet)
```

6. deploy contract: factory, args; Adding transaction overrides

```javascript
// const contract = await contractFactory.deploy({ gasPrice: 100000000000 })
const contract = await contractFactory.deploy()
```

7. Transaction receipt

```javascript
const deploymentReceipt = await contract.deployTransaction.wait(1) // wait for 1 block
```

### nonce

A nonce is a number used to prevent replay attacks in Ethereum transactions. It is a unique number that is generated for each transaction and is used to ensure that the transaction is executed only once.

### use BigNumber

BigNumber is a library that provides arbitrary-precision arithmetic in JavaScript. It allows you to perform calculations with large numbers without losing precision.

### Back ticks

Backticks are used to create template literals in JavaScript. Template literals allow you to embed expressions inside a string by using `${}`.

### Transaction response need w`ait()`

```javascript
const txResponse = await contract.set(42)
const receipt = await txResponse.wait()
```

`view` function: read only function

```javascript
const value = await contract.get()
```

### Environment variables

.env

add it to .gitignore

dotenv: `npm install dotenv`

feature: load environment variables from a .env file

```javascript
require("dotenv").config() 

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL)
```

`process`: global object that provides information about the current Node.js process

properties of `process` object: `env`, `argv`, `cwd()`, `exit()`, `on()`

- `env`: environment variables
- `argv`: command-line arguments
- `cwd()`: current working directory
- `exit()`: exit the process
- `on()`: event listener

