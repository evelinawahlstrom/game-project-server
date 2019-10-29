// Requirements
const express = require("express");
const db = require('./db')
const bodyParser = require('body-parser')
const userRouter = require ('./user/router')
const cors = require ('cors')
const app = express();
const port = process.env.PORT || 4000;
const authRouter = require("./auth/router");


//const User = require ('./user/model')

// middleware
const jsonMiddleware = bodyParser.json()
const corsMiddleware = cors()

// Registering
app
.use(corsMiddleware)
.use(jsonMiddleware)
.use(userRouter)
.use(authRouter)


app
.listen(port, () => console.log(`Example app listening on port ${port}!`));

db
.sync({force: true})
.then(() => {
  console.log('Database schema has been updated.')})
.catch(console.error)

  