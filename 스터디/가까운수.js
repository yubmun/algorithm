/**
 * 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
 */

function solution(array, n) {
  var answer = 0;
  let result = array.map((x) => Math.abs(n-x));
  let min = Math.min(...result);
  let what = result.indexOf(min);
  
  let arr = result.filter((x) => x == min);
  if(arr.length > 1) {
      let resultArr = [];
      for(let i = 0; i < array.length; i++){
          if(result[i] == min){
              resultArr.push(array[i]);
          }
      }
      return Math.min(...resultArr);
  } else {
      return array[what];
  }
  
  
  
  return array[what];
  
}