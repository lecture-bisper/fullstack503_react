//  ProfilePage.jsx
//  25. 4. 11.

import { useContext } from 'react';
// Context를 사용하기 위해서 import
import UserContext from '../contexts/UserContext.jsx';
import ThemeContext from '../contexts/ThemeContext.jsx';

function ProfilePage(props) {
  // useContext 훅을 사용하여 Context에 저장된 데이터 가져오기
  const contextTheme = useContext(ThemeContext);
  const contextUser = useContext(UserContext);

  return (
    <div>
      <h4>props로 받아온 user : {props.user}</h4>
      <h4>props로 받아온 theme : {props.theme}</h4>
      <hr/>
      <h4>useContext 로 받아온 user : {contextUser}</h4>
      <h4>useContext 로 받아온 theme : {contextTheme}</h4>
    </div>
  );
}

export default ProfilePage;










