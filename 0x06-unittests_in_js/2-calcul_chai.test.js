const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai'); // identical to 1-calcul.js

describe('calculateNumber — Chai style', function () {
  describe('SUM operation', function () {
    it('rounds and adds 1.4 + 4.5 → 6', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('handles mixed signs: -1.4 + 1.4 → 0', function () {
      expect(calculateNumber('SUM', -1.4, 1.4)).to.equal(0);
    });
  });

  describe('SUBTRACT operation', function () {
    it('rounds and subtracts: 1.4 - 4.5 → -4', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('returns positive when result is positive: 4.4 - 2.4 → 2', function () {
      expect(calculateNumber('SUBTRACT', 4.4, 2.4)).to.equal(2);
    });
  });

  describe('DIVIDE operation', function () {
    it('rounds and divides: 1.4 ÷ 4.5 → 0.2', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('returns "Error" when dividing by zero (rounded)', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('returns "Error" when b rounds to 0', function () {
      expect(calculateNumber('DIVIDE', 10.3, 0.2)).to.equal('Error');
    });
  });

  describe('Unknown operation type', function () {
    it('returns "Invalid operation" if type is unknown', function () {
      expect(calculateNumber('MULTIPLY', 2, 3)).to.equal('Invalid operation');
    });
  });
});

