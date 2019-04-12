import Router       from 'koa-router';
import test         from 'routes/test';
import userRouter   from 'routes/user';
import walletRouter from 'routes/wallet';

const router = new Router();

router.use('/test', test.routes());
router.use('/user', userRouter.routes());
router.use('/wallet', walletRouter.routes());

export default router;
