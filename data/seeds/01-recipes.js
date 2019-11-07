exports.seed = function(knex) {
  return knex("recipes").insert([
    { recipe_name: "lentil soup" },
    { recipe_name: "chickpeas and chard" }
  ]);
};
