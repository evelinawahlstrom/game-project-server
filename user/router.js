const { Router } = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");

const router = new Router();

router.post("/", (req, res, next) => {
    console.log("what is req.body?", req.body)
  User.create({
    name: req.body.name,
    password: bcrypt.hashSync(req.body.password, 10) 
  })
    .then(() => res.status(201).send({ message: "User created succesfully" }))
    .catch(next);
});

module.exports = router;