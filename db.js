const pgp = require('pg-promise')();
const connectionConfig = {
  host: 'localhost',
  port: '5432',
  database: 'web',
  user: 'postgres',
  password: 'postgres123',
};

const db = pgp(connectionConfig);

module.exports = db;
