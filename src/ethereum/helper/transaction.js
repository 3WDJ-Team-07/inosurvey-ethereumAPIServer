import InoWeb3 from 'ethereum/inoWeb3';
import Tx from 'ethereumjs-tx';

const { 
    ETH_CONTRACT_ADDRESS : contractAddr
} = process.env;

const inoWeb3 = new InoWeb3();

export const signTx = async (privKey, payload) => {
    let { nonce, data } = payload;

    let txObj = {
        nonce: inoWeb3.utils.toHex(nonce),
        gasPrice: inoWeb3.utils.toHex(0),
        gasLimit: inoWeb3.utils.toHex(3000000),
        to: contractAddr,
        data
    };

    const tx = new Tx(txObj);

    tx.sign(privKey);
    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('hex');
    return raw;
}