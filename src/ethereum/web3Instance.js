import Web3 from "web3";

const { 
    ETH_HTTP_HOST : host,
    ETH_HTTP_PORT : port
 } = process.env;

export default class Web3Instance {
    static web3Instance;

    constructor() {
        if(web3Instance) return web3Instance;
        initalWeb3();
    }

    initialWeb3() {
        this.web3 = new Web3(new Web3.providers.HttpProvider(`http://${host}:${port}`));
    }

}