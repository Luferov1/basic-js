const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let solution = [];
  for (let i = 0; i < matrix.length; i++) {
    solution.push([]);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let value = 0;
      if (i > 0) {
        for (let k = j - 1; k < j + 2; k++) {
          if (k < 0) continue;
          if (matrix[i - 1][k] === true) value++; 
        }
      }
    for (let k = j - 1; k < j + 2; k++) {
      if (k === j) continue;
      if (k < 0) continue;
      else {
        if (matrix[i][k] === true) value++;
      }
    }
    if (i < matrix.length - 1) {
      for (let k = j - 1; k < j + 2; k++) {
        if (k < 0) continue;
        if (matrix[i + 1][k] === true) value++;
      }
    }
    solution[i].push(value);
    }
  }
  return solution;
}

module.exports = {
  minesweeper
};
