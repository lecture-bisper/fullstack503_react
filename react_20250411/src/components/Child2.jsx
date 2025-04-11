// Child2.jsx

function Child2(props) {
  return (
    <div className={'border border-2 border-primary rounded-2 m-4 p-4'}>
      <h3>오른쪽 자식 컴포넌트 영역</h3>
      <h4>첫번째로 전달받은 데이터 : {props.data1}</h4>
      <h4>두번째로 전달받은 데이터 : {props.data2}</h4>
    </div>
  );
}

export default Child2;










