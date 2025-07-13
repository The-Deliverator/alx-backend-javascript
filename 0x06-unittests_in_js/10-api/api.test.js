const request = require('request');
const { expect } = require('chai');

describe('Integration tests for 10-api', () => {
  const baseUrl = 'http://localhost:7865';

  describe('GET /available_payments', () => {
    it('should return correct payment methods', (done) => {
      request.get(`${baseUrl}/available_payments`, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        const parsedBody = JSON.parse(body);
        expect(parsedBody).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
        done();
      });
    });
  });

  describe('POST /login', () => {
    it('should return welcome message with username', (done) => {
      request.post({
        url: `${baseUrl}/login`,
        json: { userName: 'Betty' },
      }, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });

    it('should handle missing username', (done) => {
      request.post({
        url: `${baseUrl}/login`,
        json: {},
      }, (err, res, body) => {
        expect(res.statusCode).to.equal(400);
        expect(body).to.equal('Missing userName');
        done();
      });
    });
  });
});

