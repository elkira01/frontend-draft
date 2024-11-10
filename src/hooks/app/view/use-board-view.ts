import { useStore } from 'zustand/react';
import { boardViewStore } from '@/lib/store/zustand/dashboard-view/store';

const useBoardView = () => useStore(boardViewStore);
export default useBoardView;
