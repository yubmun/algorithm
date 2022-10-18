/**
 * 선택정렬이란?
 * 배열의 가장 작은 값을 선택하여 정해진 위치로 보내는 정렬
 * 오름차순으로 정렬하여 내보내는 함수를 만들어라.
 * 배열은 [5,13,3,20,9,16,1,4] 로 진행한다.
 */

// function selectSort(arr){

//   let result = [];
//   for(let i=0; i<arr.length;){
//     let min = Math.min(...arr);
//     result.push(min);
//     let what = arr.indexOf(min);
//     arr.splice(what, 1);
    
//   }
//   console.log(result);
//   return result;
// }

function selectSort(arr){

  let curVal = 0;
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      if(arr[i] > arr[j]){
        curVal = arr[i];
        arr[i] = arr[j];
        arr[j] = curVal;
      }
    }
  }
  console.log(arr);
  return arr;
}

selectSort([5,13,3,20,9,16,1,4]);