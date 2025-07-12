const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber — Operation-based rounding and math', function () {
  describe('SUM operation', function () {
    it('should add two positive floats after rounding: 1.4 + 4.5 → 6', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should handle negative and positive numbers: -1.4 + 1.4 → 0', function () {
      assert.strictEqual(calculateNumber('SUM', -1.4, 1.4), 0);
    });
  });

  describe('SUBTRACT operation', function () {
    it('should subtract rounded numbers: 1.4 - 4.5 → -4', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should subtract and return a positive result: 4.4 - 2.4 → 2', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.4, 2.4), 2);
    });
  });

  describe('DIVIDE operation', function () {
    it('should divide rounded numbers: 1.4 ÷ 4.5 → 0.2', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should gracefully return "Error" when dividing by zero', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should also return "Error" if rounded divisor is zero: 10.3 ÷ 0.2', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 10.3, 0.2), 'Error');
    });
  });

  describe('Unknown operation', function () {
    it('should return "Invalid operation" for unsupported type', function () {
      assert.strictEqual(calculateNumber('MULTIPLY', 2, 3), 'Invalid operation');
    });
  });
});

