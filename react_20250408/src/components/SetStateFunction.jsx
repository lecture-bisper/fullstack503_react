// 리액트에서 제공하는 state 를 쉽게 수정할 수 있도록 하는 hooks 인 useState
import {useState} from "react";

// 함수 컴포넌트로 컴포넌트 선언
function SetStateFunction() {

  //  리액트의 hooks의 기능 중 useState 기능을 사용하여 컴포넌트의 state를 수정하도록 설정
  //  = 연산자 왼쪽의 첫번째 요소인 stateString 이 현재 컴포넌트에서 state로 관리되는 변수가 됨
  //  = 연산자 왼쪽의 두번째 요소인 setStateString 이 현재 컴포넌트에서 state로 관리되는 변수의 값을 수정하는 함수가 됨
  //  state 변경 함수의 이름은 'set + 변수명' 형태로 사용, 카멜명명법을 사용하여 지정
  //  useState(초기값) : 리액트의 최신 기능인 hooks의 기능 중 하나, state 객체를 관리하는 역할
  //  초기값을 설정하지 않을 경우 'null'이 들어감
  //  set함수명() 형식으로 state의 값 변경 시 화면 업데이트가 발생됨
  //  사용법 :
  //  let [변수명, set함수명] = useState(초기값); // state 로 관리할 변수 설정
  //  set함수명(수정할 값)  //state로 관리되고 있는 변수의 값 수정
  let [stateString, setStateString] = useState('click');

  // 함수 선언
  const stateChange = (e) => {
    console.log(`원본 : ${stateString}`);
    // 변수 stateString의 값을 = 연산자로 직접 수정
    // virtual DOM에서만 변경되고 화면 업데이트는 발생하지 않음
    stateString = 'stateString을 직접 수정';
    console.log(`수정 : ${stateString}`);
    // 현재 이벤트를 중지하는 명령어
    e.preventDefault();
  }

  return (
    <div>
      <button type={'button'} className={'btn btn-primary'} style={{marginRight: '16px'}} onClick={(e) => {
        // 클릭 이벤트 발생 시 stateChange() 함수를 호출
        stateChange(e);
      }}>state 직접 수정</button>
      <button type={'button'} className={'btn btn-success'} onClick={() => {
        console.log(`원본 : ${stateString}`);
        // 리액트의 hooks에서 제공하는 useState() 를 사용하여 state가 관리하는 데이터를 수정할 수 있는 함수 setStateString() 를 호출
        // setStateString()은 state 가 관리하고 있는 변수 stateString 의 값을 수정하고, 리액트 생명주기 함수 중 componentDidUpdate() 함수를 호출
        // componentDidUpdate() 함수가 호출되면 virtual DOM의 내용을 실제 DOM의 내용에 적용됨
        setStateString('클릭')
        console.log(`수정 : ${stateString}`);
      }}>setState로 수정</button>
      <br/>
      <p>[함수 컴포넌트에서 state로 변경하기] stateString : {stateString}</p>
    </div>
  );
}

export default SetStateFunction










