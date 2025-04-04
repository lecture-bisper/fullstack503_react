import React from "react";

// 클래스 컴포넌트는 React의 Component 클래스를 상속받아 사용함
// 자바스크립트의 클래스이기 때문에 생명주기 함수를 사용할 수 있음
// 멤버 메소드, 필드도 선언하여 사용할 수 있음
// JSX 코드를 사용한 UI 부분은 render() 메소드를 사용하여 구현함
class ClassComponent extends React.Component {
  
  // UI를 그리는 부분
  render() {
    return (
      <div>
        <h4>클래스 컴포넌트 방식으로 컴포넌트 생성</h4>
        <p>클래스 컴포넌트로 생성한 자식 컴포넌트 입니다.</p>
      </div>
    );
  }
}

export default ClassComponent










