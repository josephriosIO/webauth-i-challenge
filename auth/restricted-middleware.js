const bcrypt = require("bcryptjs");
const loginDb = require("../data/helpers/loginModels");

async function restricted(req, res, next) {
  try {
    if (!req.session.username) {
      return res.status(400).json({
        msg: "please sign in to look up users"
      });
    }

    if (req.session.username && req.session) {
      next();
    } else {
      res.status(401).json({ msg: "invalid creds" });
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
}

module.exports = restricted;
