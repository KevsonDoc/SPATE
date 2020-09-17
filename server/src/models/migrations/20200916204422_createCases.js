exports.up = (knex) =>
  knex.schema.createTable('tb_cases', (table) => {

		table.increments('cd_cases');

    table.string('title', 60).unique().notNullable();
    table.text('description').notNullable();
  }
);

exports.down = (knex) => knex.schema.dropTable('tb_cases');
