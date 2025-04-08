import {useEffect, useState} from "react";

function CounterUseEffect() {

  // 변수 count1, count2 를 useState를 사용하여 state 로 관리, 초기값 0
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // useEffect : 리액트에서 제공하는 hook 중 하나로 클래스 컴포넌트만 사용할 수 있었던 리액트 생명주기 함수를 사용할 수 있도록 해줌
  // 하나의 컴포넌트에서 여러개의 useEffect를 사용할 수 있음
  // 사용법 :
  // useEffect(effect콜백함수, 의존성배열);

  // effect콜백함수 : useEffect 사용 시 동작할 소스코드가 있는 함수
  // 의존성 배열 : 의존성 배열에 등록된 요소가 변경될 경우 useEffect에 등록된 effect 콜백 함수가 자동 동작

  // componentDidMount() 함수의 역할
  // useEffect 사용 시 의존성 배열을 빈 배열로 지정
  useEffect(() => {
    // 현재 컴포넌트가 처음 생성되고 UI가 처음 화면에 그려지고 난 후(render() 함수 호출) 자동 실행
    // count2 의 값을 setCount2() 를 통해서 수정, render() 자동 호출
    setCount2(100);
    console.log('컴포넌트 mount 사 동작');
  }, []);

  // componentDidUpdate() 함수의 역할
  // useEffect 사용 시 의존성 배열에 변수를 지정
  // 해당 변수의 값이 변경될 경우 useEffect 가 동작함
  useEffect(() => {
    document.title = `총 ${count1} 번 클릭했습니다.`;
    console.log('컴포넌트 update 시 동작');
  //   의존성 배열에 등록된 변수의 값이 변경될 경우 지정한 effect 콜백함수가 자동 실행
  }, [count1]);

  // componentWillUnmount() 함수의 역할
  // useEffect 사용시 effect 콜백 함수에 return 을 추가하고, 해당 부분에 콜백 함수를 입력하면 현재 컴포넌트가 삭제될 때 return 에 등록한 콜백 함수가 동작함
  useEffect(() => {

    // componentDidMount 혹은 componentDidUpdate 시 동작할 소스코드...

    // return 뒤에 있는 콜백함수 부분이 componentWillUnmount() 로 동작하는 함수
    return () => {
      console.log('컴포넌트 unmount 시 동작');
    }
  }, []);

  return (
    <div>
      <p>총 <span className={'fs-3'}>{count1}</span>번 클릭했습니다.</p>
      <button type={'button'} className={'btn btn-primary'} onClick={() => {
        setCount1(count1 + 1);
      }}>+1 클릭</button>
      <div className={'mt-3'}>
        <p>count2 의 값 : <span className={'fs-3'}>{count2}</span></p>
        <button type={'button'} className={'btn btn-primary'} onClick={() => {
          setCount2(count2 + 10);
        }}>+10 클릭</button>
      </div>
    </div>
  );
}

export default CounterUseEffect










