import { useState } from 'react';
import JoinForm from './JoinForm.jsx';

function Join() {

  // state로 관리되고 있는 변수 선언, 초기값 '' 빈문자열, 자식 컴포넌트에서 전달한 데이터를 저장할 변수
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  // state로 관리되고 있는 변수의 값을 초기화
  const resetData = () => {
    setId('');
    setPw('');
    setName('');
    setEmail('');
  }

  return (
    <div>
      <div className={'row'}>
        <div className={'col-sm-4 mx-auto border border-2 border-info rounded-4 p-3'}>
          <h3 className={'text-center mt-3'}>회원 가입</h3>
          {/* 자식 컴포넌트 호출 */}
          {/* state로 관리되고 있는 변수를 수정하는 setState() 함수를 자식 컴포넌트에게 전달 */}
          <JoinForm setupId={setId} setupPw={setPw} setupEmail={setEmail} setupName={setName} reset={resetData}/>
        </div>
      </div>
      <hr className={'px-5 my-3'}/>
      <div className={'row'}>
        <div className={'col-sm-4 mx-auto border border-2 border-secondary rounded-4 p-3 text-start'}>
          {/* 자식 컴포넌트에서 전달받은 데이터를 화면에 출력 */}
          {/* state로 관리되고 있는 변수 출력 */}
          <h4>사용자 ID : {id}</h4>
          <h4>사용자 PW : {pw}</h4>
          <h4>사용자 Email : {email}</h4>
          <h4>사용자 Name : {name}</h4>
        </div>
      </div>
    </div>
  );
}

export default Join;










