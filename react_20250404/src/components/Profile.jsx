// 자식 컴포넌트 선언
// 부모 컴포넌트에서 전달한 데이터를 받아오는 props 객체를 매개변수로 사용
// props 라는 이름을 지정되어 있기 때문에 변경 불가능
// props 는 읽기 전용
// props의 내용을 수정하고 싶을 경우 자식 컴포넌트에서 변수를 선언하고 props의 값을 대입한 후 수정하면 사용할 수 있음
function Profile(props) {
  // 자바스크립트 소스코드 입력 부분

  let copy = props;
  console.log(copy.name);
  console.log(copy.type);
  console.log(copy.price);
  if (copy.ele) {
    console.log('전기차');
  }
  else {
    console.log('내연기관차');
  }

  // props 는 읽기 전용이기 때문에 오류 발생
  // props.name = 'EV3';
  // console.log(`props 수정 후 : ${props.name}`);

  // props가 가지고 있는 속성값을 일반 변수에 대입 후 수정 가능
  // let name = props.name;
  // console.log(`원본 name : ${name}`);
  // name = 'EV3';
  // console.log(`수정된 name : ${name}`);

  // 객체 분할 할당 방식을 사용하여 props의 내용을 한번에 변수에 대입
  let {name, type, price, ele} = props;
  console.log(`원본 name : ${name}`);
  console.log(`원본 type : ${type}`);
  console.log(`원본 price : ${price}`);
  console.log(`원본 ele : ${ele}`);

  name = 'EV3';
  type = '소형 SUV';
  price = 3995;
  ele = true;

  console.log(`수정된 name : ${name}`);
  console.log(`수정된 type : ${type}`);
  console.log(`수정된 price : ${price}`);
  console.log(`수정된 ele : ${ele}`);



  return (
    // UI 화면을 그리는 부분
    <div>
      {/*부모 컴포넌트에서 전달받은 props 객체에는 부모 컴포넌트에서 데이터 전달 시 사용한 속성명과 값이 포함되어 있음*/}
      <p>이름 : {props.name}</p>
      <p>타입 : {props.type}</p>
      <p>가격 : {props.price}</p>
      {/* 삼항연산자를 사용하여 연산 */}
      <p>전기차 : {props.ele ? '전기차' : '내연기관차'}</p>

      {/* JSX 문법에서는 if 문 사용 불가, if문 대신 삼항연산자 사용 */}
      {/*<p>*/}
      {/*  {*/}
      {/*    if (props.ele) {*/}
      {/*      console.log(`ele 값이 true 입니다.`);*/}
      {/*    }*/}
      {/*    else {*/}
      {/*      console.log("ele 값이 false 입니다.");*/}
      {/*    }*/}
      {/*  }*/}
      {/*</p>*/}
    </div>
  );
}

export default Profile










