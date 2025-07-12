var getPaymentTokenFromAPI = require('./6-payment_token');
var assert = require('assert');

describe('getPaymentTokenFromAPI', function() {
  it('should return a promise that resolves when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then(function(response) {
        assert.deepStrictEqual(response, { data: 'Successful response from the API' });
        done();
      })
      .catch(done); // catches any unexpected rejections
  });
});

