const sequelize = require('sequelize');

const connection = new sequelize('apigames', 'root', '@Banco_Dados', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;