import { Theme } from '@mui/material';
import { darkTheme, lightTheme } from '../../assets/mui/WithTheme';

export const choiceTheme = (token: 'dark' | 'light'): Theme => {
  if (token === 'dark') return darkTheme;
  else return lightTheme;
};
