import { generate } from 'lib/token';
import { User } from 'database/model';

export const test = async (ctx, next) => {
    const {id, password} = await User.findOne({
        where: {id: `asd`}
    });
    ctx.body = ctx.user ? ctx.user : 'Noop!';
};

export const getToken = async (ctx, next) => {
    const token = await generate({ user: '@jeong' });
    ctx.cookies.set('access_token', token, {
        // domain: "inosurvey",
        httpOnly: true
    });
    ctx.body = ctx.cookies.get('access_token') ? 'good job' : 'fail';
};
