//  Layout.jsx
//  25. 4. 15.

import { useEffect, useState } from 'react';
import Content from './Content.jsx';
// zustand store를 import
import useNumberStore from '../stores/useNumberStore.jsx';
import useThemeStore from '../stores/useThemeStore.jsx';

function Layout() {

  const [num, setNum] = useState(0);

  // 객체 분할 할당 방식으로 zustand의 store에서 제공한 변수 및 함수를 가져오기
  // const { upNumber, downNumber, resetNumber, updateNumber } = useNumberStore();

  // zustand의 store에서 제공한 변수 및 함수 가져오기(최신, 추천)
  const upNumber = useNumberStore(state => state.upNumber);
  const downNumber = useNumberStore(state => state.downNumber);
  const resetNumber = useNumberStore(state => state.resetNumber);
  const updateNumber = useNumberStore(state => state.updateNumber);

  const numberSetup = e => setNum(e.target.value);

  const changeTheme = useThemeStore(state => state.changeTheme);

  // useEffect를 사용하여 componentDidMount() 함수 호출 효과를 사용
  useEffect(() => {
    // theme의 값을 변경
    changeTheme('success');
  }, []);

  return (
    <div className={'border border-2 border-primary-subtle rounded-2 m-3 p-3'}>
      {/* zustand store 객체에서 가져온 함수로 데이터 변경 */}
      <button type={'button'} className={'btn btn-primary'} onClick={upNumber}> + </button>
      <button type={'button'} className={'btn btn-success ms-2'} onClick={downNumber}> - </button>
      <button type={'button'} className={'btn btn-info ms-2'} onClick={() => updateNumber(num)}>number setup</button>
      <button type={'button'} className={'btn btn-warning ms-2'} onClick={resetNumber}>reset</button>
      <button type={'button'} className={'btn btn-primary ms-2'} onClick={() => changeTheme('info')}>테마 변경</button>

      <div className={'my-3'}>
        <label htmlFor="num" className={'form-label'}>숫자 입력 : </label>
        <input type="number" className={'form-control'} id={'num'} min={0} value={num} onChange={numberSetup}/>
      </div>
      <Content />
    </div>
  );
}

export default Layout;










