import Koa        from 'koa';
import logger     from 'koa-logger';
import router     from 'routes';
import serverless from 'serverless-http';
import cors       from 'lib/middlewares/cors';
import authToken  from 'lib/middlewares/authToken';

export default class Server {
    app;

    constructor() {
        this.app = new Koa();
        this.middleware();
    }

    // middleware init
    middleware() {
        const { app } = this;
        app.use(logger());
        app.use(cors);
        app.use(authToken);
        app.use(router.routes()).use(router.allowedMethods());
    }

    // server start
    listen(port) {
        const { app } = this;
        app.listen(port);
        console.log(`Listening to port : ${port}`);
    }

    // serverless handler
    serverless() {
        const { app } = this;
        return serverless(app);
    }
}
