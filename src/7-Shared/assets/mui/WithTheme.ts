import { createTheme, Theme } from '@mui/material/styles';
import { CSSProperties } from '@mui/material/styles/createTypography';
import { getColors } from '../../lib/ExportColors';

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
  } & Theme['palette'];
}

export const mainTheme = (token: 'dark' | 'light'): InewTheme => {
  const colors = getColors(token);
  let theme = createTheme({
    typography,
    palette: {
      mode: token,
      primary: {
        main: colors.primary[500],
      },
      secondary: {
        main: colors.greenAccent[500],
      },
      background: {
        default: colors.primary[500],
      },
    },
  });
  let newTheme = {
    ...theme,
    palette: {
      ...theme.palette,
      neutral: {
        dark: colors.grey[700],
        main: colors.grey[500],
        light: colors.grey[100],
      },
    },
  };
  return newTheme;
};
