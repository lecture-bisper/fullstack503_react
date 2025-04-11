//  ProfileCard.jsx
//  25. 4. 11.

import Card from './Card.jsx';

// 부모 컴포넌트로 동작하는 컴포넌트
function ProfileCard() {
  return (
    <div>
      {/* 자식 컴포넌트 호출 */}
      {/* 자식 컴포넌트 호출 시 title, backgroundColor 속성을 추가하여 데이터 전달 */}
      {/* 컴포넌트 합성 기술 중 containment 기법을 사용하여 html 태그를 자식 컴포넌트에 전달 */}
      <Card title={'아이유'} backgroundColor={'#1E90FF'}>
        <p>안녕하세요</p>
        <p>리액트는 처음입니다.</p>
      </Card>

      <Card title={'아이유'} backgroundColor={'DeepPink'}>
        <p>안녕하세요</p>
        <p>리액트는 처음입니다.</p>
      </Card>

      {/* 자식 컴포넌트 호출 시 backgroundColor 속성 생략 */}
      <Card title={'아이유'}>
        <p>안녕하세요</p>
        <p>리액트는 처음입니다.</p>
      </Card>

      {/* 자식 컴포넌트 호출 시 title 속성 생략 */}
      <Card backgroundColor={'#1E90FF'}>
        <p>안녕하세요</p>
        <p>리액트는 처음입니다.</p>
      </Card>
    </div>
  );
}

export default ProfileCard;










