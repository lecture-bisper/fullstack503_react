
function formatDate(date) {
  return date.toLocaleString();
}

// 컴포넌트 추출이 되지 않은 원본 컴포넌트
// 부모 컴포넌트에서 props를 통해 데이터 전달받음
function OriComponent(props) {
  return (
    <div className={'comment'}>
      <div className={'user-info'}>
        <img className={'avatar'} src={props.author.avatarUrl} alt={props.author.name} />
        <div className={'user-info-name'}>{props.author.name}</div>
      </div>
      <div className={'comment-text'}>{props.text}</div>
      <div className={'comment-date'}>{formatDate(props.date)}</div>
    </div>
  );
}

export default OriComponent;











