import { createTheme, Theme } from '@mui/material/styles';
import { CSSProperties } from '@mui/material/styles/createTypography';
import getColors, { IExportColors } from '../../lib/GetColors';

interface Itypography extends CSSProperties {
  fontFamily: string;
  fontSize: number;
  h1?: CSSProperties;
  h2?: CSSProperties;
  h3?: CSSProperties;
  h4?: CSSProperties;
  h5?: CSSProperties;
  h6?: CSSProperties;
}

const typography: Itypography = {
  fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
  fontSize: 12,
  h1: {
    fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
    fontSize: 40,
  },
  h2: {
    fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
    fontSize: 32,
  },
  h3: {
    fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
    fontSize: 24,
  },
  h4: {
    fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
    fontSize: 20,
  },
  h5: {
    fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
    fontSize: 16,
  },
  h6: {
    fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
    fontSize: 14,
  },
};

export interface InewTheme extends Theme {
  palette: {
    neutral: {
      dark: string;
      main: string;
      light: string;
    };
    additionalColors: IExportColors;
  } & Theme['palette'];
}

export const mainTheme = (token: 'dark' | 'light'): InewTheme => {
  const colors = getColors(token);
  const theme = createTheme({
    typography,
    palette: {
      mode: token,
      primary: {
        main: token === 'dark' ? colors.primary[500] : colors.primary[100],
      },
      secondary: {
        main: colors.greenAccent[500],
      },
      background: {
        default: token === 'dark' ? colors.primary[600] : '#fcfcfc',
      },
    },
  });
  const newTheme = {
    ...theme,
    palette: {
      ...theme.palette,
      neutral: {
        dark: colors.grey[700],
        main: colors.grey[500],
        light: colors.grey[100],
      },
      additionalColors: colors,
    },
  };
  console.log(newTheme);
  return newTheme;
};
