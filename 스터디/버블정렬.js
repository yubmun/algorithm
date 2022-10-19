/**
 * 버블정렬
 * 첫번째와 두번째 세번째 등 인접한 값을 비교하는 정렬
 * 배열은 [5,13,3,20,9,16,1,4]
 */

function bubble(arr){
  let curVal = 0;
  for(let i=0; i < arr.length; i++){
    for(let j=i+1; j < arr.length; j++){
      if(arr[i] < arr[j]){
        curVal = arr[i];
        arr[i] = arr[j];
        arr[j] = curVal;
      }
    }
  }
  console.log(arr);
  return arr;
}

bubble([5,13,3,20,9,16,1,4]);