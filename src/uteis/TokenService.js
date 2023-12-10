const jwt = require('jsonwebtoken');
const md5 = require('md5');
const dotenv = require('dotenv');

dotenv.config();

const SECRET_KEY = process.env.SECRET_TOKEN;

class TokenService{
    
    generate(token){
        const expireTime = 60 * 60 * 1000;
        return {
            type: 'bearer',
            token: jwt.sign({
                verify: md5('teste'),
                secure: token, 
            }, SECRET_KEY,{
                expiresIn: expireTime
            }),
            expireIn: expireTime
        }
    }

    verify(token){
        return jwt.verify(token, SECRET_KEY)
    }
}

module.exports = new TokenService;