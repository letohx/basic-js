const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1Arr = s1.split('').sort();
  const s2Arr = s2.split('').sort();
  let result = 0;

  if (s2.length <= s1.length) {
    s1Arr.forEach(item => {
      if (s2Arr.includes(item)) {
        result++;
        s2Arr.splice(s2Arr.indexOf(item) ,1)
      }
    })
  } else {
    s2Arr.forEach(item => {
      if (s1Arr.includes(item)) {
        result++;
        s1Arr.splice(s1Arr.indexOf(item) ,1)
      }
    })
  }


  return result;
}

module.exports = {
  getCommonCharacterCount
};
