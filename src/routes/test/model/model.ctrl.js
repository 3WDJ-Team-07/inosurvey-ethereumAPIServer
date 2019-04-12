import { 
    User,
    Job,
    Donation,
    Wallet,
    Topic,
    Target
} from 'database/model';

export const modelUser = async (ctx, next) => {
    const {user_id, password} = await User.findOne({
        where: {id: 1}
    });
    ctx.body = `${user_id}, ${password}`;
};

export const modelJob = async (ctx, next) => {
    const {id, name} = await Job.findOne({
        where: {id: 1}
    });
    ctx.body = `${id}, ${name}`;
};

export const modelDonation = async (ctx, next) => {
    const donation = await Donation.findOne({
        where: {id: 1}
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