
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pirates', function(t){
    t.increments();
    t.string('name');
    t.string('poison');
    t.string('accessory');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pirates');
};
