import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import App2 from './App2.jsx';
import App3 from './App3.jsx';
import App4 from './App4.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
    <h3>props로 데이터 전달하기</h3>
    <App2 />
    <hr/>
    <h3>Context API로 데이터 전달하기</h3>
    <App3 />
    <hr/>
    <h3>useContext 로 데이터 전달하기</h3>
    <App4 />
  </StrictMode>,
)
