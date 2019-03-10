import jwt from "jsonwebtoken";

// 토큰 생성
export const generateToken = (payload, options) => {
  const { SECRET_KEY: secret } = process.env;
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      secret,
      {
        issuer: "inosurvey",
        expiresIn: "7d",
        ...options
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
};

// 토큰 검증
export const decode = token => {
  const { SECRET_KEY: secret } = process.env; 
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) reject(err);
      resolve(decoded);
    });
  });
};
