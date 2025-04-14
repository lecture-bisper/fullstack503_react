//  ZuStandTest.jsx
//  25. 4. 14.

// uesEffect 를 사용하여 zustand로 관리되고 있는 데이터를 계속 확인
import {useEffect} from "react";

// Context API 를 사용하기 위한 Context 객체 호출
import ThemeContext from "../contexts/ThemeContext.jsx";
import UserContext from "../contexts/UserContext.jsx";

// zustand 를 사용하기 위한 zustand Store 객체 호출
import useNameStore from "../stores/NameStore.jsx";
import useThemeStore from "../stores/ThemeStore.jsx";

// 자식 컴포넌트
import Layout from "./Layout.jsx";

function ZuStandTest() {

  const theme1 = 'primary';
  const signedInUser = '아이유';

  // zustand 로 생성한 Store 객체를 가져옴
  // 변수를 수정하기 위한 함수만 가져옴
  const { setupTheme } = useThemeStore();
  const { setupName } = useNameStore();

  // useEffect() 의 componentDidUpdate() 기능을 사용하여 데이터가 수정되는 것을 확인
  useEffect(() => {
    setupName('아이유');
    setupTheme('success');
  }, [setupName, setupTheme]);

  return (
    <div>
      {/* Context API 를 사용하여 Context 객체에 데이터 저장 */}
      <ThemeContext.Provider value={theme1}>
        <UserContext value={signedInUser}>
          {/* 자식 컴포넌트 호출 */}
          <Layout />
        </UserContext>
      </ThemeContext.Provider>
    </div>
  );
}

export default ZuStandTest










