function CounterFunc() {

  // 일반 변수 선언
  // 화면 업데이트를 하려면 count 변수를 state로 등록하고 setState()를 호출해야 함
  let count = 0;
  
  return (
    <div>
      <p>총 {count} 번 클릭했습니다.</p>
      <button type={'button'} className={'btn btn-primary'} onClick={() => {
        // 일반 변수의 값을 수정, setState()가 동작하지 않으므로 화면 업데이트가 발생하지 않음
        count++;
        console.log(`function count : ${count}`);
        // forceUpdate(); // 함수 컴포넌트에서 forceUpdate() 함수를 사용할 수 없음
      }}>클릭</button>
    </div>
  );
}

export default CounterFunc










