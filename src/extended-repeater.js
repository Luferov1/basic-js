const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  const arr = [];
  const stringArr = [];
  let string = str;

  if (typeof string !== 'string') {
    string = String(string);
  }

  if ('addition' in options && typeof options.addition !== 'string') {
    options.addition = String(options.addition);
  } 

  if (!!options.addition) {
    if (!options.additionRepeatTimes) {
      stringArr.push(options.addition);
    } else {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        stringArr.push(options.addition);
    }
    }

    if (!!options.additionSeparator) { 
      string = `${string}${stringArr.join(options.additionSeparator)}`;
    } else {
      string = `${string}${stringArr.join('|')}`;
    }
  }
  if (!options.repeatTimes) {
    arr.push(string);
  } else {
    for (let i = 0; i < options.repeatTimes; i++) {
      arr.push(string);
  }
  }

  if (!!options.separator) {
    string = arr.join(options.separator);
  } else {
    string = arr.join('+');
  }

  return string;
}

module.exports = {
  repeater
};
