exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('roles')
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {id: 1, roleType:'instructor'},
        {id: 2, roleType:'client'}
      ]);
    });
};