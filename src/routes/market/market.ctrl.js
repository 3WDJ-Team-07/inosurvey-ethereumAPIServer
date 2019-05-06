import { web3, contract } from 'ethereum/ethereum';
import { signTx } from 'ethereum/helper/transaction';
import { Wallet } from 'database/model';

export const addSurveyMarket = async (ctx, next) => {
    try {
        const {
            user_id,
            survey_id

        } = ctx.request.body;

        const userWallet = await Wallet.findOne({
            where: {
                user_id: user_id
            }
        });

        const price = 100;

        const nonce = await web3.eth.getTransactionCount(userWallet.public_key);
        const raw = await signTx(Buffer.from(userWallet.private_key, 'hex'), {
            nonce   : nonce,
            data    : contract.methods.addSurveyMarket(Number(survey_id), Number(price)).encodeABI()
        });

        const receipt = await web3.eth.sendSignedTransaction(raw);

        console.log(receipt);

        if(receipt.status) {
            ctx.status = 200;
            ctx.body = {
                message: "true"
            };
        }else {
            ctx.status = 401;
            ctx.body = {
                message: "false"
            }
        }
    }catch(e) {
        ctx.status = 401;
        ctx.body = {
            message: "false"
        };
    }
};

export const buySurvey = async (ctx, next) => {
    try {
        const {
            user_id,
            survey_id
        } = ctx.request.body;

        const userWallet = await Wallet.findOne({
            where: {
                user_id: user_id
            }
        });

        const nonce = await web3.eth.getTransactionCount(userWallet.public_key);
        const raw = await signTx(Buffer.from(userWallet.private_key, 'hex'), {
            nonce: nonce,
            data: contract.methods.buySurvey(Number(survey_id)).encodeABI()
        });
        const receipt = await web3.eth.sendSignedTransaction(raw);

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