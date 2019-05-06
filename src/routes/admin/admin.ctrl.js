import moment from 'moment';
import { web3, contract } from 'ethereum/ethereum';
import { signTx } from 'ethereum/helper/transaction';
import { Form, Donation, Question, Wallet } from 'database/model';

export const contractSyncDB = async (ctx, next) => {
    try {
        const formList = await Form.findAll();

        // survey sync
        for(let i = 0 ; i < formList.length ; i++) {
            const userWallet    = await Wallet.findOne({ where: { user_id: formList[i].user_id } });
            const questionCount = await Question.count({ where: { form_id: formList[i].id } });
            const startedAt     = await moment(formList[i].started_at).unix();
            const nonce = await web3.eth.getTransactionCount(userWallet.public_key);
            const raw = await signTx(Buffer.from(userWallet.private_key, 'hex'), {
                nonce: nonce,
                data: contract.methods.requestSurvey(formList[i].respondent_number, startedAt, questionCount).encodeABI()
            });
            await web3.eth.sendSignedTransaction(raw);
        }
        
        const donationList = await Donation.findAll();
        // donation sync
        for(let i = 0; i < donationList.length ; i++) {
            const userWallet    = await Wallet.findOne({ where: { user_id: donationList[i].donator_id } });
            const closedAt     = await moment(donationList[i].closed_at).unix();

            const nonce = await web3.eth.getTransactionCount(userWallet.public_key);
            const raw = await signTx(Buffer.from(userWallet.private_key, 'hex'), {
                nonce: nonce,
                data: contract.methods.createFoundation(donationList[i].target_amount, closedAt).encodeABI()
            });
            await web3.eth.sendSignedTransaction(raw);
        }

        ctx.status = 200;
        ctx.body = {
            message: "true"
        };
    } catch (e) {
        ctx.throw('asd', e);
    }
}

export const faucet = async (ctx, next) => {
    
}