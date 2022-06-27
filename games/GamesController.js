const express = require('express');
const router = express.Router();
const Games = require('./Games');
const Auth = require('../Middlewares/Auth')

router.get('/games', Auth, (req, res) => {
    Games.findAll()
        .then(games => {
            if (!games) {
                res.status(404).json({ err: 'Não há games cadastrados.' })
            } else {
                const HATEOS = [
                    {
                        href: 'http://localhost:8080/game',
                        method: 'POST',
                        ref: 'create_game'
                    }
                ]

                res.status(200).json({ games, _links: HATEOS });
            }
        });
});

router.get('/game/:id', Auth, (req, res) => {

    // validação
    if (isNaN(req.params.id)) {
        res.status(400).json({ err: 'ID inválido' });
    } else {
        const id = parseInt(req.params.id)
        parseInt(id)
        Games.findByPk(id)
        .then((game) => {
            if (!game) {
                res.status(404).json({ err: 'Game não encontrado' });
            } else {
                const HATEOS = [
                    {
                        href: 'http://localhost:8080/games',
                        method: 'GET',
                        ref: 'get_games'
                    },
                    {
                        href: 'http://localhost:8080/game/' + id,
                        method: 'DELETE',
                        ref: 'delete_game'
                    },
                    {
                        href: 'http://localhost:8080/game/' + id,
                        method: 'PUT',
                        ref: 'edit_game'
                    }
                ]
                res.status(200).json({ game, _links: HATEOS });
            }
        });
    }
});

router.post('/game', Auth, (req, res) => {
    const {title, year, price} = req.body;
    // validação
    if (!title) {
        res.status(400).json({ err: 'Título inválido ou ausente.' });
    } else if (+year < 1950 || +year > new Date().getFullYear() || isNaN(year) || !year) {
        res.status(400).json({ err: 'Ano de lançamento inválido ou ausente.' });
    } else if (+price < 0 || isNaN(price) || !price) {
        res.status(400).json({ err: 'Preço inválido ou ausente.' });
    }else {
        // adicionando dados
        Games.create({
            title,
            year,
            price
        })
            .then(() => {
                const HATEOS = [
                    {
                        href: 'http://localhost:8080/games',
                        method: 'GET',
                        ref: 'get_games'
                    },
                    {
                        href: 'http://localhost:8080/game',
                        method: 'POST',
                        ref: 'create_game'
                    }
                ]
                res.status(200).json({ _links: HATEOS });
                
            })
            .catch((erro) => {
                console.log(erro);
                res.status(500).json({ err: 'Erro interno.' });
            });
    }
});

router.delete('/game/:id', Auth, (req, res) => {
    if (isNaN(req.params.id)) {
        res.status(400).json({ err: 'ID inválido.' });
    } else {
        const id = req.params.id
        
        Games.destroy({
            where: { id }
        })
            .then(() => {
                const HATEOS = [
                    {
                        href: 'http://localhost:8080/games',
                        method: 'GET',
                        ref: 'get_games'
                    },
                    {
                        href: 'http://localhost:8080/game',
                        method: 'POST',
                        ref: 'create_game'
                    }
                ]

                res.status(200).json({ _links: HATEOS });
            })
            .catch((erro) => {
                console.log(erro);
                res.status(500).json({ err: 'Erro interno.' });
            });
    }
});

router.put('/game/:id', Auth, (req, res) => {

    // validação
    if (isNaN(req.params.id)) {
        res.status(400).json({ err: 'ID inválido.' });
    } else {
        const id = parseInt(req.params.id);
        parseInt(id);
        const {title, year, price} = req.body;

        if (year && (+year < 1950 || +year > new Date().getFullYear() || isNaN(year))) {
            res.status(400).json({ err: 'Ano de lançamento inválido.' });
            return
        }

        if (price && (+price < 0 || isNaN(price))) {
            res.status(400).json({ err: 'Preço inválido.' });
            return
        }
        
        Games.findByPk(id)
            .then(game => {
                if (!game) {
                    res.status(404).json({ err: 'Game não encontrado' });
                } else {

                    const HATEOS = [
                        {
                            href: 'http://localhost:8080/games',
                            method: 'GET',
                            ref: 'get_games'
                        },
                        {
                            href: 'http://localhost:8080/game/' + id,
                            method: 'GET',
                            ref: 'get_game'
                        },
                        {
                            href: 'http://localhost:8080/game',
                            method: 'POST',
                            ref: 'create_game'
                        }
                    ]

                    Games.update(
                        {
                           title: title ? title : game.title,
                           year: year ? year : game.year,
                           price: price ? price : game.price
                        },
                        { where: { id } }
                    )
                        .then(() => {
                            res.status(200).json({ _links: HATEOS });
                        })
                        .catch(erro => {
                            console.log(erro);
                            res.status(500).json({ err: 'Erro interno.' });
                        })
                }
            })
            .catch(erro => {
                console.log(erro);
                res.status(500).json({ err: 'Erro interno.' });
            })
        
    }
})

module.exports = router;