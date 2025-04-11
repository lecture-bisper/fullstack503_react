//  ThemeContext.jsx
//  25. 4. 11.

import React from 'react';

// 외부에서 쉽게 사용하도록 파일로 분리해 놓은 Context
const ThemeContext = React.createContext('dark');
ThemeContext.displayName = '테마컨텍스트';

export default ThemeContext;










