const crypto = require('crypto');

console.log('Demo of asymmetric encryption with RSA.');
const input = process.argv.pop();
console.log('Input:', input);

const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });

const encryptedData = crypto.publicEncrypt(
    {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256',
    },
    Buffer.from(input)
);

console.log('Encrypted data:', encryptedData.toString('base64'));

const decryptedData = crypto.privateDecrypt(
    {
      key: privateKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha256',
    },
    encryptedData
  );
  
  console.log('Decrypted data:', decryptedData.toString());
  