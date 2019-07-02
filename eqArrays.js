const { eqArrays } = require('./eqArrays');

// FUNCTION IMPLEMENTATION
const assertEqualTwo = function (func, args, expected) {
  const actual = func(...args);// [1,2,3], [1,2,3]] => [1,2,3] , [1,2,3]
  console.log((actual === expected) ? `✅✅✅  Assertion Passed:  ${actual}  ===  ${expected} --- Asserting : ${func.name}` :
    `🛑🛑🛑  Assertion Failed: ${actual}`);
};

module.exports = { eqArrays };

//assertEqual(1, 1);