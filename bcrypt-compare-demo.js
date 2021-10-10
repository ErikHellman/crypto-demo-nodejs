const bcrypt = require('bcrypt');

const secretPassword = 'mysecretpassword';
const hashedPassword = '$2b$10$lnAQ56VHtPPE2sy8p1WeYe0vQNoLAZANqd14o0wG/TfqXZsX3edrO';

console.log('Demo of bcrypt compare.');
console.log('Hashed password:', hashedPassword);

const result = bcrypt.compareSync(secretPassword, hashedPassword);
console.log('Hashed password matches secret password:', result);

