import { useEffect, useState } from 'react';

// 여러 곳에서 사용되는 기능의 소스코드를 모아서 커스텀 훅으로 생성
function useUserStatus(props) {

  const [isOnline, setIsOnline] = useState(null);

  // 화면이 출력되면 온라인 여부 확인
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
  }, []);

  return isOnline;
}

export default useUserStatus;










