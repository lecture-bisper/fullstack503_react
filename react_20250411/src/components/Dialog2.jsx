//  Dialog2.jsx
//  25. 4. 11.

import FancyBorder2 from './FancyBorder2.jsx';

// Specialization : 범용적으로 사용할 수 있는 컴포넌트를 구성하는 것
function Dialog2(props) {
  return (
    <div>
      <FancyBorder2 color={'blue'}>
        <h1>{props.title}</h1>
        <p>{props.message}</p>
      </FancyBorder2>
    </div>
  );
}

export default Dialog2;










