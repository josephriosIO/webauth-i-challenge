const express = require("express");
const helmet = require("helmet");

//bring in routes
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");
const usersRouter = require("./routes/users");

const server = express();

server.use(helmet());
server.use(express.json());

//routes
server.use("/api/login", loginRouter);
server.use("/api/register", registerRouter);
server.use("/api/users", usersRouter);

module.exports = server;
