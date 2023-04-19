import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { theme } from "../../../7-Shared/assets/mui/WithTheme";
import React, { FC } from "react";

interface IWithStyled {
  component: React.ReactNode
}

//импортируем кастомизированную тему, оборачиваем ей приложение
//Оборачиваем приложение StyledEngine что бы css был выше mui cssInJs
export const WithMuiStyled: React.FC<IWithStyled> = ({component}) => {
return <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{component}</ThemeProvider>
    </StyledEngineProvider>
}

  
