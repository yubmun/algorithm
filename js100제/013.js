/**
 * 우리 태양계를 이루고 있는 행성은 수성,금성,지구,화성
 * 목성,토성,천왕성, 해왕성으로 총 8개이다.
 * 우리 태양계의 n번째 행성이 무엇인지 알고 싶다.
 * 입력으로 행성의 순서를 나타내는 숫자n이 입력된다.
 * 출력으로 그 순서에 해당하는 행성의 이름을 출력하라.
 * 
 * 예를들어 1이 입력되면, 첫번째 행성인 수성이 출력된다.
 */

function what(n){

  let arr = ['수성','금성','지구','화성','목성','토성','천왕성','해왕성'];

  console.log(arr[n-1]);

}

what(1);