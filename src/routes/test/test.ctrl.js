import { generateToken } from 'lib/token';

export const test = async (ctx, next) => {
    ctx.body = ctx.user ? ctx.user : 'null';
};

export const getToken = async (ctx, next) => {
    const token = await generateToken({ user: 'jeong' });
    ctx.cookies.set('access_token', token, {
        httpOnly: true
    });
    ctx.body = 'ok';
};
