//  Header.jsx
//  25. 4. 15.

function Header() {
  return (
    <div>
      <nav className={'navbar navbar-expand-sm navbar-dark bg-dark'}>
        <div className={'container-fluid'}>
          <a href="#" className={'navbar-brand'}>BBS</a>
          <ul className={'navbar-nav'}>
            <li className={'nav-item'}>
              <a href="#" className={'nav-link'}>메뉴</a>
            </li>
          </ul>
          <div className={'ms-auto'}>
            <button className={'btn btn-success'}>Login</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;










