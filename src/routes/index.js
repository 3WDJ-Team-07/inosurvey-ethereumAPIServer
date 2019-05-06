import Router           from 'koa-router';
import test             from 'routes/test';
import adminRouter      from 'routes/admin';            
import userRouter       from 'routes/user';
import walletRouter     from 'routes/wallet';
import surveyRouter     from 'routes/survey';
import foundationRouter from 'routes/foundation';
import marketRouter     from 'routes/market';

const router = new Router();

router.use('/test', test.routes());
router.use('/admin', adminRouter.routes());
router.use('/user', userRouter.routes());
router.use('/wallet', walletRouter.routes());
router.use('/survey', surveyRouter.routes());
router.use('/foundation', foundationRouter.routes());
router.use('/market', marketRouter.routes());

export default router;
