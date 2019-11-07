exports.up = function(knex) {
  return knex.schema.createTable("steps", tbl => {
    tbl.increments();

    tbl
      .integer("recipe_id", 50)
      .unsigned()
      .references("id")
      .inTable("recipes")
      .notNullable();

    tbl
      .integer("step", 50)
      .unsigned()
      .notNullable();

    tbl.string("desc", 255).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("steps");
};
