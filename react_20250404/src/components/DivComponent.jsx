import UserInfo from "./UserInfo.jsx";

function DivComponent(props) {
  return (
    <div className={'comment'}>
      {/* 컴포넌트 추출 */}
      {/* UI 구성이 복잡한 컴포넌트를 컴포넌트 추출을 통해서 간소화된 형태의 컴포넌트로 UI를 구성하는 것 */}
      {/* 기능 단위, 재사용이 가능한 형태로 추출하는 것이 좋음 */}

      {/* 컴포넌트 추출을 통해서 분리한 자식 컴포넌트를 호출 */}
      {/* 부모 컴포넌트에서 전달받은 데이터 props.author 을 userData 라는 이름으로 자식 컴포넌트에게 데이터를 다시 전달 */}
      <UserInfo userData={props.author} />

      {/* 작은 컴포넌트로 추출할 부분 */}
      {/*<div className={'user-info'}>*/}
      {/*  <img className={'avatar'} src={props.author.avatarUrl} alt={props.author.name} />*/}
      {/*  <div className={'user-info-name'}>{props.author.name}</div>*/}
      {/*</div>*/}
      <div className={'comment-text'}>{props.text}</div>
      <div className={'comment-date'}>{formatDate(props.date)}</div>
    </div>
  );
}

function formatDate(date) {
  return date.toLocaleString();
}

export default DivComponent










