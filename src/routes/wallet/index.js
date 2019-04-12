import Router           from 'koa-router';
import * as walletCtrl  from 'routes/wallet/wallet.ctrl';

const walletRouter = new Router();

walletRouter.get('/create', walletCtrl.create);

export default walletRouter;