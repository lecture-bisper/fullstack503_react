// Parent1.jsx

import { useState } from 'react';
import Child1 from './Child1.jsx';
import Child2 from './Child2.jsx';

function Parent1() {
  const [data2, setData2] = useState('부모에서 state로 관리되는 데이터');

  return (
    <div className={'border border-2 rounded-2 p-4'}>
      <h3>부모 컴포넌트 영역</h3>
      <button type={'button'} className={'btn btn-primary'} onClick={() => setData2('부모한테서 변경된 데이터')}>클릭 시 부모 데이터 변경</button>
      <h3 className={'text-decoration-underline mt-3'}>{data2}</h3>

      <div className={'row'}>
        <div className={'col-sm'}>
          <Child1 data1={'부모가 전달한 데이터'} data2={data2} />
        </div>
        <div className={'col-sm'}>
          <Child2 data1={10000} data2={data2} />
        </div>
      </div>
    </div>
  );
}

export default Parent1;










