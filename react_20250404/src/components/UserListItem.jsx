import useUserStatus from "./hook/useUserStatus.jsx";

function UserListItem(props) {
  const isOnline = useUserStatus(props.user.id);
  return (
    <div>
      <li style={{color : isOnline ? 'green':'black'}}>
        {props.user.name}
      </li>
    </div>
  );
}

export default UserListItem










