import Router        from 'koa-router';
import * as testCtrl from './test.ctrl';

const test = new Router();

test.get('/test', testCtrl.test);

export default test;