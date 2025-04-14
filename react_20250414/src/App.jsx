// App.jsx

import Layout from "./components/Layout.jsx";
import AxiosTest from "./components/AxiosTest.jsx";
import AxiosRestApiServerConnect from "./components/AxiosRestApiServerConnect.jsx";

function App() {
  return (
    <div className={'container mt-5'}>
      <h3>ZuStand 라이브러리 사용하기</h3>
      <Layout />

      <br/>
      <hr/>
      <br/>

      <h3>Axios 사용하기</h3>
      <AxiosTest />

      <br/>
      <hr/>
      <br/>

      <AxiosRestApiServerConnect />

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default App
