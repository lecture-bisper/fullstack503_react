
// 배열 함수 map
// ES6에서 추가된 배열 관련 함수
// forEach와 동일한 기능과 사용법을 가지고 있음
// forEach는 반환값이 없지만 map을 반환값이 있음
// map 함수를 통해서 실행된 내용을 모아서 새로운 배열로 출력
// map의 매개변수로 콜백함수를 받아서 사용함
//    - > let 변수명 = 배열명.map(function(currentValue, index, array) {
//          반복 실행할 소스 ...
//          return 반환할 값
//        }
//    - currentValue : 필수 입력, 지정한 배열에서 하나씩 출력된 값
//    - index : 옵션, 지정한 배열에서 출력된 요소의 index 번호
//    - array : 옵션, 지정한 배열, 원본 배열에 접근할 수 있음

/* eslint-disable */

const numbers = [10, 20, 30, 40, 50];

console.log("\n ----- forEach 로 배열 내용 출력 -----\n");

numbers.forEach(item => {
  console.log(`item : ${item}`);
});

console.log("\n ----- map 으로 배열 내용 출력 -----\n");

numbers.map(function (item) {
  console.log(`item : ${item}`);
});

console.log()

numbers.map(item => console.log(`item : ${item}`));

console.log("\n ----- forEach와 map의 차이점 -----\n");

let newArray = [];

// forEach 는 반환값이 없기 때문에 대입연산자 = 를 사용해도 아무것도 출력되지 않음
newArray = numbers.forEach(item => {
  console.log(`forEach로 출력한 값 : ${item}`);
  return item * 2;
});

console.log('forEach 에서 반환한 값 : ');
console.log(newArray);

console.log();

// map 은 반환값을 모아서 배열로 출력함
newArray = numbers.map(item => {
  console.log(`map으로 출력한 값 : ${item}`);
  return item * 2;
});

console.log('map 에서 반환한 값 : ');
console.log(newArray);

/* eslint-enable */








