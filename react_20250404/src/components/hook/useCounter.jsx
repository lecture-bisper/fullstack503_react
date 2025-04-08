import {useState} from "react";

function useCounter(initialValue) {
  // 표시되는 횟수를 저장하는 useState
  const [count, setCount] = useState(initialValue);
  // 더하기를 했을때의 함수
  const increaseCount = () =>setCount(()=>count + 1);
  // 빼기 했을때의 함수
    const decreaseCount = () =>setCount(()=>Math.max(count - 1,0));
  return [count, increaseCount, decreaseCount];
}

export default useCounter










