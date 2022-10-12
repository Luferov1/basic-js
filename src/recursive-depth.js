const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.deep = 0,
    this.currentDeep = 0;
  }
  calculateDepth(arr) {
    if (this.currentDeep === 0) this.deep = 0;
    for (let i = 0; i <= arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.currentDeep++;
        this.calculateDepth(arr[i]);
      } else {
        this.currentDeep++;
      }
      if (this.currentDeep > this.deep) {
        this.deep = this.currentDeep;
      }
      this.currentDeep--;
    }
    return this.deep;
  }
}

module.exports = {
  DepthCalculator
};
