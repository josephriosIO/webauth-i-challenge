const server = require("express").Router();
const bcrypt = require("bcryptjs");
const loginDb = require("../data/helpers/loginModels");

server.post("/", async (req, res) => {
  try {
    let { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({
        msg: "username or password is missing please put both to sign in"
      });
    }
    const user = await loginDb.findBy({ username }).first();
    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.username = user.username;
      res.json({ msg: `thank you for logging in ${username}` });
    } else {
      res.status(400).json({ msg: "invaild creds" });
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = server;
