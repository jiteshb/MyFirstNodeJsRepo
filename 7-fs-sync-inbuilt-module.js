const fs = require ('fs');
const readFileSync = fs.readFileSync;
const writeFileSync = fs.writeFileSync;
const first = readFileSync('./content/first.txt')
const second = readFileSync('./content/second.txt')
console.log(`read content FIRST - ${first}, SECOND ${second}` );
writeFileSync('./content/result.txt',` result - ${first}, ${second}`, {flag : 'a'})