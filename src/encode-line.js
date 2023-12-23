const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const resultArr = [];
  let count = 1;

  arr.forEach((item, index) => {
    if (item === arr[index + 1]) {
      count += 1;
    } else {
      if (count > 1) {
        resultArr.push(count);
      }
      resultArr.push(item);
      count = 1;
    }
  })
  return resultArr.join('');
}

module.exports = {
  encodeLine
};
