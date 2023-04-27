import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';

interface IthemeState {
  token: 'dark' | 'light';
  setToken: (token?: 'dark' | 'light') => void;
}

export const useThemeState = create<IthemeState>()(
  immer((set) => ({
    token: 'dark',
    setToken: (token) =>
      set((state) => {
        state.token = token
          ? token
          : state.token === 'light'
          ? 'dark'
          : 'light';
      }),
  }))
);
