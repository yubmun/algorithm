function myfilter(array, callback) {
  if (!Array.isArray(array)) {
      console.log(`${array} 는 array가 아닙니다.`)
      return
  }
  if (typeof(callback) !== 'function') {
      console.log(`${callback}은 function 아닙니다.`)
      return
  }
  const newArray = [];
  for(let i=0; i<=array.length; ++i) {
      if(callback(array[i], i)) {
          newArray[newArray.length] = array[i];
      }
  } return newArray
}