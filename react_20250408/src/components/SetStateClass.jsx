import React from 'react';

// 클래스 컴포넌트 방식으로 컴포넌트 선언
class SetStateClass extends React.Component {

  // 자바스크립트 ES6의 클래스 생성자, 자바스크립트에서는 생성자 이름이 고정, 생성자는 단 1개만 존재
  constructor(props) {
    // 자바의 super()과 동일한 의미, 부모 클래스의 생성자 호출
    super(props);

    // ES6의 클래스에서 this.변수명을 생성자나 메소드안에서 사용 시 클래스의 필드로 선언됨
    // 클래스 컴포넌트 SetStateClass의 멤버 변수 state를 선언, 데이터 타입은 object 타입
    // 리액트의 현재 상태 정보를 저장하는 state 를 선언
    this.state = {
      // state 의 정보로 stateString 이라는 이름으로 'click' 라는 값을 저장하고 있음
      // state 로 지정된 데이터는 반드시 setState()를 사용해서 수정해야 함
      // 직접 수정 불가 (직접 수정이 가능하지만 직접 수정 시 UI에 반영되지 않음, 화면 리렌더링이 발생하지 않음)
      stateString: 'click',
    }
  }

  // SetStateClass 의 메소드로 StateChange() 메소드를 선언, 매개변수로 flag 값을 받음
  StateChange = flag => {
    if (flag == 'direct') {
      // 컴포넌트의 state 요소인 stateString 의 값을 = 연산자로 직접 수정
      // 리액트는 virtual DOM을 사용하기 때문에 state의 내용을 직접 수정 시 virtual DOM에만 적용되고 실제 DOM에는 적용되지 않음
      console.log(`원본 내용 : ${this.state.stateString}`);
      // state 객체의 값을 = 연산자로 직접 수정
      this.state.stateString = '멤버 변수인 stateString의 값을 직접 변경';
      // 현재 수정된 state 객체의 정보 출력
      console.log(`수정 내용 : ${this.state.stateString}`);
    }
    else if (flag == 'setState'){
      // 컴포넌트의 state의 요소인 stateString의 값을 setState() 함수를 사용하여 수정
      // setState() 를 사용하여 내용 수정 시 virtual DOM 에 적용된 내용을 실제 DOM 에 적용
      console.log(`원본 내용 : ${this.state.stateString}`);
      // setState() 함수로 지정한 요소의 데이터 수정
      // setState() 함수가 호출되면 자동으로 render() 함수도 호출
      this.setState({stateString: 'setState() 함수로 멤버 변수인 stateString의 값을 변경'});
      // 현재 state 객체의 내용 출력
      console.log(`수정 내용 : ${this.state.stateString}`);
    }
  }

  render() {
    return (
      <div>
        {/* jsx 문법에서 문자열은 {} 없이 사용 가능, {} 사용 시 자바스크립트 코드 사용 가능 */}
        {/* jsx 문법에서 css 속성 사용 시 '-' 기호를 생략하고 카멜명명법으로 사용 */}
        {/* jsx 문법에서 css 사용 시 object 타입으로 속성명 및 속성값을 설정 */}
        {/* jsx 문법에서 기본적으로 모든 html 태그 및 html 태그의 속성을 제공하지만 js의 예약어와 겹치는 것들이 존재하기 때문에 몇몇 속성은 다른 이름을 사용 */}
        <button type='button' className={'btn btn-primary me-2'} onClick={(e) => {
          this.StateChange('direct', e)
        }}>state 직접 수정하기</button>
        <button type={'button'} className={'btn btn-success'} onClick={(e) => {
          this.StateChange('setState', e)
        }}>setState() 로 변경</button>
        <br/>
        [state 변경하기] stateString : {this.state.stateString}
      </div>
    );
  }
}

export default SetStateClass










