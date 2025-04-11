// FancyBorder2.jsx

// Containment 방식 사용 시 자식 컴포넌트의 UI 일부분을 부모 컴포넌트에서 전달받아 UI 를 구성함
function FancyBorder2(props) {
  return (
    <div className={'border border-2 border-info m-3 p-3 '}>
      <h4 className={'mb-3 text-' + props.color}>자식 컴포넌트 영역</h4>
      {/* 부모 컴포넌트에서 전달한 html 태그를 props 객체를 통해서 사용할 수 있음 */}
      {/* 전달받은 html 태그 및 컴포넌트는 props.children 을 통해서 사용할 수 있음 */}
      {props.children}
    </div>
  );
}

export default FancyBorder2;










