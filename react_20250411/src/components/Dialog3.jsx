//  Dialog3.jsx
//  25. 4. 11.

import FancyBorder2 from './FancyBorder2.jsx';

function Dialog3(props) {
  return (
    <div>
      <FancyBorder2 color={props.color}>
        <h1>{props.title}</h1>
        <p>{props.message}</p>
        {props.children}
      </FancyBorder2>

    </div>
  );
}

export default Dialog3;










