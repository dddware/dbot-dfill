var dfill = require('./dbot-dfill');

// Mock regex matches
var nb = 10
  , matches = ['', nb];

describe('dfill', function () {
  it('should retrieve some content', function (done) {
    dfill.callback(matches).then(function (result) {
      expect(typeof result).toEqual('string');
      expect(result.length).toBeGreaterThan(nb);

      done();
    });
  });
});