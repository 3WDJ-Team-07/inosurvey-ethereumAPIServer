import Koa from 'koa';
import logger from 'koa-logger';
import router from 'routes';
import serverless from 'serverless-http';
import cors from 'lib/middlewares/cors';
import authToken from 'lib/middlewares/authToken';
import db from 'database/db';
import { associate } from 'database/sync';

export default class Server {
    app; // koa instance

    constructor() {
        associate();
        this.app = new Koa();
        this.middleware();
        this.initializeDb();
    }

    // db init and connection
    initializeDb() {
        db.authenticate().then(
            () => {
                console.log('DB Connection has been established');
            },
            err => {
                console.error('Unable to connect to the DB:', err);
            }
        );
    }

    // db ensure testing
    ensureDb() {
        return new Promise((resolve, reject) => {
            let counter = 0;
            const tryConnect = async () => {
                try {
                    await db.authenticate();
                    resolve();
                } catch (e) {
                    counter++;
                    console.log(`db connection failed ${counter}`);
                    if (counter > 5) {
                        reject(new Error('Failed after 5 retries'));
                        return;
                    }
                    setTimeout(tryConnect, 10);
                }
            };
            tryConnect();
        });
    }

    // middleware init
    middleware() {
        const { app } = this;
        app.use(logger());
        app.use(cors);
        app.use(async (ctx, next) => {
            try {
                await this.ensureDb();
                return next();
            } catch (e) {
                ctx.throw(e);
            }
        });
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
