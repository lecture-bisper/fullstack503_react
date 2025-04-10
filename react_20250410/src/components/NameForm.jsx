import { useState } from 'react';

function NameForm() {

  // state로 관리되고 있는 변수, form에서 사용자 이름을 받기 위한 변수, 초기값 빈 문자열
  const [nameValue, setNameValue] = useState('');
  // form 에서 사용자의 email 을 을 받기 위한 변수, 초기값 빈 문자열
  let emailValue = '';

  // 이벤트 처리 함수 선언
  // form 태그의 submit 버튼 클릭 시 동작
  const handleSubmit = e => {
    alert(`입력한 이름 : ${nameValue}, 입력한 이메일 : ${emailValue}`);
    e.preventDefault();
  }

  // 이름 수정 시 동작, 매개변수로 이벤트 객체를 받아옴
  const handleNameChange = e => {
    // state로 관리되고 있는 변수 nameValue의 값을 setNameValue() 함수를 호출하여 수정
    // e 는 이벤트 객체이고, e.target 은 해당 이벤트를 발생시킨 태그, e.target.value 는 해당 이벤트를 발생시킨 태그인 input 태그의 value 속성 값을 의미
    // setNameValue() 함수에 변경된 input 태그의 value값이 적용되어 nameValue 값이 최종 변경
    // setState() 가 동작 되었으므로 화면 업데이트가 발생됨
    setNameValue(e.target.value);
    console.log(`받아온 이름 : ${e.target.value}, 현재 nameValue 값 : ${nameValue}`);
  }

  // 이메일 수정 시 동작
  const handleEmailChange = e => {
    // 일반 변수 emailValue에 이벤트 발생 시 가져온 데이터를 대입
    // 일반 변수이므로 = 대입연산자를 사용하여 직접 데이터 변경
    // emailValue 는 일반 변수이므로 setState() 가 동작하지 않기 때문에 화면 업데이트가 발생되지 않음, 이메일을 입력하기 위한 input 태그의 value는 초기 값으로 입력했던 '' 빈문자열이 그대로 반영되어 있기 때문에 사용자의 입력이 반영되지 않음
    emailValue = e.target.value;
    // 이벤트 발생 시 가져온 데이터와 emailValue 의 현재 값을 비교 시 값이 같음
    console.log(`받아온 이메일 : ${e.target.value}, 현재 emailValue : ${emailValue}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={'mt-3'}>
          <label htmlFor="user-name" className={'form-label'}>이름 : </label>
          {/* input 태그의 value 속성에 state로 관리되고 있는 변수 nameValue 를 설정 */}
          {/* nameValue의 초기값이 '' 이므로 아무런 내용도 표시되지 않음 */}
          {/* onChange 이벤트가 설정되지 않았을 경우 UI가 업데이트 되지 않아 사용자 입력 불가능 */}
          {/* onChange 이벤트에 handleNameChange 함수를 적용 */}
          <input type="text" className={'form-control'} id={'user-name'} value={nameValue} onChange={handleNameChange}/>
        </div>
        <div className={'mt-3'}>
          <label htmlFor={'user-email'} className={'form-label'}>이메일 : </label>
          {/* input 태그의 value 속성에 일반 변수 emailValue 를 설정 */}
          {/* emailValue의 초기값이 '' 이므로 아무런 내용도 표시되지 않음 */}
          {/* onChange 이벤트가 설정되지 않았을 경우 UI가 업데이트 되지 않아 사용자 입력 불가능 */}
          {/* onChange 이벤트에 handleEmailChange 함수를 적용 */}
          <input type="text" className={'form-control'} id={'user-email'} value={emailValue} onChange={handleEmailChange}/>
        </div>
        <div className={'mt-3'}>
          <button type={'submit'} className={'btn btn-primary'}>제출</button>
        </div>
      </form>
    </div>
  );
}

export default NameForm;










