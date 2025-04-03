
// 변수를 직접 export
export const name = '아이유';
export const age = 30;

// 변수 선언
let email = 'iu@bitc.ac.kr';
let tel = '01012345678';
let addr = '부산광역시 부산진구 전포대로';

// 기존에 선언된 변수를 한번에 export
// as 를 사용하여 외부에 제공되는 변수명을 별칭으로 변경
export { email, tel as phone, addr }

// 함수를 직접 export
export function sum(num1, num2) {
  console.log(`두 수의 합은 ${num1 + num2}`);
}

// 함수 선언
function sub(num1, num2) {
  console.log(`두 수의 차는 ${num1 - num2}`);
}

// 화살표 함수를 직접 export
export const multi = num1 => num1 * num1;
// 화살표 함수 선언
const divide = (num1, num2) => num1 / num2;

// 미리 선언한 함수를 한번에 export
// as를 사용하여 export 하는 함수에 별칭을 사용함
export { sub, divide as div }

// 클래스 선언
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area = num1 => this.radius * this.radius * num1;
}

// 미리 선언한 클래스를 export
export { Circle }







