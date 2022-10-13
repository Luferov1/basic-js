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
  let counter = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      counter++;
      arr.splice(i + 1, 1);
      i--;
    } else {
      if (counter !== 1) {
        arr[i] = `${counter}${arr[i]}`
        counter = 1;
      }
    }
  }
  return arr.join('');
}

module.exports = {
  encodeLine
};
