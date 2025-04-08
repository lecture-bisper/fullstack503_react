import {useEffect, useState} from "react";

// function add(a,b){
//   return a + b;
// }
// add(1,2) useMemo를 이용하여 인수인 1,2와 결과값 3을 저장
// add(1,2) 다음번 실행에서 인수가 같으면 함수를 실행하지 않고 결과값을 바로 돌려준다.
//   add(3,4) 인수가 1,2가 아니기 때문에 함수를 실행하여 결과값을 다시 계산한다.

//useCallback() : useMemo()는 함수의 결과값을 저장하지만 useCallback()은 함수자체를 저장
// 특정 변수의 값이 변경되었을때 만 리렌더링을 실행하고 그 이외에는 실행하지 않음
function Counter() {
  // var count = 0;
  // 화면에 변경가능한 데이터를 출력하고 싶을 때 사용
  // 두번째에 설정한 setCount로 데이터 변경 가능
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const nameChange = ()=>{
    setName(prompt("이름을 입력하세요."));
  }
  // 의존성 배열 생략 : DOM이 변경된 후 useEffect를 실행한다.
  // DOM이기때문에 문서의 내용이 하나라도 변경되면 실행됨
  useEffect(() =>{
    document.title = `총 ${count}번 클릭했습니다.`;
    console.log("의존성 배열 생략 방식 실행");
  })
  // 컴포넌가 처음 마운트 되는 한번만 실행되고 그 후에는 실행되지 않음.
  // componentDidMount() 처럼 사용 가능
  // 화면 출력 후 데이터를 설정해야할때 , 초기화시에 사용
  useEffect(() =>{
    console.log("컴포넌트가 처음 마운트 될때 실행")
  },[]);
  // count가 변경될때만 실행되는 방식
  useEffect(()=>{
    console.log("count가 변경되었을 때 실행")
  },[count]);
  // return을 이용하여 componentWillUnmount()처럼 사용 가능
  useEffect(()=>{
    return () =>{
      console.log("useEffect 언마운트 실행");
    }
  },[count])
  return (
    <div>
      <p>{name}</p>
      <button onClick={()=>{nameChange()}}>
        이름 변경
      </button>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={()=>{setCount(count+1)}}>
         클릭
      </button>
    </div>
  );
}

export default Counter










