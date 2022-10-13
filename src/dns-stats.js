const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) return {};
  const obj = {};
  domains.sort( (a, b) => a.length - b.length);
  domains.forEach( (item, index, array) => {
    array[index] = item.split('.').reverse();
  });
  for (let i = 0; i < domains.length; i++) {
    let string = '';
    for (let j = 0; j < domains[i].length; j++) {
      string += '.' + domains[i][j];
      if (!Object.keys(obj).includes(string) ) {
        obj[string] = 1;
      } else {
        obj[string]++;
      }
    }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
