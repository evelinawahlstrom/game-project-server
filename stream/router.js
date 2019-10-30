const { Router } = require("express");
const Gamehall = require("./model");
const Sse = require("json-sse");
const router = new Router();
const stream = new Sse();

router.get("/stream", async (req, res) => {
  console.log("I got a request on /stream");
  //res.status(200)
  //res.send("The stream endpoint works!")
  const games = await Gamehall.findAll();
  //console.log("games in db:", games)
  // this above gives a lot of output in the console,
  // below we strungify
  const data = JSON.stringify(games);
  console.log("stringified games: ", data);
  stream.updateInit(data); // here I put the data in the stream
  stream.init(req, res); // this is important!!!, get rid of res.stat and res.send, for this to work --> stream will handle the connection instead
});


// async await function --> could have .then instead after
// Gamehall.create
router.post("/games", async (req, res) => {
  console.log("I got a request on /game", req.body);
  const { game } = req.body;
  // above destructuring, req.body.game to req.body
  // below, await that my chatroom is created
  const entity = await Gamehall.create({
    game
  });
  //res.status(201)
  //res.send("Thank you for your game")
  const games = await Gamehall.findAll();
  const data = JSON.stringify(games);
  console.log("stringified games: ", data);
  stream.send(data); /// Uppdate the stream
});

module.exports = router;
