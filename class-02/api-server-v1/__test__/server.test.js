const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

// describe is used to "describe" your test suite (generally a module)
describe('API SERVER:', () => {
  // this is a "test"
  it('should respond with a 500 error if things break on the server', () => {
    return mockRequest.get('/throw-error')
      .then(results => {
        // these are assertions
        expect(results.status).toBe(500);
      })
  })

  it('should respond with a 404 there is no route found', () => {
    return mockRequest.get('/no-route-in-server')
      .then(results => {
        // these are assertions
        expect(results.status).toEqual(404);
      })
  })

  it('should return a 500 to a GET request of /hello without a qs property on it', () => {
    return mockRequest.get('/hello')
      .then(results => {
        // these are assertions
        expect(results.status).toEqual(500);
      })
  })

  it('should respond to a GET request of /hello with a querystring prop on it', () => {
    return mockRequest.get('/hello?thing=hello')
      .then(results => {
        // these are assertions
        expect(results.status).toEqual(200);
      })
  })
})