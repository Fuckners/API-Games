const JWTSecret = require('../JWTSecret');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const authToken = req.headers.authorization;
    
    if (!authToken) {
        res.status(401).json({ erro: 'Um token é necessário para concluir a operação.' });
        
    } else {
        const [type, token] = authToken.split(' ');
        jwt.verify(token, JWTSecret, (erro, data) => {

            if (erro) {
                res.status(401).json({ erro: 'Token inválido' })

            } else {
                req.token = token
                req.loggedUser = { id: data.id, email: data.email }
                next();
            }
        })
    }
}

module.exports = auth;