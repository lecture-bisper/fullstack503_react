
// 함수 컴포넌트
// props : 부모 컴포넌트에서 데이터를 전달하는 객체
function Book(props) {

  // 자바스크립트 소스코드를 입력하는 부분 (연산작업)

  return (
    // JSX 문법을 사용하여 UI를 그리는 부분
    <div>
      {/* {} 사이에 자바스크립트 코드를 입력할 수 있음 */}
      <h1>{`이 책의 이름은 ${props.name} 입니다.`}</h1>
      <h2>{`이 책은 총 ${props.numOfPage} 페이지로 이루어져 있습니다.`}</h2>
    </div>
  );
}

export default Book










