import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';

interface IthemeState {
  token: 'dark' | 'light';
  setToken: (token: 'dark' | 'light') => void;
}

export const useThemeState = create<IthemeState>()(
  persist(
    immer((set) => ({
      token: 'light',
      setToken: (token) =>
        set((state) => {
          state.token = token;
        }),
    })),
    {
      name: 'themeToken',
      version: 1,
    }
  )
);
