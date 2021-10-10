var SHA256 = require('crypto-js/sha256');

console.log('Demo of hash function with SHA256')
var input = process.argv.pop();
console.log('Input:', input);
var hashed = SHA256(input);
console.log('SHA256:', hashed.toString());
