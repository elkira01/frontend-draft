'use client';

import { ThemeType } from '@/styles/theme/types';

class LocalStorage {
  static setTheme(value: ThemeType) {
    localStorage.setItem('app-theme', value);
  }

  static getTheme(): ThemeType | null | undefined {
    return localStorage.getItem('app-theme') as ThemeType | null | undefined;
  }

  static clearTheme() {
    localStorage.removeItem('app-theme');
  }

  static initTheme(defaultValue: ThemeType): ThemeType | null | undefined {
    const storedTheme = LocalStorage.getTheme();
    if (!storedTheme) {
      LocalStorage.setTheme(defaultValue);
      return defaultValue;
    }
    return storedTheme;
  }
}

export default LocalStorage;
