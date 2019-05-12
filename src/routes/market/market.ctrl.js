import InoWeb3 from 'ethereum/inoWeb3';
import { signTx } from 'ethereum/helper/transaction';
import { Wallet } from 'database/model';

const inoWeb3 = new InoWeb3();

export const addSurveyMarket = async (ctx, next) => {
    try {
        const {
            user_id,
            survey_id,
            price
        } = ctx.request.body;

        const userWallet = await Wallet.findOne({
            where: {
                user_id: user_id
            }
        });

        const nonce = await inoWeb3.eth.getTransactionCount(userWallet.public_key);
        const raw = await signTx(Buffer.from(userWallet.private_key, 'hex'), {
            nonce   : nonce,
            data    : inoWeb3.inoContract.methods.addSurveyMarket(Number(survey_id), Number(price)).encodeABI()
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

        const nonce = await inoWeb3.eth.getTransactionCount(userWallet.public_key);
        const raw = await signTx(Buffer.from(userWallet.private_key, 'hex'), {
            nonce: nonce,
            data: inoWeb3.inoContract.methods.buySurvey(Number(survey_id)).encodeABI()
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
        ctx.status = 402;
        ctx.body = {
            message: "false"
        };
    }
}

export const isBuySurvey = async (ctx, next) => {
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

        const result = await inoWeb3.inoContract.methods.isSurveyToBuyer(Number(survey_id), userWallet.public_key).call();
        
        ctx.status = 200;
        ctx.body = {
            isBuy: result ? "true" : "false"
        }
    }catch(e) {
        ctx.status = 402;
        ctx.body = {
            message: "false"
        };
    }
} 