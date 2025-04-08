import {useState} from "react";
import Child from "./Child.jsx";

// 현재 Parent 컴포넌트의 전역 변수 선언, 초기값 100
let data1 = 100;

// 함수 컴포넌트 선언
function Parent() {
  // Parent 컴포넌트의 지역 변수로 data2 선언, useState를 사용하여 state 객체로 관리, 초기값 200
  let [data2, setData2] = useState(200);

  // 클릭 이벤트 시 동작할 함수 선언
  const firstDataChange = () => {
    // 전역 변수의 값을 직접 수정
    console.log(`data1 : ${++data1}`);
  }

  const secondDataChange = () => {
    // setState()로 state로 관리되는 데이터 수정, 화면 업데이트 발생
    setData2(++data2);
    console.log(`data2 : ${data2}`);
  }

  return (
    <div className={'border border-2 rounded-3 p-3'}>
      {/* 버튼 이벤트 설정 */}
      <button type={'button'} className={'btn btn-primary me-2'} onClick={firstDataChange}>부모 첫번째 데이터 수정</button>
      <button type={'button'} className={'btn btn-primary'} onClick={secondDataChange}>부모 두번째 데이터 수정</button>

      {/* 현재 데이터 출력 */}
      <h4 className={'my-3'}><span>data1 : {data1}, data2 : {data2}</span></h4>

      {/* 자식 컴포넌트 호출, data1, data2를 전달 */}
      <Child data1={data1} data2={data2} />
    </div>
  );
}

export default Parent










