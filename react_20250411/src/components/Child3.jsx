// Child3.jsx

function Child3(props) {
  let childValue = 1000;

  // 상태 끌어올리기
  // 자식 컴포넌트의 데이터를 부모 컴포넌트로 전달하는 방법
  // 부모 컴포넌트가 자식 컴포넌트로 전달하는 props에 부모 컴포넌트의 함수를 전달하면 자식 컴포넌트에서 부모 컴포넌트의 함수를 대신 실행할 수 있음
  // 1. 자식 컴포넌트에서 전달할 데이터를 받을 수 있는 변수를 부모 컴포넌트에 선언
  // 2. 자식 컴포넌트에서 데이터는 전달받을 변수를 state로 관리
  // 3. 부모 컴포넌트에서 state로 관리되는 변수를 수정하는 setState() 함수를 자식 컴포넌트로 전달
  // 4. 부모 컴포넌트에서 전달받은 setState() 함수를 자식 컴포넌트에서 대신 실행
  // 5. 자식 컴포넌트가 가지고 있는 데이터가 부모 컴포넌트의 state로 관리되고 있는 변수에 저장됨

  return (
    <div className={'border border-2 border-info p-3 m-3'}>
      <h3>자식 컴포넌트</h3>
      <h4>부모 컴포넌트가 전달한 데이터 1 : {props.data1}</h4>
      <h4>자식 컴포넌트가 가지고 있는 데이터  : {childValue}</h4>

      <br/><br/>
      {/* 부모 컴포넌트에서 props 를 통해서 전달받은 데이터인 data1Func() 함수를 버튼 이벤트의 이벤트 처리 함수로 사용함 */}
      {/* 부모 컴포넌트에서 전달한 함수를 자식 컴포넌트에서 대신 실행할 수 있음 */}
      <button type={'button'} className={'btn btn-success'} onClick={props.data1Func}>부모가 전달한 함수 실행</button>

      {/* 부모 컴포넌트에서 props 를 통해서 전달받은 setState() 함수를 자식 컴포넌트에서 대신 실행할 수 있음 */}
      <button type={'button'} className={'btn btn-info'} onClick={() => {
        props.data2Func(childValue);
      }}>부모가 전달한 setState() 함수 대신 실행</button>

    </div>
  );
}

export default Child3;










