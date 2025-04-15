//  About.jsx
//  25. 4. 15.

import { Link, Outlet } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>소개 페이지</h1>
      <p>리액트 라우터를 사용하여 About 으로 이동한 페이지</p>

      <Link to={'/'}>Home 으로 이동</Link>

      <Outlet />
    </div>
  );
}

export default About;










