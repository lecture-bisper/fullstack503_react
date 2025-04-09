import { useState } from 'react';
import WarningBanner from './WarningBanner.jsx';

function MainPage() {
  // state로 관리되고 있는 변수, 초기값 false
  const [showWarning, setShowWarning] = useState(false);

  // 이벤트 처리 함수
  const handleToggleClick = () => {
    // showWarning 를 수정하기 위한 함수 호출, 현재 값의 반대로 입력
    setShowWarning(!showWarning);
  }

  return (
    <div>
      {/* 자식 컴포넌트 호출 시 showWarning 의 값을 전달 */}
      <WarningBanner warning={showWarning} />
      {/* 클릭 이벤트에 미리 선언한 이벤트 처리 함수 등록 */}
      {/* 텍스트에 삼항연산자를 사용하여 showWarning 의 값에 따라 출력될 문자 변경 */}
      <button type={'button'} className={'btn btn-primary'} onClick={handleToggleClick}>{showWarning ? '감추기' : '보이기'}</button>
    </div>
  );
}

export default MainPage;










