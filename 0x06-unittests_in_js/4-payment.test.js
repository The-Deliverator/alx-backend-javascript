var sinon = require('sinon');
var Utils = require('./utils');
var sendPaymentRequestToApi = require('./4-payment');
var assert = require('assert');

describe('sendPaymentRequestToApi', function() {
  var stub, spy;

  beforeEach(function() {
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    spy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    stub.restore();
    spy.restore();
  });

  it('should stub calculateNumber and log correct total', function() {
    sendPaymentRequestToApi(100, 20);
    assert(stub.calledWith('SUM', 100, 20));
    assert(spy.calledWith('The total is: 10'));
  });
});

