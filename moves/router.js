const { Router } = require("express");
const Move = require("./model");

const router = new Router();



router.post("/game", (req, res, next) => {
  console.log('whats in here', req.body)
  const piece_x = req.body.piece_x;
  const piece_o = req.body.piece_o;
  const row = req.body.row;
  const column = req.body.column;
  const user_id = req.body.user_id;
  const game_id = req.body.game_id;
  Move.create(
    {
      piece_o,
      piece_x,
      row,
      column,
      user_id,
      game_id
    })
      .then(move => res.json(move))
      .catch(next) 
  
});

module.exports = router;
