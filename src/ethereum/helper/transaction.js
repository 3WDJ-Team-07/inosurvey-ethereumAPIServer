import { web3 } from '../ethereum';
import Tx from 'ethereumjs-tx';

const { 
    ETH_CONTRACT_ADDRESS : contractAddr
} = process.env;

export const signTx = async (privKey, payload) => {
    let { nonce, data } = payload;

    let txObj = {
        nonce: web3.utils.toHex(nonce),
        gasPrice: web3.utils.toHex(0),
        gasLimit: web3.utils.toHex(3000000),
        to: contractAddr,
        data
    };

    const tx = new Tx(txObj);

    tx.sign(privKey);
    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('hex');
    return raw;
}