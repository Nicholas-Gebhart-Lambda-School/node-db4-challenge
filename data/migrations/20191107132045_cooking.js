exports.up = function(knex) {
  return knex.schema.createTable("cooking", tbl => {
    tbl.increments();
    tbl
      .integer("ingredient_id", 50)
      .unsigned()
      .references("id")
      .inTable("ingredients")
      .notNullable();
    tbl
      .integer("recipe_id", 50)
      .unsigned()
      .references("id")
      .inTable("recipes")
      .notNullable();
    tbl.float("qty", 20).notNullable();
    tbl.string("measurement", 255).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cooking");
};
