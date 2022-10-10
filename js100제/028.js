/**
 * 2gram 이란 문자열에서 2개의 연속된 요소를 출력하는 방법이다.
 * 
 */

function gram(name){

  // 먼저 name에 splice 써줄거니깐, 배열로 받아오자.
  let arr = [];
  for(let i=0; i < name.length; i++){
    arr.push(name[i]);
  }

  // arr의 인덱스 0과 인덱스 length -1 를 제외하고 각각의 인덱스 자리에 본인을 추가하는 로직을 짠다.
  let length = name.length;
  for(let i=1; i < length-1; i++){
    arr.splice(i,0,arr[i]);
    i++;
    length++;
  }

  // arr을 다시 문자열로 변경해서 result에 담는다.
  let result = arr.join('');

  // result의 인덱스를 1인덱스 1인덱스 개행 순서로 출력하게 한다.
  for(let i=0; i < name.length-2; i++){
    
  }
}

gram('javascript');