
import { useState } from 'react';
import Greeting from './Greeting.jsx';

// 자식 컴포넌트, 다른 컴포넌트에서 사용하는 컴포넌트가 아닐 경우 하나의 파일에 여러개의 컴포넌트를 선언해서 사용해도 상관없음
function LoginButton(props) {
  // 부모 컴포넌트가 전달해준 데이터의 이름이 onClick 이고, 실제로 전달된 데이터는 함수임
  return <button type={'button'} className={'btn btn-primary'} onClick={props.onClick}>로그인</button>
}

// 자식 컴포넌트
function LogoutButton(props) {
  return <button type={'button'} className={'btn btn-warning'} onClick={props.onClick}>로그아웃</button>
}

// 부모 컴포넌트
function LoginControl() {
  // state로 관리되는 변수 선언, 초기값 false
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 이벤트 처리 함수 선언
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  }

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }

  // 엘리먼트 변수 : 일반 자바스크립트 변수에 저장된 내용이 JSX 문법으로 만들어진 컴포넌트인 변수
  // 엘리먼트 변수로 사용할 변수 선언, 실제로는 일반 자바스크립트 변수
  let btn;

  // 변수 isLoggedIn 의 값에 따라 조건부 랜더링 연산
  if (isLoggedIn == true) {
    // 로그인 상태(isLoggedIn == true)면 엘리먼트 변수 btn에 LogoutButton 컴포넌트를 저장
    btn = <LogoutButton onClick={handleLogoutClick} />
  }
  else {
    // 로그아웃 상태(isLoggedIn == false)면 엘리먼트 변수 btn에 LoginButton 컴포넌트를 저장
    btn = <LoginButton onClick={handleLoginClick} />
  }

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {/* 엘리먼트 변수를 화면에 출력 */}
      {/* 엘리먼트 변수를 활용한 조건부 랜더링 */}
      {/* 엘리먼트 변수를 사용 시 불 필요한 화면 구성을 하지 않아도 됨 */}
      {btn}
    </div>
  );

//   엘리먼트 변수를 사용하지 않을 경우, 결과에 따라 출력될 화면 자체를 모두 구현해야 함
//   if (isLoggedIn == true) {
//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         <LogoutButton onClick={handleLogoutClick} />
//       </div>
//     )
//   }
//   else {
//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         <LoginButton onClick={handleLoginClick} />
//       </div>
//     )
//   }
}

export default LoginControl;










