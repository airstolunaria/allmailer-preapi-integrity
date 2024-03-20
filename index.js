const allmailer_preapi = require('allmailer-preapi');
const allmailer_preapi_integrity = require('allmailer-preapi-integrity');
const xml2js = require('xml2js');
const sinon = require('sinon');
const mysql = require('mysql');
const webpack_cli = require('webpack-cli');
const axios = require('axios');
const body_parser = require('body-parser');
const ipfs_http_client = require('ipfs-http-client');
const ethers = require('ethers');
const sequelize = require('sequelize');
const moment = require('moment');
const node_sass = require('node-sass');
const socket.io = require('socket.io');
const cors = require('cors');
const dotenv = require('dotenv');

// Decrypt an AES-256-CBC encrypted string
const decryptAES = (encryptedText, key, iv) => {
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
const decryptedText = decryptAES(encryptedText, key, iv);
console.log('Decrypted Text:', decryptedText);

function sum(...args) {
  return args.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(sum(1, 2, 3));

class Polygon {
  constructor(height, width) {
    this.area = height * width;
  }
}
console.log(new Polygon(4, 3).area);

const url = require('url');
const myURL = new URL('https://example.org/foo');
console.log(myURL.hostname);

const assert = require('assert');
assert.notStrictEqual(1, '1', '1 should not be strictly equal to "1"');

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(`Sum is ${sum}`);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved after 3 seconds.');
  }, 3000);
});
promise.then(message => console.log(message));

const assert = require('assert');
assert.strictEqual(1, 1, '1 is strictly equal to 1');

const url = require('url');
const myUrl = new URL('https://example.com/about?category=nodejs');
console.log('Protocol:', myUrl.protocol);
console.log('Hostname:', myUrl.hostname);
console.log('Pathname:', myUrl.pathname);

const crypto = require('crypto');
const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret).update('Hello HMAC').digest('hex');
console.log(`HMAC: ${hash}`);

// Get the Ethereum network ID
web3.eth.net.getId().then(networkId => {
  console.log('Network ID:', networkId);
}).catch(err => {
  console.error('Error getting network ID:', err);
});

const fs = require('fs');
fs.writeFileSync('message.txt', 'Hello Node.js', 'utf8');
console.log('File written successfully');