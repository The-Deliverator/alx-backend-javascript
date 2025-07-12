var sinon = require('sinon');
var Utils = require('./utils');
var sendPaymentRequestToApi = require('./5-payment');
var assert = require('assert');

describe('sendPaymentRequestToApi', function() {
  var spy;

  beforeEach(function() {
    spy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    spy.restore();
  });

  it('should log the correct total for 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);
    assert(spy.calledOnce);
    assert(spy.calledWith('The total is: 120'));
  });

  it('should log the correct total for 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);
    assert(spy.calledOnce);
    assert(spy.calledWith('The total is: 20'));
  });
});

