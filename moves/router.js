const { Router } = require("express");
const Move = require("./model");
const Game = require ('../game/model')
const User = require ('../user/model')


// gameFactory instead???
function moveFactory(update) {
  const router = new Router()

  router.post("/game", (req, res, next) => {
    console.log('whats in here', req.body)
    const piece_x = req.body.piece_x;
    const piece_o = req.body.piece_o;
    const row = req.body.row;
    const column = req.body.column;
    const user_id = req.body.user_id
    Move.create(
      {
        piece_o,
        piece_x,
        row,
        column,
        user_id,
      })
        .then(move => res.json(move))
        .catch(next) 
  });

  router.put('/game/:id', async (req, res, next) => {
    const {row, column, id} = req.body
    const move = await 
    Move.findOne( {
      where: {
        row,
        column,
        id
      }
    })
    if (move) {
      res.send("Not possible!")
    }
    else {
      // move
      // .create(req.body)
      // .then(game => {
      //   Game.update()
      // })

      const move = await Move.create(req.body)
      // do we need req.params (???)
      const game = await Game.findByPk(req.params.id)

      const { turn, first_player_id, second_player_id } = game

      const first = turn === first_player_id

      const next = first ? second_player_id : first_player_id

      await game.update({ turn: next })

      await update()

      res.send(move)
    }
    
  })

  return router
}

module.exports = moveFactory; 
