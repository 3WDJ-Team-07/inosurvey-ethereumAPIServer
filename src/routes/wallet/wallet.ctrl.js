import InoWeb3 from 'ethereum/inoWeb3';
import walletHelper from 'ethereumjs-wallet';
import { Wallet } from 'database/model';

const inoWeb3 = new InoWeb3();
/**  
 * @url /:id/wallet/amount 
 * 
**/
export const createWallet = (ctx, next) => {
    const newWallet = walletHelper.generate();
    ctx.status = 200;
    ctx.body = {
        public_key: newWallet.getAddressString(),
        private_key: newWallet.getPrivateKeyString()
    }
}

/**  
 * @url /:id/wallet/amount 
 * 
**/
export const userAmount = async (ctx, next) => {
    const { user_id } = ctx.request.body;
    
    try {
        const userWallet = await Wallet.findOne({
            where: {
                user_id: user_id
            }
        });
        if(!userWallet) {
            ctx.status = 404;
            ctx.body = {
                message: "false",
                name: 'WALLET_NOT_FOUND'
            }
            return;
        }
        const currAmount = await inoWeb3.inoContract.methods.balanceOf(userWallet.public_key).call({from: userWallet.public_key});
        
        ctx.status = 200;
        ctx.body = {
            totalAmount: 0,
            currAmount: currAmount
        };
    } catch (e) {
        ctx.status = 401;
        ctx.body = {
            message: "false"
        };
    }
}

export const userReceipt = async (ctx, next) => {
    try {
        const { user_id } = ctx.request.body;
        const { range, method = undefined } = ctx.params;
        
        const userWallet = await Wallet.findOne({
            where: {
                user_id: user_id
            }
        });
        if(!userWallet) {
            ctx.status = 401;
            ctx.body = {
                message: "false"
            };
            return;
        }

        let receiptList;

        if(range == 'all') {
            receiptList = await inoWeb3.inoContract.methods.getOwnerReceiptList().call({from: userWallet.public_key});
        }else if(range == 'survey') {
            switch (method) {
                case 'request':
                    receiptList = await inoWeb3.inoContract.methods.getSurveyRequestReceiptList().call({from: userWallet.public_key});
                    break;
                case 'response':
                    receiptList = await inoWeb3.inoContract.methods.getSurveyResponseReceiptList().call({from: userWallet.public_key});
                    break;
                case 'buy': 
                    receiptList = await inoWeb3.inoContract.methods.getSurveyBuyReceiptList().call({from: userWallet.public_key});
                    break;
                case 'sell':
                    // reciptList = await contract.methods.getSurveySellReceiptList().call({from: userWallet.public_key});
                    break;   
                default:
                    ctx.status = 404;
                    ctx.body = {
                        message: "false"
                    }
                    break;
            }
        }else if(range == 'donation') {
            switch (method) {
                case 'request':
                    receiptList = await inoWeb3.inoContract.methods.getFoundationRequestReceiptList().call({from: userWallet.public_key});
                    break;
                case 'donate':
                    receiptList = await inoWeb3.inoContract.methods.getFoundationDonateReceiptList().call({from: userWallet.public_key});
                    break;
                default:
                    ctx.status = 404;
                    ctx.body = {
                        message: "false"
                    }
                    break;
            }
        }else {
            ctx.status = 401;
            ctx.body = {
                message: "false"
            };
        }

        // 날짜, 내역, 이노
        const resultList = receiptList.map(async (index) => {
            const receipt = await inoWeb3.inoContract.methods.getReceiptDetail(Number(index)).call({from: userWallet.public_key});  
            return {
                title: receipt[0],
                method: receipt[1],
                to: receipt[2],
                from: receipt[3],
                obj_id: receipt[4],
                value: receipt[5],
                date: receipt[6]
            }
        });

        ctx.status = 200;
        ctx.body = await Promise.all(resultList);
    } catch (e) {
        ctx.status = 404;
        ctx.body = {
            message: "false"
        }
    }
} 
