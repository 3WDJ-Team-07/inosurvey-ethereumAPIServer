import Router           from 'koa-router';
import * as userCtrl    from 'routes/user/user.ctrl';
import test             from 'routes/test';

const userRouter = new Router();

userRouter.get('/wallet', (ctx, next) => {
    ctx.body = 'success';
})

export default userRouter;