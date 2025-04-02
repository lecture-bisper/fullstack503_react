// 전개 연산자
// ES6에서 추가된 문법으로 전개 연산자( ... ) 사용 시 배열 혹은 object 타입의 전체 요소 및 요소 일부분을 다른 배열이나 object 타입으로 빠르게 복사가 가능함
// 배열의 요소를 변수에 대입할 경우 대입 연산자 ( = ) 왼쪽에 배열처럼 [] 를 사용하고, [] 안에 변수를 입력 후 대입 연산자 ( = ) 오른쪽에 배열을 대입함
// 배열의 요소를 하나씩 꺼내어 대입 연산자 ( = ) 왼쪽에 있는 변수에 순서대로 하나씩 대입함
// 대입 연산자 ( = ) 왼쪽에 있는 변수 개수가 대입 연산자 ( = ) 오른쪽의 배열 크기보다 클 경우 null 을 대입함
// 대입 연산자 ( = ) 왼쪽에 있는 변수에 값을 지정하여 기본값으로 사용가능
// 대입 연산자 ( = ) 왼쪽에 있는 변수에 전개 연산자 ( ... ) 사용 시 대입 연산자 ( = ) 오른쪽에 있는 배열의 모든 나머지 요소를 배열로 대입함


// ES5
console.log("\n----- ES5 -----\n");

var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
console.log(`원본 배열 array1 : ${array1}`);
console.log(`원본 배열 array2 : ${array2}`);

// es5에서 2개의 배열을 합하여 하나의 배열로 만들기
var combined = [array1[0], array1[1], array2[0], array2[1]];
console.log(`배열 combined : ${combined}`);

// es5에서 2개의 배열을 concat() 함수를 사용하여 하나의 배열로 만들기
var combined = array1.concat(array2);
console.log(`배열 combined : ${combined}`);

// 변수에 배열의 요소를 대입
var first = array1[0];
var second = array1[1];
// 변수에 배열의 요소 대입 시 대입할 값이 없을 경우 기본값을 대입
var three = array1[2] || 'empty';
console.log('first : ' + first);
console.log(`second : ${second}`);
console.log(`three : ${three}`);


// ES6
console.log("\n----- ES6 -----\n");
var array1 = ['one', 'two', 3, 4, 5, 6, 7, 8, 9];
var array2 = ['three', 'four'];
console.log(`원본 배열 array1 : ${array1}`);
console.log(`원본 배열 array2 : ${array2}`);

// 전개 연산자 ... 를 사용하여 지정한 배열의 내용을 모두 출력
var combined = [...array1, ...array2];
console.log(`배열 combined : ${combined}`);

// 전개 연산자를 사용하여 배열의 요소를 변수에 대입
// = 기호를 사용하여 기본값 설정
var [first, second, three = 'empty', ...others ] = array1;

console.log(`first : ${first}`);
console.log(`second : ${second}`);
console.log(`three : ${three}`);
console.log(`others : ${others}`);

console.log(`first의 타입 : ${typeof first}`);
console.log(`three의 타입 : ${typeof three}`);
console.log(`others의 타입 : ${typeof others}`);








