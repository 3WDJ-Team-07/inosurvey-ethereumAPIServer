import Router   from 'koa-router';
import test     from './test';

const router = new Router();

router.use('/api', test.routes());

export default router;