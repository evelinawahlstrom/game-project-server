const { Router } = require("express");
const User = require("./model");
const bcrypt = require('bcryptjs');

const router = new Router();


router.post("/home", (req, res, next) => {
  console.log("A req on /home")
  const name = req.body.name
  const password = req.body.password
  if (!name || !password) {
      res.status(400).send({
          message: "Please supply a valid name and password"
      })   
  }else{
      User.create({
          name: name,
          password: bcrypt.hashSync(req.body.password, 10)
      })
      .then(user => {
          res.status(201)
          res.send({status:"OK"})
      } )
  }
})
module.exports = router;