import Router       from 'koa-router';
import test         from 'routes/test';
import userRouter   from 'routes/user';
import walletRouter from 'routes/wallet';
import surveyROuter from 'routes/survey';

const router = new Router();

router.use('/test', test.routes());
router.use('/user', userRouter.routes());
router.use('/wallet', walletRouter.routes());
router.use('/survey', surveyROuter.routes());

export default router;
