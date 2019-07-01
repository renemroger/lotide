const { assertArraysEqual } = require('../assertArraysEqual');
const { eqArrays } = require('../eqArrays');
const { middle } = require('../middle');


assertArraysEqual(eqArrays, [middle([1, 2, 3, 4]), middle([1, 2, 3, 4])], true);
assertArraysEqual(eqArrays, [middle([1, 2, 3, 4]), middle([1, 2, 3])], false);
assertArraysEqual(eqArrays, [middle([]), middle([1, 2, 3])], false);