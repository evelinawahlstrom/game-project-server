const { Router } = require("express");
const Game = require("./model");
const authMiddleWare = require ('../auth/middleware')
/// const Move = require ('../move/router') ???

const router = new Router()

/// should this game req be in the stream/router.js file?

/// start a new game??
/// need the authMiddleWare here???
router.post('/game', authMiddleWare, (req, res, next) => {
    const newGame = {
      players: [{
         first_player_id: req.body.first_player_id, 
         second_player_id: req.body.second_player_id
      }],
      game_id: req.body.game_id, 
      game_status: req.body.game_status, 
      turn: req.body.turn  
    }
    console.log(newGame) 
    Game.create(newGame)
      .then((game) => {
        res.json(game)
      })
      .catch(next)
  })

  router.put('/game/:id', (req, res, next) => {
    const id = req.params.id
    const updatedGame = req.body 

    // Moves.findAll(), where gameID = ??
    .catch(next)
  })


//update the result, and each play: who is the winner? is it a tie?


module.exports = router; 