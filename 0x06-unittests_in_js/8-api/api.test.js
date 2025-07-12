const chai = require('chai');
const request = require('request');
const expect = chai.expect;

describe('Index page', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return 200 and correct response text', (done) => {
    request.get(`${baseUrl}/`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

