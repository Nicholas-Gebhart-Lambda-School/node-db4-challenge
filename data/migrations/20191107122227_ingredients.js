exports.up = function(knex) {
  return knex.schema.createTable("ingredients", table => {
    table.increments();
    table.string("ingredient_name", 255);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("ingredients");
};
