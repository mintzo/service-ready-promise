const { MongoClient } = require('mongodb');

const checkConnectionString = connectionString => new Promise(async (resolve, reject) => {
  MongoClient.connect(connectionString, { useNewUrlParser: true }, (error, client) => {
    if (error) { reject(error); } else {
      client.close();
      resolve();
    }
  });
});

module.exports = { checkConnectionString };
