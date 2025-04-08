import {useEffect, useState} from "react";
import useCounter from "./hook/useCounter.jsx";

const MAX_CAPACITY = 10;
function Accommodate() {
  // 최대값을 확인하는 용도의 useState
  const [isFull, setIsFull] = useState(false);
  // 커스텀 훅인 useCounter를 사용
  const [count, increaseCount, decreaseCount] = useCounter(0);
  // 의존성 배열을 생략한 useEffect : 시작시, 업데이트시에 실행
  useEffect(() =>{
    console.log("===================");
    console.log("useEffect() is called.");
    // 최대값인지 아닌지 확인하는 isFull 출력
    console.log(`isFull : ${isFull}`);
  });
  // 의존성 배열에 count를 설정 : count가 변경될때마다 실행
  useEffect(() =>{
    // count가 최대값 보다 크면 true, 작으면 false를 설정
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value : ${count}`);
  },[count])
  return (
    <div style={{padding:16}}>
      <p>{`총 ${count}명 수용했습니다.`}</p>
      {/* 입장버튼 클릭시 count가 1씩 더해짐,
      count에 최대값이 설정되면 버튼을 사용할 수 없도록 설정*/}
      <button onClick={increaseCount} disabled={isFull}>입장</button>
      {/*퇴장 클릭시 count가 1씩 감소하도록 설정*/}
      <button onClick={decreaseCount}>퇴장</button>
      {/* 조건식 && 조건식이 true라면 실행, false라면 실행되지 않음*/}
      {isFull && <p style={{color:"red"}}>정원이 가득찼습니다.</p>}
    </div>
  );
}

export default Accommodate










