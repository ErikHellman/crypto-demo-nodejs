var CryptoJS = require('crypto-js');

console.log('Demo of symmetric encryption with AES.');
var key = 'my secret key';

var input = process.argv.pop();
var ciphertext = CryptoJS.AES.encrypt(input, key).toString();
console.log('Input:', input);
console.log('Encrypted:', ciphertext);
var bytes = CryptoJS.AES.decrypt(ciphertext, key);
console.log('Decrypted:', bytes.toString(CryptoJS.enc.Utf8));

