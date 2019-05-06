const bcrypt = require("bcryptjs");
const loginDb = require("../data/helpers/loginModels");

async function restricted(req, res, next) {
  try {
    const { username, password } = req.headers;
    if (!username || !password) {
      return res.status(400).json({
        msg: "username or password is missing please put both to sign in"
      });
    }

    if (username && password) {
      const user = await loginDb.findBy({ username }).first();
      if (user && (await bcrypt.compare(password, user.password))) {
        next();
      } else {
        res.status(401).json({ msg: "invalid creds" });
      }
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
}

module.exports = restricted;
