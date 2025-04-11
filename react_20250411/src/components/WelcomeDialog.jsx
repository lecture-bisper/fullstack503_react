// WelcomeDialog.jsx

import FancyBorder1 from './FancyBorder1.jsx';
import FancyBorder2 from './FancyBorder2.jsx';

function WelcomeDialog() {
  return (
    <div className={'border border-2 border-primary p-3'}>
      <h3>부모 컴포넌트 영역</h3>
      <br/>

      {/* 부모 컴포넌트에서 자식 컴포넌트를 호출하여 UI 구성 */}
      {/* 자식 컴포넌트 호출 시 html 및 다른 컴포넌트를 추가하여 호출할 수 있음 */}

      <h3>기존 사용 방식</h3>
      {/* 단축 방식 */}
      <FancyBorder1 color={'blue'} />
      {/* 아래가 정규 방식 */}
      {/*<FancyBorder1 color={'blue'}></FancyBorder1> */}
      <hr/>
      <h3>Containment 방식</h3>
      {/* 부모 컴포넌트가 자식 컴포넌트 호출 시 자식 컴포넌트의 자식 태그로 html 태그를 입력하여 UI를 구성 */}
      {/* 부모 컴포넌트가 자식 컴포넌트로 전달하는 props 에 html 태그 및 다른 컴포넌트가 포함되어 전달 됨 */}
      <FancyBorder2 color={'blue'}>
        <h1>안녕하세요</h1>
        <p>우리 사이트에 방문하신 것을 환영합니다.</p>
      </FancyBorder2>
    </div>
  );
}

export default WelcomeDialog;










