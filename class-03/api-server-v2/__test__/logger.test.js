const logger = require('../src/middleware/logger.js');

describe('LOGGER MW:', () => {

  let consoleSpy;

  // req and res are being "mocked" because we are making up
  // what they are and do
  let req = {};
  let res = {};
  let next = jest.fn();

  // the beforeEach and afterEach methods
  // are great for independent testing
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  })

  afterEach(() => {
    consoleSpy.mockRestore();
  })

  it('should log worked', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  })
})