const middle = function (arr) {
  const midIndex = Math.floor(arr.length / 2);
  if (arr.length <= 2) {
    return [];
  }

  return (arr.length % 2 === 0) ? [arr[midIndex - 1], arr[midIndex]] : [arr[midIndex]];

};

module.exports = { middle }
