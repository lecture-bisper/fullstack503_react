// RequestForm.jsx

import { useState } from 'react';

function RequestForm() {

  // state로 관리되고 있는 변수, textarea에 입력한 내용을 저장
  const [value, setValue] = useState('요청사항을 입력하세요');

  // 이벤트 처리 함수 선언, textarea의 데이터에 입력된 내용을 value 변수에 저장
  const handleChange = e => setValue(e.target.value);

  const handleSubmit = e => {
    alert(`입력한 요청 사항 : ${value}`);
    // 현재 이벤트 정지 명령어
    e.preventDefault();
  }

  return (
    <div className={'row'}>
      <div className={'col-sm-6 mx-auto'}>
        <form action="#" onSubmit={handleSubmit}>
          <div className={'mt-3'}>
            <label htmlFor={'comments'} className={'form-label'}>요청사항 : </label>
            {/* JSX 문법의 textarea 는 value 속성을 사용할 수 있음 */}
            <textarea name="comments" id="comments" rows={5} className={'form-control'} value={value} onChange={handleChange} placeholder={'요청사항을 입력하세요'}></textarea>

            {/* 기본 html 태그의 textarea 에는 value 속성이 없기 때문에 시작 태그와 끝 태그 사이에 데이터를 입력해야 함 */}
            {/*<textarea name="comments" id="comments" rows={5} className={'form-control'} onChange={handleChange} placeholder={'요청사항을 입력하세요'}>{value}</textarea>*/}
          </div>
          <div className={'mt-3 d-grid gap-2'}>
            <button type={'submit'} className={'btn btn-primary'}>확인</button>
            <button type={'reset'} className={'btn btn-secondary'}>취소</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RequestForm;










