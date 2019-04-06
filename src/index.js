const httpServer = require('./service-validations/http-server');
const mongo = require('./service-validations/mongo');
const postgres = require('./service-validations/postgres');

module.exports = { httpServer, mongo, postgres };
