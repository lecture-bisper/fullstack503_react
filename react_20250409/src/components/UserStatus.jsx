import { useEffect, useState } from 'react';
import useUserStatus from './useUserStatus.jsx';

function UserStatus(props) {

  const isOnline = useUserStatus(props.user.id);

  // 커스텀 훅 미사용 시
  // const [isOnline, setIsOnline] = useState(null);
  //
  // // 화면이 출력되면 온라인 여부 확인
  // useEffect(() => {
  //   function handleStatusChange(status) {
  //     setIsOnline(status.isOnline);
  //   }
  //
  //   ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
  // }, []);

  if (isOnline == null) {
    return "대기 중";
  }

  return isOnline ? '온라인' : '오프라인';
}

export default UserStatus;










