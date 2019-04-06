const redis = require('redis');

const checkConnection = redisConnectionSettings => new Promise((resolve, reject) => {
  const client = redis.createClient(redisConnectionSettings);
  client.on('ready', (connectionError) => {
    if (connectionError) { reject(connectionError); } else {
      client.quit();
      resolve();
    }
  });
});

module.exports = { checkConnection };
