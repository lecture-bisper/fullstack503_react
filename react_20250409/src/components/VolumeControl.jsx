// 문제 1) 버튼 2개를 생성하고 (+, -) useState와 useEffect 를 사용하여 볼륨 값을 설정하는 프로그램을 작성하세요
// 볼륨의 초기값은 0 으로 설정
// 컴포넌트 첫 호출 시 볼륨의 기본 값을 5 로 설정
// 버튼 클릭 시 값이 1씩 변경, 볼륨의 최소값은 0, 최대값은 10,

import { useEffect, useState } from 'react';

// 함수 컴포넌트로 선언
function VolumeControl() {
  // ui에 반영할 변수 선언, state로 관리, 초기값을 0으로 설정
  const [volume, setVolume] = useState(0);

  // useEffect를 사용하여 컴포넌트가 출력될 경우 기본값을 5로 설정
  useEffect(() => {
    setVolume(5);
  }, []);

  // useEffect를 사용하여 데이터의 변경이 있을 경우 콘솔에 내용 출력
  useEffect(() => {
    console.log(`볼륨이 ${volume}으로 변경되었습니다.`);
  }, [volume]);

  const volumeDown = () => {
    if (volume - 1 < 0) {
      setVolume(0);
    }
    else {
      setVolume(volume - 1);
    }
  }

  const volumeUp = () => (volume + 1) > 10 ? setVolume(10) : setVolume(volume + 1);

  return (
    <div>
      <button type={'button'} className={'btn btn-primary'} onClick={volumeDown}> - </button>
      <span className={'fs-3 mx-3'}>{volume}</span>
      <button type={'button'} className={'btn btn-primary'} onClick={volumeUp}> + </button>
    </div>
  );
}

export default VolumeControl










