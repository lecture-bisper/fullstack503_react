
// 리액트 컴포넌트 생성 시 파일명의 첫번째 글자는 무조건 대문자 사용
function Clock() {
  return (
    <div>
      <h1>안녕하세요</h1>
      <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock










