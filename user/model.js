const Sequelize = require('sequelize')
const db = require('../db')


const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    // makes sure the email is unique
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    /// below, allowNull determines that the field must be 
    //  populated with a password, same goes for email
    allowNull: false
  },
})

module.exports = User; 