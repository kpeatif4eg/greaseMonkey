const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req,res,next) => {
    if(req.method === 'OPTIONS'){
        return next();
    }
    try{
        const token = req.headers.authorization.split(' ')[1] //'Bearer token'

        const decoded = jwt.verify(token, config.get('secretJWTKey'));
        
        req.user = decoded;
        next()
        
    } catch(e) {
        console.log(e, 'middleware')
        return res.status(401).json({message: 'Нет авторизации. Вы будете перемещены на страницу логина'})
    }
}