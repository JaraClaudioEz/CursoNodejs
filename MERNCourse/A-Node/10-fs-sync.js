//SYNCHRONOUS READING OR BLOCKING
const {readFileSync, writeFileSync} = require('fs');

console.log('start');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`)
//We can add another argument: {flag: 'a'}, with this the file will be open and not overrided by default.
console.log('done with this task');
console.log('starting the next one');