import Router           from 'koa-router';
import * as adminCtrl   from './admin.ctrl';

const adminRouter = new Router();

adminRouter.get('/contract_sync', adminCtrl.contractSyncDB);

export default adminRouter;
