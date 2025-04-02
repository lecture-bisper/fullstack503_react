
// ES5 의 구조 분해 할당
console.log("\n----- ES5 의 구조분해할당 -----\n");

// es5에서 배열 선언
var list = [0, 1];
// 배열의 요소를 변수에 저장
var item1 = list[0];
var item2 = list[1];
// 배열의 요소를 변수에 저장 시 데이터가 없으면 설정된 기본값 사용
var item3 = list[2] || -1;
console.log(list);
console.log(item1);
console.log(item2);
console.log(item3);

// 2개의 변수가 가지고 있는 데이터를 서로 바꾸기
console.log(`원본 item1 출력 : ${item1}`);
console.log(`원본 item2 출력 : ${item2}`);

// ES5 방식에서 swap을 진행 시 임시 저장 변수가 필요함
var temp = item2;
item2 = item1;
item1 = temp;
console.log(`바꾼 후 item1 출력 : ${item1}`);
console.log(`바꾼 후 item2 출력 : ${item2}`);

// object 타입 사용
var obj = {
  key1: 'one',
  key2: 'two',
};

// 변수에 object 타입의 요소 값을 대입
var key1 = obj.key1;
var key2 = obj.key2;
// object 타입의 key3 을 변수 key3에 대입, 없으면 기본값 사용
var key3 = obj.key3 || 'key3에 설정된 기본값';
// 새로운 변수에 object 타입의 key1 의 값을 대입
var newKey = obj.key1;

console.log('원본 object 타입의 obj 값 : ');
console.log(obj);
console.log(`key1 의 값 : ${key1}`);
console.log(`key2 의 값 : ${key2}`);
console.log(`key3 의 값 : ${key3}`);
console.log(`newKey 의 값 : ${newKey}`);


// ES6 방식의 구조 분해 할당
console.log("\n\n----- ES6의 구조 분해 할당 -----\n");

var list = [0, 1];
// ES6 의 구조 분해 할당을 사용하여 변수에 배열의 요소를 저장
// item3은 기본값 설정
var [item1, item2, item3 = -1] = list;
console.log(list);
console.log(item1);
console.log(item2);
console.log(item3);

// ES6 방식에서의 swap 사용하기
console.log(`원본 item1 출력 : ${item1}`);
console.log(`원본 item2 출력 : ${item2}`);

// ES6의 구조 분해 할당을 사용하여 임시 변수 없이 두 변수의 값을 바꿀 수 있음
[item2, item1] = [item1, item2];

console.log(`바꾼 후 item1 출력 : ${item1}`);
console.log(`바꾼 후 item2 출력 : ${item2}`);

var obj = {
  key1: 'one',
  key2: 'two',
};
console.log("원본 object 타입 obj의 값 : ");
console.log(obj);

// ES6의 구조 분해 할당은 object 타입에도 적용됨
// object 타입은 변수와 key 이름이 같을 경우 해당 key의 value를 변수에 저장
// key 명과 동일한 변수명에 : 새변수명 사용 시 새 변수명에 지정한 key의 값이 저장됨
var {key2, key1: newKey, key3 = 'key3에 설정된 기본값'} = obj;

console.log(`변수 key1 의 값 : ${key1}`);
console.log(`변수 key2 의 값 : ${key2}`);
console.log(`변수 key3 의 값 : ${key3}`);
console.log(`변수 newKey 의 값 : ${newKey}`);











