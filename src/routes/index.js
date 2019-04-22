import Router       from 'koa-router';
import test         from 'routes/test';
import userRouter   from 'routes/user';

const router = new Router();

router.use('/test', test.routes());
router.use('/user', userRouter.routes());

export default router;
