//  ProfilePage.jsx
//  25. 4. 15.

// zustand store 를 import
import useNumberStore from '../stores/useNumberStore.jsx';
import useThemeStore from '../stores/useThemeStore.jsx';

function ProfilePage() {

  // zustand store에 저장된 값만 가져옴
  const number = useNumberStore(state => state.number);
  const theme = useThemeStore(state => state.theme);

  return (
    <div className={'border border-2 border-success-subtle rounded-2 m-3 p-3'}>
      {/* zustand store에서 가져온 데이터 출력 */}
      <h4>number : {number}</h4>
      <h4 className={`text-${theme}`}>현재 theme : {theme}</h4>
    </div>
  );
}

export default ProfilePage;










