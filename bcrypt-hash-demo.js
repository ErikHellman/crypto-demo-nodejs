const bcrypt = require('bcrypt');

console.log('Demo of bcrypt hash.');
var input = process.argv.pop();
console.log('Input:', input);

const saltRounds = 10;
const hashedPassword = bcrypt.hashSync(input, saltRounds);
console.log('Hashed password:', hashedPassword);
