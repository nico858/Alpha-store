const { Cliente, Client } = require('pg');
const { normalizeQueryConfig } = require('pg/lib/utils');

async function getConnection(){
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'nico',
    password: 'admin123',
    database: 'alpha_store'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
