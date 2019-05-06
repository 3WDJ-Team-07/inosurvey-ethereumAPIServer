import Router           from 'koa-router';
import * as foundationCtrl  from './foundation.ctrl';

const foundationRouter = new Router();

foundationRouter.post('/create', foundationCtrl.createFoundation);
foundationRouter.post('/donate', foundationCtrl.donateFoundation);

export default foundationRouter;
