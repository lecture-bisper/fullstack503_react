import {useState, useEffect} from 'react'

function LifecycleFunc() {
  // 변수 num1 선언, 초기값 0
  let num1 = 0;
  // 변수 num2 를 state로 관리, 초기값 0
  let [num2, setNum2] = useState(0);

  // const [update, setUpdate] = useState('');

  useEffect(() => {
    // 변수 num1, num2의 값을 직접 변경
    // setState() 가 실행되지 않았기 때문에 화면에 미반영
    num1 = 1000;
    num2 = 2000;
    console.log(`num1 : ${num1}, num2 : ${num2}`);
  }, []);

  useEffect(() => {
    console.log('화면 업데이트 후 자동 실행되는 useEffect');
  }, [num2]);

  return (
    <div>
      <button type={'button'} className={'btn btn-primary'} onClick={() => {
        setNum2(num2 + 1);
        console.log(`setNum2() 로 수정 : ${num2 + 1}`);
      }}>화면 업데이트</button>
      <p>num1 : {num1}</p>
      {console.log(`Lifecycle Function num1 : ${num1}`)}
      <p>num2 : {num2}</p>
      {console.log(`Lifecycle Function num2 : ${num2}`)}
    </div>
  );
}

export default LifecycleFunc










