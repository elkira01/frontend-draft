import { createStore } from 'zustand/vanilla';

export type BoardViewStoreState = {
  layerPanel?: boolean;
  legendPanel?: boolean;
  mapPanel?: boolean;
  chatBot?: boolean;
  chatRoom?: boolean;
  timelinePanel?: boolean;
  groupPanel?: boolean;
};

export type BoardViewStoreAction = {
  closeAllPanels: () => void;
  openAllPanels: () => void;
  openPanel: (panel: keyof BoardViewStoreState) => void;
  closePanel: (panel: keyof BoardViewStoreState) => void;
};

export type BoardViewStoreType = BoardViewStoreAction & BoardViewStoreState;

const InitialView: BoardViewStoreState = {};

export const boardViewStore = createStore<BoardViewStoreType>((set) => ({
  InitialView,
  closeAllPanels: () => set(InitialView),
  openAllPanels: () => set({ ...InitialView, chatBot: true, chatRoom: true, timelinePanel: true }),
  openPanel: (panel: keyof BoardViewStoreState) => set((state) => ({ ...state, [panel]: true })),
  closePanel: (panel: keyof BoardViewStoreState) => set((state) => ({ ...state, [panel]: false })),
}));
