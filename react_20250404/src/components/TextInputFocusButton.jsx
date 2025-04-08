import {useRef, useState} from "react";

function TextInputFocusButton() {
  const inputElem = useRef(null);
  const [inputState, setInputState] = useState("");
  const onButtonClick = (event) =>{
    // current를 사용하여 자바스크립트에서 사용하는 여러가지 속성들 사용가능
    // getElementById(), querySelecter() 와 유사하게 태그를 가져와 사용할 수 있음.
    inputElem.current.focus();
    inputElem.current.value = "Focus the input 클릭";
    console.log(inputElem.current); // input태그
    console.log(event.currentTarget); // 클릭했던 버튼 태그
  }
  // useState의 경우 값을 변경하려면 반드시 setState로 변경해야함
  // onStateChange 함수에서 setState를 실행하도록 만듬
  const onStateChange = (event) =>{
    //클릭했던 input태그에 있는 value를 setState에서 설정하여 데이터를 변경
    console.log(event.currentTarget);
    console.log(event.currentTarget.value);
    setInputState(event.target.value);
  }
  // useState : 리렌더링 해야하는 데이터에 사용(비밀번호 확인)
  // useRef : 렌더링이 필요없는 데이터(input태그의 value값), DOM을 사용할 시
  return (
    <div>
      <>
        {/* ref속성에 uefRef변수 이름을 설정하여 태그와 연결*/}
        <input ref={inputElem} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
        <input type="text" value={inputState}
               onChange={(event)=>{onStateChange(event)}} />
      </>
    </div>
  );
}

export default TextInputFocusButton










