
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('pirates').del(),

    // Inserts seed entries
    knex('pirates').insert({id: 1, name: 'Jack Sparrow', poison: 'Rum', accessory:'boating'}),
    knex('pirates').insert({id: 2, name: 'Captain Greyskull', poison: 'water', accessory:'hot temper'}),
    knex('pirates').insert({id: 3, name: 'Captain Blackbeard', poison: 'vodka', accessory:'running'})

  );
};
