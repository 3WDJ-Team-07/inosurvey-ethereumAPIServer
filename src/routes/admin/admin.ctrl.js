import InoWeb3 from 'ethereum/inoWeb3';
import { signTx } from 'ethereum/helper/transaction';
import moment from 'moment';
import { 
    Form, 
    Donation, 
    Question,
    Wallet 
} from 'database/model';

const inoWeb3 = new InoWeb3();

export const contractSyncDB = async (ctx, next) => {
    try {
        const formList = await Form.findAll();

        // survey sync
        for(let i = 0 ; i < formList.length ; i++) {
            const userWallet    = await Wallet.findOne({ where: { user_id: formList[i].user_id } });
            const questionCount = await Question.count({ where: { form_id: formList[i].id } });
            const createdAt     = await moment(formList[i].created_at).unix();
            const nonce         = await inoWeb3.eth.getTransactionCount(userWallet.public_key);
            
            const raw = await signTx(Buffer.from(userWallet.private_key, 'hex'), {
                nonce: nonce,
                data: inoWeb3.inoContract.methods.requestSurvey(formList[i].respondent_number, createdAt, questionCount).encodeABI()
            });
            await inoWeb3.eth.sendSignedTransaction(raw);
        }
        
        const donationList = await Donation.findAll();
        // donation sync
        for(let i = 0; i < donationList.length ; i++) {
            const userWallet    = await Wallet.findOne({ where: { user_id: donationList[i].donator_id } });
            const closedAt      = await moment(donationList[i].closed_at).unix();
            const nonce         = await inoWeb3.eth.getTransactionCount(userWallet.public_key);
            
            const raw = await signTx(Buffer.from(userWallet.private_key, 'hex'), {
                nonce: nonce,
                data: inoWeb3.inoContract.methods.createFoundation(donationList[i].target_amount, closedAt).encodeABI()
            });
            await inoWeb3.eth.sendSignedTransaction(raw);
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
    try {
        const {
            user_id,
            amount
        } = ctx.query;
        
        const ownerWallet = await Wallet.findOne({
            where: {
                user_id: 1
            }
        });
        const userWallet = await Wallet.findOne({
            where: {
                user_id: user_id
            }
        });

        const nonce = await inoWeb3.eth.getTransactionCount(ownerWallet.public_key);
        const raw = await signTx(Buffer.from(ownerWallet.private_key, 'hex'), {
            nonce: nonce,
            data: inoWeb3.Contract.methods.faucet(userWallet.public_key, Number(amount)).encodeABI()
        });
        await inoWeb3.eth.sendSignedTransaction(raw);
        
        ctx.status = 200;
        ctx.body = {
            message: "true"
        };
    
    } catch (e) {
        ctx.throw('asd', e);
    }
}