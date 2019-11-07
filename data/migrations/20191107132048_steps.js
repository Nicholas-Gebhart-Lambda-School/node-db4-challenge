exports.up = function(knex) {
  return knex.schema.createTable("steps", table => {
    table.increments();

    table
      .integer("recipe_id", 50)
      .unsigned()
      .references("id")
      .inTable("recipes")
      .notNullable();

    table
      .integer("step", 50)
      .unsigned()
      .notNullable();

    table.string("desc", 255).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("steps");
};
