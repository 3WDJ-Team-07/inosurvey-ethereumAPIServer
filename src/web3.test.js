import Web3 from 'web3';
import sigUtil from 'eth-sig-util';

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

// const abi = [{"constant": false,"inputs": [{"name": "x","type": "uint256"}],"name": "set","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "get","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"}]
// const address = "0x8d5a940f25e980ef6f786e341a717f3b37302370";

const from = web3.eth.accounts[0];
const pr = Buffer.from("2a31423a345ea4e4e4f9cfc88d9f73171fca9e8941df494fb7493285a699c91d", 'hex');
const typedData = {
    types: {
        EIP712Domain: [
            { name: 'name', type: 'string' },
            { name: 'version', type: 'string' },
            { name: 'chainId', type: 'uint256' },
            { name: 'verifyingContract', type: 'address' },
        ],
        Person: [
            { name: 'name', type: 'string' },
            { name: 'wallet', type: 'address' }
        ],
        Mail: [
            { name: 'from', type: 'Person' },
            { name: 'to', type: 'Person' },
            { name: 'contents', type: 'string' }
        ],
    },
    primaryType: 'Mail',
    domain: {
        name: 'Ether Mail',
        version: '1',
        chainId: 1,
        verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
    },
    message: {
        from: {
            name: 'Cow',
            wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
        },
        to: {
            name: 'Bob',
            wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
        },
        contents: 'Hello, Bob!',
    },
  }
let msgParams = [
    {
      type: 'string',      // Any valid solidity type
      name: 'Message',     // Any string label you want
      value: 'Vote for '  // The value to sign
    }
  ];

let a = sigUtil.signTypedData(pr, {data: typedData});

console.log(a);
