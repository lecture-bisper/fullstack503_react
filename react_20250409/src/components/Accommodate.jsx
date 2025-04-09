import { useEffect, useState } from 'react';
import useCounter from './useCounter.jsx';

const MAX_CAPACITY = 10;

function Accommodate() {
  // state로 관리되는 변수 isFull 선언, 초기값 false
  const [isFull, setIsFull] = useState(false);
  // 커스텀 훅을 사용할 경우
  const [count, incrementCount, decrementCount] = useCounter(0);

  // 커스텀 훅을 사용하지 않았을 경우
  // state로 관리되는 변수 count 선언, 초기값 0
  // const [count, setCount] = useState(0);
  //
  // // 이벤트 처리 함수
  // const incrementCount = () => {
  //   return setCount((count) => count + 1);
  // }
  //
  // const decrementCount = () => {
  //   return setCount((count) => Math.max(count - 1, 0));
  // }

  useEffect(() => {
    console.log('--------------------');
    console.log('useEffect() 실행');
    console.log(`isFull = ${isFull}`);
  }, []);

  useEffect(() => {
    // 최대값보다 크거나 같으면 true, 아니면 false 가 isFull에 저장
    setIsFull(count >= MAX_CAPACITY);
    console.log(`현재 count 값 : ${count}`);
  }, [count]);

  return (
    <div>
      <p>{`총 ${count} 명 수용했습니다.`}</p>
      <button type={'button'} className={'btn btn-primary'} onClick={incrementCount} disabled={isFull}>입장</button>
      <button type={'button'} className={'btn btn-warngin ms-2'} onClick={decrementCount}>퇴장</button>
      {/* 조건부 렌더링을 통해서 화면에 출력 */}
      {/* isFull의 값이 false 면 화면 출력 안함, true이면 화면 출력 */}
      {isFull && <p className={'text-danger'}>정원이 가득찼습니다.</p>}
    </div>
  );
}

export default Accommodate;










