// Requirements
const express = require("express");
const db = require('./db')
const Sse = require ('json-sse')
const cors = require ('cors')
const bodyParser = require('body-parser')
const userRouter = require ('./user/router')
const authRouter = require("./auth/router");
const Game = require ('./game/model')
const gameFactory = require ('./game/router')
const moveFactory = require ('./moves/router')


const app = express();
const stream = new Sse()
const port = process.env.PORT || 4000;

async function update () {
  const games = await Game.findAll()
    const data = JSON.stringify(games)
    stream.send(data)
}

const gameRouter = gameFactory(update)
const moveRouter = moveFactory(update)



//const User = require ('./user/model')
///const Game = require ('./game/model')

// middleware
const jsonMiddleware = bodyParser.json()
const corsMiddleware = cors()

// Registering
app
.use(corsMiddleware)
.use(jsonMiddleware)
.use(authRouter)
.use(userRouter)
.use(gameRouter)
.use(moveRouter)

app
.listen(port, () => console.log(`Example app listening on port ${port}!`));

// db - don't forget to put force: false, when finished with development
db
.sync({force: true})
.then(() => {
  console.log('Database schema has been updated.')
  const gameNames = ["Stockholm", "Amsterdam", "Casablanca"]
  const games = gameNames.map(gameName => Game.create({name: gameName}))
  return Promise.all(games)
  })
.catch(console.error)




