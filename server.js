
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const connection = require('./database/database');
const gamesController = require('./games/GamesController');
const usersController = require('./users/UsersController');
const Games = require('./games/Games');
const Users = require('./users/Users');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(cors());

connection
    .authenticate()
        .then(() => { console.log('Conexão com o Database realizada com sucesso!') })
        .catch(erro => { console.log('Ocorreu um erro durante a conexão com o Database: ' + erro)})

// routers
app.use('/', gamesController);
app.use('/', usersController);

// iniciando servidor
app.listen(8080, () => {
    console.log('API Rodando!');
});