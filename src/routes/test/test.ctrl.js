import { generate } from 'lib/token';

export const getToken = async (ctx, next) => {
    const token = await generate({ user: '@jeong' });
    ctx.cookies.set('access_token', token, {
        // domain: "inosurvey",
        httpOnly: true
    });
    ctx.body = ctx.cookies.get('access_token') ? 'good job' : 'fail';
};
