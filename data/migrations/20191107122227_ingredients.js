exports.up = function(knex) {
  return knex.schema.createTable("ingredients", table => {
    table.increments();
  });
};

exports.down = function(knex) {};
