'use strict';

require('dotenv').config();

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

const { db } = require('../src/models/index.js');

// describe is used to "describe" your test suite (generally a module)
describe('API SERVER:', () => {

  // independent test management
  beforeAll(async () => {
    await db.sync();
  })

  afterAll(async () => {
    await db.drop();
  })

  it('should respond with a 404 there is no route found', () => {
    return mockRequest.get('/no-route-in-server')
      .then(results => {
        // these are assertions
        expect(results.status).toEqual(404);
      })
  })

  // start db
  it('should create a new person', () => {
    mockRequest.post('/person').send({ firstName: 'test', lastName: 'test last'})
    .then(results => {
      expect(results.status).toEqual(201);
    })
  });
  // stop db

  // start db
  it('should get get a single person', () => {
    mockRequest.post('/person').send({ firstName: 'test', lastName: 'test last'})
    .then((results) => {
      mockRequest.get(`/person/${results.id}`)
      .then(response => {
        expect(response.status).toEqual(200);
      });
    })
  });
  // stop db

  it('should get a list of people', () => {

  });

  it('should update a person', () => {

  })

  it('should delete a person', () => {

  })

})