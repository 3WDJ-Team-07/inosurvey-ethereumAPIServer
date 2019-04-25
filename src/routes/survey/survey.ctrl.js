import { web3, contract } from 'ethereum/ethereum';
import { signTx } from 'ethereum/helper/transaction';
import { Wallet } from 'database/model';

export const request = async (ctx, next) => {
    try {
        const { 
            user_id,
            maximumCount,
            questionCount,
            startedAt
        } = ctx.request.body;
        console.log(user_id);
        const userWallet = await Wallet.findOne({
            where: {
                user_id: user_id
            }
        });
        const nonce = await web3.eth.getTransactionCount(userWallet.public_key);
        const raw = await signTx(Buffer.from(userWallet.private_key, 'hex'), {
            nonce: nonce,
            data: contract.methods.requestSurvey(Number(maximumCount), Number(startedAt), Number(questionCount)).encodeABI()
        });
        const receipt = await web3.eth.sendSignedTransaction(raw)
        
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
            ctx.status = 401;
            ctx.body = {
                message: "false"
            };
    }
}