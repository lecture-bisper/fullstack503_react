import { useState } from 'react';

function ConfirmButton() {

  // state로 관리되는 변수
  const [isConfirmed, setIsConfirmed] = useState(false);

  // 이벤트 처리 함수 선언
  // 현재 값의 반대되는 값으로 설정
  const handleConfirm = () => setIsConfirmed(!isConfirmed);

  return (
    <div>
      {/* 클릭 이벤트 처리를 위해서 handleConfirm() 함수를 사용함 */}
      {/* disabled 속성에 변수 isConfirmed 의 현재 값을 입력하여 사용 */}
      {/* text 부분에 변수 isConfirmed 의 값을 삼항연산자로 연산하여 결과 출력 */}
      <button type={'button'} className={'btn btn-primary'} onClick={handleConfirm} disabled={isConfirmed}>{isConfirmed ? '확인됨' : '확인하기'}</button>
    </div>
  );
}

export default ConfirmButton;










