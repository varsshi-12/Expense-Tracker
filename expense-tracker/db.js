const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'expense_tracker',
  password: 'varshiPostgree@3',
  port: 5432,
});

module.exports = pool;
