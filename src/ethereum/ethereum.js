import Web3 from "web3";
import Abi from './SurveyCoreABI';

const { 
    ETH_HTTP_HOST           : host,
    ETH_HTTP_PORT           : http_port,
    ETH_WS_PORT             : ws_port,
    ETH_CONTRACT_ADDRESS    : addr
} = process.env;

const web3 = new Web3(new Web3.providers.HttpProvider(`http://${host}:${http_port}`));
web3.setProvider(new Web3.providers.WebsocketProvider(`ws://${host}:${ws_port}`))

const contract = new web3.eth.Contract(Abi.abi, addr);

export {web3, contract};
// web3.setProvider(new Web3.providers.WebsocketProvider('ws://localhost:7545'));
// export const web3 = new Web3(new Web3.providers.HttpProvider(`http://${host}:${port}`));
// export const contract = new web3.eth.Contract(Abi.abi, addr);
