import Web3 from "web3";
import Abi from './SurveyCoreABI';

const { 
    ETH_HTTP_HOST           : host,
    ETH_HTTP_PORT           : http_port,
    ETH_WS_PORT             : ws_port,
    ETH_CONTRACT_ADDRESS    : addr
} = process.env;

export default class InoWeb3 extends Web3 {
    static instance;
    inoContract;

    constructor() {
        super(new Web3.providers.HttpProvider(`http://${host}:${http_port}`));
        this.setProvider(new Web3.providers.WebsocketProvider(`ws://${host}:${ws_port}`));
        this.inoContract = new this.eth.Contract(Abi.abi, addr);
    }
}