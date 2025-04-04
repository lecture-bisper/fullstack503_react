const styles = {
  fakeImg: {
    height: 200,
    backgroundColor: '#aaaaaa',
  }
}

// 문제 1) BasicPage2 컴포넌트를 생성하고, BasicPage 컴포넌트의 내용을 컴포넌트 추출을 통해서 재사용할 수 있는 작은 컴포넌트로 만들고, BasicPage 컴포넌트의 화면과 동일하게 화면을 출력하도록 컴포넌트를 생성하시오

// 부모 컴포넌트(components 폴더) : BasicPage2
// 생성할 기본 컴포넌트(page 폴더) : Header, Footer, Navi, Main,
// 추가 컴포넌트 : SideBar, SideMenu, SideMenuItem, MainContent, Content


// 문제2 ) https://www.w3schools.com/w3css/tryw3css_templates_gourmet_catering.htm 사이트를 리액트로 클론코딩하세요. (컴포넌트 추출 필수)


// 컴포넌트 추출을 하지 않은 페이지
function BasicPage() {
  return (
    <div>
      {/* header 로 추출할 부분 */}
      <div className={'p-5 bg-primary text-white text-center'}>
        <h1>My First Bootstrap 5 Page</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div>

      {/* 네비게이션바로 추출할 부분 */}
      <nav className={'navbar navbar-expand-sm bg-dark navbar-dark'}>
        <div className={'container-fluid'}>
          <ul className={'navbar-nav'}>
            <li className={'nav-item'}>
              <a href="#" className={'nav-link active'}>Active</a>
            </li>
            <li className={'nav-item'}>
              <a href="#" className={'nav-link'}>Link</a>
            </li>
            <li className={'nav-item'}>
              <a href="#" className={'nav-link'}>Link</a>
            </li>
            <li className={'nav-item'}>
              <a href="#" className={'nav-link disabled'}>Disabled</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* main 으로 추출할 부분 */}
      <div className={'container mt-5'}>
        <div className={'row'}>
          {/* 사이드 바 부분*/}
          <div className={'col-sm-4'}>
            <h2>About Me</h2>
            <h5>Photo of me:</h5>
            <div style={styles.fakeImg}>Fake Image</div>
            <p>Some text about me in culpa qui officia desernut mollit anim..</p>
            <h3 className={'mt-4'}>Some Links</h3>
            <p>Lorem ipsum dolor sit ame.</p>

            <ul className={'nav nav-pill flex-column'}>
              <li className={"nav-item"}>
                <a href="#" className={'nav-link active'}>Active</a>
              </li>
              <li className={'nav-item'}>
                <a href="#" className={'nav-link'}>Link</a>
              </li>
              <li className={'nav-item'}>
                <a href="#" className={'nav-link'}>Link</a>
              </li>
              <li className={'nav-item'}>
                <a href="#" className={'nav-link disabled'}>Disabled</a>
              </li>
            </ul>
            <hr className={'d-sm-none'}/>
          </div>

          {/* main content 부분*/}
          <div className={'col-sm-8'}>
            <h2>TITLE HEADING</h2>
            <h5>Title description, 2025-04-04</h5>
            <div style={styles.fakeImg}>Fake Image</div>
            <p>Some text...</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. </p>

            <h2 className={'mt-5'}>TITLE HEADING</h2>
            <h5>Title description, 2025-04-03</h5>
            <div style={styles.fakeImg}>Fake Image</div>
            <p>Some text...</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa</p>
          </div>
        </div>
      </div>

      {/* footer 로 추출할 부분 */}
      <div className={'mt-5 p-4 bg-dark text-white text-center'}>
        <p>Footer</p>
      </div>
    </div>
  );
}

export default BasicPage










