// FUNCTION IMPLEMENTATION
const words = ["Yo Yo", "Lighthouse", "Labs"];

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👍 👍 👍 Assertion Passed:  ${actual}  ===  ${expected}`);
  } else {
    console.log(`👎 👎 👎 Assertion Failed: ${actual}  ===  ${expected}`);
  }
};

const head = function (arr) {
  if (arr.length >= 1)
    return arr[0];
  else
    return undefined;
};

const tail = function (arr) {
  if (arr.length === 0) {
    return [];
  } else if (arr.lenth === 1) {
    return [];
  } else {
    return arr.slice(1);
  }
};

module.exports = { words, head, tail };