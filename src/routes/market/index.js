import Router           from 'koa-router';
import * as marketCtrl  from './market.ctrl';

const marketRouter = new Router();

marketRouter.post('/survey/add', marketCtrl.addSurveyMarket);
marketRouter.post('/survey/buy', marketCtrl.buySurvey);

export default marketRouter;