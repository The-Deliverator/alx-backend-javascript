const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('GET /cart/:id', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return 200 and correct message when id is a number', (done) => {
    request.get(`${baseUrl}/cart/42`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 42');
      done();
    });
  });

  it('should return 404 when id is NOT a number', (done) => {
    request.get(`${baseUrl}/cart/hello`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('should return 404 when id is missing', (done) => {
    request.get(`${baseUrl}/cart/`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

