//  Layout.jsx
//  25. 4. 11.

import Content from './Content.jsx';

// 부모 컴포넌트에서 전달받은 데이터 없음
function Layout() {
  return (
    <div>
      {/* 자식 컴포넌트 호출, 데이터 전달 없음 */}
      <Content />
    </div>
  );
}

export default Layout;










