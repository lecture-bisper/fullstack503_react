import { useState } from 'react';

function Events() {

  // 변수 isToggleOn 을 state로 관리
  const [isToggleOn, setIsToggleOn] = useState(false);

  // 이벤트 처리 시 사용할 함수, 미리 선언해 놓음
  function handleClick() {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  }

  // 이벤트 처리 시 사용할 함수(화살표 함수), 미리 선언해 놓음, 매개변수가 있음
  const handleDelete = (id, str, e) => {
    alert(`id : ${id}, str: ${str}, target : ${e.target.innerText}`);
  }

  const handleArgs = (id, str) => {
    alert(`id : ${id}, str: ${str}`);
  }

  return (
    <div>
      {/* 리액트의 이벤트 속성은 카멜명명법 사용 */}
      {/* 미리 선언해 놓은 이벤트 처리 함수를 이름만 등록하여 사용 */}
      <button type={'button'} className={'btn btn-primary me-2'} onClick={handleClick}>{isToggleOn ? '켜짐' : '꺼짐'}</button>
      {/* 리액트의 이벤트 속성에 이벤트 처리 함수를 익명 함수로 직접 입력하여 사용 */}
      {/* 화살표 함수로 익명함수를 생성하여 직접 처리*/}
      <button type={'button'} className={'btn btn-primary'} onClick={() => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
      }}>{isToggleOn ? '켜짐' : "꺼짐"}</button>
      <br/>
      <br/>

      {/* 미리 생성해 놓은 이벤트 처리 함수를 호출 시 매개변수가 존재할 경우 이벤트를 처리할 함수명과 매개변수를 함께 호출 */}
      {/* 매개변수가 있는 이벤트 처리 함수를 호출 시 이벤트 객체까지 필요할 경우 익명 함수를 통해서 이벤트 객체를 매개변수로 받아와서 사용 */}
      <button type={'button'} className={'btn btn-primary me-2'} onClick={(e) => {
        handleDelete(1, "매개변수", e);
      }}>매개변수가 있는 버튼 이벤트</button>
      <button type={'button'} className={'btn btn-primary'} onClick={() => {
        handleArgs(10, "매개변수");
      }}>매개변수가 있는 버튼 이벤트</button>
    </div>
  );
}

export default Events;










