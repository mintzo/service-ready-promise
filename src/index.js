const httpServer = require('./service-validations/http-server');
const mongo = require('./service-validations/mongo');
const postgres = require('./service-validations/postgres');
const redis = require('./service-validations/redis');

module.exports = { httpServer, mongo, postgres, redis };
