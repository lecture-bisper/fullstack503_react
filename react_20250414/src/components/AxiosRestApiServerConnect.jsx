//  AxiosRestApiServerConnect.jsx
//  25. 4. 14.

import axios from "axios";

function AxiosRestApiServerConnect() {

  // WEB (웹브라우저) 은 보안을 위해서 기본적으로 SOP 정책을 사용함
  // 다른 곳의 리소스를 사용하고자 할 경우 CROS 정책을 위반하게 되어 오류가 발생함
  // CORS 오류는 웹 브라우저에서 발생함 (POST MAN과 같은 프로그램으로 통신 시 오류 없음)

  // SOP (Same-Origin Policy) : 동일 출처 정책, 동일한 출처의 리소스만 사용하는 정책

  // CORS (Cross-Origin Resource Sharing) : 다른 출처의 자원을 공유하여 사용하는 것
  // 기본적으로 하나의 출처에서 리소스를 사용 시에서는 문제가 없으나, 다른 출처에서 리소스를 가져와서 사용 시 CORS 오류가 발생함

  // CORS 오류 해결 방법
  //  1. 리액트에서 프록시 서버 사용
  //  2. 스프링 서버에서 CORS 설정
  //    2.1 @CrossOrigin 어노테이션을 사용 (Controller 클래스, 메소드에 사용)
  //    2.2 WebMvcConfigure 를 상속받아 addCorsMapping() 메소드를 오버라이딩하여 설정

  // 스프링 서버와 통신 테스트
  const sendDataTest = () => {
    // 리액트에서 CROS 오류를 해결하기 위해서 프록시 서버 설정을 사용했을 경우 접속할 서버 주소에서 'http://서버주소:포트번호' 부분을 생략하고 나머지 경로만 입력
    axios.get("http://localhost:9090/api")
      .then(res => {
        console.log('axios를 사용한 비동기 통신 성공');
        console.log(res.data);
      })
      .catch(err => {
        console.log("비동기 통신 중 오류가 발생했습니다.");
        console.log(err);
      });
  }

  // 파라미터가 없는 GET 방식 통신
  const sendDataGet = () => {
    axios.get('http://localhost:9090/api/boardList')
      .then(res => {
        console.log('axios 를 통한 비동기 통신 (get 방식) 성공!!');
        console.log(res.data);
      })
      .catch(err => {
        console.log('비동기 통신 (get 방식) 중 오류가 발생했습니다.');
        console.log(err);
      })
  }

  // 파라미터가 있는 GET 방식 통신 
  const sendDataGetParam = () => {
    // 파라미터 전달 시 주소에 직접 입력하는 방식
    // axios.get('http://localhost:9090/api/boardDetail?boardIdx=42')
    // 파라미터 전달 시 params 속성을 사용하여 파라미터를 전달하는 방식
    axios.get('http://localhost:9090/api/boardDetail', {
      params: {
        boardIdx: 42
      }
    })
      .then(res => {
        console.log('axios 를 통한 비동기 통신 (get 파라미터 방식) 성공!!');
        console.log(res.data);
      })
      .catch(err => {
        console.log('비동기 통신 (get 파라미터 방식) 중 오류 발생!!');
        console.log(err);
      })
  }

  // 파라미터가 있는 POST 통신 방식
  const sendDataPost = () => {
    axios.post('http://localhost:9090/api/boardWrite', null, {
      params: {
        title: "테스트 제목 ",
        contents: "테스트 내용",
        createId: "test1",
      },
    })
      .then(res => {
        console.log('axios 를 통한 비동기 통신 (post 파라미터 방식) 성공!!');
        console.log(res.data);
      })
      .catch(err => {
        console.log('비동기 통신 (post 파라미터 방식) 중 오류 발생!!');
        console.log(err);
      });
  }

  // 파라미터가 있는 PUT 통신 방식
  const sendDataPut = () => {

  }
  // 파라미터가 있는 DELETE 통신 방식
  const sendDataDelete = () => {

  }

  return (
    <div>
      <h3 className={'text-center'}>Axios 를 이용한 비동기 통신</h3>
      <div className={'row'}>
        <div className={'col-sm-8 mx-auto'}>
          <div className={'mt-3 d-flex justify-content-center'}>
            <button type={'button'} className={'btn btn-secondary me-2'} onClick={sendDataTest}>Spring RestAPI 서버 접속 테스트</button>
            <button type={'button'} className={'btn btn-primary me-2'} onClick={sendDataGet}>GET 방식 사용</button>
            <button type={'button'} className={'btn btn-success me-2'} onClick={sendDataGetParam}>GET 방식 파라미터 사용</button>
            <button type={'button'} className={'btn btn-info me-2'} onClick={sendDataPost}>POST 방식 사용</button>
            <button type={'button'} className={'btn btn-warning me-2'} onClick={sendDataPut}>PUT 방식 사용</button>
            <button type={'button'} className={'btn btn-danger me-2'} onClick={sendDataDelete}>DELETE 방식 사용</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AxiosRestApiServerConnect










