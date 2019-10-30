// Requirements
const express = require("express");
const db = require('./db')
const bodyParser = require('body-parser')
const userRouter = require ('./user/router')
<<<<<<< HEAD
const gameRouter = require ('./game/router')
=======
>>>>>>> 717e8bc7bc4be1559921a27638198b433eafd4d1
const cors = require ('cors')


const app = express();
const port = process.env.PORT || 4000;

//const User = require ('./user/model')
<<<<<<< HEAD
///const Game = require ('./game/model')
=======
const Move = require('./moves/model')
>>>>>>> 717e8bc7bc4be1559921a27638198b433eafd4d1

// middleware
const jsonMiddleware = bodyParser.json()
const corsMiddleware = cors()

// Registering
app
.use(corsMiddleware)
.use(jsonMiddleware)
.use(userRouter)
<<<<<<< HEAD
.use(gameRouter)
=======
>>>>>>> 717e8bc7bc4be1559921a27638198b433eafd4d1
.use(authRouter)
.use(Move)

app
.listen(port, () => console.log(`Example app listening on port ${port}!`));

db
.sync({force: true})
.then(() => {
  console.log('Database schema has been updated.')})
.catch(console.error)

  