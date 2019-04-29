import Router           from 'koa-router';
import * as surveyCtrl  from './survey.ctrl';

const surveyRouter = new Router();

surveyRouter.get('/:survey_id', surveyCtrl.detailSurvey);
surveyRouter.post('/request', surveyCtrl.requestSurvey);
surveyRouter.post('/response', surveyCtrl.responseSurvey);

export default surveyRouter;