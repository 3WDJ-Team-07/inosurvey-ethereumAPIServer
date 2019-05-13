import Router        from 'koa-router';
import modelRouter   from 'routes/test/model'; 
import * as testCtrl from 'routes/test/test.ctrl';
import needsAuth     from 'lib/middlewares/needsAuth';

const test = new Router();

test.use('/model', modelRouter.routes());

test.get('/authpage', needsAuth, (ctx, next) => {
    ctx.body = 'success';
});

test.get('/asd', (ctx, next) => {
    ctx.status = 200;
    ctx.body = {
        user : 'jeong'
    };
});

test.get('/get', testCtrl.getToken);

test.post('/bodyparsor', testCtrl.testBodyParsor);
export default test;

