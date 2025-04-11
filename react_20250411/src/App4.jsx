//  App4.jsx
//  25. 4. 11.

// 파일로 분리해 놓은 Context 객체를 import 하여 가져옴
import ThemeContext from './contexts/ThemeContext.jsx';
import UserContext from './contexts/UserContext.jsx';
import Layout from './components/Layout.jsx';

function App4() {
  // Provider 로 전달할 데이터 설정
  const theme = 'primary';
  const signedInUser = '아이유';

  return (
    <div>
      {/* import 한 Context 에 Provider를 사용하여 데이터 저장 */}
      {/* Context 를 중복 사용해도 상관없음 */}
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={signedInUser}>
          {/* 자식 컴포넌트 호출, 전달하는 데이터 없음 */}
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App4;










