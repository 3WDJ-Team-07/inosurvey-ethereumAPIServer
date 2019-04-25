import { web3, contract } from 'ethereum/ethereum';
import walletHelper from 'ethereumjs-wallet';
import { Wallet } from 'database/model';

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
                name: 'WALLET_NOT_FOUND'
            }
            return;
        }
        const result = await contract.methods.balanceOf(userWallet.public_key).call({from: userWallet.public_key});
        ctx.status = 200;
        ctx.body = {
            totalAmount: 0,
            currAmount: result
        };
    } catch (e) {
        ctx.throw(500, e);
    }
}


// export const userSurveyRequests = async (ctx, next) => {
//     const { id } = ctx.params;
//     try {
//         const wallet = await Wallet.findOne({
//             where: {
//                 user_id: id
//             }
//         });
        
//         if(!wallet) {
//             ctx.status = 404;
//             ctx.body = {
//                 name: 'WALLET_NOT_FOUND'
//             }
//             return;
//         }
//         const result = await contract.methods.getSurveyRequestReceiptList().call({from: wallet.public_key});
//         ctx.status = 200;
//         ctx.body = result;
//     } catch (e) {
//         ctx.throw(500, e);
//     }
// }
