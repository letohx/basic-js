const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nArr = `${n}`.split('').map(n => +n);
  const digitsArr = [];
  nArr.forEach((item, index) => {
    const nArrCopy = [...nArr];
    nArrCopy.splice(index, 1);
    digitsArr.push(+nArrCopy.join(''));
  })

  return Math.max(...digitsArr);
}

module.exports = {
  deleteDigit
};
