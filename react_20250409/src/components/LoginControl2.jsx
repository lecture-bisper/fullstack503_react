import { useState } from 'react';
import Greeting from './Greeting.jsx';

// 자식 컴포넌트
function LoginButton(props) {
  return <button type={'button'} className={'btn btn-primary'} onClick={props.onClick}>로그인</button>
}

// 자식 컴포넌트
const LogoutButton = props => <button type={'button'} className={'btn btn-warning'} onClick={props.onClick}>로그아웃</button>


// 부모 컴포넌트
function LoginControl2() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {
        // 삼항 연산자를 사용하여 if ~ else 문을 구현
        // JSX 문법에서는 자바스크립트의 전통적인 if ~ else 문을 사용할 수 없음
        // 엘리먼트 변수 없이 삼항연산자를 사용하여 조건에 따라 자식 컴포넌트를 변경하여 호출
        isLoggedIn == true
          ? <LogoutButton onClick={handleLogoutClick} />
          : <LoginButton onClick={handleLoginClick} />
      }
    </div>
  );
}

export default LoginControl2;










