//  SignupDialog.jsx
//  25. 4. 11.

import { useState } from 'react';
import Dialog3 from './Dialog3.jsx';

function SignupDialog() {

  const [nickName, setNickName] = useState('');

  const handleNickName = e => setNickName(e.target.value);
  const handleSignup = () => alert(`어서오세요, ${nickName}님!`);
  const handleCheckboxChange = () => alert('체크되었습니다.');

  return (
    <div>
      {/* 부모 컴포넌트에서 자식 컴포넌트 호출 시 containment 방식을 사용하여 html 태그를 자식 컴포넌트의 컨텐츠 영역에 포함 후 전달 */}
      <Dialog3 title={'화성 탐사 프로그램'} message={'닉네임을 입력하세요'} color={'primary'}>
        <input type={'text'} className={'form-control'} value={nickName} onChange={handleNickName} />
        <button type={'button'} className={'btn btn-primary mt-2'} onClick={handleSignup}>가입하기</button>
      </Dialog3>

      <br/>

      <Dialog3 title={'심해 탐사 프로그램'} message={'닉네임을 입력하세요'} color={'success'}>
        <label htmlFor={'chk'} className={'form-label me-3'}>18세 이상 :
          <input type={'checkbox'} className={'form-check-input ms-2'} id={'chk'} onChange={handleCheckboxChange} />
        </label>
        <button type={'button'} className={'btn btn-primary'} onClick={handleSignup}>가입하기</button>
      </Dialog3>
    </div>
  );
}

export default SignupDialog;










