//  Content.jsx
//  25. 4. 14.

import UserContext from "../contexts/UserContext.jsx";
import ThemeContext from "../contexts/ThemeContext.jsx";
import {useContext} from "react";
import ProfilePage from "./ProfilePage.jsx";

function Content() {

  // useContext 를 사용하여 Context 객체에 저장된 내용 가져옴
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    // 부모가 props로 전달한 데이터 없음
    // 자식 컴포넌트 호출 시 props로 데이터 전달
    <ProfilePage theme={theme} user={user} />
  );
}

export default Content










