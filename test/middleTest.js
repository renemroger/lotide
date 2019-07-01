const { middle } = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("middle [1,2,3,4] should be [2,3]", () => {
    const mid = middle([1, 2, 3, 4]);
    assert.deepEqual(mid, [2, 3]);
  });
  it("middle [1,2,3,4,6] should be [3]", () => {
    const mid = middle([1, 2, 3, 4, 6]);
    assert.deepEqual(mid, [3]);
  });
  it("middle [1,2] should be []", () => {
    const mid = middle([1, 2]);
    assert.deepEqual(mid, []);
  });
  it("middle [1,2,3] should be [2]", () => {
    const mid = middle([1, 2, 3]);
    assert.deepEqual(mid, [2]);
  });
});