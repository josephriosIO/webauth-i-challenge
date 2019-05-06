const server = require("express").Router();
const userDb = require("../data/helpers/usersModel");
const restricted = require("../auth/restricted-middleware");

server.get("/", restricted, async (req, res) => {
  try {
    const getUsers = await userDb.get();
    res.json(getUsers);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = server;
