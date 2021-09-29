require('dotenv').config();

// Knex, used for database operations
const knex = require('knex');
// Main express app
const app = require('./app');
const { PORT, DATABASE_URL } = require('./config');

// Create knex instance
const db = knex({
  client: 'pg',
  connection: { 
    connectionString: DATABASE_URL + '?ssl=true',
    ssl: { rejectUnauthorized: false }
}
});

// Set knex instance in app for easy access
app.set('db', db);

// Start server on PORT
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening at http://localhost:${PORT}`);
});