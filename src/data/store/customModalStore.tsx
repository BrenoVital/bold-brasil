import { create } from "zustand";

export interface IContentModal {
  content: JSX.Element | null;
  confirmModal?: boolean;
  onConfirmText?: string;
  onDenyText?: string;
  onCancelText?: string;
  onConfirm?: () => void;
  onDeny?: () => void;
  onCancel?: () => void;
}
interface ICustomModalStore {
  isOpen: boolean;
  content: IContentModal | null;
  openModal: (content: IContentModal) => void;
  closeModal: () => void;
}

export const useCustomModalStore = create<ICustomModalStore>((set) => ({
  isOpen: false,
  childIsOpen: false,
  content: null,
  child: null,
  openModal: (content) => {
    set({ isOpen: true });
    set({ content });
  },
  closeModal: () => {
    set({ isOpen: false });
    set({ content: null });
  },
}));
