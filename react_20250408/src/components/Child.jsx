import {useState} from "react";

// 객체 분할 할당 방식으로 props의 데이터를 바로 매개변수로 할당함
// function Child({data1, data2}) {

function Child(props) {
  // 부모 컴포넌트에서 전달한 값을 자식 컴포넌트의 변수에 단순 대입
  // 부모 컴포넌트에서 데이터가 변경되면 자식 컴포넌트의 값도 함께 변경
  let data1 = props.data1;
  let data2 = props.data2;

  // 자식 컴포넌트의 변수로 선언하고 state로 관리
  let [data3, setData3] = useState(300);
  // 부모 컴포넌트에서 전달한 값을 자식 컴포넌트의 state에 전달
  // 자식 컴포넌트의 state 객체에서 관리하므로 부모 컴포넌트의 데이터 변경과 상관없이 사용할 수 있음
  let [data4, setData4] = useState(props.data2);

  // 변수 data1의 값을 직접 변경, state로 관리되고 있지 않음, 값만 변경되고 UI에 적용되지 않음
  const btn1Event = () => {
    console.log(`자식 컴포넌트 data1 : ${++data1}`);
  }

  // 변수 data2의 값을 직접 변경, state로 관리되고 있지 않음, 값만 변경되고 UI에 적용되지 않음
  const btn2Event = () => {
    console.log(`자식 컴포넌트 data2 : ${++data2}`);
  }

  // 부모 컴포넌트가 전달한 props 의 값을 직접 수정, props 는 읽기 전용이기 때문에 오류 발생
  const btn3Event = () => {
    props.data1 += props.data1;
    console.log(`자식 컴포넌트 props.data1 : ${props.data1}`);
  }

  const btn4Event = () => {
    props.data2 += props.data2;
    console.log(`자식 컴포넌트 props.data2 : ${props.data2}`);
  }
  
  const btn31Event = () => {
    // state로 관리되는 변수 data3을 setState()를 사용하여 수정
    setData3(++data3);
    console.log(`자식 컴포넌트 data3 : ${data3}`);
  }

  const btn41Event = () => {
    // state로 관리되는 변수 data4를 setState()를 사용하여 수정
    setData4(++data4);
    console.log(`자식 컴포넌트 data4 : ${data4}`);
  }

  return (
    <div className={'border border-2 border-primary rounded-2 p-3'}>
      <h3>자식 컴포넌트</h3>

      {/* 부모 컴포넌트에서 전달받은 데이터를 저장한 변수를 화면에 출력 */}
      {/* 부모 컴포넌트의 데이터가 변경되면 자식 컴포넌트의 props 도 함께 변경 */}
      <h4>data1 : {data1}, data2 : {data2}</h4>
      {/* 부모 컴포넌트에서 전달받은 데이터를 직접 출력 */}
      <h4>props.data1 : {props.data1}, props.data2 : {props.data2}</h4>
      {/* 자식 컴포넌트 전용 변수 data3, 부모 컴포넌트에서 전달받은 data2 를 자식 컴포넌트 전용 변수로 대입해서 사용, data4는 state로 관리 */}
      {/* data4는 초기값만 부모 컴포넌트를 통해서 입력받고 setState() 를 통해서만 값을 변경할 수 있음 */}
      <h4>data3 : {data3}, data4 : {data4}</h4>
      <hr/>

      <button type={'button'} className={'btn btn-info me-2'} onClick={btn1Event}>props.data1의 값을 받은 data1 수정</button>
      <button type={'button'} className={'btn btn-info'} onClick={btn2Event}>props.data2의 값을 받은 data2 수정</button>
      <hr/>
      <button type={'button'} className={'btn btn-success me-2'} onClick={btn3Event}>자식 컴포넌트가 props.data1 직접 수정</button>
      <button type={'button'} className={'btn btn-success'} onClick={btn4Event}>자식 컴포넌트가 props.data2 직접 수정</button>
      <hr/>
      <button type={'button'} className={'btn btn-primary me-2'} onClick={btn31Event}>자식 컴포넌트의 state 값 수정</button>
      <button type={'button'} className={'btn btn-primary'} onClick={btn41Event}>props.data2의 값을 자식 컴포넌트의 state로 받고 setState로 수정</button>
    </div>
  );
}

export default Child










