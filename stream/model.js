const Sequelize = require ('sequelize')
const db = require ('../db')



const Gamehall = db.define('gamehall', {
    game: Sequelize.STRING,
})


module.exports = Gamehall