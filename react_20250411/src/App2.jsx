//  App2.jsx
//  25. 4. 11.

// 리액트에서는 타겟 컴포넌트로 데이터를 전달 시 중간 존재하는 모든 컴포넌트를 통해서 데이터를 전달해야 함
// 중간에 있는 컴포넌트들은 사용하지 않는 속성을 받아서 자식 컴포넌트로 그대로 전달함
function App2() {
  return (
    <div className={'container mt-5'}>
      {/* 자식 컴포넌트 호출, theme 라는 이름의 속성을 사용하여 데이터를 전달 */}
      <Toolbar theme={'success'} />
    </div>
  );
}

// 첫번째 자식 컴포넌트, 부모 컴포넌트에서 전달받은 theme 데이터를 사용하지 않음, 자식 컴포넌트 호출 시 theme 라는 이름으로 속성을 생성하여 데이터 전달
function Toolbar(props) {
  return <ThemeButton theme={props.theme} />
}

// 두번째 자식 컴포넌트, 부모 컴포넌트에서 전달받은 theme 데이터를 사용하지 않음, 자식 컴포넌트 호출 시 theme 라는 이름으로 속성을 생성하여 데이터 전달
function ThemeButton(props) {
  return <Button theme={props.theme} />
}

// 마지막 컴포넌트, 부모 컴포넌트에서 전달받은 theme 데이터를 사용함
function Button(props) {
  const clickButton = () => alert(`사용한 테마 : ${props.theme}`);

  return <button type={'button'} className={`btn btn-${props.theme}`} onClick={clickButton}>{props.theme} 테마 버튼</button>
}

export default App2;










