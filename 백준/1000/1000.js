const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath,'utf-8').split(' ');

//input 에 들어가는 값은 배열로 들어간다.
let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a + b);