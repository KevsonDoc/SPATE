exports.up = (knex) =>
  knex.schema.createTable('tb_points', (table) => {

		table.increments('cd_point');

    table.string('title', 60).unique().notNullable();
    table.text('description').notNullable();
    table.decimal('latitude', 10, 7).notNullable();
    table.decimal('longitude', 10, 7).notNullable();

    table.integer('id_user').unsigned();
		table.foreign('id_user').references('cd_user').inTable('tb_user');

    table.integer('id_cases').unsigned();
		table.foreign('id_cases').references('cd_cases').inTable('tb_cases');
  }
);

exports.down = (knex) => knex.schema.dropTable('tb_points');
