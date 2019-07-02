
const { assertEqual } = require('./assertEqual');

const findKeyByValue = function (showByGenre, value) {
  for (const item in showByGenre) {
    if (showByGenre[item] === value) {
      return item;
    }
  }
  return undefined;
};


const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);