const Sequelize = require("sequelize");
const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:secret@localhost:/postgres";

const db = new Sequelize(databaseUrl);


module.exports = db;
