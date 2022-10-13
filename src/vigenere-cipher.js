const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(value) {
    if (arguments.length === 0) {
      this.value = true;
    } else {
      this.value = value;
    }
  }
  encrypt(encode, password) {
    if (typeof arguments[0] !== 'string' || typeof arguments[1] !== 'string' || arguments.length > 2) {
      throw new Error('Incorrect arguments!');
    }
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fullPassword = password.repeat(Math.floor(encode.length / password.length) + 1).substring(0, encode.length).toUpperCase();
    const newWordArray = [];
    let counter = 0;
    for (let i = 0; i < fullPassword.length; i++) {
      if (alphabet.includes(encode[i].toUpperCase())) {
        newWordArray.push(alphabet[(alphabet.indexOf(encode[i].toUpperCase()) + alphabet.indexOf(fullPassword[i - counter])) % 26]);
      } else {
        counter++;
        newWordArray.push(encode[i]);
      }
    }
    if (this.value) {
    return newWordArray.join(''); 
    } else {
      return newWordArray.reverse().join('');
    }
  }

  decrypt(decode, password) {
    if (typeof arguments[0] !== 'string' || typeof arguments[1] !== 'string' || arguments.length > 2) {
      throw new Error('Incorrect arguments!');
    }
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fullPassword = password.repeat(Math.floor(decode.length / password.length) + 1).substring(0, decode.length).toUpperCase();
    const newWordArray = [];
    let counter = 0;
    for (let i = 0; i < fullPassword.length; i++) {
      if (alphabet.includes(decode[i].toUpperCase())) {
        if (alphabet.indexOf(decode[i].toUpperCase()) < alphabet.indexOf(fullPassword[i - counter])) {
          newWordArray.push(alphabet[alphabet.length + alphabet.indexOf(decode[i].toUpperCase()) - alphabet.indexOf(fullPassword[i - counter])]);
        } else {
          newWordArray.push(alphabet[alphabet.indexOf(decode[i].toUpperCase()) - alphabet.indexOf(fullPassword[i - counter]) % 26]);
        }

      } else {
        counter++;
        newWordArray.push(decode[i]);
      }
    }
    if (this.value) {
      return newWordArray.join(''); 
      } else {
        return newWordArray.reverse().join('');
      }
  }
}

module.exports = {
  VigenereCipheringMachine
};
