import Router        from 'koa-router';
import * as modelCtrl from 'routes/test/model/model.ctrl';

const modelRouter = new Router();

modelRouter.get('/user', modelCtrl.modelUser);
modelRouter.get('/job', modelCtrl.modelJob);
modelRouter.get('/donation', modelCtrl.modelDonation);
modelRouter.get('/wallet', modelCtrl.modelWallet);
modelRouter.get('/topic', modelCtrl.modelTopic);
modelRouter.get('/target', modelCtrl.modelTarget);
modelRouter.get('/form', modelCtrl.modelForm);
modelRouter.get('/type', modelCtrl.modelType);
modelRouter.get('/question', modelCtrl.modelQuestion);
modelRouter.get('/questionitem', modelCtrl.modelQuestionItem);
modelRouter.get('/surveyuser', modelCtrl.modelSurveyUser);
modelRouter.get('/response', modelCtrl.modelResponse);
modelRouter.get('/itemresponse', modelCtrl.modelItemResponse);
modelRouter.get('/donationuser', modelCtrl.modelDomationUser);
modelRouter.get('/replyableuser', modelCtrl.modelReplyableUser);
modelRouter.get('/questionbank', modelCtrl.modelQuestionBank);

export default modelRouter;