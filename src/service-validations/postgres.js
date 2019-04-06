const { Client } = require('pg');

const checkConnection = async ({ host, port, user, password, database }) => {
  const client = new Client({ host, port, user, password, database });
  await client.connect();
  await client.end();
};

module.exports = { checkConnection };
