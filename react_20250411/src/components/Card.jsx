//  Card.jsx
//  25. 4. 11.

// 자식 컴포넌트로 동작하는 컴포넌트
// 컴포넌트 합성 기법 중 Specialization 을 사용하여 Card 컴포넌트 생성
function Card(props) {

  // ES6의 객체 분할 할당 방식을 사용하여 props의 내용 중 title, backgroundColor, children 을 변수에 저장
  // children 은 모든 컴포넌트가 가지고 있는 타입, 부모 컴포넌트가 children에 html 태그를 추가하여 전달
  const {title, backgroundColor, children} = props;

  return (
    // 리액트에서 css style 사용 시 object 타입으로 사용해야 함
    <div style={{
      margin: 8,
      padding: 8,
      borderRadius: 8,
      // || 를 사용하면 || 연산자 왼쪽에 데이터가 존재할 경우(true) 해당 데이터를 사용
      // || 연산자 왼쪽에 데이터가 없을 경우 (false) || 연산자 오른쪽에 있는 데이터를 사용(기본값 설정)
      backgroundColor: backgroundColor || 'white',
    }}>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
}

export default Card;










