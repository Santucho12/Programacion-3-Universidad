const  dotenv = require('dotenv');
dotenv.config()
class Config {
    constructor(){
        //TODO: verificar que existean las constantes del .env
        this.secretWord = process.env.SECRET_WORD;
        this.expiresIn = process.env.EXPIRES_IN;
        this.loginPassword = process.env.LOGIN_PASSWORD;
    }
}
module.exports = new Config();