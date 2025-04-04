

function Welcome(props) {
// 컴포넌트의 UI를 담당하는 return 부분에 1라인의 JSX 코드만 존재할 경우 () 생략 가능
// 2라인 이상일 경우 반드시 () 를 사용해야 함
  return <h1>Hello, {props.name}</h1>

// 컴포넌트의 UI를 생성 시 부모 태그는 단 1개만 존재할 수 있음
  // return (
// 부모 태그로 사용할 수 있는 태그가 2개 이상이기 때문에 오류 발생
    //   <div>
    //     <h4>자식 태그</h4>
    //     <p>자식 태그</p>
    //   </div>
    //   <div>
    //     <h4>두번째 화면</h4>
    //     <p>두번째 화면 자식태그</p>
    //   </div>
  // );
}

export default Welcome










