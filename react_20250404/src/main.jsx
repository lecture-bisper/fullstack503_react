import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Clock from "./components/Clock.jsx";
import App2 from "./App2.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/*<App2 />*/}
  </StrictMode>,
)

// 자바스크립트의 타이머 함수 setinterval()을 사용하여 1초에 한번씩 화면을 새로 그려줌
// setInterval(function() {
//   createRoot(document.getElementById('root')).render(
//     <StrictMode>
//       <Clock />
//     </StrictMode>,
//   )
// }, 1000);

