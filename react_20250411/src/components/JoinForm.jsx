import { useState } from 'react';

function JoinForm(props) {

  // state로 관리되고 있는 변수, 사용자 데이터 입력을 받기 위한 변수, 초기값 '' 빈 문자열
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

  // 이벤트 처리 함수, input에 사용자가 데이터를 입력 시 state로 관리되고 있는 변수에 적용
  const changeUserId = e => setUserId(e.target.value);
  const changeUserPw = e => setUserPw(e.target.value);
  const changeUserEmail = e => setUserEmail(e.target.value);
  const changeUserName = e => setUserName(e.target.value);

  // form 태그의 submit 이벤트 처리 함수
  const submitClick = (e) => {
    const msg = `User Id : ${userId}
User Pw : ${userPw}
User Email : ${userEmail}
User Name : ${userName}`;

    alert(msg);

    // 부모 컴포넌트에서 전달받은 함수(부모 컴포넌트의 setState() 함수) 를 자식 컴포넌트가 대신 호출하여 부모 컴포넌트의 state 로 관리되는 변수의 데이터를 수정
    props.setupId(userId);
    props.setupPw(userPw);
    props.setupEmail(userEmail);
    props.setupName(userName);

    // 서버로 전달할 데이터가 없으므로 submit 이벤트 중지
    e.preventDefault()
  }

  // form 태그의 reset 이벤트 처리 함수
  const resetClick = () => {
    // 자식 컴포넌트의 state로 관리되는 변수를 초기화
    setUserId('');
    setUserPw('');
    setUserEmail('');
    setUserName('');

    // 부모 컴포넌트에서 전달받은 함수를 대신 호출
    props.reset();
  }

  return (
    <div>
      <form action="#" className={'text-start'} onSubmit={submitClick} onReset={resetClick}>
        <div className={'mt-3'}>
          <label htmlFor={'user-id'} className={'form-label'}>User ID :</label>
          <input type={'text'} className={'form-control'} id={'user-id'} value={userId} onChange={changeUserId} />
        </div>
        <div className={'mt-3'}>
          <label htmlFor={'user-pw'} className={'form-label'}>User PW :</label>
          <input type={'password'} className={'form-control'} id={'user-pw'} value={userPw} onChange={changeUserPw} />
        </div>
        <div className={'mt-3'}>
          <label htmlFor={'user-email'} className={'form-label'}>User Email :</label>
          <input type={'email'} className={'form-control'} id={'user-email'} value={userEmail} onChange={changeUserEmail} />
        </div>
        <div className={'mt-3'}>
          <label htmlFor={'user-name'} className={'form-label'}>User Name :</label>
          <input type={'text'} className={'form-control'} id={'user-name'} value={userName} onChange={changeUserName} />
        </div>
        <div className={'mt-3 d-grid gap-2'}>
          <button type={'submit'} className={'btn btn-primary'}>확인</button>
          <button type={'reset'} className={'btn btn-secondary'}>취소</button>
        </div>
      </form>
    </div>
  );
}

export default JoinForm;










