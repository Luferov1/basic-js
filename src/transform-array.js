const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let newArr = [...arr];
  const banIndex = [];
  for (let i = 0; i < newArr.length; i++) {
    switch (newArr[i]) {
      case '--discard-next':

        if (i === newArr.length - 1) {
          newArr.splice(i, 1);
          break;
        }

        if (banIndex.includes(i)) {
          newArr.splice(i, 1);
          break;
        }

        newArr.splice(i, 2);
        banIndex.push(i);
        i--;
        break;

      case '--discard-prev':

        if (i === 0) {
          newArr.splice(0, 1);
          i--;
          break;
        }

        if (banIndex.includes(i)) {
          newArr.splice(i, 1);
          break;
        }

        newArr.splice(i - 1, 2);
        banIndex.push(i);
        i -= 2;
        break;

      case '--double-next':

        if (i === newArr.length - 1) {
          newArr.splice(i, 1);
          break;
        }

        if (banIndex.includes(i)) {
          newArr.splice(i, 1);
          break;
        }

        newArr[i] = newArr[i + 1];
        banIndex.push(i);
        break;

      case '--double-prev':

        if (i === 0) {
          newArr.splice(0, 1);
          i--;
          break;
        }

        if (banIndex.includes(i)) {
          newArr.splice(i, 1);
          break;
        }
        
        newArr[i] = newArr[i - 1];
        banIndex.push(i);
        break;
    
      default:
        break;
    }
  }
  return newArr;
}

module.exports = {
  transform
};
