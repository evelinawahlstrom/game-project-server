const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const db = require('./db')

app
.listen(port, () => console.log(`Example app listening on port ${port}!`));

db
.sync({ force: true })
.then(() => {
  console.log('Database schema has been updated.')})


  