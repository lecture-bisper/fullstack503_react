// Join.jsx

// 문제1 ) 회원 가입 페이지를 작성하세요
// 사용자 ID, 비밀번호, 이름, 이메일, 휴대전화, 성별 정보를 입력받고 확인 버튼 클릭 시 console.log() 나 alert() 을 통해서 화면에 출력하는 컴포넌트를 작성하세요
// 컴포넌트명 : Join.jsx

import { useState } from 'react';

function Join() {

  // 사용자의 데이터를 입력받을 state 변수
  const [userId, setUserId] = useState('');
  const [userPwd, setUserPwd] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userGender, setUserGender] = useState('');

  // 이벤트 처리 함수
  const handleSubmit = e => {
    const message = `사용자 ID : ${userId}
사용자 비밀번호 : ${userPwd}
사용자 이름 : ${userName}
사용자 이메일 : ${userEmail}
사용자 휴대전화 : ${userPhone}
사용자 성별 : ${userGender}`;
    alert(message);

    e.preventDefault();
  }

  const changeId = e => setUserId(e.target.value);
  const changePwd = e => setUserPwd(e.target.value);
  const changeName = e => setUserName(e.target.value);
  const changeEmail = e => setUserEmail(e.target.value);
  const changePhone = e => setUserPhone(e.target.value);
  const changeGender = e => setUserGender(e.target.value);

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <div className={'row'}>
          <div className={'col-sm-4 mx-auto border border-3 border-primary rounded-3 p-3'}>
            <div className={'mt-3'}>
              <label htmlFor={'user-id'} className={'form-label'}>User ID :</label>
              <input type={'text'} className={'form-control'} id={'user-id'} onChange={changeId}/>
            </div>
            <div className={'mt-3'}>
              <label htmlFor={'user-pwd'} className={'form-label'}>User PWD :</label>
              <input type={'password'} className={'form-control'} id={'user-pwd'} onChange={changePwd}/>
            </div>
            <div className={'mt-3'}>
              <label htmlFor={'user-name'} className={'form-label'}>User Name :</label>
              <input type={'text'} className={'form-control'} id={'user-name'} onChange={changeName}/>
            </div>
            <div className={'mt-3'}>
              <label htmlFor={'user-email'} className={'form-label'}>User EMail :</label>
              <input type={'text'} className={'form-control'} id={'user-email'} onChange={changeEmail}/>
            </div>
            <div className={'mt-3'}>
              <label htmlFor={'user-phone'} className={'form-label'}>User Phone :</label>
              <input type={'text'} className={'form-control'} id={'user-phone'} onChange={changePhone}/>
            </div>
            <div className={'mt-3'}>
              <label htmlFor={'user-gender'} className={'form-label'}>User Gender :</label>
              <input type={'text'} className={'form-control'} id={'user-gender'} onChange={changeGender}/>
            </div>
            <div className={'my-3 d-grid gap-2'}>
              <button type={'submit'} className={'btn btn-primary'}>확인</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Join;










