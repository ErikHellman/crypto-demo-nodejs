console.log('Demo of Base64 encoding.')

const input = process.argv.pop();
console.log('Input:', input);

const encoded = Buffer.from(input).toString('base64');
console.log('Base64 encoded:', encoded);

const decoded = Buffer.from(encoded, 'base64').toString('utf8');

console.log('Decoded:', decoded);