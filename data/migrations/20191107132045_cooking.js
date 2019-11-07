exports.up = function(knex) {
  return knex.schema.createTable("cooking", table => {
    table.increments();
    table
      .integer("ingredient_id", 50)
      .unsigned()
      .references("id")
      .inTable("ingredients")
      .notNullable();
    table
      .integer("recipe_id", 50)
      .unsigned()
      .references("id")
      .inTable("recipes")
      .notNullable();
    table.float("qty", 20).notNullable();
    table.string("measurement", 255).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cooking");
};
