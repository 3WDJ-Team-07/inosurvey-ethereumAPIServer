import Router           from 'koa-router';
import * as walletCtrl  from './wallet.ctrl';

const walletRouter = new Router();

walletRouter.get('/create', walletCtrl.createWallet);
walletRouter.post('/amount', walletCtrl.userAmount);
// walletRouter.get('/:id/surveyRequests', walletCtrl.userSurveyRequests);

export default walletRouter;