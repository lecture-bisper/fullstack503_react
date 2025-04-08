import {Component} from "react";

class LifecycleClass extends Component {

  // 일반 필드 선언, 초기값 0
  num1 = 0;

  // 가장 먼저 실행
  constructor(props) {
    super(props);
    // state로 설정, 초기값 0
    this.state = {
      num2: 0,
    }
  }

  // 세번째로 동작
  componentDidMount() {
    // 필드 num1 값 직접 수정
    this.num1 = 100;
    // setState로 state 값 수정, render() 다시 호출
    this.setState({num2: 200});
  }

  componentDidUpdate() {
    console.log('setState() 실행 후 동작하는 componentDidUpdate()');
  }

  componentWillUnmount() {}

  // 두번째로 실행
  render() {
    return (
      <div>
        <p>num1 : {this.num1}</p>
        {console.log(`Lifecycle Class num1 : ${this.num1}`)}
        <p>num2 : {this.state.num2}</p>
        {console.log(`Lifecycle Class num2 : ${this.state.num2}`)}
      </div>
    );
  }
}

export default LifecycleClass










