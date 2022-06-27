const express = require('express');
const router = express.Router();
const Games = require('./Games');
const Auth = require('../Middlewares/Auth')

router.get('/games', Auth, (req, res) => {
    Games.findAll()
        .then(games => {
            res.statusCode = 200;
            res.json(games);
        });
});

router.get('/game/:id', Auth, (req, res) => {

    // validação
    if (isNaN(req.params.id)) {
        res.status(400);
    } else {
        const id = parseInt(req.params.id)
        parseInt(id)
        Games.findByPk(id)
        .then((game) => {
            if (!game) {
                res.status(404);
            } else {
                res.status(200).json(game);
            }
        });
    }
});

router.post('/game', Auth, (req, res) => {
    const {title, year, price} = req.body;
    // validação
    if (!title) {
        res.status(400);
    } else if (year < 1950 || year > new Date().getFullYear() || isNaN(year) || !year) {
        res.status(400);
    } else if (price < 0 || isNaN(price) || !price) {
        res.status(400);
    }else {
        // adicionando dados
        Games.create({
            title,
            year,
            price
        })
            .then(() => {
                res.status(200);
            })
            .catch((erro) => {
                console.log(erro);
                res.status(500);
            });
    }
});

router.delete('/game/:id', Auth, (req, res) => {
    if (isNaN(req.params.id)) {
        res.status(400);
    } else {
        const id = req.params.id
        
        Games.destroy({
            where: { id }
        })
            .then(() => {
                res.status(200);
            })
            .catch((erro) => {
                console.log(erro);
                res.status(500);
            });
    }
});

router.put('/game/:id', Auth, (req, res) => {

    // validação
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        const id = parseInt(req.params.id)
        parseInt(id)
        const {title, year, price} = req.body;

        if (year) {
            if (year < 1950 || year > new Date().getFullYear() || isNaN(year)) {
                res.status(400);
                return
            }
        }

        if (price) {
            if (price < 0 || isNaN(price)) {
                res.status(400);
                return
            }
        }

        Games.findByPk(id)
            .then(game => {
                if (!game) {
                    res.status(404);
                } else {
                    Games.update(
                        {
                           title: title ? title : game.title,
                           year: year ? year : game.year,
                           price: price ? price : game.price
                        },
                        { where: { id } }
                    )
                        .then(() => {
                            res.status(200);
                        })
                        .catch(erro => {
                            console.log(erro);
                            res.status(500);
                        })
                }
            })
            .catch(erro => {
                console.log(erro);
                res.status(500);
            })
        
    }
})

module.exports = router;