import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IAuthStore {
  user: string;
  isAuthenticated: boolean;
  login: (user: string, senha: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create(
  persist<IAuthStore>(
    (set) => ({
      user: "",
      isAuthenticated: false,
      login: async (user: string, senha: string) => {
        const mockAuthenticate = (_: string, senha: string) => {
          return new Promise<boolean>((resolve) => {
            setTimeout(() => {
              resolve(senha === "123456");
            }, 500);
          });
        };

        const isAuthenticated = await mockAuthenticate(user, senha);

        if (isAuthenticated) {
          set({ user, isAuthenticated: true });
        }

        return isAuthenticated;
      },

      logout: () => set({ user: "", isAuthenticated: false }),
    }),
    {
      name: "loginStore",
      version: 1,
    }
  )
);
