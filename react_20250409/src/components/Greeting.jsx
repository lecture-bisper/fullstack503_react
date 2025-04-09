import UserGreeting from './UserGreeting.jsx';
import GuestGreeting from './GuestGreeting.jsx';

//  조건부 랜더링 : 어떠한 조건에 따라서 랜더링이 달라지는 것
//  자바스크립트에서 조건식으로 데이터를 구분할 경우 true / false 2가지로 구분할 수 있음
//  여기서 데이터에 따라 Truthy / Falsy 로 구분할 수 있음
//  간단하게 데이터가 있으면 Truthy, 없으면 Falsy 로 구분함

//  Truthy : true(Boolean 값 true), {} (빈 object 타입), [] (빈 배열), 100, -200 (0이 아닌 숫자), "0", "false" (빈 문자열이 아닌 문자열)
//  Falsy : false (Boolean 값 false), 0, -0, 0.0 (양수, 음수 관계없이 숫자 0), 0n (BigInt 타입의 0), '', "", `` (빈 문자열), null (데이터 없음), undefined (초기화되지 않음), NaN (Not a Number, 숫자가 아님)

// let a;   - 변수 선언과 동시에 초기화하지 않았기 때문에 undefined 상태가 되어 Falsy
// let b = [];  - 변수 선언과 동시에 배열 타입을 선언했기 때문에 변수 b에 데이터가 저장되어 있어 Truthy로 동작
// let c = {};  - 변수 선언과 동시에 object 타입을 선언했기 때문에 변수 c에 데이터가 저장되어 있어 Thuthy 로 동작

// 함수 컴포넌트 선언
function Greeting(props) {
  // 부모한테서 전달받은 데이터 isLoggedIn 을 변수 isLoggedIn 에 저장
  // 부모한테서 데이터를 전달받을 때 사용하는 props 는 읽기 전용
  const isLoggedIn = props.isLoggedIn;

  // if 문 통해서 isLoggedIn 의 값을 확인 후 출력하는 컴포넌트를 변경함 (조건부 랜더링)
  if (isLoggedIn == true) {
    return <UserGreeting />
  }
  else {
    return <GuestGreeting />
  }
}

export default Greeting;










