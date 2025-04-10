import useUserStatus from "./hook/useUserStatus.jsx";

function UserStatus(props) {
  const isOnline = useUserStatus(props.user.id);
  if(isOnline === null){
    return '대기중...';
  }
  return isOnline ? '온라인' : '오프라인';
}
export default UserStatus;











