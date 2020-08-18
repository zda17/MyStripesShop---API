require('dotenv').config();

module.exports = {
  'migrationDirectory': 'db/migrations',
  'driver': 'pg',
  'connectionString': (process.env.NODE_ENV === 'test') ?
    process.env.TEST_DATABASE_URL :
    process.env.DATABASE_URL,
  'ssl': { rejectUnauthorized: false }
};