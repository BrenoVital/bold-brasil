import { create } from "zustand";

interface IDrawerStore {
  leftDrawerOpened: boolean;
  toggleLeftDrawer: () => void;
  setDrawerOpened: (opened: boolean) => void;
  closeDrawer: () => void;
}

export const useDrawerStore = create<IDrawerStore>((set) => ({
  leftDrawerOpened: false,
  toggleLeftDrawer: () =>
    set((state) => ({ leftDrawerOpened: !state.leftDrawerOpened })),
  setDrawerOpened: (opened) => set(() => ({ leftDrawerOpened: opened })),
  closeDrawer: () => set(() => ({ leftDrawerOpened: false })),
}));
