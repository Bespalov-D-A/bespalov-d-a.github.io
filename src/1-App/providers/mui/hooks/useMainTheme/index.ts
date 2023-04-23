import { useMemo } from 'react';
import {
  InewTheme,
  mainTheme,
} from '../../../../../7-Shared/assets/mui/WithTheme';

export const useMainTheme = (token: 'dark' | 'light'): InewTheme => {
  const theme = useMemo(() => {
    return mainTheme(token);
  }, [token]);

  return theme;
};
