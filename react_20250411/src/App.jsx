// App.jsx

import Parent1 from './components/Parent1.jsx';
import Parent2 from './components/Parent2.jsx';
import Join from './components/Join.jsx';
import WelcomeDialog from './components/WelcomeDialog.jsx';
import WelcomeDialog2 from './components/WelcomeDialog2.jsx';
import SignupDialog from './components/SignupDialog.jsx';
import ProfileCard from './components/ProfileCard.jsx';

function App() {
  return (
    <div className={'container mt-5'}>
      <h3>state 공유하기</h3>
      <Parent1 />

      <br />
      <hr />
      <br />

      <h3>상태 끌어올리기</h3>
      <Parent2 />

      <br /><br />

      <Join />

      <br />
      <hr />
      <br />

      <h3>컴포넌트 합성 (Containment)</h3>

      <WelcomeDialog />
      <br />
      <hr />
      <br />

      <h3>컴포넌트 합성 (Specialization)</h3>
      <WelcomeDialog2 />

      <br/>
      <hr/>
      <br/>

      <h3>Containment, Specialization 함께 사용하기</h3>
      <SignupDialog />

      <br/>
      <br/>

      <ProfileCard />



      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default App;
