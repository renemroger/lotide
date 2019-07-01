const { assertArraysEqual } = require('./assertArraysEqual');
const { eqArrays } = require('./eqArrays');

const middle = function (arr) {
  const midIndex = Math.ceil(arr.length / 2);
  if (arr.length < 2) {
    return [];
  }
  if (arr.length % 2 === 1) {
    return [arr[midIndex]];
  } else {
    return [arr[midIndex - 1], arr[midIndex]];
  }
};


module.exports = { middle }

assertArraysEqual(eqArrays, [middle([1, 2, 3, 4]), middle([1, 2, 3, 4])], true);
assertArraysEqual(eqArrays, [middle([1, 2, 3, 4]), middle([1, 2, 3])], false);
assertArraysEqual(eqArrays, [middle([]), middle([1, 2, 3])], false);

