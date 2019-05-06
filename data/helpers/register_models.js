const db = require("../dbConfig.js");

module.exports = {
  insert
};

async function insert(user) {
  const [id] = await db("users").insert(user);

  return findById(id);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
