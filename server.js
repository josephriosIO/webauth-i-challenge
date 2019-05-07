const express = require("express");
const helmet = require("helmet");
const session = require("express-session");

//bring in routes
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");
const usersRouter = require("./routes/users");

const server = express();

sessionConfig = {
  name: "coookkiieeee", // by default would be sid
  secret: "keep it a very long secret, please hide",
  cookie: {
    httpOnly: true, // true means prevent access from javascript
    maxAge: 1000 * 60 * 1, // in milliseconds
    secure: false //true means only send the cookie over https
  },
  resave: false, //
  saveUninitialized: true // make sure client makes sure to ask user to save cookies first
};

server.use(session(sessionConfig));
server.use(helmet());
server.use(express.json());

//routes
server.use("/api/login", loginRouter);
server.use("/api/register", registerRouter);
server.use("/api/users", usersRouter);

module.exports = server;
