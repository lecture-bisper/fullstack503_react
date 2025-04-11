//  Content.jsx
//  25. 4. 11.

// Context 를 사용하기 위해서 파일로 분리해 놓은 Context를 import
import ThemeContext from '../contexts/ThemeContext.jsx';
import UserContext from '../contexts/UserContext.jsx';
import { useContext } from 'react';
import ProfilePage from './ProfilePage.jsx';

function Content() {
  // Context를 쉽게 사용하기 위한 useContext 훅을 사용함
  // Provider를 통해서 저장된 데이터를 useContext를 사용하면 Consumer 없이 쉽게 가져올 수 있음
  // 사용법 :
  // const 변수명 = useContext(데이터가 저장된 Context);

  // Context에 저장된 데이터 가져오기
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div>
      {/* 자식 컴포넌트 호출, props를 사용하여 데이터 전달 */}
      <ProfilePage theme={theme} user={user} />
    </div>
  );
}

export default Content;










