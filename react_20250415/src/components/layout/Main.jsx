//  Main.jsx
//  25. 4. 15.

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BoardList from '../board/BoardList.jsx';
import BoardDetail from '../board/BoardDetail.jsx';
import BoardWrite from '../board/BoardWrite.jsx';
import BoardErrorPage from '../board/BoardErrorPage.jsx';
import Login from '../login/Login.jsx';
import Signup from '../login/Signup.jsx';

function Main() {
  return (
    <div>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path={'/board'}>
            <Route index element={<BoardList />} />
            <Route path={'boardDetail/:boardIdx'} element={<BoardDetail />} />
          </Route>
          <Route path={'/board/boardWrite'} element={<BoardWrite />} />
          <Route path={'*'} element={<BoardErrorPage />} />
          <Route path={'/login'}>
            <Route path={'login'} element={<Login />} />
            <Route path={'signup'} element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default Main;










