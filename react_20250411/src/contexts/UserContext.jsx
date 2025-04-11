//  UserContext.jsx
//  25. 4. 11.

import React from 'react';

// 외부에서 쉽게 사용하도록 파일로 분리해 놓은 Context
const UserContext = React.createContext('Guest');
UserContext.displayName = '유저컨텍스트';

export default UserContext;










