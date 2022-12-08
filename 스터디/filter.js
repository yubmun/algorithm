// 예시 배열
let arr = [5, 10, 7, 20, 21, 8];

/**
 * array(배열)의 모든 요소를 순회
 * - array가 배열이 아닐 경우 에러 메세지 표시 -> Array.isArray()
 * - callback 이 함수가 아닐 경우 에러 메세지 표시 -> typeof
 * @param array  순회할 배열
 * @param callback (value, index) 형식의 2개의 param을 갖는 함수
 */
function filter(array, callback) {
  if(!Array.isArray(array)){
    console.log('배열이 아닙니다')
    return
  }
  if(typeof callback !== 'function'){
    console.log('함수가 아닙니다')
    return
  }

  let result = [];
  for(let i=0; i < array.length; i++){
    if(callback(array[i],i)){
      result.push(array[i]);
    }
  }
  return result;
}

// let arr = [5, 10, 7, 20, 8]; true 인 애들만 배열에 push 해야 된다

let filteredA = filter(123, (value, index)=>{}); // 'array가 아닙니다'
let filteredB = filter(arr, 123); // '함수가 아닙니다'

console.log(filteredA); // 배열이 아닙니다
console.log(filteredB); // 함수가 아닙니다

let filteredC = filter(arr, (value, index) => {
  return value >= 10; // [10, 20]
});

let filteredD = filter(arr, (value, index) => {
  return value <= 5; // [5]
});

console.log(filteredC);
console.log(filteredD);


// ========================================
// 추가 연습

// let arr = [5, 10, 7, 20, 8];

// let filteredE; 홀수만 출력
let filteredE = filter(arr, (value, index) => {
  return value % 2 !== 0;
})
console.log(filteredE); // [5,7]

// let filteredF;  짝수만 출력
let filteredF = filter(arr, (value, index) => {
  return value % 2 === 0;
})

console.log(filteredF); // [10, 20, 8]


// let arr = [5, 10, 7, 20, 8];
// let filteredG; 소수만 출력 <-
let filteredG = filter(arr, (value, index) => {
  //1과 본인의 수만 있는 수, 다른걸로 나눴을 때는 나머지가 0이 절대 안되는 놈, 2 ~ 자신의 수까지 순서대로 나눴을 때 
  for(let i = 2; i < value; i++){
    if(value % i === 0){
      return false;
    }
  }
  return true;
})
console.log("filterG");
console.log(filteredG)

// Object.freeze(Phone);
const Phone = {
  Galaxy : "Galaxy",
  iPhone : "iPhone",
}

let people = [
  {
    name : "염예찬",
    phone : Phone.Galaxy,
    glasses : true
  },
  {
    name : "하승우",
    phone : Phone.Galaxy,
    glasses : true
  },
  {
    name : "임하늘",
    phone : Phone.iPhone,
    glasses : false
  },
  {
    name : "강희",
    phone : Phone.iPhone,
    glasses : true
  },
  {
    name : "다솜",
    phone : Phone.Galaxy,
    glasses : false
  },
  {
    name : "이준엽",
    phone : Phone.Galaxy,
    glasses : true
  },
  {
    name : "양지성",
    phone : Phone.iPhone,
    glasses : false
  }
];

// let filteredH; 안경 쓴 사람만 출력
let filteredH = filter(people, (value, index) => {
  return value.glasses === true
})

console.log(filteredH); // 



// let filteredI; 아이폰 유저만 출력

let filteredI = filter(people, (value, index) => {
  return value.phone === Phone.iPhone;
})

console.log(filteredI);