exports.seed = function(knex) {
  return knex("steps").insert([
    { recipe_id: 1, step: 1, desc: "cook lentils until they're soft" },
    { recipe_id: 1, step: 2, desc: "add salt" },
    { recipe_id: 1, step: 3, desc: "add pepper" },
    { recipe_id: 1, step: 4, desc: "add lemon" },
    { recipe_id: 2, step: 1, desc: "cook chickpeas until soft" },
    { recipe_id: 2, step: 2, desc: "add salt" },
    { recipe_id: 2, step: 3, desc: "add pepper" },
    { recipe_id: 2, step: 4, desc: "add lemon" }
  ]);
};
