const { Router } = require('express')
const Game = require ('./model')
const authMiddleWare = require ('../auth/middleware')


function gameFactory (update) {
  const router = new Router()

  router.get('/games', (req, res, next) => {
    Games.findAll()
    .then(games => {
      res.send(games)
    })
    .catch(next)
  })
  
  router.post('/games', authMiddleWare, (req, res, next) => {
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

  router.get('/games', (req, res, next) => {
    Game.findByPk(req.params.gameId)
      .then(game => {
        res.send(game);
      })
      .catch(next);
  });

  // router.put('/game/:id', async (req, res, next) => {
  //   /// update game, where move has been done 
    
  // })

  return router 
}

module.exports = gameFactory; 