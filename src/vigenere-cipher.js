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
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(massage, key) {
    if (!massage || !key) throw new Error('Incorrect arguments!');

    const result = [];
    let indexKey = 0;

    massage.toUpperCase().split('').forEach(char => {
      if (char < 'A' || char > 'Z') {
        result.push(char);
      } else {
        const massageCharIndex = char.charCodeAt(0) - 65;
        const keyCharIndex = key[indexKey % key.length].toUpperCase().charCodeAt(0) - 65;
        const encryptedCharIndex = `${((massageCharIndex + keyCharIndex + 26) % 26) + 65}`;
        indexKey++;
        result.push(String.fromCharCode(encryptedCharIndex));
      }
    });
    return this.direct ? result.join('') : result.reverse().join('');
  }
  decrypt(encryptedMassage, key) {
    if (!encryptedMassage || !key) throw new Error('Incorrect arguments!');

    const result = [];
    let indexKey = 0;

    encryptedMassage.toUpperCase().split('').forEach(char => {
      if (char < 'A' || char > 'Z') {
        result.push(char);
      } else {
        const massageCharIndex = char.charCodeAt(0) - 65;
        const keyCharIndex = key[indexKey % key.length].toUpperCase().charCodeAt(0) - 65;
        const CharIndex = `${((massageCharIndex - keyCharIndex + 26) % 26) + 65}`;
        indexKey++;
        result.push(String.fromCharCode(CharIndex));
      }
    });
    return this.direct ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
