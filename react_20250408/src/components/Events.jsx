function Events() {

  // 리액트에서 이벤트 사용 시 일반적인 웹 형태처럼 eventListener 방식을 사용할 수 없음
  // 리액트에서 이벤트는 inline 방식을 사용함
  // 에벤트를 위한 속성은 JSX 문법에 의해서 카멜명명법으로 설정되어 있음
  // inline 이벤트 사용 시 콜백 함수를 선언하여 사용
  // 1. html 태그의 이벤트 속성에 직접 콜백 함수를 선언하여 사용
  // 2. 컴포넌트에 이벤트 처리를 위한 함수를 선언하고, html 태그의 이벤트 속성에 해당 함수명만 입력하여 사용

  // 이벤트 함수 사용 시 매개변수로 이벤트 객체를 제공함
  // 이벤트 객체를 사용하면 실제 이벤트가 발생한 태그의 정보를 가져올 수 있음

  function clickEvent() {
    alert('이벤트 처리 함수를 미리 생성하고 html 태그의 이벤트 속성에 함수명만 입력하여 사용');
  }

  // 이벤트 처리 함수에 매개변수로 이벤트 객체도 함께 가져옴
  const clickEvent2 = (e) => {
    alert('이벤트 처리 함수를 미리 생성하고 html 태그의 이벤트 속성에 함수명만 입력하여 처리');
    alert(`이벤트가 발생한 태그의 id : ${e.target.id}`);
  }

  return (
    <div>
      {/* html 태그의 이벤트 속성에 함수(익명함수)를 직접 선언 */}
      <button type={'button'} className={'btn btn-primary me-2'} onClick={function() {
        alert('콜백함수를 직접 선언하여 이벤트 처리');
      }}>클릭1</button>
      {/* html 태그의 이벤트 속성에 함수(익명함수, 화살표함수)를 직접 선언 */}
      <button type={'button'} className={'btn btn-primary me-2'} onClick={() => {
        alert('콜백함수로 화살표 함수를 사용하여 이벤트 처리');
      }}>클릭2</button>
      {/* 위에 것과 동일하지만 소스코드가 한줄이므로 {} 생략 */}
      <button type={'button'} className={'btn btn-primary me-2'} onClick={() => alert('콜백함수로 화살표 함수를 사용하여 이벤트 처리2')}>클릭3</button>
      {/* html 태그의 이벤트 속성에 미리 선언해 놓은 함수를 적용 */}
      <button type={'button'} className={'btn btn-primary me-2'} onClick={clickEvent}>클릭4</button>
      {/* 미리 선언해 놓은 함수를 사용 시 여러개의 html 태그에 하나의 이벤트 처리 함수를 함께 사용할 수 있음 */}
      <button type={'button'} className={'btn btn-info me-2'} onClick={clickEvent}>클릭5</button>
      {/* html 태그의 이벤트 속성에 직접 콜백함수를 입력하여 실행, 이벤트 실행 시 이벤트 객체 사용 */}
      <button type={'button'} className={'btn btn-primary me-2'} id={'btn6'} onClick={(event) => {
        alert('클릭 이벤트 발생');
        console.log(event);
        console.log(event.target);
        // target.html속성명 을 사용하여 이벤트가 발생한 태그의 정보를 가져올 수 있음
        console.log(event.target.id); // 이벤트가 발생한 태그의 id 속성값을 가져옴
        console.log(event.target.innerText); // 이벤트가 발생한 태그의 시작태그와 끝태그 사이의 text 를 가져옴
      }}>이벤트 객체 사용하기 클릭6</button>
      {/* html 태그의 이벤트 속성에 미리 선언해 놓은 이벤트 처리 함수를 사용 */}
      <button type={'button'} className={'btn btn-info'} id={'btn7'} onClick={clickEvent2}>클릭7</button>
    </div>
  );
}

export default Events










