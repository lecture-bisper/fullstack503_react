import VolumeControl from './components/VolumeControl.jsx';
import HookUseMemo from './components/HookUseMemo.jsx';
import HookUseMemo2 from './components/HookUseMemo2.jsx';
import HookUseRef from './components/HookUseRef.jsx';
import Accommodate from './components/Accommodate.jsx';
import Events from './components/Events.jsx';
import ConfirmButton from './components/ConfirmButton.jsx';
import Greeting from './components/Greeting.jsx';
import LoginControl from './components/LoginControl.jsx';
import MailBox from './components/MailBox.jsx';
import LoginControl2 from './components/LoginControl2.jsx';
import MainPage from './components/MainPage.jsx';

// prettier : 소스코드를 사용자에게 일정한 형태로 보여주기 위한 플러그인
// 프로젝트 root 폴더에 .prettierrc 파일을 생성하고, json 방식으로 설정값을 입력
//   "useTabs": false,        - tab 대신 스페이스바 사용
//   "printWidth": 100,       - 화면 출력 시 한 라인에 지정한 크기만큼 출력, 워드랩 기능
//   "tabWidth": 2,           - tab 사용 시 스페이스바 크기 설정 (2칸 설정)
//   "trailingComma": "all",  - 여러 줄을 사용할 때, 후행 콤마 사용 방식
//   "semi": true,            - 한 라인의 끝에 자동으로 세미콘론 붙이기
//   "singleQuote": true      - 따옴표를 모두 작은 따옴표로 변경

function App() {
  return (
    <div className={'container mt-5'}>
      <h3>문제 1) 볼륨 컨트롤러 만들기</h3>
      <VolumeControl />

      <br />
      <hr />
      <br />

      <h3>useMemo 사용하기</h3>
      <HookUseMemo />
      <br />
      <HookUseMemo2 />

      <br />
      <hr />
      <br />
      <h3>useRef 사용하기</h3>
      <HookUseRef />

      <br />
      <hr />
      <br />
      <h3>커스텀 훅 만들기</h3>
      <Accommodate />

      <br/>
      <hr/>
      <br/>
      <Events />
      <br/>
      <ConfirmButton />

      <br/>
      <hr/>
      <br/>

      <h3>조건부 랜더링</h3>
      <Greeting isLoggedIn={false} />

      <br/>
      <hr/>
      <br/>

      <h3>엘리먼트 변수</h3>
      <LoginControl />

      <br/>
      <hr/>
      <br/>

      <h3>인라인 조건문</h3>
      <MailBox unreadMessages={0} />
      <br/><br/>
      <MailBox unreadMessages={10} />

      <br/>
      <hr/>
      <br/>

      <h3>인라인 if ~ else (삼항연산자)</h3>
      <LoginControl2 />

      <br/>
      <hr/>
      <br/>

      <h3>랜더링 막기</h3>
      <MainPage />

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default App;
