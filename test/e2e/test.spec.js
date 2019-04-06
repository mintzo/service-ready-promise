/* eslint-disable func-names */
const { expect } = require('chai');
const axios = require('axios');
const TestingEnvironment = require('docker-tester');
const isServiceReady = require('../../src/index');

// eslint-disable-next-line object-curly-newline
const verifications = {
  httpServer: {
    verificationFunction: async (service) => {
      await isServiceReady.httpServer.urlReturns200({ url: `http://localhost:${service.ports[0].external}` });
    }
  },
  mongo: {
    verificationFunction: async (service) => {
      const dbPassword = 'example_password';
      const dbUsername = 'example_user';
      const connectionString = `mongodb://${dbUsername}:${dbPassword}@localhost:${service.ports[0].external}`;
      await isServiceReady.mongo.checkConnectionString(connectionString);
    }
  }
};

const testingEnvironment = new TestingEnvironment({
  dockerComposeFileLocation: __dirname,
  dockerFileName: 'test.docker-compose.yml',
  verifications
});

before(async function () {
  this.timeout(0);
  await testingEnvironment.start();
});

after(async function () {
  this.timeout(0);
  await testingEnvironment.stop();
});

describe('Test are ready', () => {
  it('all services are up, lets see if they also go down', () => {
    expect(true).to.be.true;
  });
});
