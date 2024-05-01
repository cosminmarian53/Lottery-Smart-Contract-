# Lottery Smart Contract

## Description
This project is a Lottery Smart Contract developed using Solidity. It allows users to participate in a blockchain-based lottery system.

## Features
- Secure and transparent lottery system
- Blockchain-based ensuring immutability and transparency
- Easy participation for users

## Installation
1. Clone the repository:
### `git clone https://github.com/cosminmarian53/Lottery-Smart-Contract-`

2. Navigate to the project directory:
### `cd lottery-contract`
or
### `cd lottery-react`

3. Install dependencies:
### `npm install`

4. Deploying the contract:
Run the following command to deploy the contract:
### `node deploy.js`
Now, in order to make this work, you will need to have your own local contract instance. When the contract deployed succesfully, in the lottery.js file, 
change the adddress constant and the abi so it matches your local contract.

## Usage
To use this smart contract, deploy it on the Ethereum network using a platform like Truffle or Remix.I used this on the Sepolia test network in order to develop my app based on a real-life testing scenario( what I mean by that
is when the user sends a transaction, there will be a slight delay, and so I took that into consideration and made my app work based on this factor)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
MIT
