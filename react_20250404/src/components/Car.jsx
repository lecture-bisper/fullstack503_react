import Profile from "./Profile.jsx";

// 화살표 함수로 컴포넌트 선언
const Car = () => (
  <div>
    {/* 자식 컴포넌트를 3번 호출 */}
    {/* 자식 컴포넌트에 데이터를 각각 4개씩 전달 */}
    {/* 데이터 전달 시 문자열은 '', "", `` 으로 감싸서 전달, {} 생략 가능 */}
    {/* 숫자형, 논리형, 변수 등은 {} 안에 데이터 입력해서 전달*/}
    <Profile name={'EV6'} type='SUV' price={4660} ele={true}/>
    <Profile name={'더 뉴 아이오닉 5'} type='SUV' price={4700} ele={true}/>
    <Profile name='K5' type={'세단'} price={2507} ele={false}/>
  </div>
);

export default Car;












