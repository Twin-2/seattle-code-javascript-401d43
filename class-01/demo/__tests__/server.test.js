'use strict';

const supertest = require('supertest'); // in memory system for making req in a test
const server = require('../server.js');
const request = supertest(server.app);

// defines a test suite
// test suites are a series of tests for a module
describe('API Server', () => {

  // test
  it('should respond to a GET request at the path of /data', async () => {
    const response = await request.get('/data');
    expect(response.status).toEqual(200);
    expect(typeof response.body).toEqual('object');
  });

  it('should handle invalid requests', async () => {
    const response = await request.get('/no-route');
    expect(response.status).toEqual(404);
  });

  it('should run through mw on a stamper route', async () => {
    const response = await request.get('/data');
    expect(response.status).toEqual(200);
    expect(response.body.timestamp).toBeDefined();
  });
})