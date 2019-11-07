exports.seed = function(knex) {
  return knex("ingredients").insert([
    { name: "lentils" },
    { name: "chickpeas" },
    { name: "chard" },
    { name: "salt" },
    { name: "pepper" },
    { name: "lemon" }
  ]);
};
