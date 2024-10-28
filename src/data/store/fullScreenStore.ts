import { create } from 'zustand';

type FullScreenState = {
  isFullScreen: boolean;
  toggleFullScreen: () => void;
};

export const useFullScreenStore = create<FullScreenState>((set) => ({
  isFullScreen: false,
  toggleFullScreen: () => set((state) => ({ isFullScreen: !state.isFullScreen })),
}));
