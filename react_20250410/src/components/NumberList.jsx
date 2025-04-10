function NumberList() {
  const numbers = [10, 20, 30, 40, 50];

  // key : 자바스크립트 배열의 데이터를 배열 함수를 통해서 html 태그 및 컴포넌트를 반복 호출할 경우 반복 호출된 태그 및 컴포넌트를 리액트가 정확히 구분할 수 없음
  // 이러한 배열 함수를 통해 반복 호출된 html 태그 및 컴포넌트를 구분하기 위한 방법으로 key 속성을 사용하여 구분함
  // key 속성에 사용할 수 있는 값은 각각의 html 태그 및 컴포넌트를 구분할 수 있도록 고유한 값을 입력해야 함

  // ES6의 map() 함수를 사용하여 지정한 배열의 요소를 하나씩 출력하여 화면에 렌더링할 내용을 엘리먼트 변수에 저장함
  const listItems = numbers.map((number, index) => {
    return <li key={index}>{number}</li>
  });

  return (
    <div>
      {/* 직접 입력했을 경우 */}
      {/*<ul>*/}
      {/*  <li>{numbers[0]}</li>*/}
      {/*  <li>{numbers[1]}</li>*/}
      {/*  <li>{numbers[2]}</li>*/}
      {/*  <li>{numbers[3]}</li>*/}
      {/*  <li>{numbers[4]}</li>*/}
      {/*</ul>*/}
      {/* 엘리먼트 변수에 렌더링 될 코드를 받아와서 사용 */}
      <ul>{listItems}</ul>

      {/* ES6의 배열함수 map()을 사용하여 랜더링될 코드를 직접 반복 실행 */}
      <ul>
        {
          numbers.map((number, index) => {
            return <li key={index}>{number}</li>
          })
        }
      </ul>
    </div>
  );
}

export default NumberList;










