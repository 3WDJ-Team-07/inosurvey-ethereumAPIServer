import { decode } from 'lib/token';

// 쿠키 방식 검증
export default async (ctx, next) => {
  // 쿠키에 저장된 토큰 가져오기
  const token = ctx.cookies.get('access_token');
  // 토큰이 없는 경우
  if (!token) {
    ctx.user = null;
    return next();
  }

  try {
    // 토큰 검증
    const decoded = await decode(token);
    const { user, exp } = decoded;

    ctx.user = user;
    ctx.tokenExpire = new Date(exp * 1000);
  } catch (e) {
    ctx.user = null;
  }
  return next();
};
