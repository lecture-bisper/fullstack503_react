// Reservation.jsx

import { useState } from 'react';

function Reservation() {

  // state로 관리되고 있는 변수, 초기값 true
  const [haveBreakfast, setHaveBreakfast] = useState(true);
  // 초기값 2
  const [numberOfGuest, setNumberOfGuest] = useState(2);

  // 이벤트 처리 함수
  const handleSubmit = e => {
    alert(`아침 식사 여부 : ${haveBreakfast ? '아침먹음' : '아침 안먹음'}, 방문객 수 : ${numberOfGuest}`);
    e.preventDefault();
  }

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor={'chk'} className={'form-label'}>아침 식사 여부 :
          {/* checkbox 는 value 속성을 사용하지 않음, checked 속성값을 true/false 로 입력하여 사용 */}
          {/* state로 관리되고 있는 변수를 사용 */}
          <input type={'checkbox'} className={'form-check-input ms-2'} id={'chk'} checked={haveBreakfast} onChange={e => setHaveBreakfast(e.target.checked)} />
        </label>
        <label htmlFor={'count'} className={'form-label ms-3'}>방문객 수 :

        </label>
        <div className={'d-inline-block ms-2'}>
          {/* 이번트 처리 함수를 익명 함수로 직접 처리 */}
          <input type={'number'} className={'form-control'} id={'count'} value={numberOfGuest} onChange={e => setNumberOfGuest(Number(e.target.value))}/>
        </div>
        <button type={'submit'} className={'btn btn-primary ms-2'}>확인</button>
      </form>
    </div>
  );
}

export default Reservation;










