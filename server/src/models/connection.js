const knex = require('knex');

const configurations = require('../../knexfile.js');

const connection = knex(configurations.development);

module.exports = connection;