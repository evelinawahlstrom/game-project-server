const Sequelize = require("sequelize");
const db = require ('../db')


const Move = db.define("move", {
  user_id: {
    type: Sequelize.INTEGER
  },
  game_id: {
    type: Sequelize.INTEGER
  },
  row: {
    type: Sequelize.INTEGER(3)
  },
  column: {
    type: Sequelize.INTEGER(3)
  },
  piece_x: {
    type: Sequelize.STRING,
    value: "X"
  },
  piece_o: {
    type: Sequelize.STRING,
    value: "O"
  }
});
//put request unique includes user id (token -> todata)
//move belongs to user
//table updated turn -> user id

module.exports = Move;
