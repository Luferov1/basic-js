const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const index = email.indexOf('@');
  let x = email.substring(index + 1); 
  if (x.includes('@')) {
    const index = x.indexOf('@');
    x = x.substring(index + 1); 
  } 
  return x;
}

module.exports = {
  getEmailDomain
};
