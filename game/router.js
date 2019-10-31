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
    console.log("my id", req.user.id)
    const newGame = {
      players: [{
          first_player_id: req.user.id,
          second_player_id: null, 
      }],
      game_status: "New Game",
      turn: req.user.id 
    }
    console.log(newGame) 
    Game.create(newGame)
      .then((game) => {
        res.json(game)
      })
      .catch(next)
  })

  router.get('/games', (req, res, next) => {
    Game.findByPk(req.params.id)
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