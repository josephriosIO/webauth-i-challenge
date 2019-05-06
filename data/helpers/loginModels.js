const db = require("../dbConfig.js");

module.exports = {
  findBy
};

function findBy(user) {
  return db("users").where(user);
}
