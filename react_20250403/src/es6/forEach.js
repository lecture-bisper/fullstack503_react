
// 배열 함수 forEach
// ES6 에서 새로 추가된 반복문으로 지정한 배열의 요소를 모두 차례대로 반복 실행하는 함수
// 자바의 향상된 for문과 비슷한 역할을 하는 반복 실행 함수
//    - 매개변수로 콜백함수를 받아서 실행함\
//    - 지정한 배열의 요소를 하나씩 출력하여 매개변수로 받은 콜백함수를 실행 시 콜백함수 내부에서 사용하는 변수로 활용함
//    - > 배열명.forEach(function(currentValue, index, array) {
//          반복 실행 소스코드 ...
//        }
//    - currentValue : 필수 입력, 지정한 배열에서 추출한 요소의 값
//    - index : 옵션, 지정한 배열에서 추출한 요소의 index 번호
//    - array : 옵션, 지정한 배열, 원본 배열에 접근할 수 있음
// 자바스크립트의 for ~ in 문과 비슷하지만 for ~ in 문은 object 타입의 요소를 모두 출력하는 함수 (object 타입의 key를 출력)


console.log("\n----- forEach() 사용 -----\n");

const numbers = [10, 20, 30, 40, 50];

console.log("\n----- ES5에서 배열의 내용 for문으로 모두 출력 -----");
for (let i = 0; i < numbers.length; i++) {
  console.log(`index : ${i}, value : ${numbers[i]}`);
}

console.log("\n----- ES5에서 배열의 내용 for ~ in문으로 모두 출력 -----");
for (let item in numbers) {
  console.log(`index : ${item}, value : ${numbers[item]}`);
}


console.log("\n----- ES6에서 배열의 내용 forEach문으로 모두 출력 -----");
numbers.forEach(function (item) {
  console.log(`value : ${item}`);
});

numbers.forEach(function (item, index) {
  console.log(`index : ${index}, value : ${item}`);
});

console.log("원본 배열 : ");
console.log(numbers);

numbers.forEach(function (item, index, array) {
  console.log(`index : ${index}, value : ${item}`);
  console.log("배열 (array) 내용 : ");
  console.log(array);
  console.log("----------------------");
});

console.log("\n----- forEach에 화살표 함수 사용 -----\n");

numbers.forEach(item => {
  console.log(`현재 값 : ${item}`);
});

console.log()

numbers.forEach(item => console.log(`현재 값 : ${item}`));







