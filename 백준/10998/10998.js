const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath,'utf-8').split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a*b);