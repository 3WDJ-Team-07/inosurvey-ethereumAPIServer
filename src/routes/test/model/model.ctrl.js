import { 
    User,
    Job,
    Donation,
    Wallet,
    Topic,
    Target,
    Form,
    Type,
    Question,
    QuestionItem,
    SurveyUser,
    Response,
    ItemResponse,
    DonationUser,
    ReplyableUser,
    QuestionBank
} from 'database/model';

export const modelUser = async (ctx, next) => {
    const user = await User.findOne({
        where: {
            id: 3
        }
    });
    ctx.body = user;
};

export const modelJob = async (ctx, next) => {
    const job = await Job.findOne({
        where: {id: 1}
    });
    ctx.body = job;
};

export const modelDonation = async (ctx, next) => {
    const donation = await Donation.findOne({
        where: {id: 2}
    });
    ctx.body = donation;
};

export const modelWallet = async (ctx, next) => {
    const wallet = await Wallet.findOne({
        where: {user_id: 3}
    });
    ctx.body = wallet;
};

export const modelTopic = async (ctx, next) => {
    const topic = await Topic.findOne({
        where: {id: 1}
    });
    ctx.body = topic;
};

export const modelTarget = async (ctx, next) => {
    const target = await Target.findOne({
        where: {job_id: 8}
    });
    ctx.body = target;
};

export const modelForm = async (ctx, next) => {
    const form = await Form.findOne({
        where: {id: 1}
    });
    ctx.body = form;
};

export const modelType = async (ctx, next) => {
    const type = await Type.findOne({
        where: {id: 1}
    });
    ctx.body = type;
};

export const modelQuestion = async (ctx, next) => {
    const question = await Question.findOne({
        where: {id: 1}
    });
    ctx.body = question;
};

export const modelQuestionItem = async (ctx, next) => {
    const questionItem = await QuestionItem.findOne({
        where: {id: 1}
    });
    ctx.body = questionItem;
};

export const modelSurveyUser = async (ctx, next) => {
    const surveyUser = await SurveyUser.findAll({
        where: {survey_id: 10}
    });
    ctx.body = surveyUser;
};

export const modelResponse = async (ctx, next) => {
    const response = await Response.findAll({
        where: {question_id: 5}
    });
    ctx.body = response;
};

export const modelItemResponse = async (ctx, next) => {
    const itemResponse = await ItemResponse.findAll({
        where: {response_id: 1}
    });
    ctx.body = itemResponse;
};

export const modelDomationUser = async (ctx, next) => {
    const donationUser = await DonationUser.findAll({
        where: {sponsors_id: 6}
    });
    ctx.body = donationUser;
};

export const modelReplyableUser = async (ctx, next) => {
    const replyableUser = await ReplyableUser.findAll({
        where: {survey_id: 9}
    });
    ctx.body = replyableUser;
};
export const modelQuestionBank = async (ctx, next) => {
    const questionBank = await QuestionBank.findAll({
        where: {id: 51}
    });
    ctx.body = questionBank;
}