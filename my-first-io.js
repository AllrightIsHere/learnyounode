const fs = require('fs');

const buffer = fs.readFileSync(process.argv[2]).toString('utf8');

const total = buffer.split('\n').length - 1;

console.log(total);
