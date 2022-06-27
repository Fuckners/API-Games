const connection = require('../database/database')
const sequelize = require('sequelize')

const Games = connection.define('games', {
    title: {
        type: sequelize.STRING,
        allowNull: false
    },

    year: {
        type: sequelize.STRING(4),
        allowNull: false
    },

    price: {
        type: sequelize.FLOAT,
        allowNull: false
    }
})

// Games.sync({ force: true })
//     .then(() => { console.log('Tabela Games criada com sucesso'); })
//     .catch((erro) => { console.log(erro); })

module.exports = Games