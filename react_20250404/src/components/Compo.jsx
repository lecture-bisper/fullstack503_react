import FuncComponent from "./FuncComponent.jsx";
import ClassComponent from "./ClassComponent.jsx";
import Welcome from "./Welcome.jsx";
import OriComponent from "./OriComponent.jsx";
import DivComponent from "./DivComponent.jsx";

const data = {
  name: '아이유',
  avatarUrl: 'https://img.khan.co.kr/news/2023/01/02/news-p.v1.20230102.1f95577a65fc42a79ae7f990b39e7c21_P1.png'
}

function Compo() {
  return (
    <div>
      <h3>함수 컴포넌트 사용하기</h3>
      <FuncComponent />

      <hr/>
      <br/>

      <h3>클래스 컴포넌트 사용하기</h3>
      <ClassComponent />

      <br/>
      <hr/>
      <br/>

      <div>
        <h3>컴포넌트 합성</h3>
        <Welcome name={'아이유'} />
        <Welcome name={'유인나'} />
        <Welcome name={'나형석'} />
      </div>

      <br />
      <hr/>
      <br/>

      <div>
        <h3>컴포넌트 추출</h3>
        <h4>원본 컴포넌트</h4>

        {/* 하나의 컴포넌트에서 모든 내용을 출력하는 컴포넌트 */}
        {/* 자식 컴포넌트로 데이터 전달, text, date, author 전달 */}
        {/* text 는 일반 문자열, date 는 현재 시간을 알 수 있는 Date 객체, author 는 현재 파일 상단에서 생성한 object 타입 변수 data 를 전달 */}
        <OriComponent text={'외부이미지 사용'} date={new Date()} author={data} />
        <hr/>

        <h4>추출된 컴포넌트</h4>
        <DivComponent text={'컴포넌트 추출을 사용한 이미지'} date={new Date()} author={data} />
      </div>


    </div>
  );
}

export default Compo










