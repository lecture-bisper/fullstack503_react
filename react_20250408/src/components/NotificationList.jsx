import { Component } from "react";
import Notification from "./Notification.jsx";

// 화면에 출력할 데이터, 전역변수
const reservedNotifications = [
  { message: "안녕하세요. 메시지 테스트입니다.", id: 0},
  { message: "두번째 메시지 입니다.", id: 1},
  { message: "세번째 메시지 입니다.", id: 2},
  { message: "네번째 메시지 입니다.", id: 3},
  { message: "다섯번째 메시지 입니다.", id: 4},
  { message: "여섯번째 메시지 입니다.", id: 5},
];

// 자바스크립트 타이머 객체 값을 저장하기 위한 변수
let timer;

// 클래스 컴포넌트로 컴포넌트 생성
class NotificationList extends Component {

  // 클래스 컴포넌트 생성자
  constructor(props) {
    super(props);

    // state 객체 선언
    this.state = {
      // notifications 라는 이름의 state 요소 선언, 빈 배열로 선언
      notifications: [],
    }
  }

  // 현재 컴포넌트의 UI 화면을 구성하고, 부모 컴포넌트에 출력된 후 동작하는 생명주기 함수
  componentDidMount() {

    // state로 관리되고 있는 요소를 객체 분할 할당 방식을 사용하여 componentDidMount() 메소드의 지역변수로 선언 및 데이터 대입 (현재 빈 배열)
    const { notifications } = this.state;

    // setInterval() : 자바스크립트에서 제공하는 타이머 함수, 지정한 시간이 지난 후 반복 동작
    timer = setInterval(() => {
      // 지역변수 notifications의 크기와 전역 변수 reservedNotifications 의 크기 비교
      if (notifications.length < reservedNotifications.length) {
        // 지역변수의 현재 길이를 index 번호로 지정
        const index = notifications.length;
        // 지역변수인 notifications 에 전역 변수인 reservedNotifications의 index 위치의 값을 추가
        notifications.push(reservedNotifications[index]);
        // setState() 함수를 사용하여 state 에서 관리하는 notifications 의 데이터 수정
        // state로 관리하는 notifications 를 지역 변수 notifications의 값으로 수정
        this.setState({notifications});
      }
      else {
        // 지정된 값을 통해서 타이머 삭제
        clearInterval(timer);
      }
    }, 2000); // 2초 후 타이머 동작
  }

  render() {
    return (
      <div>
        {
          this.state.notifications.map((item, index) => {
            // key : 자식 컴포넌트를 반복(map, forEach 등)하여 호출할 경우 리액트는 호출한 자식 컴포넌트를 구분할 수 없음
            // 반복 호출한 컴포넌트를 구분하기 위해서 사용하는 속성이 key 임
            // key 는 중복되지 않는 값을 사용해야 함

            // key로 사용할 적당한 값이 없을 경우 배열의 index 번호를 key 로 사용할 수 있음(권장하지 않음)
            // return <Notification message={item.message} key={index} />
            return <Notification message={item.message} key={item.id} />
          })
        }
      </div>
    );
  }
}

export default NotificationList










