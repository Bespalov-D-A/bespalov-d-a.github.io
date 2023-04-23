import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import React, { FC } from 'react';
import { useThemeState } from '../../../6-Entities/Common';
import { choiceTheme } from '../../../7-Shared/lib/ChoiceTheme';

interface IWithStyled {
  component: React.ReactNode;
}

//импортируем кастомизированную тему, оборачиваем ей приложение
//Оборачиваем приложение StyledEngine что бы css был выше mui cssInJ
export const WithMuiStyled: React.FC<IWithStyled> = ({ component }) => {
  const theme = useThemeState((state) => state.token);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={choiceTheme(theme)}>{component}</ThemeProvider>
    </StyledEngineProvider>
  );
};
