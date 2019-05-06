import { web3, contract } from 'ethereum/ethereum';
import { signTx } from 'ethereum/helper/transaction';

export const transfer = (addr, privKey) => {
    web3.eth.getTransactionCount(addr, (err, txCount) => {
        const raw = signTx(privKey, {
            nonce: txCount,
            data: contract.methods.balanceOf(addr).encodeABI()
        });

        web3.eth.sendSignedTransaction(raw);
    })
}

export const balanceOf = (addr) => {
    return contract.methods.balanceOf(addr).call();
}


