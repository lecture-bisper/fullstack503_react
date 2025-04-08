import {useState} from "react";

const CounterUseState = () => {

  // React Hook : 리액트의 state와 생명주기 함수 기능에 갈고리를 걸어서 원하는 시점에 정해진 함수를 실행하도록 만든 것

  // useState : state 상태 관리를 쉽게 하기 위해서 사용
  // useEffect : 생명주기 함수를 쉽게 사용하기 위해서 사용
  // useNavigate : React Router 를 사용하여 MPA 방식 웹을 만드는 것처럼 하기 위해서 사용

  // useMemo : 기존에 수행한 결과값을 메모리에 저장해 두고 동일한 입력이 들어올 경우 해당 데이터를 재활용하여 로딩 속도록 높임
  // useCallback : useMemo와 동일한 기능으로 useMemo는 결과값을 재활용하고, useCallback은 함수를 재활용함
  // useRef : 특정 컴포넌트에 접근할 수 있도록 해줌


  // useState() hook 을 사용하기 위해서 설정
  // 변수는 const 키워드를 사용하여 직접 수정할 수 없도록 설정
  // 지정한 변수의 값을 setState()를 통해서 수정
  // useState() 함수에 지정한 상수의 초기값을 설정
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>총 <span className={'fs-3'}>{count}</span>번 클릭했습니다.</p>
      <button type={'button'} className={'btn btn-primary'} onClick={() => {
        // 버튼 이벤트 발생 시 state로 관리되고 있는 상수 count의 값을 변경하기 위해서 setCount()를 호출함
        // useState 는 비동기 방식으로 동작하기 때문에 화면에 표시되는 값과 console에 출력되는 값이 다르게 출력될 수 있음
        setCount(count + 1); // setCount()를 통해서 수정 요청
        // console 은 현재 count 값을 출력, setCount() 를 통해서 수정되기 전이기 때문에 count + 1을 통해서 변경될 값을 console에 출력
        console.log(`useState() count : ${count + 1}`);
      }}>클릭</button>
    </div>
  );
}

export default CounterUseState;











