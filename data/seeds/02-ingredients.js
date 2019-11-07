exports.seed = function(knex) {
  return knex("ingredients").insert([
    { ingredient_name: "lentils" },
    { ingredient_name: "chickpeas" },
    { ingredient_name: "chard" },
    { ingredient_name: "salt" },
    { ingredient_name: "pepper" },
    { ingredient_name: "lemon" }
  ]);
};
