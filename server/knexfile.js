const path = require('path');

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'db_SPATE',
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'models', 'migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'models', 'seeds'),
    },
  },
};
