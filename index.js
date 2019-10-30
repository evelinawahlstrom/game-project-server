// Requirements
const express = require("express");
const db = require('./db')
const bodyParser = require('body-parser')
const userRouter = require ('./user/router')
///const gameRouter = require ('./game/router')
const cors = require ('cors')
const authRouter = require("./auth/router");
const streamRouter = require('./stream/router')


const app = express();
const port = process.env.PORT || 4000;



//const User = require ('./user/model')
const Game = require ('./game/model')

// middleware
const jsonMiddleware = bodyParser.json()
const corsMiddleware = cors()

// Registering
app
.use(corsMiddleware)
.use(jsonMiddleware)
.use(streamRouter)
.use(userRouter)
.use(Game)
.use(authRouter)


app
.listen(port, () => console.log(`Example app listening on port ${port}!`));

// db - don't forget to put force: false, when finished with development
db
.sync({force: true})
.then(() => {
  console.log('Database schema has been updated.')})
.catch(console.error)

  