import Web3 from "web3";
import Abi from './SurveyCoreABI';

const { 
    ETH_HTTP_HOST : host,
    ETH_HTTP_PORT : port,
    ETH_CONTRACT_ADDRESS : addr
} = process.env;

// export default class Ethereum {
//     web3;
//     contract;
    
//     constructor() {
//         this.web3 = new Web3(new Web3.providers.HttpProvider(`http://${host}:${port}`));
//         this.contract = new this.web3.eth.Contract(abi, addr);
//     }

//     test() {
//         console.log("ggggg"); 
//     }
// }

export const web3 = new Web3(new Web3.providers.HttpProvider(`http://${host}:${port}`));
export const contract = new web3.eth.Contract(Abi.abi, addr);
