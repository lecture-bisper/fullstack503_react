import Avatar from "./Avatar.jsx";

function UserInfo(props) {
  return (
    <div className={'user-info'}>

      {/* 컴포넌트 추출을 통해서 재사용이 가능하도록 컴포넌트를 분리함 */}
      {/* 부모 컴포넌트에서 전달받은 데이터 props.userData를 user 라는 이름으로 자식 컴포넌트에게 전달 */}
      <Avatar user={props.userData} />

      {/* 원래 컴포넌트 내용, 컴포넌트 추출로 분리된 부분 */}
      {/*<img className={'avatar'} src={props.userData.avatarUrl} alt={props.userData.name} />*/}
      <div className={'user-info-name'}>{props.userData.name}</div>
    </div>
  );
}

export default UserInfo










