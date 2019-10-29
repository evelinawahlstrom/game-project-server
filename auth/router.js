const { Router } = require("express");
const { toJWT } = require("./jwt");
const bcrypt = require("bcryptjs");
const User = require("../user/model");
const authMiddleWare = require("./middleware");
const router = new Router();

router.post("/home", authMiddleWare, (req, res) => {
  if (!req.body.name || !req.body.password) {
    return res
      .status(400)
      .send({ message: "Please give me some credentials, stranger" });
  }
  User.findOne({
    where: {
      name: req.body.name
    }
  })
    .then(user => {
      if (!user) {
        res.status(400).send({
          message: "Name or password incorrect, sorry"
        });
      } else if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          jwt: toJWT({ userId: user.id })
        });
      } else {
        res.status(400).send({
          message: "Name or password incorrect, sorry"
        });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send({
        message: "Something went wrong"
      });
    });
});

module.exports = router;
