import { decode } from "../token";

// 쿠키 방식 검증
export default async (ctx, next) => {
  const token = ctx.cookies.get("access_token");
  if(!token) {
    ctx.user = null;
    return next();
  }

  try {
    const decoded = await decode(token);
    const { user, exp } = decoded;

    ctx.user = user;
    ctx.tokenExpire = new Date(exp * 1000);
  } catch (e) {
    ctx.user = null;
  }
  return next();
};
