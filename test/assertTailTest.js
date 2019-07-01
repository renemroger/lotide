const { assertEqual } = require('../assertEqual');
const { tail } = require('../tail');
const assert = require('chai').assert;
const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("tail shouldn't change original length of word", () => {
    tail(words);
    assert.strictEqual(3, words.length);
  });
  it(`get tail of ${words}`, () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
});