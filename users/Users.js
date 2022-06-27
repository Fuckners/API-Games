const sequelize = require('sequelize');
const connection = require('../database/database');

const Users = connection.define('users', {
    name: {
        type: sequelize.STRING,
        allowNull: false
    },

    email: {
        type: sequelize.STRING,
        allowNull: false
    },

    password: {
        type: sequelize.STRING,
        allowNull: false
    }
});

// Users.sync({ force: true })
//     .then(() => { console.log('Tabela "Users" criada com sucesso!'); })
//     .catch(erro => { console.log(erro); })

module.exports = Users