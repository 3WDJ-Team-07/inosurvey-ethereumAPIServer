import wallet from 'ethereumjs-wallet';

export const generate = () => {
    return wallet.generate();
}