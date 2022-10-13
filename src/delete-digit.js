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
  const max = String(n).split('').reduce((a, b) => { return Math.max(a, b) });
  if (String(n).indexOf(max) === 1) {
    const x = String(n).split('');
    x.splice(0, 1);
    return Number(x.join(''));
  } else {
    const value = String(n).split('').sort( (a,b) => a - b)[0];
    const x = String(n).split('');
    x.splice(String(n).indexOf(value), 1);
    return Number(x.join(''));
  }
}

module.exports = {
  deleteDigit
};
