const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  matrix.forEach( function(item, index) {
    this[index] = item.filter(item => item === '^^').length;
   }, matrix);
   if (matrix.length === 0) return 0;
   return (matrix.reduce( (prev, item) => (prev + item) ))
}

module.exports = {
  countCats
};
