import { useStore } from 'zustand/react';
import { themeStore } from '@/lib/store/zustand/app-theme/store';

const useAppTheme = () => useStore(themeStore);

export default useAppTheme;
