import { config } from "dotenv";
import  jwt  from "jsonwebtoken";

config();

const { sign, verify } = jwt;
const SECRET_KEY = process.env.SECRET_KEY || 'Key007';
const TOKEN_EXPIRATION = '1h';
const AUTH_HEADER = 'Authorization';


function createToken(user) {
    try {
        const token = sign(
            {
                emailAdd: user.emailAdd,
                userPwd: user.userPwd
            },
            SECRET_KEY,
            {
                expiresIn: TOKEN_EXPIRATION
            }
        );
        return token;
    }catch (error) {
        throw new Error(`Token creation failed: ${error.message}`);
    }
}

function verifyToken(req, res, next) {
    try {
        const token = req?.headers[AUTH_HEADER];

        if (token) {
            verify(token, SECRET_KEY);
            next();
        } else {
            res?.json({
                status: res.statusCode,
                msg: 'Please provide the correct credentials',
            });
        }
    } catch (error) {
        res?.json({
            status: res.statusCode,
            msg: 'Token verification failed. Please login.',
        });
    }
}

function decodingToken (req, res, next) {

    const token = req.header [AUTH_HEADER] || req.cookies.thisUser;
    if (!token) {
      return res.status(401).json({
        msg: "Access denied. Token not provided",
      });
    }
    const dec = jwt.verifyToken(token, SECRET_KEY);
    if (!dec) {
      return res.status(403).json({
        msg: "Invalid token",
      });
    }
    req.dec = dec;
    next();
  };

export {
    createToken,
    verifyToken,
    decodingToken,
};

