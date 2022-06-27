const express = require('express');
const router = express.Router();
const Users = require('./Users');
const Auth = require('../Middlewares/Auth');
const jwt = require('jsonwebtoken');
const JWTSecret = require('../JWTSecret');
 
router.post('/auth', async (req, res) => {
    const {email, password} = req.body

    if (!email || !email.includes('@')) {
        res.status(400).json({ err: 'Email inválido ou ausente.' });
        return
    }

    if (!password) {
        res.status(400).json({ err: 'Senha ausente.' });
        return
    }

    try {
        const user = await Users.findOne({ where: { email } });
        if (!user) {
            res.status(404).json({ err: 'O email enviado não exite na base de dados.' });
        } else {
            if (user.password != password) {
                res.status(401).json({ err: 'Credenciais inválidas.' });
            } else {
                res.status(200);
                //                   payload              palavra chave    tempo para expirar      callback
                jwt.sign({ id: user.id, email: user.email}, JWTSecret, { expiresIn: '2 days' }, (erro, token) => {
                    if (erro) {
                        console.log(erro);
                        res.status(500).json({ err: 'Erro interno' });
                    } else if (token) {
                        res.status(200).json({ token })
                    }
                });
            }
        }

    } catch (error) {
        res.status(500).json({ err: 'Erro interno.' });
        console.log(error);
    }

});

module.exports = router;