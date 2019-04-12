import { generate } from 'ethereum/wallet';

export const create = (ctx, next) => {
    const wallet = generate();
    
    ctx.status = 200;

    ctx.body = {
        'public_key' : wallet.getAddressString(),
        'private_key' : wallet.getPrivateKeyString()
    };
}