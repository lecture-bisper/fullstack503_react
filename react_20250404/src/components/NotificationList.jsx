import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  {
    id:1,
    message: "안녕하세요, 오늘 일정을 알려드립니다.",
  },
  {
    id:2,
    message: "점심식사 시간입니다.",
  },
  {
    id:3,
    message: "이제 곧 미팅이 시작됩니다.",
  },
];

var timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //state선언부분 : 초기값으로 []을 설정
      notifications: [],
      list : [],
    };
  }

  componentDidMount() {
    // 위에서 선언한 state를 사용하기 위한 선언
    const { notifications } = this.state;
    // setInterval : 1초한번씩 코드를 실행하는 함수
    timer = setInterval(() => {
      // 메시지가 3개가 아닐 경우 1초에 한번씩 메시지를 추가하는 코드
      if (notifications.length < reservedNotifications.length) {
        // 현재 몇번째 까지 출력하였는지 확인
        const index = notifications.length;
        //확인된 번호를 state에 저장
        notifications.push(reservedNotifications[index]);
        // state에 메시지 데이터 저장
        this.setState({
          notifications: notifications,
        });
      } else {
        // 3초동안 메시지를 출력하고 초기화
        // state에서 데이터를 삭제하면 화면에서도 사라지고 unmount가 실행됨
        this.setState({
          notifications: [],
        });
        // setInterval을 취소
        clearInterval(timer);
      }
    }, 1000);
  }

  componentWillUnmount() {
    if (timer) {
      clearInterval(timer);
    }
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              id={notification.id}
              message={notification.message}
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;