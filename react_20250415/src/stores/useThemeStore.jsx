//  useThemeStore.jsx
//  25. 4. 15.

import { create } from 'zustand';

const useThemeStore = create(set => ({
  theme: 'primary',
  changeTheme: newTheme => set({theme: newTheme}),
}));

export default useThemeStore;










