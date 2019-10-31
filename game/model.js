const Sequelize = require('sequelize')
const db = require('../db')


const Game = db.define("game", {
  gameNames: {
    type: Sequelize.STRING
  },
  first_player_id: {
    type: Sequelize.INTEGER
  },
  second_player_id: {
    type: Sequelize.INTEGER
  },
  game_status: {
    type: Sequelize.STRING
  },
  turn: {
    type: Sequelize.INTEGER
  },
  game_id: {
    type: Sequelize.INTEGER
  }
})

module.exports = Game; 