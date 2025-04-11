// Parent2.jsx

import { useState } from 'react';
import Child3 from './Child3.jsx';

function Parent2() {
  let parentValue1 = 100;
  const [parentValue2, setParentValue2] = useState(200);

  const parentValue1Change = () => {
    parentValue1++;
    console.log(`부모 컴포넌트의 함수로 데이터 수정 : ${parentValue1}`);
  }

  return (
    <div className={'border border-2 border-primary p-3'}>
      <h3>부모 컴포넌트 2</h3>
      <h4>부모 컴포넌트가 가지고 있는 일반 변수 : {parentValue1}</h4>
      <h4>부모 컴포넌트가 가지고 있는 state 변수 : {parentValue2}</h4>
      <button type={'button'} className={'btn btn-primary me-2'} onClick={() => {
        parentValue1++;
        console.log(`부모 컴포넌트에서 버튼으로 데이터 수정 : ${parentValue1}`);
      }}
      >부모의 첫번째 데이터 수정</button>

      <button type={'button'} className={'btn btn-outline-primary'} onClick={() => setParentValue2(parentValue2 + 1)}>부모의 두번째 데이터 수정</button>
      <br/>
      {/* 자식 컴포넌트에 전달하는 데이터로 함수를 전달 */}
      {/* 자식 컴포넌트에 전달하는 데이터로 부모 컴포넌트의 setState 함수를 전달 */}
      <Child3 data1={parentValue1} data1Func={parentValue1Change} data2Func={setParentValue2}/>
    </div>
  );
}

export default Parent2;










