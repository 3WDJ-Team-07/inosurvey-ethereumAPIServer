import Router        from 'koa-router';
import * as testCtrl from 'routes/test/test.ctrl';
import needsAuth     from 'lib/middlewares/needsAuth';

const test = new Router();

test.get('/', testCtrl.test);

test.get('/authpage', needsAuth, (ctx, next) => {
    ctx.body = 'success';
});

test.get('/get', testCtrl.getToken);

export default test;
