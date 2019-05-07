const server = require("express").Router();
const bcrypt = require("bcryptjs");

const registerDb = require("../data/helpers/register_models");

server.post("/", async (req, res) => {
  let user = req.body;
  if (!user.password) {
    return res.status(400).json({ msg: "please enter password" });
  }
  try {
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    const registerUser = await registerDb.insert(user);
    res.status(201).json(registerUser);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = server;
