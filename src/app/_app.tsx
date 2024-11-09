'use client';

import React, { useEffect } from 'react';
import { ThemeProvider as SC_Provider } from 'styled-components';
import { darkTheme, lightTheme } from '@/styles/theme';
import { GlobalStyle } from '@/styles/theme/GlobalStyle';
import { useAppTheme } from '@/hooks';
import { ConfigProvider } from 'antd'
import locale from 'antd/locale/el_GR'

export default function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, initTheme } = useAppTheme();

  useEffect(() => {
    initTheme();
  }, []);

  return (
    <ConfigProvider locale={locale}>
      <SC_Provider theme={theme !== 'light' ? darkTheme : lightTheme}>
        <GlobalStyle />
        {children}
      </SC_Provider>
    </ConfigProvider>
  );
}
