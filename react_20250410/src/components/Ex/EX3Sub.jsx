// EX3Sub.jsx

import { useState } from 'react';

function EX3Sub(props) {
  const data = props.data;
  const [isHover, setIsHover] = useState(false);

  return (
    <div>
      {/* 일반 문자열에서 삼항연산자를 사용하여 상황에 따라 다른 문자열 추가하기 */}
      <ul className={'list-group text-center rounded-0 ' + (isHover ? 'shadow' : 'shadow-none')}
          onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        {/* `` 을 사용하여 템플릿 문자열로 삼상연산자를 사용하여 상황에 따라 다른 문자열 추가하기 */}
        <li
          className={`list-group-item text-white fs-2 py-4 ${data.dark ? 'bg-dark' : 'bg-success'}`}>{data.type}</li>
        <li className="list-group-item py-3"><span className={'fw-bold'}>{data.storage}</span> Storage</li>
        <li className="list-group-item py-3"><span className={'fw-bold'}>{data.emails}</span> Emails</li>
        <li className="list-group-item py-3"><span className={'fw-bold'}>{data.domains}</span> Domains</li>
        <li className="list-group-item py-3"><span className={'fw-bold'}>{data.support}</span> Support</li>
        <li className="list-group-item py-4">
          <h2>{data.price}</h2>
          <span>per month</span>
        </li>
        <li className="list-group-item py-4">
          <button type={'button'} className={'btn btn-success py-3 px-4 rounded-0'}>Sign Up</button>
        </li>
      </ul>
    </div>
  );
}

export default EX3Sub;










