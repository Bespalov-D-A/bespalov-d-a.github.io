import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { useMainTheme } from '../../../6-Entities/Common/model/hooks';
import { useThemeState } from '../../../6-Entities/Common/model/store';
import { InewTheme } from '../../../7-Shared/assets/mui/WithTheme';
import { ThemeContext } from '../../../7-Shared/ui/CustomScrollBar';

interface IWithStyled {
  component: React.ReactNode;
}

//импортируем кастомизированную тему, оборачиваем ей приложение
//Оборачиваем приложение StyledEngine что бы css был выше mui cssInJ
export const WithMuiStyled: React.FC<IWithStyled> = ({ component }) => {
  const token = useThemeState((state) => state.token);
  const theme = useMainTheme(token);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeContext.Provider value={theme}>
        <ThemeProvider theme={theme}>{component}</ThemeProvider>
      </ThemeContext.Provider>
    </StyledEngineProvider>
  );
};
