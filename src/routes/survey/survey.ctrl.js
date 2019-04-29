import { web3, contract } from 'ethereum/ethereum';
import { signTx } from 'ethereum/helper/transaction';
import { Wallet } from 'database/model';

export const detailSurvey = async (ctx, next) => {
    try {
        const { survey_id } = ctx.params;

        const result = await contract.methods.getSurveyRequestDetail(Number(survey_id)).call();
        
        ctx.status = 200;
        ctx.body = {
            requestPrice: result[0],
            sellPrice: result[1],
            rewardPrice: result[2],
            maximumCount: result[3],
            currentCount: result[4],
            startedAt: result[5],
            questionCount: result[6],
            isSell: result[7]
        };
    } catch(e) {
        ctx.throw("NOT ALLOW", e);
    }
} 
export const requestSurvey = async (ctx, next) => {
    try {
        const { 
            user_id,
            maximumCount,
            questionCount,
            startedAt
        } = ctx.request.body;

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

export const requestSurveyList = async (ctx, next) => {
    try {
        const {
            user_id
        } = ctx.request.body;

        const userWallet = await Wallet.findOne({
            where: {
                user_id: user_id
            }
        });

        const nonce = await web3.eth.getTransactionCount(userWallet.public_key);
        const raw = await signTx(Buffer.from(userWallet.private_key, 'hex'), {
            nonce: nonce,
            data: contract.methods.getSurveyRequestList().encodeABI()
        });
        const receipt = await web3.eth.sendSignedTransaction(raw);
        ctx.body = receipt;
    } catch (e) {
        
    }
}

export const responseSurvey = async (ctx, next) => {
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
            data: contract.methods.responseSurvey(Number(survey_id)).encodeABI()
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
        ctx.throw("NOT ALLOW", e);
    }
}

export const survey = async (ctx, next) => {
    
}