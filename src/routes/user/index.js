import Router           from 'koa-router';
import * as userCtrl    from 'routes/user/user.ctrl';

const userRouter = new Router();

// userRouter.get('/wallet', walletRouter.routes());

export default userRouter;