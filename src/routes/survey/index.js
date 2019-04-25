import Router           from 'koa-router';
import * as surveyCtrl  from './survey.ctrl';

const surveyRouter = new Router();

surveyRouter.post('/request', surveyCtrl.request);

export default surveyRouter;