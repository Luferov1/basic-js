const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (arguments.length === 0) this.chain.push('()');
    this.chain.push(`( ${value} )`)
   return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && Number.isInteger(position) && position > 0 && position <= this.chain.length) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error("You can\'t remove incorrect link!");
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const copyArr = [...this.chain];
    this.chain = [];
    return copyArr.join('~~');
  }
};

module.exports = {
  chainMaker
};
