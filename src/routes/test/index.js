import Router        from 'koa-router';
import modelRouter   from 'routes/test/model'; 
import * as testCtrl from 'routes/test/test.ctrl';
import needsAuth     from 'lib/middlewares/needsAuth';
import { web3 }      from 'ethereum/ethereum';
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

test.get('/ethereum', (ctx, next) => {
    web3.eth.getBlock('latest').then(block => console.log(block));
})
test.post('/bodyparsor', testCtrl.testBodyParsor);
export default test;

