
// 리액트에서 CSS 사용하는 방법
// 리액트 파일 안에서 기존의 CSS 문법을 그대로 사용할 수 없음
// 자바스크립트 object 타입의 변수를 선언하고 CSS 속성을 사용하면 됨
// CSS 속성명이 카멜 명명법 방식으로 변경되어 있음
// key : value 형식으로 css 속성명을 key로 입력하고 속성값을 value 로 입력
// 숫자값은 숫자형으로 입력, 다른 형태는 모두 문자열로 입력
// 기존 CSS 문법을 그대로 사용하고 싶을 경우 CSS 파일을 import 해야 함
const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid black',
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  nameText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  commentText: {
    color: 'black',
    fontSize: 16,
  },
};

// 부모 컴포넌트인 CommentList 에서 전달한 데이터를 props를 통해서 전달받음
function Comment(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img src={"https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"} style={styles.image}  alt={"인물 아이콘"}/>
      </div>

      <div style={styles.contentContainer}>
        {/* 전달받은 데이터 출력 */}
        <span style={styles.nameText}>{props.name}</span>
        {/* CSS 속성을 object 이 아닌 직접 입력하려면 style={{속성명:속성값, ... }} 형태로 입력 */}
        <span style={{color: 'black', fontSize: 16}}>{props.comment}</span>
      </div>
    </div>
  );
}

export default Comment










