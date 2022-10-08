const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath,'utf-8').split(' ');

let A = parseInt(input[0]);
let B = parseInt(input[1]);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(parseInt(A / B));
console.log(A % B);

/**
 * 문제: a,b 에 대한 + , - , * , / ,% 를 연산하는 프로그램을 작성하라.
 */