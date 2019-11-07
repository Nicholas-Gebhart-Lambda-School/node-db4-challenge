const db = require("../data/db-config");

const find = () => {
  return db.select("*").from("recipes");
};

module.exports = {
  find
};
