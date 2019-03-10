import Router   from 'koa-router';
import test     from 'routes/test';

const router = new Router();

router.use('/test', test.routes());
export default router;