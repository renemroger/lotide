const eqArrays = require('./eqArrays');
// FUNCTION IMPLEMENTATION
const assertArraysEqual = function (func, args, expected) {
  const actual = func(...args);// [1,2,3], [1,2,3]] => [1,2,3] , [1,2,3]
  console.log((actual === expected) ? `✅✅✅  Assertion Passed:  ${actual}  ===  ${expected} --- Asserting : ${func.name}` :
    `🛑🛑🛑  Assertion Failed: ${actual}`);
};


const flatten = function (arr) {
  let array = arr.reduce(function (a, b) {
    return a.concat(b);
  }, []);
  console.log(array);
};

flatten([1, 2, [3, 4], 5, [6]]);