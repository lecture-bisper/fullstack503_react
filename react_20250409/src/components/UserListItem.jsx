import { useEffect, useState } from 'react';
import useUserStatus from './useUserStatus.jsx';

function UserListItem(props) {

  // 커스텀 훅 사용 시
  const isOnline = useUserStatus(props.user.id);

  // 커스텀 훅 미사용 시
  // const [isOnline, setIsOnline] = useState(null);
  //
  // useEffect(() => {
  //   function handleStatusChange(status) {
  //     setIsOnline(status.isOnline);
  //   }
  //
  //   ServerAPI.subscribeStatus(props.user.id, handleStatusChange);
  // }, []);

  return <li style={{color: isOnline ? 'green' : 'black'}}>{props.user.name}</li>
}

export default UserListItem;










