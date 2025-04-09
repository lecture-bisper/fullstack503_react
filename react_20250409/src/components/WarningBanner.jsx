function WarningBanner(props) {

  // 부모 컴포넌트에서 전달받은 데이터가 false 일 경우 null을 반환
  // null 을 반환 시 화면에 출력되지 않음
  if (!props.warning) {
    return null;
  }

  return (
    <div>
      <h2 className={'text-danger'}>경고!!</h2>
    </div>
  );
}

export default WarningBanner;










