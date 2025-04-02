console.log("nodejs를 이용하여 웹 브라우저 없이 javascript 실행!!!");

// node.js 란?
// Node.js는 Chrome 웹 브라우저의 javascript 엔진인 Chrome V8 엔진을 사용하여 웹 브라우저 없이 일반 컴퓨터에서 javascript 를 실행할 수 있는 환경
// alert() 와 같은 web 환경에서 실행되는 몇 가지 함수는 지원하지 않음

// npm 이란?
// Node Package Manager 의 줄임말로 node.js는 javascript로 만들어진 node.js 모듈을 웹에서 다운받아 사용하기 위한 패키지 매니저
// 사용자가 직접 모든 프로그램을 만들지 않고 미리 만들어진 모듈을 다운받아 자신의 프로젝트에 추가하여 사용하는 형태
// Spring 의 Maven, Gradle 과 동일한 역할

// 사용법
// > npm install : package.json 파일에 있는 내용대로 종속성 모듈을 현재 프로젝트에 설치
// > npm install 모듈명 : 지정한 모듈을 현재 프로젝트에 추가
// > npm install --save-dev 모듈명 : 지정한 모듈을 현재 프로젝트에 개발용으로만 추가
// > npm uninstall 모듈명 : 지정한 모듈을 현재 프로젝트에서 제거
// > npm uninstall --save-dev 모듈명 : 지정한 개발용 모듈을 현재 프로젝트에서 제거


// nvm 이란?
// Node Version Manager 의 줄임말로 node.js가 버전업이 빠르기 때문에 node의 버전을 관리하기 위한 패키지 매니저
//    windows : nvm-windows 를 다운받아 설치
//      - https://github.com/coreybutler/nvm-windows 사이트 이용
//    linux : 리눅스 패키지 매니저를 사용하여 nvm 설치
//      - sudo apt-get install nvm    (우분투 리눅스)
//      - sudo yum install nvm        (레드햇 리눅스)
//    macOS : homebrew를 통해서 nvm 설치
//      - sudo brew install nvm

// 사용법
// >  nvm install 버전 : 지정한 버전의 node.js를 설치, 버전 대신 'lts' 입력 시 최신 LTS 버전을 설치
// >  nvm uninstall 버전 : 지정한 버전의 node.js를 제거, 버전 대신 'lts' 입력 시 설치된 LTS 버전을 제거
// >  nvm list : 설치된 모든 node.js의 버전을 출력함
// >  nvm use 버전 : 지정한 node.js 버전을 사용
// >  nvm version : nvm 의 버전 확인


// Create React App 이란?
//  react 프로젝트를 자동으로 생성해 주는 node.js 모듈
//  현재는 create react app은 추가 개발이 중단되어 vite를 사용할 것을 권장하고 있음
//  사용법
//  >   npx create-react-app 프로젝트명 : 지정한 프로젝트명으로 프로젝트 생성


// Vite 란?
//  Creaate React App 과 같이 React 프로젝트를 생성해주는 프론트엔드 빌드 도구
//  현재는 React 개발 시 Vite 사용을 권장함
//  사용법
//  >   npx create-vite 프로젝트명 : Vite를 사용하여 새로운 React 프로젝트 생성
//  >   npm create vite@latest 프로젝트명 : vite를 사용하여 새로운 React 프로젝트 생성
//  >   vite dev : 개발 모드로 react 프로젝트를 실행
//  >   vite build : 개발된 react 프로젝트를 배포 버전으로 출력