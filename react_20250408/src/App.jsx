// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import SetStateClass from "./components/SetStateClass.jsx";
import SetStateFunction from "./components/SetStateFunction.jsx";
import NotificationList from "./components/NotificationList.jsx";
import Parent from "./components/Parent.jsx";
import Events from "./components/Events.jsx";
import CounterFunc from "./components/CounterFunc.jsx";
import CounterClass from "./components/CounterClass.jsx";
import CounterUseState from "./components/CounterUseState.jsx";
import CounterUseEffect from "./components/CounterUseEffect.jsx";
import LifecycleClass from "./components/LifecycleClass.jsx";
import LifecycleFunc from "./components/LifecycleFunc.jsx";

function App() {
  return (
    <div className={'container mt-5'}>
      <h3>클래스 컴포넌트에서 state 사용하기</h3>
      <SetStateClass />

      <br/>

      <h3>함수 컴포넌트에서 state 사용하기</h3>
      <SetStateFunction />

      <br/>
      <hr/>
      <br/>

      <h3>컴포넌트 생명주기</h3>
      {/*<NotificationList />*/}

      <br/>
      <hr/>
      <br/>

      <h3>props와 state의 차이</h3>
      <Parent />

      <br/>
      <hr/>
      <br/>

      <h3>이벤트 설정하기</h3>
      <Events />

      <br/>
      <hr/>
      <br/>

      <h3>React Hook 사용하기</h3>
      <br/>
      <h4>함수 컴포넌트에서 hook 없이 그냥 사용했을 경우</h4>
      <CounterFunc />
      <hr/>
      <h4>클래스 컴포넌트에서 state 없이 그냥 사용했을 경우</h4>
      <CounterClass />
      <hr/>
      <h4>함수 컴포넌트에서 useState 사용했을 경우</h4>
      <CounterUseState />

      <br/>
      <hr/>
      <br/>
      <h3>useEffect 로 생명주기 함수 사용하기</h3>
      <CounterUseEffect />

      <hr/>
      <h3>클래스 컴포넌트의 생명주기 함수</h3>
      {/*<LifecycleClass />*/}
      <hr/>
      <h3>useEffect의 생명주기 함수</h3>
      <LifecycleFunc />


      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default App
