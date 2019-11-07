exports.seed = function(knex) {
  return knex("table_name").insert([
    { ingredient_id: 1, recipe_id: 1, qty: 1, measurements: "cup" },
    { ingredient_id: 4, recipe_id: 1, qty: 1, measurements: "pinch" },
    { ingredient_id: 5, recipe_id: 1, qty: 1, measurements: "pinch" },
    { ingredient_id: 6, recipe_id: 1, qty: 1, measurements: "whole" },
    { ingredient_id: 2, recipe_id: 2, qty: 1, measurements: "cup" },
    { ingredient_id: 3, recipe_id: 2, qty: 1, measurements: "bushel" },
    { ingredient_id: 4, recipe_id: 2, qty: 1, measurements: "pinch" },
    { ingredient_id: 5, recipe_id: 2, qty: 1, measurements: "pinch" },
    { ingredient_id: 6, recipe_id: 2, qty: 1, measurements: "whole" }
  ]);
};
