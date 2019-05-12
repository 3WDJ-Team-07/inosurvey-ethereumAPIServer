import InoWeb3 from 'ethereum/inoWeb3';
import { signTx } from 'ethereum/helper/transaction';
import { Wallet } from 'database/model';

const inoWeb3 = new InoWeb3();
export const createFoundation = async (ctx, next) => {
    try {
        const {
            user_id,
            maximumAmount,
            closedAt
        } = ctx.request.body;

        const userWallet = await Wallet.findOne({
            where: {
                user_id: user_id
            }
        });

        const nonce = await inoWeb3.eth.getTransactionCount(userWallet.public_key);
        const raw = await signTx(Buffer.from(userWallet.private_key, 'hex'), {
            nonce: nonce,
            data: inoWeb3.inoContract.methods.createFoundation(Number(maximumAmount), Number(closedAt)).encodeABI()
        });
        const receipt = await inoWeb3.eth.sendSignedTransaction(raw);

        if(receipt.status) {
            ctx.status = 200;
            ctx.body = {
                message: "true"
            };
        }else {
            ctx.status = 401;
            ctx.body = {
                message: "false"
            };
        }
    } catch (e) {
        ctx.throw("asd", e);
    }
}

export const donateFoundation = async (ctx, next) => {
    try {
        const {
            user_id,
            donation_id,
            ino
        } = ctx.request.body;
        
        const userWallet = await Wallet.findOne({
            where: {
                user_id: user_id
            }
        });
        const nonce = await inoWeb3.eth.getTransactionCount(userWallet.public_key);
        const raw = await signTx(Buffer.from(userWallet.private_key, 'hex'), {
            nonce: nonce,
            data: inoWeb3.inoContract.methods.donation(Number(donation_id), Number(ino)).encodeABI()
        });
        const receipt = await inoWeb3.eth.sendSignedTransaction(raw);
        if(receipt.status) {
            ctx.status = 200;
            ctx.body = {
                message: "true"
            };
        }else {
            ctx.status = 401;
            ctx.body = {
                message: "false"
            };
        }
    } catch(e) {
        ctx.throw("asd", e);
    }
}