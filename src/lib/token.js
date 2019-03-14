import jwt from 'jsonwebtoken';

const { SECRET_KEY: secret } = process.env;

// 토큰 생성
export const generate = (payload, options) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            secret,
            {
                issuer: 'inosurvey',
                expiresIn: '7d',
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
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) reject(err);
            resolve(decoded);
        });
    });
};
