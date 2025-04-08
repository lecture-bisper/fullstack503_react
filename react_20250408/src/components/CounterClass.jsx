import {Component} from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.count = 0;
  }

  // 화면의 UI가 업데이트 되는 조건은 3가지
  // 부모 컴포넌트에서 전달되는 props가 변경되었을 경우
  // setState() 함수를 호출했을 경우
  // forceUpdate() 함수를 호출했을 경우 (클래스 컴포넌트 전용)
  render() {
    return (
      <div>
        <p>총 {this.count} 번 클릭했습니다.</p>
        <button type={'button'} className={'btn btn-primary'} onClick={() => {
          // setState()를 사용하지 않기 때문에 화면 업데이트가 발생하지 않음
          this.count++;
          console.log(`class count ; ${this.count}`);
          this.forceUpdate();
        }}>클릭</button>
      </div>
    );
  }
}

export default CounterClass










