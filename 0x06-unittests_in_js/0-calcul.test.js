const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  const testCases = [
    { args: [1, 3], expected: 4 },
    { args: [1, 3.7], expected: 5 },
    { args: [3.7, 1], expected: 5 },
    { args: [1, 3.3], expected: 4 },
    { args: [3.3, 1], expected: 4 },
    { args: [1.2, 3.7], expected: 5 },
    { args: [1.5, 3.7], expected: 6 },
    { args: [3.7, 1.2], expected: 5 },
    { args: [1.2, 2.1], expected: 3 }
  ];

  testCases.forEach(({ args, expected }, index) => {
    it(`Test case ${index + 1}: calculateNumber(${args.join(', ')}) should return ${expected}`, function () {
      assert.strictEqual(calculateNumber(...args), expected);
    });
  });
});

