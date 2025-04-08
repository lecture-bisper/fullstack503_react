import {useState} from "react";

function Toggle() {
  const [isToggleOn, setIsToggleOn] = useState(false);
  // 함수선언문을 이용한 이벤트 작성
  function handleToggle(){
    setIsToggleOn((isToggleOn)=>!isToggleOn);
  }
  // 화살표 함수를 이용한 이벤트 작성
  const handleClick = () =>{
    setIsToggleOn((isToggleOn)=>!isToggleOn);
  }
  const handleInput = (event) =>{
    console.log(event.target.value);
  }
  return (
    <div>
      <button onClick={handleToggle}>
        {isToggleOn ? `켜짐` : `꺼짐`}
      </button>
      {/*onClick={(전달할데이터)=>함수이름(전달할데이터)}*/}
      <input type="text"
             onChange={(event)=>handleInput(event)}/>
    </div>
  );
}

export default Toggle










