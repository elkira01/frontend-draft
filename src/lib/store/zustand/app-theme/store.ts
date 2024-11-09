import { createStore } from 'zustand/vanilla';
import { ThemeType } from '@/styles/theme/types';
import LocalStorage from '@/lib/api/local-storage/LocalStorage';

export type ThemeStoreState = {
  theme: ThemeType;
};

export type ThemeStoreAction = {
  initTheme: () => void;
  toggleTheme: () => void;
};

export type ThemeStoreType = ThemeStoreAction & ThemeStoreState;

const themeInitialState: ThemeStoreState = {
  theme: 'light',
};

const toggleTheme = (state: ThemeStoreType): ThemeStoreType => {
  const theme = state.theme === 'light' ? 'dark' : 'light';
  LocalStorage.setTheme(theme);

  return {
    ...state,
    theme: theme,
  };
};

const initTheme = (state: ThemeStoreType): ThemeStoreType => {
  const initialValue = LocalStorage.initTheme(themeInitialState.theme);

  return {
    ...state,
    theme: initialValue ?? themeInitialState.theme,
  };
};

export const themeStore = createStore<ThemeStoreType>((set) => ({
  theme: themeInitialState.theme,
  toggleTheme: () => set((state) => toggleTheme(state)),
  initTheme: () => set((state) => initTheme(state)),
}));
