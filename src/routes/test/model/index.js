import Router        from 'koa-router';
import * as modelCtrl from 'routes/test/model/model.ctrl';

const modelRouter = new Router();

modelRouter.get('/user', modelCtrl.modelUser);
modelRouter.get('/job', modelCtrl.modelJob);
modelRouter.get('/donation', modelCtrl.modelDonation);
modelRouter.get('/wallet', modelCtrl.modelWallet);
modelRouter.get('/topic', modelCtrl.modelTopic);
modelRouter.get('/target', modelCtrl.modelTarget);

export default modelRouter;