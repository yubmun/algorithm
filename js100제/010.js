/**
 * 별찍기를 해보자.
 */


function mkTree(n){

  let tree = '';

  for(let i=0; i <= n; i++){
    let star = '';
    for(let j=0; j < n-i; j++){
      star += ' ';
    }
    for(let k=0; k < 2*i-1; k++){
      star += '*';
    }
    tree += star + '\n';
  }
  console.log(tree);
}

mkTree(5);