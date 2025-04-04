function Avatar(props) {
  return (
    // 부모 컴포넌트에서 전달받은 데이터 props.user 에 포함되어 있는 avatarUrl, name을 사용
    <img className={'avatar'} src={props.user.avatarUrl} alt={props.user.name} />
  );
}

export default Avatar










